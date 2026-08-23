"use client";

import { useMemo, useState, useRef, useCallback, useEffect } from "react";
import { signOut } from "next-auth/react";
import Mascot from "./Mascot";
import {
  stories,
  AGE_BANDS,
  AGE_MAP,
  CATEGORIES,
  CAT_MAP,
  CHARACTERS,
  CHAR_MAP,
  renderArt,
  type Story,
} from "@/data/stories";

type ProgressMap = Record<string, { page: number; totalPages: number; ts: number }>;

type View =
  | "home" | "age" | "categories" | "characters" | "library"
  | "detail" | "reader" | "audio" | "parent";

type LibFilter = {
  age: string;
  category: string;
  character: string;
  sort: "recommended" | "popular" | "new" | "quick";
  favOnly: boolean;
  query: string;
  title?: string;
};

const DEFAULT_LIB: LibFilter = { age: "all", category: "all", character: "all", sort: "recommended", favOnly: false, query: "" };
const PAGE_SIZE_BY_AGE: Record<string, number> = { "4-5": 1, "6-7": 2, "8-9": 3, "10-11": 4, "12-13": 5 };

const HEART_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 21s-7.5-4.6-10-9.3C.4 8 2.3 4.5 6 4.5c2.1 0 3.6 1.2 4.5 2.6C11.4 5.7 12.9 4.5 15 4.5c3.7 0 5.6 3.5 4 7.2C19.5 16.4 12 21 12 21z" />
  </svg>
);
const STAR_ICON = (
  <svg viewBox="0 0 24 24"><path d="M12 2l2.9 6.6 7.1.7-5.4 4.7 1.7 7-6.3-3.8-6.3 3.8 1.7-7L2 9.3l7.1-.7z" /></svg>
);
const BACK_ARROW = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
);
const PLAY_SVG = <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>;
const PAUSE_SVG = <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 5h4v14H6zM14 5h4v14h-4z" /></svg>;

function splitSentences(text: string): string[] {
  const clean = text.trim().replace(/\n\n+/g, " ");
  return clean.match(/[^.!?]+[.!?]+(\s|$)/g)?.map((s) => s.trim()) || [clean];
}

const SENTENCE_PAUSE_MS = 380;

type VoiceProfile = { pitch: number; rate: number; genderHint: "female" | "male" | "any" };

const CHARACTER_VOICE_PROFILE: Record<string, VoiceProfile> = {
  animals: { pitch: 1.25, rate: 1.0, genderHint: "any" },
  witches: { pitch: 0.8, rate: 0.9, genderHint: "any" },
  sea: { pitch: 0.75, rate: 0.88, genderHint: "male" },
  royalty: { pitch: 1.05, rate: 0.92, genderHint: "female" },
  heroes: { pitch: 1.0, rate: 0.98, genderHint: "male" },
};

const CATEGORY_VOICE_PROFILE: Record<string, VoiceProfile> = {
  bedtime: { pitch: 0.95, rate: 0.82, genderHint: "any" },
  adventure: { pitch: 1.02, rate: 0.98, genderHint: "any" },
  magical: { pitch: 1.12, rate: 0.92, genderHint: "any" },
  scary: { pitch: 0.82, rate: 0.88, genderHint: "any" },
  mystery: { pitch: 0.9, rate: 0.9, genderHint: "any" },
  fairytale: { pitch: 1.05, rate: 0.92, genderHint: "any" },
};

function getVoiceProfile(story: Story): VoiceProfile {
  return CHARACTER_VOICE_PROFILE[story.character] || CATEGORY_VOICE_PROFILE[story.category] || { pitch: 1, rate: 0.92, genderHint: "any" };
}

function hashToIndex(text: string, mod: number): number {
  let h = 0;
  for (let i = 0; i < text.length; i++) h = (h * 31 + text.charCodeAt(i)) >>> 0;
  return mod > 0 ? h % mod : 0;
}

function pickVoiceForStory(story: Story, voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | undefined {
  if (!voices.length) return undefined;
  const english = voices.filter((v) => v.lang?.toLowerCase().startsWith("en"));
  const pool = english.length ? english : voices;
  const { genderHint } = getVoiceProfile(story);
  if (genderHint !== "any") {
    const match = pool.find((v) => v.name.toLowerCase().includes(genderHint));
    if (match) return match;
  }
  return pool[hashToIndex(story.character + story.id, pool.length)];
}

export default function AppShell({
  userName,
  initialFavorites,
  initialProgress,
  initialAllowScary,
  isNewUser,
}: {
  userName: string;
  initialFavorites: string[];
  initialProgress: ProgressMap;
  initialAllowScary: boolean;
  isNewUser: boolean;
}) {
  const [view, setViewRaw] = useState<View>("home");
  const [favorites, setFavorites] = useState<Set<string>>(new Set(initialFavorites));
  const [progress, setProgress] = useState<ProgressMap>(initialProgress);
  const [allowScary, setAllowScary] = useState(initialAllowScary);
  const [lib, setLib] = useState<LibFilter>(DEFAULT_LIB);
  const [currentStoryId, setCurrentStoryId] = useState<string | null>(null);
  const [readerIndex, setReaderIndex] = useState(0);
  const [fontScale, setFontScale] = useState(1);
  const [audioIndex, setAudioIndex] = useState(0);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const audioStoryRef = useRef<string | null>(null);
  const audioPlayingRef = useRef(false);
  const audioIndexRef = useRef(0);
  const audioTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const speakTokenRef = useRef(0);
  const voicesRef = useRef<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    function loadVoices() {
      voicesRef.current = window.speechSynthesis.getVoices();
    }
    loadVoices();
    window.speechSynthesis.addEventListener("voiceschanged", loadVoices);
    return () => window.speechSynthesis.removeEventListener("voiceschanged", loadVoices);
  }, []);

  function setView(v: View) {
    stopAudio();
    setViewRaw(v);
    window.scrollTo({ top: 0 });
  }

  const visibleStories = useMemo(
    () => stories.filter((s) => allowScary || s.category !== "scary"),
    [allowScary]
  );

  function toggleFavorite(id: string) {
    setFavorites((prev) => {
      const next = new Set(prev);
      const wasFav = next.has(id);
      if (wasFav) next.delete(id); else next.add(id);
      fetch("/api/favorites", {
        method: wasFav ? "DELETE" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ storyId: id }),
      }).catch(() => {});
      return next;
    });
  }

  function saveProgress(storyId: string, page: number, totalPages: number) {
    const ts = Date.now();
    setProgress((prev) => ({ ...prev, [storyId]: { page, totalPages, ts } }));
    fetch("/api/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ storyId, page, totalPages }),
    }).catch(() => {});
  }

  function updateAllowScary(next: boolean) {
    setAllowScary(next);
    fetch("/api/settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ allowScary: next }),
    }).catch(() => {});
  }

  function enterLibrary(opts: Partial<LibFilter>) {
    setLib({ ...DEFAULT_LIB, ...opts });
    setView("library");
  }

  function pickForMe() {
    const pool = visibleStories.filter((s) => {
      if (lib.age !== "all" && s.age !== lib.age) return false;
      if (lib.category !== "all" && s.category !== lib.category) return false;
      return true;
    });
    const source = pool.length ? pool : visibleStories;
    const pick = source[Math.floor(Math.random() * source.length)];
    openDetail(pick.id);
  }

  function openDetail(id: string) {
    setCurrentStoryId(id);
    setView("detail");
  }

  function paginate(story: Story): string[][] {
    const paras = story.text.trim().split(/\n\n+/).map((p) => p.trim());
    const size = PAGE_SIZE_BY_AGE[story.age] || 3;
    const pages: string[][] = [];
    for (let i = 0; i < paras.length; i += size) pages.push(paras.slice(i, i + size));
    return pages;
  }

  function openReader(id: string, resume?: boolean) {
    const s = stories.find((st) => st.id === id);
    if (!s) return;
    const pages = paginate(s);
    const saved = progress[id];
    setCurrentStoryId(id);
    setReaderIndex(resume && saved ? Math.min(saved.page, pages.length - 1) : 0);
    setView("reader");
  }

  function configureUtterance(utter: SpeechSynthesisUtterance, story: Story) {
    const profile = getVoiceProfile(story);
    utter.pitch = profile.pitch;
    utter.rate = profile.rate;
    const voice = pickVoiceForStory(story, voicesRef.current);
    if (voice) utter.voice = voice;
  }

  function speakText(text: string, story: Story) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    if (audioTimerRef.current) clearTimeout(audioTimerRef.current);
    const token = ++speakTokenRef.current;
    const sentences = splitSentences(text);
    let i = 0;
    const speakNext = () => {
      if (token !== speakTokenRef.current || i >= sentences.length) return;
      const utter = new SpeechSynthesisUtterance(sentences[i]);
      configureUtterance(utter, story);
      utter.onend = () => {
        if (token !== speakTokenRef.current) return;
        i += 1;
        audioTimerRef.current = setTimeout(speakNext, SENTENCE_PAUSE_MS);
      };
      window.speechSynthesis.speak(utter);
    };
    speakNext();
  }

  function stopAudio() {
    speakTokenRef.current += 1;
    if (audioTimerRef.current) clearTimeout(audioTimerRef.current);
    audioPlayingRef.current = false;
    setAudioPlaying(false);
    if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
  }

  const speakCurrentSentence = useCallback((sentences: string[], story: Story) => {
    if (!("speechSynthesis" in window) || !audioPlayingRef.current) return;
    window.speechSynthesis.cancel();
    if (audioTimerRef.current) clearTimeout(audioTimerRef.current);
    const token = speakTokenRef.current;
    const utter = new SpeechSynthesisUtterance(sentences[audioIndexRef.current]);
    configureUtterance(utter, story);
    utter.onend = () => {
      if (!audioPlayingRef.current || token !== speakTokenRef.current) return;
      if (audioIndexRef.current < sentences.length - 1) {
        audioTimerRef.current = setTimeout(() => {
          if (!audioPlayingRef.current || token !== speakTokenRef.current) return;
          audioIndexRef.current += 1;
          setAudioIndex(audioIndexRef.current);
          speakCurrentSentence(sentences, story);
        }, SENTENCE_PAUSE_MS);
      } else {
        audioPlayingRef.current = false;
        setAudioPlaying(false);
      }
    };
    window.speechSynthesis.speak(utter);
  }, []);

  function openAudio(id: string) {
    setCurrentStoryId(id);
    audioStoryRef.current = id;
    audioIndexRef.current = 0;
    audioPlayingRef.current = false;
    speakTokenRef.current += 1;
    setAudioIndex(0);
    setAudioPlaying(false);
    setView("audio");
  }

  function toggleAudioPlay(sentences: string[], story: Story) {
    if (!("speechSynthesis" in window)) return;
    if (audioPlayingRef.current) {
      audioPlayingRef.current = false;
      setAudioPlaying(false);
      speakTokenRef.current += 1;
      if (audioTimerRef.current) clearTimeout(audioTimerRef.current);
      window.speechSynthesis.cancel();
    } else {
      audioPlayingRef.current = true;
      setAudioPlaying(true);
      speakCurrentSentence(sentences, story);
    }
  }

  function audioStep(dir: number, sentences: string[], story: Story) {
    speakTokenRef.current += 1;
    if (audioTimerRef.current) clearTimeout(audioTimerRef.current);
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    audioIndexRef.current = Math.max(0, Math.min(sentences.length - 1, audioIndexRef.current + dir));
    setAudioIndex(audioIndexRef.current);
    if (audioPlayingRef.current) speakCurrentSentence(sentences, story);
  }

  // ---------- filtered library ----------
  const filteredLibrary = useMemo(() => {
    const q = lib.query.trim().toLowerCase();
    let out = visibleStories.filter((s) => {
      if (lib.age !== "all" && s.age !== lib.age) return false;
      if (lib.category !== "all" && s.category !== lib.category) return false;
      if (lib.character !== "all" && s.character !== lib.character) return false;
      if (lib.favOnly && !favorites.has(s.id)) return false;
      if (q) {
        const hay = (s.title + " " + s.blurb + " " + CAT_MAP[s.category].label + " " + CHAR_MAP[s.character].label).toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
    if (lib.sort === "popular") out = [...out].sort((a, b) => b.rating - a.rating);
    else if (lib.sort === "new") out = out.filter((s) => s.isNew).concat(out.filter((s) => !s.isNew));
    else if (lib.sort === "quick") out = [...out].sort((a, b) => a.minutes - b.minutes);
    return out;
  }, [lib, visibleStories, favorites]);

  const inProgress = useMemo(
    () =>
      Object.entries(progress)
        .filter(([, p]) => p.page < p.totalPages - 1)
        .sort((a, b) => b[1].ts - a[1].ts)
        .map(([id]) => stories.find((s) => s.id === id))
        .filter((s): s is Story => !!s),
    [progress]
  );

  const currentStory = currentStoryId ? stories.find((s) => s.id === currentStoryId) ?? null : null;

  // ---------- small components ----------
  function BookCard({ story, showProgress }: { story: Story; showProgress?: boolean }) {
    const cat = CAT_MAP[story.category];
    const isFav = favorites.has(story.id);
    const prog = progress[story.id];
    return (
      <div
        className="book"
        style={{ ["--accent" as any]: story.accent }}
        tabIndex={0}
        onClick={() => openDetail(story.id)}
        onKeyDown={(e) => e.key === "Enter" && openDetail(story.id)}
      >
        <div className="book-cover">
          <span dangerouslySetInnerHTML={{ __html: renderArt(story) }} />
          <span className="cover-badge">{cat.emoji}</span>
        </div>
        <div className="book-tags">
          <span className={`pill-tag ${story.tag === "classic" ? "pill-classic" : "pill-original"}`}>
            {story.tag === "classic" ? "Classic Tale" : "Original"}
          </span>
          <span className="pill-tag pill-age">{AGE_MAP[story.age].label}</span>
        </div>
        <div className="book-title">{story.title}</div>
        <div className="book-blurb">{story.blurb}</div>
        <div className="book-meta">
          <span className="rating">{STAR_ICON} {story.rating}</span>
          <span>{story.minutes} min</span>
          <button
            className={`fav-btn ${isFav ? "on" : ""}`}
            aria-label="Toggle favorite"
            onClick={(e) => { e.stopPropagation(); toggleFavorite(story.id); }}
          >
            {HEART_ICON}
          </button>
        </div>
        {showProgress && prog && (
          <div className="progress-mini"><i style={{ width: `${Math.round(((prog.page + 1) / prog.totalPages) * 100)}%` }} /></div>
        )}
      </div>
    );
  }

  function AgeTile({ band }: { band: (typeof AGE_BANDS)[number] }) {
    const count = visibleStories.filter((s) => s.age === band.id).length;
    return (
      <div className="age-tile" style={{ ["--accent" as any]: band.color }} tabIndex={0} onClick={() => enterLibrary({ age: band.id })}>
        <span className="emoji">{band.emoji}</span>
        <div className="label">{band.label}</div>
        <div className="count">{count} {count === 1 ? "story" : "stories"}</div>
      </div>
    );
  }

  function CatTile({ cat }: { cat: (typeof CATEGORIES)[number] }) {
    return (
      <button
        className="cat-tile"
        style={{ ["--accent" as any]: cat.color, backgroundImage: `linear-gradient(180deg, color-mix(in srgb, var(--accent) 30%, transparent) 0%, rgba(10,8,20,0.55) 55%, rgba(10,8,20,0.88) 100%), url(${cat.image})` }}
        onClick={() => enterLibrary({ category: cat.id })}
      >
        <span className="emoji">{cat.emoji}</span>
        <div className="label">{cat.label}</div>
        <div className="feel">{cat.feel}</div>
      </button>
    );
  }

  function Nav() {
    const items: [View, string][] = [
      ["home", "Home"], ["age", "Ages"], ["categories", "Categories"],
      ["library", "Library"], ["characters", "Characters"],
    ];
    return (
      <header className="topbar">
        <button className="brand" onClick={() => setView("home")}>
          <span className="brand-badge">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 5.6L19 9l-5.2 1.4L12 16l-1.8-5.6L5 9l5.2-1.4z" /></svg>
          </span>
          Story Galaxy
        </button>
        <nav className="mainnav">
          {items.map(([v, label]) => (
            <button
              key={v}
              className={`nav-btn ${view === v ? "active" : ""}`}
              onClick={() => (v === "library" ? enterLibrary({}) : setView(v))}
            >
              {label}
            </button>
          ))}
          <button className={`nav-btn ${view === "library" && lib.favOnly ? "active" : ""}`} onClick={() => enterLibrary({ favOnly: true })}>&hearts; Favorites</button>
          <button className={`nav-btn ${view === "parent" ? "active" : ""}`} onClick={() => setView("parent")}>Parents</button>
          <button className="nav-btn" onClick={() => signOut({ callbackUrl: "/login" })}>Log Out</button>
        </nav>
      </header>
    );
  }

  // ---------- views ----------
  function HomeView() {
    return (
      <section>
        <div className="hero-bg">
          <div className="hero-card">
            <Mascot size={110} className="hero-mascot" />
            <p className="hero-eyebrow">Story Galaxy</p>
            <h1>{isNewUser ? `Welcome, ${userName}` : `Welcome back, ${userName}`}</h1>
            <p className="lede">A digital library of classic, curated stories for children ages 4&ndash;13 &mdash; ready to read or listen to, one shelf at a time.</p>
            <div className="hero-actions">
              <button className="btn-gold" onClick={() => enterLibrary({})}>Start Reading</button>
              <button className="btn-ghost" onClick={pickForMe}>🎲 Pick a Story for Me</button>
            </div>
          </div>
        </div>

        {inProgress.length > 0 && (
          <div className="wrap">
            <div className="section-head"><h2>Continue Your Adventure</h2></div>
            <div className="strip">{inProgress.map((s) => <BookCard key={s.id} story={s} showProgress />)}</div>
          </div>
        )}

        <div className="wrap">
          <div className="section-head"><h2>Choose Your Age</h2><span className="sub">Every reader gets the right shelf</span></div>
          <div className="age-grid">{AGE_BANDS.map((b) => <AgeTile key={b.id} band={b} />)}</div>
        </div>

        <div className="wrap tight">
          <div className="section-head"><h2>Browse Categories</h2><span className="sub">Your six story worlds</span></div>
          <div className="cat-grid">{CATEGORIES.filter((c) => allowScary || c.id !== "scary").map((c) => <CatTile key={c.id} cat={c} />)}</div>
        </div>

        <div className="wrap tight">
          <div className="section-head"><h2>Featured Books</h2><button className="link-more" onClick={() => enterLibrary({})}>See all &rarr;</button></div>
          <div className="book-grid">{visibleStories.filter((s) => s.popular).slice(0, 3).map((s) => <BookCard key={s.id} story={s} />)}</div>
        </div>

        <div className="wrap tight">
          <div className="section-head"><h2>&#11088; Most Loved Stories</h2><button className="link-more" onClick={() => enterLibrary({ sort: "popular" })}>See all &rarr;</button></div>
          <div className="strip">{[...visibleStories].sort((a, b) => b.rating - a.rating).slice(0, 6).map((s) => <BookCard key={s.id} story={s} />)}</div>
        </div>

        <div className="wrap tight">
          <div className="section-head"><h2>&#10024; New on Story Galaxy</h2><button className="link-more" onClick={() => enterLibrary({ sort: "new" })}>See all &rarr;</button></div>
          <div className="strip">{visibleStories.filter((s) => s.isNew).map((s) => <BookCard key={s.id} story={s} />)}</div>
        </div>
      </section>
    );
  }

  function AgeView() {
    return (
      <section>
        <div className="wrap">
          <div className="section-head"><h2>Choose Your Age</h2><span className="sub">We&apos;ll show stories sized just right</span></div>
          <div className="age-grid">{AGE_BANDS.map((b) => <AgeTile key={b.id} band={b} />)}</div>
        </div>
      </section>
    );
  }

  function CategoriesView() {
    return (
      <section>
        <div className="wrap">
          <div className="section-head"><h2>Browse Categories</h2><span className="sub">Pick a mood, find a story</span></div>
          <div className="cat-grid">{CATEGORIES.filter((c) => allowScary || c.id !== "scary").map((c) => <CatTile key={c.id} cat={c} />)}</div>
        </div>
      </section>
    );
  }

  function CharactersView() {
    return (
      <section>
        <div className="wrap">
          <div className="section-head"><h2>Discover by Character</h2><span className="sub">Find stories by who&apos;s in them</span></div>
          <div className="char-grid">
            {CHARACTERS.map((ch) => {
              const count = visibleStories.filter((s) => s.character === ch.id).length;
              return (
                <div key={ch.id} className="char-tile" tabIndex={0} onClick={() => enterLibrary({ character: ch.id, title: "Stories with " + ch.label })}>
                  <span className="emoji">{ch.emoji}</span>
                  <div className="label">{ch.label}</div>
                  <div className="muted-note">{count} {count === 1 ? "story" : "stories"}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  function LibraryView() {
    const titleParts: string[] = [];
    if (lib.title) titleParts.push(lib.title);
    else {
      if (lib.age !== "all") titleParts.push(AGE_MAP[lib.age].label);
      if (lib.category !== "all") titleParts.push(CAT_MAP[lib.category].label);
      if (lib.character !== "all") titleParts.push(CHAR_MAP[lib.character].label);
      if (lib.favOnly) titleParts.push("Favorites");
    }
    return (
      <section>
        <div className="wrap">
          <div className="section-head">
            <h2>{titleParts.length ? titleParts.join(" · ") : "The Library"}</h2>
            <span className="sub">{lib.favOnly ? `${filteredLibrary.length} favorited` : `${filteredLibrary.length} of ${visibleStories.length} stories`}</span>
          </div>
          <div className="filters">
            <input
              className="search-input"
              type="text"
              placeholder="Search by title, character, or category…"
              value={lib.query}
              onChange={(e) => setLib((p) => ({ ...p, query: e.target.value }))}
            />
            <select className="chip" value={lib.age} onChange={(e) => setLib((p) => ({ ...p, age: e.target.value }))}>
              <option value="all">All ages</option>
              {AGE_BANDS.map((b) => <option key={b.id} value={b.id}>{b.label}</option>)}
            </select>
            <select className="chip" value={lib.category} onChange={(e) => setLib((p) => ({ ...p, category: e.target.value }))}>
              <option value="all">All categories</option>
              {CATEGORIES.filter((c) => allowScary || c.id !== "scary").map((c) => <option key={c.id} value={c.id}>{c.emoji} {c.label}</option>)}
            </select>
            <select className="chip" value={lib.sort} onChange={(e) => setLib((p) => ({ ...p, sort: e.target.value as LibFilter["sort"] }))}>
              <option value="recommended">Recommended</option>
              <option value="popular">Popular</option>
              <option value="new">New</option>
              <option value="quick">Quickest read</option>
            </select>
            <button className={`chip ${lib.favOnly ? "active" : ""}`} onClick={() => setLib((p) => ({ ...p, favOnly: !p.favOnly }))}>&hearts; Favorites only</button>
          </div>
          <div className="book-grid">{filteredLibrary.map((s) => <BookCard key={s.id} story={s} showProgress />)}</div>
          {filteredLibrary.length === 0 && (
            <div>
              <Mascot size={72} className="empty-mascot" />
              <p className="empty-note">No stories match yet &mdash; try clearing a filter.</p>
            </div>
          )}
        </div>
      </section>
    );
  }

  function DetailView() {
    if (!currentStory) return null;
    const s = currentStory;
    const cat = CAT_MAP[s.category];
    const isFav = favorites.has(s.id);
    return (
      <section>
        <div className="detail-wrap">
          <button className="back-btn" onClick={() => setView("library")}>{BACK_ARROW} Back to browsing</button>
          <div className="detail-cover" style={{ background: `linear-gradient(155deg, ${s.accent}, color-mix(in srgb, ${s.accent} 45%, #140b28))` }}>
            <span dangerouslySetInnerHTML={{ __html: renderArt(s) }} />
            <span className="cover-badge">{cat.emoji}</span>
          </div>
          <div className="detail-tags">
            <span className={`pill-tag ${s.tag === "classic" ? "pill-classic" : "pill-original"}`}>{s.tag === "classic" ? "Classic Tale" : "Original"}</span>
            <span className="pill-tag pill-age">{AGE_MAP[s.age].label}</span>
            <span className="pill-tag pill-cat" style={{ background: cat.color }}>{cat.emoji} {cat.label}</span>
          </div>
          <h1 className="detail-title serif">{s.title}</h1>
          <p className="detail-blurb">{s.blurb}</p>
          <div className="detail-stats">
            <div><b>{s.minutes} min</b>read time</div>
            <div><b>{s.rating} ★</b>rating</div>
            <div><b>{s.difficulty}</b>difficulty</div>
            <div><b>{CHAR_MAP[s.character].emoji} {CHAR_MAP[s.character].label}</b>features</div>
          </div>
          <div className="detail-actions">
            <button className="btn-gold" onClick={() => openReader(s.id)}>📖 Read Now</button>
            <button className="btn-ghost" onClick={() => openAudio(s.id)}>🔊 Listen</button>
            <button className={`chip ${isFav ? "active" : ""}`} onClick={() => toggleFavorite(s.id)}>{isFav ? "♥ Favorited" : "♡ Add to Favorites"}</button>
          </div>
        </div>
      </section>
    );
  }

  function ReaderView() {
    if (!currentStory) return null;
    const s = currentStory;
    const cat = CAT_MAP[s.category];
    const pages = paginate(s);
    const idx = Math.min(readerIndex, pages.length - 1);
    const pct = Math.round(((idx + 1) / pages.length) * 100);

    function goTo(nextIdx: number, finished?: boolean) {
      setReaderIndex(nextIdx);
      saveProgress(s.id, finished ? pages.length - 1 : nextIdx, pages.length);
      window.scrollTo({ top: 0 });
    }

    return (
      <section>
        <div className="reader-wrap">
          <div className="reader-topbar">
            <button className="back-btn" style={{ margin: 0 }} onClick={() => setView("detail")}>{BACK_ARROW} {s.title}</button>
            <div className="font-controls">
              <button aria-label="Smaller text" onClick={() => setFontScale((f) => Math.max(0.85, f - 0.1))}>A&minus;</button>
              <button aria-label="Larger text" onClick={() => setFontScale((f) => Math.min(1.4, f + 0.1))}>A+</button>
              <button aria-label="Read this page aloud" onClick={() => speakText(pages[idx].join(" "), s)}>🔊</button>
            </div>
          </div>
          <div className="reader-progress"><i style={{ width: `${pct}%` }} /></div>
          <div className="book-page">
            <div className="reader-cover" style={{ background: `linear-gradient(155deg, ${s.accent}, color-mix(in srgb, ${s.accent} 45%, #140b28))` }}>
              <span dangerouslySetInnerHTML={{ __html: renderArt(s) }} />
              <span className="cover-badge">{cat.emoji}</span>
            </div>
            <div className="page-spine" />
            <div className="story-text" style={{ ["--font-scale" as any]: fontScale }}>
              {pages[idx].map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
          <div className="page-nav">
            <button className="btn-ghost" disabled={idx === 0} onClick={() => goTo(idx - 1)}>&larr; Previous</button>
            <span className="page-counter">Page {idx + 1} of {pages.length}</span>
            <button className="btn-gold" onClick={() => (idx === pages.length - 1 ? (goTo(idx, true), setView("detail")) : goTo(idx + 1))}>
              {idx === pages.length - 1 ? "Finish" : "Next →"}
            </button>
          </div>
        </div>
      </section>
    );
  }

  function AudioView() {
    if (!currentStory) return null;
    const s = currentStory;
    const cat = CAT_MAP[s.category];
    const sentences = useMemo(() => splitSentences(s.text), [s.id]);
    const idx = Math.min(audioIndex, sentences.length - 1);
    const pct = Math.round((idx / sentences.length) * 100);
    const supported = typeof window !== "undefined" && "speechSynthesis" in window;

    return (
      <section>
        <div className="audio-wrap">
          <button className="back-btn" style={{ justifyContent: "center" }} onClick={() => { stopAudio(); setView("detail"); }}>{BACK_ARROW} Back</button>
          <div className="audio-cover" style={{ background: `linear-gradient(155deg, ${s.accent}, color-mix(in srgb, ${s.accent} 45%, #140b28))` }}>
            <span dangerouslySetInnerHTML={{ __html: renderArt(s) }} />
            <span className="cover-badge">{cat.emoji}</span>
          </div>
          <h2 className="audio-title serif">{s.title}</h2>
          <div className="muted-note">{supported ? "Listen along, sentence by sentence" : "Read-aloud isn't supported in this browser — try Read Now instead."}</div>
          <div className="audio-progress"><i style={{ width: `${pct}%` }} /></div>
          <div className="audio-controls">
            <button className="audio-btn" aria-label="Previous" onClick={() => audioStep(-1, sentences, s)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 20L9 12l10-8v16zM5 19V5" /></svg>
            </button>
            <button className="audio-btn audio-play" aria-label="Play or pause" onClick={() => toggleAudioPlay(sentences, s)}>{audioPlaying ? PAUSE_SVG : PLAY_SVG}</button>
            <button className="audio-btn" aria-label="Next" onClick={() => audioStep(1, sentences, s)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 4l10 8-10 8V4zM19 5v14" /></svg>
            </button>
          </div>
          <div className="readalong"><b>{idx + 1} / {sentences.length}</b><br /><br />{sentences[idx] || ""}</div>
        </div>
      </section>
    );
  }

  function ParentView() {
    const historyEntries = Object.entries(progress).sort((a, b) => b[1].ts - a[1].ts);
    let totalMinutes = 0;
    historyEntries.forEach(([id, p]) => {
      const s = stories.find((st) => st.id === id);
      if (s) totalMinutes += (s.minutes * (p.page + 1)) / p.totalPages;
    });
    return (
      <section>
        <div className="wrap">
          <div className="section-head"><h2>For Parents</h2></div>
          <p style={{ color: "var(--ink-soft)", maxWidth: "38rem", lineHeight: 1.65 }}>
            Signed in as <strong style={{ color: "var(--cream)" }}>{userName}</strong>. A quick look at what&apos;s on the shelves and how reading has gone &mdash; stored in your account.
          </p>
          <div className="parents-grid">
            <div className="parents-card">
              <h3>What&apos;s in the library</h3>
              <p>About <strong>80% classic tales</strong>, marked <span className="pill-tag pill-classic" style={{ display: "inline-block" }}>Classic Tale</span>, and <strong>20% Story Galaxy originals</strong>, marked <span className="pill-tag pill-original" style={{ display: "inline-block" }}>Original</span>.</p>
            </div>
            <div className="parents-card">
              <h3>Content settings</h3>
              <div className="toggle-row">
                <span>Show Scary category (mild spooky stories)</span>
                <button className={`toggle ${allowScary ? "on" : ""}`} onClick={() => updateAllowScary(!allowScary)} aria-label="Toggle scary category" />
              </div>
              <p className="muted-note">Turning this off hides the 👻 Scary category everywhere on the site for this account.</p>
            </div>
            <div className="parents-card">
              <h3>Reading history</h3>
              <ul>
                {historyEntries.length === 0 && <li>No reading yet.</li>}
                {historyEntries.map(([id, p]) => {
                  const s = stories.find((st) => st.id === id);
                  if (!s) return null;
                  const done = p.page >= p.totalPages - 1;
                  return <li key={id}>{s.title} &mdash; {done ? "finished" : `page ${p.page + 1} of ${p.totalPages}`} &middot; {new Date(p.ts).toLocaleDateString()}</li>;
                })}
              </ul>
            </div>
            <div className="parents-card">
              <h3>Favorites</h3>
              <ul>
                {favorites.size === 0 && <li>No favorites yet.</li>}
                {[...favorites].map((id) => {
                  const s = stories.find((st) => st.id === id);
                  return s ? <li key={id}>{s.title}</li> : null;
                })}
              </ul>
            </div>
            <div className="parents-card">
              <h3>Time spent reading</h3>
              <p>{Math.round(totalMinutes)} minutes so far.</p>
            </div>
            <div className="parents-card">
              <h3>Five reading shelves</h3>
              <p>🧸 4&ndash;5 &middot; 🌈 6&ndash;7 &middot; 🚀 8&ndash;9 &middot; 🧭 10&ndash;11 &middot; 🧠 12&ndash;13 &mdash; stories get longer and a little more complex on each shelf up.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <Nav />
      <main>
        {view === "home" && <HomeView />}
        {view === "age" && <AgeView />}
        {view === "categories" && <CategoriesView />}
        {view === "characters" && <CharactersView />}
        {view === "library" && <LibraryView />}
        {view === "detail" && <DetailView />}
        {view === "reader" && <ReaderView />}
        {view === "audio" && <AudioView />}
        {view === "parent" && <ParentView />}
      </main>
      <footer>
        Story Galaxy &mdash; a shelf of tales for ages 4 to 13.
        <br />
        <span className="muted-note">
          Category photos: Gregory H. Revera (CC BY-SA 3.0) &middot; NPS/A. Falgoust &middot; U.S. Air Force/J. Strang &middot; Jon Sullivan &middot; Heptagon (CC BY-SA 4.0) &middot; Wilfredor (CC0)
        </span>
      </footer>
    </>
  );
}
