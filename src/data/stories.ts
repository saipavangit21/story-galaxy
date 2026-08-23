// Story content, illustrations, and taxonomy for Story World.
/* eslint-disable */

export type Story = {
  id: string;
  age: "4-5" | "6-7" | "8-9" | "10-11" | "12-13";
  category: "bedtime" | "adventure" | "magical" | "scary" | "mystery" | "fairytale";
  character: "animals" | "witches" | "sea" | "royalty" | "heroes";
  tag: "classic" | "original";
  title: string;
  accent: string;
  minutes: number;
  rating: number;
  popular: boolean;
  isNew: boolean;
  difficulty: "Easy" | "Growing" | "Confident";
  blurb: string;
  text: string;
};

export const ART: Record<string, string> = {
  "kitten-moon": `
    <circle cx="128" cy="24" r="13" fill="var(--hl)"/>
    <circle cx="122" cy="19" r="11" fill="var(--accent)" opacity="0.55"/>
    <circle cx="30" cy="16" r="1.6" fill="var(--hl)"/><circle cx="46" cy="30" r="1.2" fill="var(--hl)"/><circle cx="70" cy="14" r="1.4" fill="var(--hl)"/>
    <path d="M0 88 Q80 70 160 90 V100 H0 Z" fill="var(--silo)"/>
    <ellipse cx="60" cy="80" rx="20" ry="13" fill="var(--silo)"/>
    <circle cx="42" cy="66" r="10" fill="var(--silo)"/>
    <path d="M35 60 L38 48 L44 58 Z" fill="var(--silo)"/><path d="M49 58 L52 47 L56 60 Z" fill="var(--silo)"/>
    <path d="M78 90 Q90 85 88 72 Q86 84 76 86 Z" fill="var(--silo)"/>
    <rect x="90" y="78" width="14" height="12" rx="2" fill="var(--silo)"/>
  `,
  "three-pigs": `
    <path d="M0 90 H160 V100 H0 Z" fill="var(--silo)"/>
    <rect x="14" y="66" width="26" height="24" fill="var(--silo)"/><polygon points="10,66 27,48 44,66" fill="var(--silo)"/>
    <rect x="58" y="58" width="30" height="32" fill="var(--silo)"/><polygon points="53,58 73,38 93,58" fill="var(--silo)"/>
    <rect x="106" y="50" width="36" height="40" fill="var(--silo)"/><polygon points="100,50 124,28 148,50" fill="var(--silo)"/>
    <circle cx="122" cy="70" r="5" fill="var(--hl)"/>
  `,
  "tortoise-hare": `
    <path d="M0 82 Q80 62 160 82 V100 H0 Z" fill="var(--silo)"/>
    <circle cx="30" cy="18" r="11" fill="var(--hl)"/>
    <ellipse cx="40" cy="76" rx="16" ry="10" fill="var(--silo)"/><circle cx="55" cy="72" r="6" fill="var(--silo)"/>
    <ellipse cx="112" cy="68" rx="15" ry="9" fill="var(--silo)"/><circle cx="126" cy="62" r="6" fill="var(--silo)"/>
    <ellipse cx="120" cy="50" rx="3" ry="11" fill="var(--silo)" transform="rotate(-18 120 50)"/>
    <ellipse cx="129" cy="52" rx="3" ry="11" fill="var(--silo)" transform="rotate(8 129 52)"/>
    <circle cx="98" cy="76" r="1.4" fill="var(--hl)"/><circle cx="90" cy="80" r="1.2" fill="var(--hl)"/>
  `,
  "ugly-duckling": `
    <ellipse cx="80" cy="86" rx="78" ry="12" fill="var(--hl)" opacity="0.5"/>
    <path d="M8 82 Q6 68 8 60" stroke="var(--silo)" stroke-width="2" fill="none"/>
    <path d="M22 84 Q20 70 22 62" stroke="var(--silo)" stroke-width="2" fill="none"/>
    <ellipse cx="50" cy="78" rx="12" ry="8" fill="var(--silo)"/><path d="M50 70 Q46 58 54 52" stroke="var(--silo)" stroke-width="3" fill="none"/><circle cx="55" cy="51" r="4" fill="var(--silo)"/>
    <ellipse cx="85" cy="80" rx="15" ry="10" fill="var(--silo)"/><path d="M85 70 Q80 55 90 48" stroke="var(--silo)" stroke-width="3.5" fill="none"/><circle cx="91" cy="47" r="5" fill="var(--silo)"/>
    <ellipse cx="122" cy="78" rx="11" ry="7" fill="var(--silo)"/><path d="M122 71 Q118 60 126 55" stroke="var(--silo)" stroke-width="3" fill="none"/><circle cx="127" cy="54" r="3.6" fill="var(--silo)"/>
  `,
  "hansel-gretel": `
    <circle cx="132" cy="20" r="9" fill="var(--hl)"/>
    <path d="M0 92 H160 V100 H0 Z" fill="var(--silo)"/>
    <rect x="55" y="58" width="40" height="34" fill="var(--silo)"/>
    <polygon points="50,58 75,36 100,58" fill="var(--silo)"/>
    <circle cx="62" cy="46" r="2.2" fill="var(--hl)"/><circle cx="70" cy="42" r="2.2" fill="var(--hl)"/><circle cx="80" cy="43" r="2.2" fill="var(--hl)"/><circle cx="88" cy="47" r="2.2" fill="var(--hl)"/>
    <rect x="24" y="70" width="3" height="22" fill="var(--silo)"/><rect x="32" y="70" width="3" height="22" fill="var(--silo)"/><rect x="40" y="70" width="3" height="22" fill="var(--silo)"/>
    <circle cx="112" cy="80" r="5" fill="var(--silo)"/><polygon points="108,80 112,68 116,80" fill="var(--silo)"/>
    <circle cx="124" cy="82" r="4.4" fill="var(--silo)"/><polygon points="120,82 124,71 128,82" fill="var(--silo)"/>
  `,
  "lighthouse-storms": `
    <path d="M0 20 Q20 8 40 20 T80 20 T120 18 T160 22 V0 H0 Z" fill="var(--silo)" opacity="0.5"/>
    <polygon points="76,90 84,90 90,30 70,30" fill="var(--silo)"/>
    <rect x="72" y="18" width="16" height="14" fill="var(--silo)"/>
    <polygon points="80,20 130,36 80,44" fill="var(--hl)" opacity="0.6"/>
    <path d="M0 88 Q20 82 40 88 T80 88 T120 86 T160 90 V100 H0 Z" fill="var(--silo)"/>
    <path d="M10 78 Q20 74 30 78" stroke="var(--hl)" stroke-width="1.5" fill="none"/>
    <path d="M120 80 Q130 76 140 80" stroke="var(--hl)" stroke-width="1.5" fill="none"/>
  `,
  "rumpelstiltskin": `
    <circle cx="55" cy="52" r="26" fill="none" stroke="var(--silo)" stroke-width="3"/>
    <line x1="55" y1="26" x2="55" y2="78" stroke="var(--silo)" stroke-width="2"/><line x1="29" y1="52" x2="81" y2="52" stroke="var(--silo)" stroke-width="2"/>
    <line x1="37" y1="34" x2="73" y2="70" stroke="var(--silo)" stroke-width="2"/><line x1="73" y1="34" x2="37" y2="70" stroke="var(--silo)" stroke-width="2"/>
    <circle cx="55" cy="52" r="4" fill="var(--hl)"/>
    <circle cx="120" cy="66" r="8" fill="var(--silo)"/><polygon points="113,60 120,42 127,60" fill="var(--silo)"/>
    <ellipse cx="120" cy="84" rx="10" ry="12" fill="var(--silo)"/>
    <path d="M8 92 L26 84 L14 78 L30 74" stroke="var(--hl)" stroke-width="2" fill="none"/>
  `,
  "emperors-clothes": `
    <polygon points="50,44 62,26 74,44 86,26 98,44" fill="var(--hl)"/>
    <rect x="50" y="44" width="48" height="8" fill="var(--hl)"/>
    <circle cx="74" cy="20" r="3" fill="var(--hl)"/>
    <path d="M40 92 Q45 55 74 55 Q103 55 108 92 Z" fill="var(--silo)"/>
    <path d="M60 60 Q74 90 88 60" stroke="var(--hl)" stroke-width="1.4" fill="none" opacity="0.7"/>
  `,
  "cartographers-apprentice": `
    <path d="M6 30 Q40 55 30 80 Q80 60 100 88 Q130 70 154 82" stroke="var(--silo)" stroke-width="2.4" fill="none"/>
    <circle cx="118" cy="30" r="16" fill="none" stroke="var(--silo)" stroke-width="2"/>
    <polygon points="118,16 122,30 118,44 114,30" fill="var(--silo)"/>
    <polygon points="104,30 118,26 132,30 118,34" fill="var(--silo)"/>
    <line x1="20" y1="86" x2="42" y2="68" stroke="var(--silo)" stroke-width="2.4"/>
    <path d="M42 68 Q48 66 46 60" stroke="var(--silo)" stroke-width="2" fill="none"/>
  `,
  "three-billy-goats": `
    <path d="M20 92 Q80 55 140 92" stroke="var(--silo)" stroke-width="6" fill="none"/>
    <circle cx="78" cy="80" r="9" fill="var(--silo)" opacity="0.85"/><circle cx="75" cy="77" r="1.6" fill="var(--hl)"/><circle cx="81" cy="77" r="1.6" fill="var(--hl)"/>
    <ellipse cx="26" cy="70" rx="8" ry="6" fill="var(--silo)"/><path d="M20 66 Q17 60 21 58" stroke="var(--silo)" stroke-width="2" fill="none"/><path d="M32 66 Q35 60 31 58" stroke="var(--silo)" stroke-width="2" fill="none"/>
    <ellipse cx="55" cy="62" rx="11" ry="8" fill="var(--silo)"/><path d="M47 56 Q43 48 48 45" stroke="var(--silo)" stroke-width="2.4" fill="none"/><path d="M63 56 Q67 48 62 45" stroke="var(--silo)" stroke-width="2.4" fill="none"/>
    <ellipse cx="122" cy="56" rx="14" ry="10" fill="var(--silo)"/><path d="M112 48 Q106 38 113 34" stroke="var(--silo)" stroke-width="3" fill="none"/><path d="M132 48 Q138 38 131 34" stroke="var(--silo)" stroke-width="3" fill="none"/>
  `,
  "elves-shoemaker": `
    <circle cx="30" cy="20" r="10" fill="var(--hl)"/><path d="M20 20 A10 10 0 0 1 30 10" fill="var(--accent)" opacity="0.5"/>
    <path d="M30 88 Q28 60 44 58 L88 58 Q100 58 100 74 Q100 88 84 88 Z" fill="var(--silo)"/>
    <rect x="28" y="82" width="10" height="8" fill="var(--silo)"/>
    <circle cx="122" cy="70" r="6" fill="var(--silo)"/><polygon points="117,64 122,50 127,64" fill="var(--silo)"/>
    <rect x="116" y="76" width="12" height="14" fill="var(--silo)"/>
  `,
  "puss-in-boots": `
    <ellipse cx="80" cy="60" rx="16" ry="20" fill="var(--silo)"/>
    <circle cx="80" cy="34" r="12" fill="var(--silo)"/>
    <polygon points="70,26 74,12 80,24" fill="var(--silo)"/><polygon points="90,26 86,12 80,24" fill="var(--silo)"/>
    <polygon points="60,20 82,10 92,22 68,26" fill="var(--silo)"/><path d="M92 22 Q100 20 98 12" stroke="var(--hl)" stroke-width="2" fill="none"/>
    <path d="M68 78 Q66 90 74 92 L74 78 Z" fill="var(--silo)"/><path d="M92 78 Q94 90 86 92 L86 78 Z" fill="var(--silo)"/>
    <circle cx="75" cy="56" r="1.6" fill="var(--hl)"/><circle cx="85" cy="56" r="1.6" fill="var(--hl)"/>
  `,
  "nightingale": `
    <line x1="0" y1="30" x2="160" y2="18" stroke="var(--silo)" stroke-width="3"/>
    <ellipse cx="34" cy="26" rx="6" ry="4" fill="var(--silo)" transform="rotate(-8 34 26)"/>
    <ellipse cx="60" cy="21" rx="7" ry="4.5" fill="var(--silo)" transform="rotate(-6 60 21)"/>
    <ellipse cx="86" cy="60" rx="14" ry="10" fill="var(--silo)"/><path d="M100 58 L112 54 L100 62 Z" fill="var(--silo)"/>
    <circle cx="76" cy="52" r="6" fill="var(--silo)"/><polygon points="70,52 62,50 70,55" fill="var(--silo)"/>
    <path d="M92 68 Q100 60 108 68" stroke="var(--silo)" stroke-width="2" fill="none"/>
    <circle cx="30" cy="70" r="2.4" fill="var(--hl)"/><line x1="30" y1="72" x2="30" y2="82" stroke="var(--hl)" stroke-width="1.6"/>
    <circle cx="42" cy="60" r="2" fill="var(--hl)"/><line x1="42" y1="62" x2="42" y2="70" stroke="var(--hl)" stroke-width="1.4"/>
  `,
  "jack-beanstalk": `
    <path d="M20 92 Q34 70 18 54 Q34 40 20 22 Q34 8 30 0" stroke="var(--silo)" stroke-width="4" fill="none"/>
    <ellipse cx="30" cy="70" rx="6" ry="4" fill="var(--silo)"/><ellipse cx="12" cy="46" rx="6" ry="4" fill="var(--silo)"/><ellipse cx="30" cy="30" rx="6" ry="4" fill="var(--silo)"/>
    <rect x="108" y="30" width="34" height="24" fill="var(--silo)"/><polygon points="108,30 116,16 124,30" fill="var(--silo)"/><polygon points="126,30 134,14 142,30" fill="var(--silo)"/>
    <circle cx="18" cy="88" r="5" fill="var(--silo)"/><polygon points="14,88 18,94 22,88" fill="var(--silo)"/>
  `,
  "sleeping-beauty": `
    <circle cx="136" cy="18" r="8" fill="var(--hl)"/>
    <rect x="40" y="40" width="60" height="50" fill="var(--silo)"/>
    <rect x="32" y="26" width="16" height="24" fill="var(--silo)"/><polygon points="32,26 40,14 48,26" fill="var(--silo)"/>
    <rect x="92" y="26" width="16" height="24" fill="var(--silo)"/><polygon points="92,26 100,14 108,26" fill="var(--silo)"/>
    <path d="M10 90 Q20 70 12 50" stroke="var(--silo)" stroke-width="2.4" fill="none"/><path d="M14 66 l6 -4 M12 78 l-6 -3" stroke="var(--silo)" stroke-width="2" fill="none"/>
    <path d="M150 90 Q140 70 148 50" stroke="var(--silo)" stroke-width="2.4" fill="none"/><path d="M146 66 l-6 -4 M148 78 l6 -3" stroke="var(--silo)" stroke-width="2" fill="none"/>
  `,
  "attic-remembered": `
    <polygon points="20,70 80,20 140,70" fill="var(--silo)"/>
    <circle cx="80" cy="55" r="12" fill="var(--hl)" opacity="0.55"/><line x1="80" y1="43" x2="80" y2="67" stroke="var(--silo)" stroke-width="1.6"/><line x1="68" y1="55" x2="92" y2="55" stroke="var(--silo)" stroke-width="1.6"/>
    <path d="M118 40 Q126 42 126 50 Q130 44 136 46" stroke="var(--hl)" stroke-width="1.2" fill="none"/>
    <rect x="40" y="76" width="26" height="16" fill="var(--silo)"/><line x1="40" y1="84" x2="66" y2="84" stroke="var(--hl)" stroke-width="1.4"/>
  `,
  "snow-queen": `
    <g stroke="var(--hl)" stroke-width="2" transform="translate(80 46)">
      <line x1="0" y1="-24" x2="0" y2="24"/><line x1="-24" y1="0" x2="24" y2="0"/>
      <line x1="-17" y1="-17" x2="17" y2="17"/><line x1="17" y1="-17" x2="-17" y2="17"/>
      <line x1="0" y1="-24" x2="-6" y2="-16"/><line x1="0" y1="-24" x2="6" y2="-16"/>
      <line x1="0" y1="24" x2="-6" y2="16"/><line x1="0" y1="24" x2="6" y2="16"/>
    </g>
    <path d="M20 88 Q30 70 50 72 L100 72 Q112 72 108 88 Z" fill="var(--silo)"/>
    <path d="M18 88 Q10 88 12 78" stroke="var(--silo)" stroke-width="2.4" fill="none"/>
    <polygon points="128,90 138,70 148,90" fill="var(--hl)" opacity="0.5"/>
  `,
  "beauty-beast": `
    <rect x="112" y="34" width="16" height="30" fill="var(--silo)"/><polygon points="112,34 120,20 128,34" fill="var(--silo)"/>
    <rect x="128" y="42" width="12" height="22" fill="var(--silo)"/>
    <circle cx="42" cy="58" r="7" fill="var(--hl)"/><circle cx="52" cy="52" r="7" fill="var(--hl)"/><circle cx="34" cy="50" r="7" fill="var(--hl)"/><circle cx="44" cy="44" r="7" fill="var(--hl)"/>
    <circle cx="43" cy="51" r="5" fill="var(--accent)"/>
    <line x1="43" y1="58" x2="43" y2="90" stroke="var(--silo)" stroke-width="2.4"/>
    <path d="M43 70 Q52 66 54 74" stroke="var(--silo)" stroke-width="2" fill="none"/>
  `,
  "lighthouse-lullaby": `
    <path d="M0 92 H160 V100 H0 Z" fill="var(--silo)" opacity="0.6"/>
    <path d="M0 90 Q40 82 80 90 T160 88 V100 H0 Z" fill="var(--silo)"/>
    <polygon points="24,90 32,20 40,20 48,90" fill="var(--silo)"/>
    <rect x="26" y="14" width="18" height="10" fill="var(--silo)"/>
    <circle cx="35" cy="19" r="4" fill="var(--hl)"/>
    <path d="M44 18 Q70 12 96 24" stroke="var(--hl)" stroke-width="1.6" fill="none" opacity="0.7"/>
    <path d="M44 26 Q70 22 100 34" stroke="var(--hl)" stroke-width="1.2" fill="none" opacity="0.5"/>
    <ellipse cx="118" cy="80" rx="20" ry="7" fill="var(--silo)"/>
    <polygon points="112,80 116,64 122,80" fill="var(--silo)"/>
  `,
  "witch-wool-blanket": `
    <path d="M0 92 H160 V100 H0 Z" fill="var(--silo)" opacity="0.5"/>
    <path d="M20 92 Q30 40 60 30 Q56 60 50 92 Z" fill="var(--silo)"/>
    <circle cx="58" cy="24" r="9" fill="var(--hl)"/>
    <rect x="90" y="50" width="46" height="34" rx="4" fill="var(--silo)" opacity="0.85"/>
    <path d="M90 58 Q113 50 136 58" stroke="var(--hl)" stroke-width="1.6" fill="none"/>
    <path d="M90 68 Q113 60 136 68" stroke="var(--hl)" stroke-width="1.6" fill="none"/>
    <path d="M90 78 Q113 70 136 78" stroke="var(--hl)" stroke-width="1.6" fill="none"/>
    <circle cx="18" cy="20" r="1.4" fill="var(--hl)"/><circle cx="30" cy="14" r="1.2" fill="var(--hl)"/>
  `,
  "ghost-of-maple-house": `
    <path d="M0 92 H160 V100 H0 Z" fill="var(--silo)" opacity="0.55"/>
    <rect x="18" y="46" width="60" height="46" fill="var(--silo)"/>
    <polygon points="10,46 48,20 86,46" fill="var(--silo)"/>
    <rect x="40" y="64" width="16" height="28" fill="var(--hl)" opacity="0.4"/>
    <path d="M110 40 Q100 40 100 55 Q100 72 112 74 Q124 72 124 55 Q124 40 114 40 Z" fill="var(--hl)" opacity="0.75"/>
    <circle cx="106" cy="54" r="2.4" fill="var(--silo)"/><circle cx="118" cy="54" r="2.4" fill="var(--silo)"/>
    <path d="M107 62 Q112 66 117 62" stroke="var(--silo)" stroke-width="1.6" fill="none"/>
  `,
  "attic-that-hummed": `
    <path d="M0 92 H160 V100 H0 Z" fill="var(--silo)" opacity="0.55"/>
    <rect x="30" y="52" width="70" height="40" fill="var(--silo)"/>
    <polygon points="22,52 65,26 108,52" fill="var(--silo)"/>
    <rect x="56" y="34" width="18" height="16" fill="var(--hl)" opacity="0.5"/>
    <circle cx="128" cy="30" r="10" fill="var(--hl)"/>
    <path d="M40 68 Q65 60 90 68" stroke="var(--hl)" stroke-width="1.4" fill="none" opacity="0.6"/>
    <path d="M40 78 Q65 70 90 78" stroke="var(--hl)" stroke-width="1.2" fill="none" opacity="0.4"/>
  `,
  "case-of-missing-honey": `
    <ellipse cx="80" cy="90" rx="78" ry="10" fill="var(--silo)" opacity="0.4"/>
    <ellipse cx="120" cy="60" rx="18" ry="24" fill="var(--silo)"/>
    <ellipse cx="120" cy="42" rx="12" ry="10" fill="var(--silo)"/>
    <circle cx="40" cy="70" r="16" fill="var(--accent)" opacity="0.65"/>
    <circle cx="40" cy="70" r="10" fill="var(--hl)" opacity="0.5"/>
    <circle cx="66" cy="52" r="2" fill="var(--hl)"/><circle cx="74" cy="60" r="1.6" fill="var(--hl)"/><circle cx="60" cy="40" r="1.4" fill="var(--hl)"/>
  `,
  "clockmakers-riddle": `
    <path d="M0 92 H160 V100 H0 Z" fill="var(--silo)" opacity="0.55"/>
    <rect x="64" y="30" width="32" height="62" fill="var(--silo)"/>
    <circle cx="80" cy="34" r="20" fill="var(--silo)"/>
    <circle cx="80" cy="34" r="15" fill="var(--hl)" opacity="0.4"/>
    <line x1="80" y1="34" x2="80" y2="22" stroke="var(--silo)" stroke-width="2"/>
    <line x1="80" y1="34" x2="90" y2="34" stroke="var(--silo)" stroke-width="2"/>
  `,
  "last-tide-map": `
    <path d="M0 78 Q40 66 80 78 T160 76 V100 H0 Z" fill="var(--silo)"/>
    <rect x="60" y="30" width="4" height="42" fill="var(--silo)"/>
    <path d="M64 32 L100 40 L64 50 Z" fill="var(--hl)" opacity="0.7"/>
    <ellipse cx="60" cy="76" rx="30" ry="10" fill="var(--silo)"/>
    <circle cx="20" cy="18" r="9" fill="var(--hl)"/>
    <circle cx="120" cy="26" r="1.6" fill="var(--hl)"/><circle cx="134" cy="16" r="1.2" fill="var(--hl)"/>
  `,
  "tiny-stars-first-spell": `
    <circle cx="80" cy="50" r="65" fill="var(--accent)" opacity="0.12"/>
    <circle cx="80" cy="50" r="8" fill="var(--hl)"/>
    <path d="M80 34 L83 46 L95 50 L83 54 L80 66 L77 54 L65 50 L77 46 Z" fill="var(--hl)"/>
    <circle cx="30" cy="26" r="1.6" fill="var(--hl)"/><circle cx="130" cy="30" r="1.4" fill="var(--hl)"/><circle cx="40" cy="76" r="1.4" fill="var(--hl)"/><circle cx="120" cy="72" r="1.6" fill="var(--hl)"/>
  `
};

export const AGE_BANDS = [
  { id:"4-5",  emoji:"🧸", label:"4–5 years",  name:"First Stories",     color:"#e08a6f" },
  { id:"6-7",  emoji:"🌈", label:"6–7 years",  name:"Bright Beginnings", color:"#e0479a" },
  { id:"8-9",  emoji:"🚀", label:"8–9 years",  name:"Story Explorers",   color:"#4f9fe0" },
  { id:"10-11",emoji:"🧭", label:"10–11 years",name:"Chapter Seekers",   color:"#4fa39c" },
  { id:"12-13",emoji:"🧠", label:"12–13 years",name:"Deep Readers",      color:"#b17bea" }
];
export const AGE_MAP = Object.fromEntries(AGE_BANDS.map(a => [a.id, a]));

export const CATEGORIES = [
  { id:"bedtime",   emoji:"🌙",  label:"Bedtime",    feel:"Calm, gentle",             color:"var(--c-bedtime)",   image:"/categories/bedtime.jpg" },
  { id:"adventure", emoji:"🏔️", label:"Adventure",  feel:"Exciting exploration",     color:"var(--c-adventure)", image:"/categories/adventure.jpg" },
  { id:"magical",   emoji:"✨",  label:"Magical",    feel:"Fantasy & imagination",    color:"var(--c-magical)",   image:"/categories/magical.jpg" },
  { id:"scary",     emoji:"👻",  label:"Scary",      feel:"Mild spooky stories",      color:"var(--c-scary)",     image:"/categories/scary.jpg" },
  { id:"mystery",   emoji:"🔎",  label:"Mystery",    feel:"Puzzles & investigation",  color:"var(--c-mystery)",   image:"/categories/mystery.jpg" },
  { id:"fairytale", emoji:"🧚",  label:"Fairy Tales",feel:"Classic & fantasy",        color:"var(--c-fairytale)", image:"/categories/fairytale.jpg" }
];
export const CAT_MAP = Object.fromEntries(CATEGORIES.map(c => [c.id, c]));

export const CHARACTERS = [
  { id:"animals",  emoji:"🦊", label:"Animal Friends" },
  { id:"witches",  emoji:"🧙", label:"Witches & Wizards" },
  { id:"sea",      emoji:"⚓", label:"Sea & Sailors" },
  { id:"royalty",  emoji:"👑", label:"Kings & Queens" },
  { id:"heroes",   emoji:"🧭", label:"Everyday Heroes" }
];
export const CHAR_MAP = Object.fromEntries(CHARACTERS.map(c => [c.id, c]));

export const stories: Story[] = [
  {
    id:"kitten-moon", age:"4-5", category:"bedtime", character:"animals", tag:"original",
    title:"The Kitten Who Chased the Moon", accent:"#8393cf", minutes:6, rating:4.9,
    popular:true, isNew:true, difficulty:"Easy",
    blurb:"A small orange kitten sets out to catch the moon in a bucket.",
    text:`Pip was a small orange kitten who lived on a windowsill above a bakery, and every night, without fail, she watched the moon rise over the rooftops with round, wondering eyes.

"It looks close enough to touch," she told the pigeon who nested under the eaves.

"It is very far away," said the pigeon, who had flown higher than most and knew about these things. "Farther than any wing could carry you."

But Pip did not quite believe him, because on some nights the moon sat right on top of the church steeple, and on other nights it rested on the hill behind the bakery, close enough, she was certain, to scoop up in a bucket.

So one clear evening, when the moon looked especially low and especially round, Pip decided that tonight was the night. She found an old tin bucket by the back door, gripped the handle in her teeth, and set off down the cobbled street.

She followed the moon past the fishmonger's shop, where it seemed to duck behind a chimney just as she arrived. She followed it past the fountain in the square, where it slid, silvery and shining, into the water — and Pip pounced with her bucket, only to come up with nothing but a very wet paw and a startled goldfish.

"Hmph," said Pip, shaking herself dry.

She followed it up the hill behind the bakery, climbing over roots and around brambles, certain that this time she would catch it for good. But when she reached the top, breathless, the moon had simply floated higher, calm and silver and completely out of reach, exactly where it had always been.

Pip sat down in the grass with her empty bucket and, for the first time all evening, stopped to really look at it.

It was enormous now that she was closer to the sky — a huge, glowing circle, pale as milk, with soft grey shadows that looked almost like a face if she tilted her head just right. Around it, more stars than she had ever noticed from her windowsill blinked awake one by one, scattered like sugar spilled across dark cloth.

An old grey owl settled on the branch above her. "Trying to catch it?" the owl asked, not unkindly.

"I was," Pip admitted. "But it keeps moving. Or I keep moving. I'm not sure which."

"Both, a little," said the owl. "That's rather the trick of it. You can't hold the moon in a bucket. But you can sit under it, and it will keep you company all night long, which is really the nicer part anyway."

Pip thought about this for a while, turning her empty bucket over to use as a seat instead. The moon did not come any closer. But it did not go anywhere, either — it simply stayed above her, glowing softly, as she sat on the hilltop with the owl and watched the whole quiet town spread out below, roofs and chimneys and one small, lit bakery window.

When Pip finally padded home, well past her bedtime, her bucket was still empty. But she did not mind so much anymore.

She curled up on her windowsill, and there was the moon again, right where it always was, framed perfectly in her window like a picture hung just for her. She never did catch it in a bucket. But every night after that, she watched it rise, and it never once forgot to come and sit with her.`
  },
  {
    id:"three-pigs", age:"4-5", category:"fairytale", character:"animals", tag:"classic",
    title:"The Three Little Pigs", accent:"#e0479a", minutes:7, rating:4.7,
    popular:true, isNew:false, difficulty:"Easy",
    blurb:"Straw, sticks, and bricks — only one house survives the wolf.",
    text:`There once were three little pigs who left their mother's house to build homes of their own, each with a bundle on his back and a plan in his head.

The first little pig met a man carrying straw. "That looks easy to build with," he thought, and traded a button for an armful. By afternoon he had a snug little straw house with a straw roof and a straw door, and he spent the rest of the day napping in the sun, quite pleased with himself.

The second little pig met a man carrying sticks. "Sturdier than straw," he decided, and traded a bit of string for a bundle. It took him until evening to weave the sticks into walls and a roof, and when he was done, he thought his house looked very fine indeed — much finer, certainly, than his brother's.

The third little pig met a man carrying bricks. He looked at the heavy, red bricks for a long moment, then traded his pocketknife for a whole cartload. It took him three full days to lay every brick in careful rows, mortar the joints, and fit a heavy oak door with a strong iron latch. His brothers visited and laughed at how long he was taking.

"You'll be building that thing till winter," said the first pig.

"Come nap in the sun with us," said the second.

But the third little pig just kept laying bricks, one steady row at a time, and said only, "I'd rather build it right than build it fast."

Not far off, in a den at the edge of the wood, lived a wolf who had grown very hungry and had heard, on the wind, that three plump little pigs had just moved into the neighborhood.

That evening, the wolf padded up to the straw house and knocked politely on the straw door.

"Little pig, little pig, let me in," he called.

"Not by the hair on my chinny-chin-chin!" squeaked the first pig, peeking through a gap in the straw wall.

"Then I'll huff, and I'll puff, and I'll blow your house in," said the wolf.

And he did. One enormous breath sent straw flying in every direction, and the first little pig ran shrieking down the road to his brother's stick house, diving through the door just as the wolf's shadow fell across the yard.

The wolf followed, and soon he was knocking on the stick door, too. "Little pigs, little pigs, let me in."

"Not by the hair on our chinny-chin-chins!" the two pigs cried together.

"Then I'll huff, and I'll puff, and I'll blow your house in."

He did that too — it took two enormous breaths instead of one, but down came the sticks in a great clattering heap, and both pigs bolted down the road as fast as their trotters would carry them, straight to their brother's brick house, slamming the heavy oak door and sliding the iron latch shut behind them just in time.

The wolf arrived a moment later, breathing hard, and pounded on the brick wall. "Little pigs, little pigs, let me in!"

"Not by the hair on our chinny-chin-chins," came the answer, calm and steady, from behind the thick red walls.

"Then I'll huff, and I'll puff, and I'll blow your house in."

He huffed. He puffed. He huffed and puffed until his face turned red and his lungs ached and his legs shook — and the brick house did not so much as tremble. Not one brick shifted. Not one crack appeared.

Furious and worn out, the wolf circled the house, looking for another way in, and spotted the chimney. "Ah," he thought. "A little climb, a little drop, and dinner is served."

But the third little pig had been watching from the window, and he was already at the hearth, building up the fire and setting a great pot of water to boil.

Down the chimney came the wolf — and straight into the pot he splashed, with a yelp that echoed across the whole wood. He shot back up the chimney faster than he'd come down, and went running off into the trees, never to bother the three little pigs again.

The two brothers, damp with sweat and thoroughly humbled, thanked their brother for his sturdy walls, and the three of them lived together in the brick house from then on — where they agreed, over a warm dinner that night, that building something well was always worth the extra time it took.`
  },
  {
    id:"tortoise-hare", age:"6-7", category:"adventure", character:"animals", tag:"classic",
    title:"The Tortoise and the Hare", accent:"#6fa15c", minutes:6, rating:4.8,
    popular:true, isNew:false, difficulty:"Easy",
    blurb:"A boastful hare learns that slow and steady wins the race.",
    text:`Once, in a meadow ringed with daisies, there lived a hare who could run faster than any creature in the forest, and he never once let anyone forget it.

Every morning he zoomed past the other animals in a blur of brown fur. "Out of my way, slowpokes!" he'd call, laughing so hard he nearly tripped over his own feet, which of course he never did, because he was much too fast to trip.

One day, he zoomed past a tortoise plodding along the garden path, one slow step at a time.

"Well, well," said the hare, skidding to a stop in a cloud of dust. "Look at you go. At this rate you'll reach the pond sometime next winter."

The tortoise looked up, unbothered. "I get where I'm going eventually," he said. "That's more than some folks can say, rushing about and going nowhere at all."

The hare's ears twitched. "Is that so? Then let's have a race. Right now. Me against you, from the old oak tree to the river. Whoever gets there first wins a whole basket of clover."

The other animals gathered to watch, and word spread quickly through the meadow. A fox agreed to be the judge, standing at the finish line by the river with a red scarf to wave when someone crossed.

"Ready," called the fox, "set... go!"

The hare shot off like an arrow, and within moments he was nothing but a speck in the distance. The tortoise, meanwhile, took his very first step, and then his second, moving at exactly the same steady pace he always moved at, no faster and no slower.

Far ahead, the hare reached the halfway point and looked back. There was no tortoise in sight — not even a shell on the horizon. He yawned, stretching his long legs.

"I've got hours to spare," he said to himself. "I could take a little nap right here under this tree and still win with time to spread on toast."

So he curled up in the cool grass, in the dappled shade of an old maple, and closed his eyes just for a moment.

The sun moved slowly across the sky. A breeze rustled the leaves. Somewhere far behind, the tortoise kept walking — past the maple tree, past the hare's twitching, sleeping ears, past the very spot where the hare had bragged that morning — one slow, steady, unhurried step after another.

He did not stop to rest. He did not stop to boast. He simply kept walking, because that was the only way he knew how to get anywhere, and it had never once let him down.

The afternoon sun was warm on the hare's fur when he finally stirred, stretched, and opened one eye. Something felt different. The meadow was too quiet. He sat up with a start.

"The race!" he yelped, scrambling to his feet.

He ran faster than he had ever run in his life, his paws barely touching the ground, the wind roaring past his ears. He could see the river ahead — and the fox, standing by the finish line, red scarf already lowered.

And there, just a few steps from the water, taking his final slow step across the line, was the tortoise.

The hare skidded to a stop in stunned silence as the other animals cheered. The tortoise turned around, not even out of breath, and gave a small, polite nod.

"How—" the hare panted. "I'm faster than anyone in this whole forest!"

"You are," the tortoise agreed. "But being fast doesn't help much if you spend the race asleep under a tree."

The hare opened his mouth to argue, then closed it again, because there was nothing to argue with. He had been faster. He had also lost. Both things were true at the same time, and he was beginning to understand how that could be.

From that day on, the hare still ran fast — he loved to run, and there was no shame in that — but he never again bragged about a race before it was finished. And whenever he passed the tortoise on the garden path, he slowed down just enough to walk alongside him for a while, matching his steady, unhurried pace, step for patient step.`
  },
  {
    id:"ugly-duckling", age:"6-7", category:"fairytale", character:"animals", tag:"classic",
    title:"The Ugly Duckling", accent:"#e0479a", minutes:10, rating:4.8,
    popular:true, isNew:false, difficulty:"Growing",
    blurb:"A strange, grey duckling grows into something no one expected.",
    text:`It was a warm summer at the old farmhouse by the millpond, and in a nest tucked among the reeds, a mother duck sat patiently on her eggs, waiting for them to hatch.

One by one they cracked open — yellow, fluffy, cheerful ducklings, peeping and stretching their new wings. But one egg, the largest of the bunch, took far longer than the rest, and when it finally hatched, out came a duckling unlike any of his brothers and sisters: big, grey, and awkward, with none of their soft yellow down.

"What a strange-looking creature," clucked an old duck who happened to be passing. "He can't possibly be one of yours."

The mother duck defended him loyally at first, but as the days passed, the other ducks in the barnyard pecked at him, the hens jeered, and even his own brothers and sisters told him he was too big, too grey, and altogether too strange to belong among them. The farmyard cat sneered. The turkey puffed himself up and gobbled insults. Even the girl who fed the chickens gave him a shove with her foot.

It was more than the poor duckling could bear. One grey morning, he squeezed through a gap in the fence and ran away, out past the farmhouse and into the wide, unfamiliar world, where at least no one there yet knew to call him ugly.

He found a marsh full of wild ducks, who looked at him and turned up their beaks. "You're remarkably ugly," one of them said bluntly. "But you may stay, I suppose, as long as you don't try to marry into our family." That was, the duckling thought sadly, the kindest thing anyone had said to him in weeks.

Autumn came, and with it, hunters and their dogs crashing through the marsh. The duckling hid trembling among the reeds, and when at last the hunt passed, he thought bitterly, "I am so ugly that even the dog wouldn't bother to bite me."

He wandered on. An old woman took him in briefly, thinking he might be a good egg-layer, but her hen and her cat mocked him mercilessly for not knowing how to purr or lay eggs, until he left that cottage too, sadder than before.

Winter arrived, bitter and long. The duckling nearly froze solid in the ice of a pond one night and was rescued, half-conscious, by a passing farmer, who carried him home to warm by the fire. But startled by the noisy, unfamiliar house — the children shouting, pots clattering — the duckling panicked and knocked over the milk churn, sending flour flying everywhere, and fled back out into the snow, more alone than ever.

It was the hardest winter of his short life. He hid in the reeds of a frozen marsh, cold and starving, wondering if he would ever find anywhere he truly belonged.

Then spring came at last, the way it always eventually does. The ice melted. The sun grew warm on his feathers, which had grown in thick and strong over the long winter without his quite noticing. Stretching his wings one morning, he found they carried him higher and farther than he'd ever flown before, all the way to a beautiful garden where a stream wound past blossoming apple trees.

There, gliding on the water, he saw three magnificent white swans, necks curved like question marks, feathers gleaming in the sun. His heart sank. Surely they would drive him off too, ugly as he was — but he had grown so weary of being alone that he decided he would rather be attacked by beautiful creatures than ignored by ordinary ones, and he swam toward them anyway, head bowed, ready for the worst.

Instead, the swans swam eagerly to greet him.

Confused, he lowered his head toward the water to hide his face — and stopped. Looking back up at him from the surface of the stream was not the grey, awkward duckling he had always known himself to be. It was a swan: white and graceful, with a long elegant neck and wide, powerful wings, more beautiful than any of the birds gathered around him.

He had not turned into a swan that morning. He had been one all along, hatched by mistake among ducks, too large and grey for a world that had no way yet of seeing what he would become.

Children ran to the riverbank, pointing and calling out, "Look — a new swan, and he's the loveliest one of all!" The swan who had once been a duckling ruffled his feathers, not with pride, but with a quiet, settled happiness — the feeling, at last, of being exactly where he belonged.`
  },
  {
    id:"hansel-gretel", age:"8-9", category:"scary", character:"witches", tag:"classic",
    title:"Hansel and Gretel", accent:"#e08a3f", minutes:11, rating:4.6,
    popular:false, isNew:false, difficulty:"Growing",
    blurb:"Two children outwit a witch and find their way home through the woods.",
    text:`Near the edge of a great forest lived a poor woodcutter with his two children, Hansel and Gretel, and their stepmother, in a small cottage where, that year, the harvest had failed and there was hardly bread enough for anyone.

One night, when the children were meant to be asleep, Hansel heard his stepmother's voice through the thin wall. "We cannot feed them both," she said. "Tomorrow we'll take them deep into the forest and leave them there. They're clever enough — perhaps they'll find their own way."

The woodcutter argued long into the night, but in the end he was too tired and too hungry to hold out. Hansel crept to the window and looked out at the moonlit yard, where the white pebbles along the garden path glowed like scattered coins.

"Don't worry, Gretel," he whispered, filling his pockets with as many pebbles as they would hold. "I have a plan."

The next morning, as their father led them into the forest, Hansel dropped a pebble every few steps, quietly, so no one would notice. By the time they reached the deepest part of the woods, his pockets were empty, and their father — his eyes red — told them to wait by a fire while he gathered wood, and did not come back.

The children waited until the moon rose high enough to light the pebble trail, and step by shining step, they followed it all the way home. Their stepmother's face went pale to see them at the door, but she said nothing, and their father wept with relief.

It did not take long, though, before the harvest failed again, and Hansel woke one night to the same low voices through the wall. This time, when he crept to the window to gather pebbles, he found the door locked fast. He had only the crust of bread from his pocket, which he crumbled and scattered behind him the next morning as they walked, trusting it would guide them home the same way the pebbles had.

But the birds of the forest, hungry themselves that year, ate every crumb before the sun had even set, and this time, when their father slipped away and did not return, Hansel and Gretel searched and searched for a trail that was no longer there.

They walked for three days, eating only a few berries, growing wearier and more frightened with each mile, until on the third evening a beautiful white bird led them to a clearing they had never seen before — and there, in the middle of it, stood a little house with walls of gingerbread, a roof of cake, and windows made of clear, sugary glass.

Starving, they broke off a piece of the roof and began to eat. A voice called out from inside:

"Nibble, nibble, like a mouse, who is nibbling at my house?"

"Only the wind, only the wind," the children called back, and kept eating — until the door creaked open, and out hobbled a very old woman leaning on a cane, who smiled at them with surprising warmth.

"Come in, come in, dear children," she said. "No one shall harm you here."

She fed them a wonderful supper of milk and pancakes, apples and nuts, and gave them soft beds to sleep in. But the old woman was not what she seemed. She was a witch who had built her sweet little house precisely to lure hungry children, and the very next morning, before either of them had properly woken, she seized Hansel by the collar and locked him in a small cage behind the house.

"Gretel," she barked, "fetch water and cook something good for your brother. I mean to fatten him up." She meant, though Gretel did not yet understand it, to eat him.

Each day, the witch shuffled to the cage and demanded Hansel poke out his finger, so she could feel how plump he'd grown. But the witch's eyes were weak, and Hansel, thinking quickly, held out a small dry bone he'd found in the straw instead of his finger. Baffled that the boy never seemed to fatten, the witch grew impatient.

"Fat or thin, I'll wait no longer," she snapped one morning, and ordered Gretel to heat the great oven, meaning to cook the girl first and Hansel after.

"I don't know if it's hot enough," Gretel said, when the witch demanded she climb in to check. "Won't you show me how?"

Grumbling, the witch bent down to peer into the oven herself — and in that instant, Gretel gathered all her courage and pushed with both hands. The heavy iron door swung shut behind the witch, and Gretel bolted it fast, and that was the end of the witch and her wicked plans.

Gretel ran at once to free her brother, and the two of them searched the little house from top to bottom, finding chests overflowing with pearls and jewels that the witch had hoarded from other unlucky visitors. They filled their pockets and a sack besides, and set off through the forest to find their way home.

A wide river blocked their path, too deep to cross, until a friendly white duck agreed to carry them one at a time to the far bank. From there, the woods began to look familiar, and soon they saw the roof of their own cottage through the trees.

Their father ran to meet them with tears streaming down his face — he had regretted the terrible choice every single day since, and had not known a moment's peace. Their stepmother, they learned, had died while they were gone. With the witch's jewels, the family never went hungry again, and Hansel and Gretel, and their father, lived together contentedly for many years after.`
  },
  {
    id:"lighthouse-storms", age:"8-9", category:"mystery", character:"sea", tag:"original",
    title:"The Lighthouse That Ate Storms", accent:"#4fa39c", minutes:9, rating:4.7,
    popular:false, isNew:true, difficulty:"Growing",
    blurb:"A curious lighthouse keeper's daughter discovers the tower has a secret job.",
    text:`On a rocky point where the sea met the sky in a hard grey line, there stood a lighthouse older than anyone in the village could remember, kept by a quiet man named Otto and his daughter, Wren, who had grown up counting the sweep of its beam instead of sheep.

Wren had always been told the lighthouse's job was simple: warn ships away from the rocks. But she had noticed something the guidebooks never mentioned. Whenever a truly fierce storm rolled in off the water — the kind that turned the sky the color of a bruise — the lighthouse light did not simply flash its usual pattern. It pulsed, slow and deep, almost like breathing.

"It's just the wind rattling the lens," her father always said. But her father said that about a great many things he didn't have time to explain, and Wren had learned to be suspicious of easy answers.

One September evening, the worst storm in years came screaming across the water, tearing shingles off roofs and bending the old pines nearly sideways. Otto was down in the village helping secure the fishing boats, and Wren was alone in the tower when the light overhead began that slow, breathing pulse — brighter and deeper than she had ever seen it.

She climbed the spiral stairs two at a time, her lantern swinging wildly, until she reached the lamp room at the very top. And there, pressed against the great glass windows by the wind, she saw it: the storm itself, or something like it — a swirling, dark shape with edges like torn cloth, trying to force its way in through the window seams.

The lighthouse lamp brightened further, and to Wren's astonishment, the great glass lens began to draw the storm-thing in, the way a whirlpool draws in water, thread by dark thread, until the howling wind outside noticeably calmed and the shape inside the lamp room curled tighter and dimmer.

"It's not warning ships away," Wren whispered, understanding all at once. "It's eating the storm."

She grabbed the lever her father always told her never to touch — the one marked only with a small, faded star — and pulled it as far as it would go. The lamp flared white-gold, and the last ragged edges of the storm-shape were drawn in and swallowed whole, spinning down into the glass like water down a drain, until the room was silent except for the ordinary creak of an ordinary old building in an ordinary strong wind.

Outside, through the now-clear window, Wren watched the black clouds thin and part, revealing a startled sliver of moon.

When her father returned, soaked and exhausted from the docks, he found Wren sitting calmly at the top of the stairs, and he stopped short at the look on her face.

"You found the star lever," he said, not a question.

"You knew," she said. "This whole time."

Otto sat down heavily on the step below her and finally, after years of easy non-answers, told her the truth: the lighthouse had been built two hundred years earlier by a keeper who noticed that certain storms weren't ordinary weather at all, but something older and hungrier that gathered over that stretch of coast once or twice a generation. The lens, ground from a strange dark glass none of the old records could explain, had a way of drawing such storms in and holding them, calmed, deep within the tower's foundations, where they had slept, harmless, for two centuries.

"Every keeper learns it eventually," Otto said. "I was waiting until you were old enough not to be frightened by it. I think," he added, looking at her steadily, "that time was tonight."

Wren looked back down the dark spiral stairs, thinking of the storm-shape curling smaller and smaller inside the glass, and found that she wasn't frightened at all — only proud, and a little bit thrilled, to finally understand the true, strange, important job the lighthouse had been doing all along, right over her head, every single night of her life.

From then on, Wren kept watch alongside her father, learning to read the sky for that particular bruised color, ready with her hand near the star-marked lever. And though the villagers still believed the light simply warned ships away from the rocks, Wren knew better — and on stormy nights, she liked to imagine the whole village sleeping soundly, never once guessing what quietly stood guard above them.`
  },
  {
    id:"rumpelstiltskin", age:"10-11", category:"magical", character:"witches", tag:"classic",
    title:"Rumpelstiltskin", accent:"#b17bea", minutes:13, rating:4.5,
    popular:false, isNew:false, difficulty:"Confident",
    blurb:"A miller's daughter must guess a strange little man's name to keep her child.",
    text:`There once was a poor miller who, wanting to seem important in front of the king, boasted that his daughter could spin ordinary straw into pure gold. It was, of course, an absurd lie — but word of it reached the king's ears, and the king, who loved gold rather more than he loved the truth, summoned the miller's daughter to the castle at once.

He led her to a small room stacked from floor to ceiling with straw, along with a spinning wheel and a spool, and told her plainly: spin all of this into gold by morning, or she would lose her life.

Left alone, the girl sat and wept, for she had no more idea how to spin straw into gold than she did how to fly. But as her tears fell, the door creaked open, and in stepped a very strange little man, no taller than her knee, with sharp eyes and a sharper smile.

"Why do you weep so, miller's daughter?"

"I must spin all this straw into gold," she said, "and I do not know how."

"What will you give me," he asked, "if I do it for you?"

She offered him the necklace from around her neck, and he accepted it with a satisfied nod, sat down at the wheel, and set to work. Whirr, whirr, whirr went the wheel three times, and each time, a spool filled with gleaming gold thread. By morning, every scrap of straw in the room had become gold, gathered in neat, glittering spools.

The king was delighted — and greedy for more. He led the girl to a second room, even larger than the first, entirely filled with straw, and repeated his threat. Again she wept; again the little man appeared, and this time she gave him the ring from her finger in exchange for his help. Again, by morning, the room shone with spun gold.

The king, now thoroughly intoxicated by his good fortune, led her to a third room — the largest yet — and promised that if she spun this straw to gold as well, he would marry her and make her his queen. Once more the little man appeared, but this time the girl had nothing left to give him.

"Then promise me," he said, "your first child, when you become queen."

Believing, as many do in desperate moments, that such a day might never truly come, she agreed. The little man spun the final room of straw into gold, the king married her the very next week, and in time, as queens often do, she gave birth to a child.

She had all but forgotten her promise when the strange little man appeared once more in her chambers, demanding payment. Horrified, the new queen offered him all the riches of the kingdom instead, but he shook his head firmly. "A living child," he said, "means more to me than all the treasure in the world." Yet, seeing her genuine grief, he relented, just slightly.

"I will give you three days," he said. "If in that time you can guess my name, you may keep your child."

The queen spent the first day naming every name she had ever heard — Caspar, Melchior, Balthazar — but to each, the little man simply shook his head and said, "That is not my name."

That night, she sent a messenger throughout the countryside to gather every unusual name he could find, and the second day she tried them all — Ribsofbeef, Sheepshanks, Laceleg — but again, none of them were right.

On the third day, the messenger returned with news. He had traveled deep into the forest, he said, and come upon a strange little house at the foot of a hill, where a fire burned and a very odd little man hopped about it on one leg, singing to himself:

"Today I brew, tomorrow I bake,
Then the queen's child I shall take.
How lucky that no one knows the game,
That Rumpelstiltskin is my name!"

The queen could hardly believe her luck. When the little man appeared that evening for his final answer, she let him try a few wrong guesses first — "Is your name Kunz? Is it Hans?" — watching him grow more and more delighted with each refusal, certain of his victory.

"Could your name, perhaps," she said at last, watching his face carefully, "be Rumpelstiltskin?"

The little man's delight vanished in an instant. "The devil told you that! The devil told you!" he screamed, stamping his foot so hard in fury that it drove straight through the floorboards. He seized his own leg with both hands and, in his rage, tore himself entirely in two, and was never seen in that kingdom again.

The queen kept her child, safe and laughing in her arms, and though she never did learn how the little man had truly come to know how to spin straw into gold, she made certain never again to promise away something so precious for the sake of a problem that seemed, at the time, impossible to solve any other way.`
  },
  {
    id:"emperors-clothes", age:"10-11", category:"fairytale", character:"royalty", tag:"classic",
    title:"The Emperor's New Clothes", accent:"#e0479a", minutes:11, rating:4.6,
    popular:true, isNew:false, difficulty:"Confident",
    blurb:"A vain emperor is fooled by two clever swindlers — and a whole city plays along.",
    text:`Many years ago, there lived an emperor who cared for nothing in the world so much as fine new clothes. He spent his entire fortune on the latest fashions, changed outfits a dozen times a day, and had almost no interest in his army, his theater, or his people — only in being seen wearing something no one else had ever worn.

Word of his vanity spread far and wide, until it reached two swindlers who saw, in the emperor's weakness, an extraordinary opportunity. They arrived at the palace claiming to be the finest weavers in the world, capable of creating cloth so magnificent that its colors and patterns seemed almost too fine for the eye to bear. But the cloth had one particular property, they explained gravely: it was invisible to anyone who was unfit for their position, or hopelessly stupid.

The emperor, delighted, gave the swindlers a fortune in gold and silk thread and set them up with looms in the finest room of the palace. The two men set to work at once — or appeared to, for in truth their looms held nothing at all. They mimed weaving late into the night, folding empty air as if it were the most delicate fabric imaginable.

Curious about his investment, the emperor sent his oldest and most trusted minister to check on the weavers' progress. The minister entered the room, looked at the empty looms, and felt a cold spike of fear settle in his stomach — he could see nothing. But rather than admit it, and risk being thought unfit for his post, he praised the pattern's brilliant colors and admired the exquisite design, and reported back glowingly to the emperor.

A second official was sent, with exactly the same result: he too saw nothing, and he too, terrified of appearing foolish, praised the invisible cloth in extravagant terms.

At last, burning with impatience, the emperor visited the weavers himself, bringing his entire retinue of trusted advisors. He stared at the empty looms and felt his heart drop into his shoes — he could see nothing whatsoever. "Am I unfit to be emperor?" he thought, horrified. "Am I a fool?" But an emperor could never say such a thing aloud, and so he too praised the fabric's marvelous colors, and his whole retinue, one after another, followed his lead, nodding and murmuring their admiration for cloth that did not exist.

The swindlers, sensing their moment, asked for still more gold and silk to finish the emperor's grand new suit, all of which vanished into their pockets along with the rest. On the night before the great procession in which the emperor was to debut his miraculous new clothes, they worked by candlelight with scissors cutting empty air and needles stitching nothing at all, and in the morning they dressed the emperor with elaborate care, describing each imaginary garment as they fastened it — the trousers, the coat, the long, flowing cloak.

"How well Your Majesty's clothes fit!" the ministers cried. "What a beautiful design! What magnificent colors!" Not one of them dared say what they truly saw, which was the emperor's bare skin, because each was privately convinced that he alone was the fool who could not see the fabric.

The emperor turned before the mirror, seeing nothing there but himself, and felt a flicker of doubt — but he squared his shoulders and stepped out to lead the procession anyway, for there was no going back now.

The whole city had gathered along the streets and turned out their windows to see the emperor's fabled new clothes. As he passed, walking as proudly as he could manage under his invisible canopy, the crowd murmured their admiration, each person too afraid of seeming stupid or unfit to say otherwise. "How fine his coat is!" they called. "What a splendid cloak! What a perfect fit!"

It might have gone on that way to the very end of the procession, had a small child not been perched on his father's shoulders near the front of the crowd. The boy squinted at the emperor for a long moment, puzzled, and then said, in the clear, unguarded voice that only children seem to have, "But he isn't wearing anything at all!"

His father tried to hush him, embarrassed, but the words had already rippled outward through the crowd — one person repeating them to the next, until the whole street was murmuring the same thing. "The child is right — he has nothing on!" And soon the whole city was saying it together, openly now, the spell of pretending finally broken.

The emperor heard it, and felt in his heart that the people were right, though he could hardly believe it had taken a child to say what every adult around him had been too afraid to admit. But an emperor could not simply stop a procession midway — so he drew himself up straighter than ever and continued walking to the very end, trailed by two chamberlains solemnly carrying a cloak that was not there at all, while the whole city watched and understood, at last, exactly how far a little fear of looking foolish could carry an entire kingdom into pretending something false was true.`
  },
  {
    id:"cartographers-apprentice", age:"12-13", category:"adventure", character:"heroes", tag:"original",
    title:"The Cartographer's Apprentice", accent:"#6fa15c", minutes:13, rating:4.9,
    popular:true, isNew:true, difficulty:"Confident",
    blurb:"An apprentice mapmaker discovers her master's atlas redraws itself at night.",
    text:`In the city of Verrateil, where every street eventually led to the harbor, there lived a mapmaker named Corvin Ashe, whose atlases were said to be the most accurate in the known world — and whose newest apprentice, a sharp-eyed twelve-year-old named Isolde Marsh, had begun to suspect that "accurate" was not quite the right word for what they truly were.

Isolde had been apprenticed to Master Ashe for four months, learning to grind pigments, stretch vellum, and letter coastlines in a careful, steady hand. It was tedious, exacting work, and she loved every hour of it — until the night she stayed late finishing a border of sea serpents around a chart of the Cindral Straits, and noticed, quite by accident, that the ink on the map hanging behind Ashe's desk was moving.

Not dripping. Not smearing. Moving — the thin blue line of a river called the Ossuary Vein sliding, ever so slowly, three inches to the west across the parchment, redrawing its own bends as if an invisible hand were correcting an old mistake.

She rubbed her eyes and looked again. The river had stopped, settled into its new course, looking as permanent and ordinary as any line she had ever drawn herself.

For a week she said nothing, watching quietly instead. She learned that it was not every map that moved — only the ones kept in the locked cabinet behind Master Ashe's desk, which he called simply "the working set," and which he never let her touch. She learned that the changes only happened after midnight, and only to maps of places that, as far as she could tell from the old newspapers stacked in the corner, had recently experienced something unusual: a landslide, a flood that carved a new channel, a coastline nibbled back by a storm.

The maps, she realized with a chill that had nothing to do with the draughty workshop, were not describing the world. They were the world — or some strange, thin echo of it, updating itself as the real land changed, faster than any survey crew could ever travel to record it.

She finally confronted Master Ashe on a rainy evening in October, holding up a chart of the coastal village of Brackenhollow that had, the night before, quietly erased an entire fishing pier from its own ink.

"The pier collapsed three nights ago," Ashe said simply, when he saw what she was holding, not even trying to deny it. "A ship ran aground on the old pilings yesterday morning. You'll have read about it in tomorrow's paper, if you hadn't already read about it on that map tonight."

"How is this possible?" Isolde asked, more fascinated than frightened, now that the secret was finally out in the open between them.

Ashe sat down heavily in his chair, looking older than she had ever seen him. "My grandmother was the cartographer before me, and her grandmother before that. The working set has been in this family for six generations, drawn originally — so the story goes — by a mapmaker who fell in love with a woman made of the coastline itself, and who begged the world to let him keep some small living piece of her after she was gone. I don't know if that part is true. I only know the maps have always updated themselves, and that whoever holds this cabinet's key inherits the job of keeping them current, correcting the borders and depths that even the moving ink sometimes gets slightly wrong, so that ships don't wreck on shoals that used to be there and aren't anymore, or the reverse."

"Why keep it secret?"

"Because most people would want to use it for the wrong reasons," Ashe said. "Treasure. War. Knowing which harbor will flood before anyone else does, and profiting from it. A map that shows the truth of a changing world is a dangerous thing in the wrong hands, Isolde. It has to be kept by someone who mostly just wants sailors to come home safely."

He unlocked the cabinet at last and let her see the full working set — dozens of charts, their inked coastlines faintly, perpetually alive, redrawing themselves grain by grain to match a world in constant motion. He explained the correction work: cross-referencing newspaper reports, harbor logs, and letters from trusted captains, catching the rare moments where the maps' self-drawn lines needed a careful human hand to nudge them true.

"I'm getting old for the late nights," Ashe admitted, watching her trace a finger along a slowly shifting river delta. "I had begun to wonder who I'd pass the cabinet key to."

Isolde looked up at him, at the moving ink, at the whole strange, quiet responsibility spread out across the desk — and felt, for the first time since she'd arrived at his workshop four months earlier, that she finally understood exactly what kind of mapmaker she was being trained to become.

"I'd like to learn," she said. "All of it. Even the parts that don't make sense yet."

Ashe smiled, the first real smile she'd seen from him in weeks, and handed her a fresh quill. "Then let's start with tonight's corrections," he said. "The Ossuary Vein has drifted again, and somebody ought to tell the ferrymen before they find out the hard way."`
  },
  {
    id:"three-billy-goats", age:"4-5", category:"adventure", character:"animals", tag:"classic",
    title:"The Three Billy Goats Gruff", accent:"#6fa15c", minutes:6, rating:4.7,
    popular:true, isNew:false, difficulty:"Easy",
    blurb:"Three clever goats outwit a grumpy troll to reach the sweet green hillside.",
    text:`High on a hillside above a rushing river lived three goats, all with the same name — Gruff — and all with their eyes fixed on the sweet, tall grass growing on the far bank, more green and lush than anything on their own worn-down side.

Between the two hillsides ran a single wooden bridge. And under that bridge, as every goat in the valley knew, lived a troll with eyes like saucers and a nose like a poker, who had never once let a single creature cross without a fight.

The smallest Billy Goat Gruff went first, his little hooves going trip, trap, trip, trap across the wooden boards.

"WHO'S THAT trip-trapping over my bridge?" roared the troll, poking his enormous head up from underneath.

"It is only I, the smallest Billy Goat Gruff," said the little goat, trying to sound braver than he felt, "going up to the hillside to make myself fat."

"I'm coming to gobble you up!" bellowed the troll.

"Oh, please don't," said the smallest goat quickly. "I'm far too small — barely a mouthful. Wait for my brother. He's much bigger, and he'll be along any minute."

The troll considered this, licked his lips, and decided a bigger goat did sound more filling. "Very well. Be off with you, then."

So the smallest Billy Goat Gruff trip-trapped the rest of the way across, and began happily munching the sweet hillside grass.

Not long after, the middle Billy Goat Gruff started across the bridge, his hooves going TRIP, TRAP, TRIP, TRAP, a good deal louder than his brother's.

"WHO'S THAT trip-trapping over my bridge?" thundered the troll, popping up again with his saucer eyes flashing.

"It is only I, the middle Billy Goat Gruff," said the goat, "going up to the hillside to make myself fat."

"I'm coming to gobble you up!"

"You could," said the middle goat thoughtfully, "but my big brother is coming along right behind me, and he's ever so much bigger than I am. He'd make a proper feast."

Again the troll's belly rumbled at the thought of a bigger meal, and again he let the goat pass. "Be off, then — but I'll not wait much longer!"

The middle Billy Goat Gruff trotted across and joined his brother on the green hillside, and the two of them ate contentedly while they waited to see what would happen next.

Last of all came the biggest Billy Goat Gruff, and his hooves on the old wooden boards went TRIP, TRAP, TRIP, TRAP, TRIP, TRAP, so heavy and so loud that the whole bridge shook and rattled beneath him.

"WHO'S THAT TRIP-TRAPPING OVER MY BRIDGE?" roared the troll, so furiously that birds scattered from every tree on the hillside.

"IT IS I," boomed the big Billy Goat Gruff, in a voice every bit as large as the troll's own, "THE BIGGEST BILLY GOAT GRUFF!"

"I'M COMING TO GOBBLE YOU UP!" screamed the troll, scrambling up onto the bridge itself, certain that this, finally, was the fat and satisfying meal he'd been promised twice already.

"Come along, then," said the big Billy Goat Gruff calmly, lowering his enormous curved horns until they pointed straight ahead. "I have two horns to poke your eyeballs out with, and hard hooves to crush you to bits, besides."

And with that, he lowered his head and charged, and butted the troll so hard that the troll went flying clean off the bridge, tumbling head over heels down into the rushing water below, where the current swept him away and he was never seen under that bridge again.

The big Billy Goat Gruff trotted calmly across to join his brothers on the far hillside, and the three of them spent the whole golden afternoon eating the sweetest grass they had ever tasted, growing rounder and fatter with each happy mouthful — and the bridge, from that day on, belonged to anyone who cared to cross it, trip-trap or otherwise.`
  },
  {
    id:"elves-shoemaker", age:"6-7", category:"mystery", character:"witches", tag:"classic",
    title:"The Elves and the Shoemaker", accent:"#4fa39c", minutes:7, rating:4.6,
    popular:false, isNew:false, difficulty:"Easy",
    blurb:"A poor shoemaker wakes to find his shoes finished by unseen helpful hands.",
    text:`There once was a shoemaker who had grown so poor that all he had left in the world was one single piece of leather — just enough, he reckoned, to cut and stitch into one last pair of shoes.

That night, he cut the leather carefully by candlelight, laid the pieces out neatly on his workbench ready for morning, and went to bed with a heavy heart, wondering what on earth he'd do once even that last pair was sold.

When he came down the next morning, he stopped in the doorway, certain he must still be dreaming. There on the workbench sat a beautiful pair of shoes, entirely finished — every stitch small and even, every seam perfectly straight, the leather polished to a warm shine. He turned them over and over in his hands, utterly baffled, for he certainly hadn't made them himself.

That very day, a wealthy customer came in, admired the shoes extravagantly, and paid so much for them that the shoemaker had enough to buy leather for two new pairs. That night, just as before, he cut the leather and laid it out ready, and went to bed puzzling over the mystery.

In the morning, two pairs of shoes sat waiting, as finely made as the first. This went on night after night — the shoemaker cutting the leather, and by morning finding it transformed into shoes so beautifully made that word spread through the whole town, and customers began arriving from villages he'd never even visited. Before long, the shoemaker was no longer poor at all.

One night, close to Christmas, his curiosity finally got the better of him. "Wife," he whispered, "let's stay awake tonight and hide behind the curtain, and see who has been so kind to us all this time."

So they left the leather cut and ready as always, blew out the candle, and hid quietly behind the curtain in the corner of the room, watching.

At the stroke of midnight, the door creaked open, and in came two tiny elves, no bigger than a hand, wearing not a stitch of clothing on their small bodies. They hopped up onto the workbench and set to work at once — snip, stitch, tap, tap, tap — their little fingers moving so fast the shoemaker could barely follow them, until, just before dawn, the shoes stood finished on the bench, and the elves scampered off into the night without a single word.

"They've made us rich," the shoemaker's wife whispered the next morning, "and they haven't a stitch to wear themselves, out in this cold. I have an idea."

She spent the following days sewing two sets of tiny clothes — little shirts and coats and trousers — while the shoemaker crafted two pairs of the smallest boots he had ever made. On Christmas Eve, instead of leather, they laid the tiny outfits out on the workbench, and hid behind the curtain once more to watch.

At midnight, the elves hopped up onto the bench as usual, ready to work — and stopped short at the sight of the little clothes waiting for them instead of leather. Delighted, they dressed themselves at once, admiring their new coats and boots, and then, instead of working, they began to dance — leaping and spinning around the workshop with such joy that the shoemaker and his wife had to press their hands over their mouths to keep from laughing out loud.

Still dancing, the two little elves danced straight out the door and away down the street, and were never seen in that workshop again.

The shoemaker never did find another pair of mysterious shoes waiting for him in the morning. But he didn't need to any longer — his own two hands, and the skill he'd never lost, were more than enough now that his little shop was known throughout the whole town. And every Christmas after that, he and his wife thought fondly of the two small dancing figures who had helped them, quietly and kindly, exactly when they needed it most.`
  },
  {
    id:"puss-in-boots", age:"6-7", category:"magical", character:"animals", tag:"classic",
    title:"Puss in Boots", accent:"#b17bea", minutes:8, rating:4.7,
    popular:true, isNew:false, difficulty:"Easy",
    blurb:"A clever cat in fine boots tricks his way to a fortune for his poor master.",
    text:`When a poor miller died, he left his mill to his oldest son, his donkey to his second son, and, to his youngest son, nothing at all but the family cat.

"A cat," the young man sighed, sitting in the doorway with his chin in his hands. "What good is a cat to anyone? I suppose I shall starve, unless I eat him first."

To his great surprise, the cat looked up at him and spoke. "Don't eat me," said the cat. "Only get me a fine pair of boots and a stout sack, and I promise you'll find your fortune isn't as poor as you think."

Astonished, but with nothing left to lose, the young man handed over his last few coins for a handsome pair of boots. The cat pulled them on, slung the sack over one shoulder, and set off into the forest, where he filled the sack with fresh lettuce and a bundle of carrots, then lay down perfectly still and played dead.

Before long, a plump rabbit hopped into the open sack after the vegetables, and the cat snapped it shut in an instant. Delighted with his catch, he marched straight to the royal palace and demanded to see the king.

"A gift," the cat announced grandly, bowing low, "from my master, the Marquis of Carabas." He had invented the title on the spot, liking the grand sound of it.

The king, charmed by a talking cat in fine boots, accepted the rabbit warmly and sent his thanks to this mysterious Marquis. Pleased with how easily that had gone, the cat kept up the trick for weeks — catching partridges and rabbits in the forest and presenting them to the king in his master's invented name — until the king had grown thoroughly curious about this generous nobleman he'd never actually met.

One morning, the cat learned that the king and his beautiful daughter would be riding along the river that very afternoon. He hurried to his master. "Go and bathe in the river, exactly where I tell you, and leave the rest to me," said the cat, and though the young man had no idea what his clever cat was planning, he'd learned by now to trust him completely.

As the royal carriage approached, the cat began shouting at the top of his lungs: "Help! Help! My master, the Marquis of Carabas, is drowning!"

The king, recognizing the name of his generous mystery benefactor at once, ordered his guards to rescue the young man immediately. While they did, the cat quietly explained to the king that robbers had stolen his master's clothes while he bathed — a complete invention, since the young man had arrived with nothing grander than the clothes on his back to begin with. Taken in, the king ordered one of his own finest suits brought for the young man, who, dressed now like true nobility, made a rather convincing marquis indeed. The princess, watching from the carriage, found herself quite taken with him.

While the king invited the newly dressed "Marquis" to ride along in the royal carriage, the cat ran on ahead down the road, until he reached a field of farmers cutting hay.

"When the king asks whose field this is," the cat told them breathlessly, "say it belongs to the Marquis of Carabas — or you'll all be chopped to pieces!" The frightened farmers agreed at once, and sure enough, when the royal carriage passed and the king asked whose splendid fields these were, they answered exactly as instructed. The king was mightily impressed.

The cat ran on ahead in just this way, again and again, until at last he reached a magnificent castle belonging to a powerful ogre — the true owner, as it happened, of every field the carriage had passed.

The cat marched boldly inside and bowed to the ogre. "I have heard," he said, "that you can transform yourself into any creature you wish — even something as enormous as a lion or an elephant."

The ogre, flattered, transformed himself instantly into a roaring lion, and the cat, though genuinely startled, clapped politely and pretended to be even more impressed than he was.

"Remarkable," said the cat, once the ogre had changed back. "But surely that's easy for a creature of your size. I imagine it would be far harder to transform into something small — a mouse, say."

The ogre, eager to prove himself equal to any challenge, shrank himself at once into a small grey mouse, scurrying across the floor — and the cat, quick as a flash, pounced and gobbled him up before the ogre had the chance to change back.

Moments later, the king's carriage arrived at the castle gates, and the cat bowed low. "Welcome," he said, "to the castle of my master, the Marquis of Carabas."

The young man, playing his part with growing confidence, led the astonished king and princess through halls filled with treasure that, as far as anyone but the cat and his master knew, had always belonged to him. The king, thoroughly won over by the marquis's fortune, fields, and castle — to say nothing of his daughter's evident affection — offered his blessing for the two to marry that very week.

The miller's youngest son, who had once owned nothing in the world but a hungry cat, became a prince by nightfall, and lived the rest of his days in comfort and splendor. And the cat, who never again had to catch his own dinner unless he felt like it, spent his time exactly as a clever cat in fine boots deserved to — lounging in the sun, thoroughly and rightfully pleased with himself.`
  },
  {
    id:"nightingale", age:"8-9", category:"bedtime", character:"animals", tag:"classic",
    title:"The Nightingale", accent:"#8393cf", minutes:10, rating:4.6,
    popular:false, isNew:false, difficulty:"Growing",
    blurb:"An emperor learns that a plain, real song can matter more than a jeweled one.",
    text:`In a great palace with walls of fine porcelain, there lived an emperor who owned more beautiful things than he could ever count — except, as it happened, the most beautiful thing in his entire empire lived just outside the palace walls, in the branches of a tree by the sea, and he had never once heard of it.

It was a small, plain, brown bird — a nightingale — whose evening song was so sweet that fishermen paused their nets to listen, and travelers wrote home about it before they wrote about anything else they'd seen. Word of the remarkable bird eventually reached the emperor himself, who was astonished and more than a little embarrassed that something so wonderful existed in his own kingdom without his knowledge.

"Bring this nightingale to my palace at once," he commanded, "so that I may hear it for myself."

It took his courtiers some searching to find a kitchen maid who actually knew where the bird lived, since none of the grand nobles had ever bothered to venture into the woods themselves. The little nightingale agreed politely to come and sing before the emperor, and that evening, in the great hall glittering with gold and crystal, its plain brown feathers looked almost out of place among so much splendor — until it began to sing.

The song was so pure and so full of feeling that tears rolled down the emperor's cheeks before he even realized he was crying. He declared the nightingale must stay at the palace forever, given a golden cage and a silk leash for its daily walks, allowed to fly only under careful watch — a prisoner, in effect, though a deeply honored one.

Sometime later, a gift arrived from a neighboring emperor: a mechanical nightingale, covered in diamonds and sapphires, that sang one single song perfectly every time its key was wound. The court found it marvelous — it never grew tired, never sang a note out of place, and looked magnificent glittering in the candlelight. Soon, everyone at court preferred the jeweled bird to the real one, which they said sang too unpredictably, sometimes joyfully, sometimes sadly, never quite the same way twice.

The real nightingale, sensing it was no longer wanted, quietly slipped out through an open window one evening and flew back to its tree by the sea, and no one at court even noticed it was gone until they went looking for something to admire.

The mechanical bird was placed on a silk cushion beside the emperor's bed and wound up every night, its single perfect song playing over and over, until — as happens to anything mechanical, eventually — one of its tiny gears wore down and broke. A clockmaker managed to repair it, but warned that it must be wound sparingly from then on, or it would wear out again for good.

Years passed this way, the mechanical bird singing its one song less and less often, and the real nightingale all but forgotten, until the emperor fell gravely ill. He lay in his great bed, pale and weak, with Death itself said to be sitting heavily upon his chest, pressing down as emperors and beggars alike are pressed down when their time finally comes.

"Sing," the emperor whispered to the mechanical bird on its silk cushion. "Sing for me."

But there was no one left to wind its key, and the little machine sat silent and glittering and entirely useless, exactly when it was needed most.

Then, through the open window, came another sound — real, warm, achingly alive. The true nightingale had heard of the emperor's illness and flown all the way back from its tree by the sea to sing outside his window, its song so full of comfort and quiet courage that Death itself, listening, felt a strange longing for its own long-lost garden, and loosened its grip, drifting away out the same window through which the song had come.

"You came back," the emperor whispered, color slowly returning to his face.

"I heard you were unwell," said the nightingale simply. "A song is a poor sort of medicine, but it was all I had to bring."

"Stay with me always, then," the emperor said. "I'll smash that jeweled bird to pieces, if you'll only stay."

"Don't smash it," said the nightingale gently. "It did its best, in its own way, for as long as it could. But I cannot live in a golden cage, however kindly meant. Let me come and go as I please, and I'll visit every evening and tell you how your people truly fare — the ones the palace walls keep you from seeing — and that, I think, will do you far more good than any cage ever could."

The emperor agreed, and from then on kept his recovery a quiet secret from the court, who assumed he'd simply grown reclusive in his old age. Each evening, the real nightingale perched on his windowsill and sang, sometimes joyful, sometimes sad, never quite the same way twice — and the emperor, listening, decided that a song freely given, even an imperfect and unrepeatable one, was worth immeasurably more than a perfect one wound up and commanded to play.`
  },
  {
    id:"jack-beanstalk", age:"8-9", category:"adventure", character:"heroes", tag:"classic",
    title:"Jack and the Beanstalk", accent:"#6fa15c", minutes:11, rating:4.8,
    popular:true, isNew:false, difficulty:"Growing",
    blurb:"A handful of magic beans grows into a beanstalk leading to a giant's castle in the clouds.",
    text:`Jack and his mother were so poor that when their old cow finally stopped giving milk, there was nothing left to do but sell her at market, since she was the only thing of value they owned in the world.

On the road to town, Jack met an old man who offered to trade him five strange, colorful beans for the cow, claiming they were magic beans that would grow overnight, straight up to the sky. Jack, more curious than sensible, made the trade on the spot and hurried proudly home to tell his mother.

She was, understandably, furious. "Beans!" she cried, flinging them out the window in disgust. "We had a whole cow, and you've traded her for a handful of beans!" Supperless and thoroughly scolded, Jack went to bed feeling rather foolish.

When he woke the next morning, his room was strangely dim, as though a great shadow had fallen across the window. He rushed outside and found an enormous beanstalk, thick as a tree trunk, twisting up out of the ground exactly where the beans had landed — climbing so high that its top disappeared entirely into the clouds.

Before his mother could stop him, Jack began to climb, hand over hand, higher and higher, until the cottage below shrank to the size of a toy and the clouds themselves opened up around him like mist. At the very top, he stepped off onto solid ground and found himself on a wide, strange road leading toward an enormous castle in the distance.

He walked until he reached the castle door, where an enormous woman answered his knock — the giant's wife, though she looked kindly enough despite her size. When Jack explained he was hungry and tired, she took pity on him and brought him inside for breakfast, warning him urgently that her husband, the giant, would be home soon and had a well-known taste for eating boys exactly Jack's size.

Sure enough, the whole castle began to shake with enormous footsteps, and the giant's wife hid Jack quickly inside the empty oven just as the giant thundered in, sniffing the air.

"FEE-FI-FO-FUM, I smell the blood of an Englishman!" the giant roared, prowling the kitchen suspiciously.

"Nonsense," said his wife smoothly. "You smell the breakfast I've cooked you. Sit down and eat." The giant grumbled but obeyed, devouring an enormous breakfast before settling into his chair with a small hen sitting beside him. "Lay!" he commanded, and to Jack's amazement, peeking through a crack in the oven door, the hen laid a solid golden egg.

Once the giant had fallen into a heavy, snoring sleep, Jack crept from his hiding place, snatched up the hen that laid golden eggs, and ran as fast as his legs would carry him back to the beanstalk, climbing down as quickly as he dared with the hen tucked safely under one arm. He and his mother sold golden egg after golden egg and lived comfortably for a good while after that — though Jack, restless and curious, eventually found himself climbing the beanstalk once more.

This time, the giant's wife didn't recognize him and again hid him from her husband, this time in a cupboard, when the thunderous footsteps returned. "FEE-FI-FO-FUM," the giant bellowed again, sniffing about more suspiciously than ever, but his wife again talked him into his breakfast instead. Afterward, the giant called for bags of gold coins to count, and Jack watched through the cupboard slats as coin after coin clinked into piles, until the giant, worn out from counting, fell asleep once more.

Jack crept out, grabbed the nearest bag of gold, and made his escape back down the beanstalk exactly as before.

On his third and final climb, the giant's wife nearly turned him away outright, suspicious now of visiting boys, but Jack begged so earnestly that she relented once more, hiding him this time inside a large copper pot. When the giant returned, sniffing harder and angrier than ever before, he seemed almost certain something was wrong — but his wife, growing impatient herself, insisted it was nothing, and he settled reluctantly into breakfast. Afterward, he called for his golden harp, which, when commanded, played the most beautiful music Jack had ever heard, sweet enough to lull even the giant to sleep in his chair.

Jack crept out and lifted the harp carefully — but the harp, unlike the hen and the gold, called out in a clear voice, "Master! Master!" the moment Jack touched it, waking the giant with a furious roar.

Jack ran for his life, the giant thundering after him across the strange cloud-road, and reached the top of the beanstalk with the giant only steps behind. He half-climbed, half-slid down as fast as any boy has ever moved, shouting for his mother the whole way down, the beanstalk shaking violently as the enormous giant began climbing down after him.

"Mother! The axe, quickly!" Jack cried, leaping the last few feet to the ground. He seized the axe from her hands and swung with all his strength, chopping again and again at the thick stalk until, with a great splintering crack, the whole beanstalk toppled — giant and all — crashing to the earth far below, and that was the end of the giant for good.

Jack and his mother never wanted for anything again. The hen kept laying golden eggs, the gold from the giant's bags kept them comfortable for years, and the harp, once it had settled into its new home, played beautifully for anyone who asked — never once calling out for its old master again.`
  },
  {
    id:"sleeping-beauty", age:"8-9", category:"fairytale", character:"royalty", tag:"classic",
    title:"Sleeping Beauty", accent:"#e0479a", minutes:12, rating:4.6,
    popular:false, isNew:true, difficulty:"Growing",
    blurb:"A princess's hundred-year sleep is finally broken by a hedge of thorns and true courage.",
    text:`When a king and queen finally welcomed a daughter after years of hoping, they threw a christening feast so grand that fairies from every corner of the kingdom were invited to bless the new princess with gifts — beauty, kindness, grace, a lovely singing voice, and more, one fairy after another stepping forward with a wave of her wand.

But one old fairy, overlooked in the invitations because she had been thought long retired, arrived uninvited and furious at the slight. "The princess," she announced coldly, "shall prick her finger on a spinning wheel's spindle before her sixteenth birthday, and fall down dead."

Horror swept the hall — until the youngest fairy, who had not yet given her own gift, stepped forward. She could not undo the curse entirely, but she could soften it. "The princess shall not die," she said, "but fall into a deep sleep for one hundred years, until a prince's kiss awakens her."

Determined to prevent even that, the king ordered every spinning wheel in the kingdom destroyed and burned, and the princess grew up never once having seen one, surrounded by every comfort and warned constantly, though never quite told why, to stay well away from anything sharp or old and forgotten.

On the very day of her sixteenth birthday, exploring the castle's upper floors out of simple curiosity, the princess climbed a narrow staircase she'd never noticed before, and found, at the top, a small dusty room where an old woman — who had never heard the king's decree, tucked away as she was in the farthest corner of the castle — sat quietly spinning wool.

"What is that?" the princess asked, delighted by the strange, spinning contraption she'd never seen before.

"Come and try it, my dear," said the old woman kindly, having no idea what she was inviting.

The princess reached out, touched the spindle — and immediately pricked her finger. She fell instantly into a deep sleep, right there on the dusty floor. Within moments, the sleep spread through the entire castle exactly as the old fairy had intended, all those years ago, when she'd made certain the whole household would share the princess's fate rather than wake to grief around her. The king and queen fell asleep on their thrones. The cooks fell asleep mid-stir. The horses fell asleep in their stalls, and the very flies fell asleep on the windowpanes, until the whole castle stood silent and still.

Outside, a hedge of thorns grew up around the castle walls, thick and impossibly tall, hiding the sleeping kingdom from view so completely that within a few years, most people had forgotten the castle was even there at all — just an old story parents told, about a princess sleeping somewhere behind an impassable wall of briars.

Many princes attempted the thorns over the following decades, drawn by rumors of the sleeping beauty within, and every one of them became hopelessly tangled and had to turn back, or worse. But nearly a hundred years to the day after the princess had pricked her finger, a prince from a neighboring kingdom heard the old story anew from a very old man in a village nearby, who explained that the hundred years were very nearly up, and that the thorns, he'd heard, no longer held quite the grip they once had.

Curious and unafraid, the prince rode toward the old castle and found, to his surprise, that the hedge of thorns parted easily before him, almost as though it recognized that its long watch was finally ending, closing again neatly behind him as he passed through.

Inside, he found the whole castle exactly as it had fallen asleep — cooks frozen mid-stir, dogs curled motionless by the fire, dust thick on every surface but disturbing nothing. He climbed the narrow staircase at the top of the castle and found the princess asleep on the floor of the small dusty room, looking, he thought, as though she might simply be resting rather than under any kind of spell at all.

He knelt beside her, and — moved simply by the strange, quiet beauty of the scene rather than any particular plan — gently kissed her forehead. Her eyes opened at once.

The hundred years lifted from the whole castle in an instant. The cooks finished their stirring. The dogs stretched and barked. The king and queen woke on their thrones, blinking as though no time at all had passed. The princess sat up, looked at the stranger kneeling beside her, and — rather than being frightened by a hundred years suddenly evaporating — found herself simply glad that someone kind had finally come to find her.

The king, overjoyed and only mildly confused by how much time had apparently passed, welcomed the prince warmly once the whole strange story had been explained to him. The princess and the prince were married within the month, in a hall filled with flowers that had, remarkably, bloomed exactly on schedule despite the castle's long, sleeping century — and the old spinning wheel, this time, was quietly and permanently retired to a locked room that nobody, by unanimous agreement, ever felt the slightest curiosity to visit again.`
  },
  {
    id:"attic-remembered", age:"10-11", category:"scary", character:"heroes", tag:"original",
    title:"The Attic That Remembered", accent:"#e08a3f", minutes:12, rating:4.7,
    popular:false, isNew:true, difficulty:"Confident",
    blurb:"A boy moving into his grandmother's old house finds the attic keeps replaying the past.",
    text:`When Theo's family moved into his late grandmother's house on Larkspur Lane, his parents kept saying the same thing, in the same falsely cheerful voice, about how much "character" the old place had. Theo mostly thought it meant the stairs creaked in specific, memorable ways, and that the attic door, at the end of the upstairs hall, refused to stay latched no matter how many times his father fixed it.

He first heard the humming on his second night, drifting faintly down through the ceiling of his new bedroom — an old tune, wordless, familiar in the vague way a song sounds when you've heard it exactly once, a long time ago. He told himself it was pipes. Old houses had pipes that did strange things. He was eleven, not five, and he knew better than to go investigating strange sounds at eleven at night.

By the fourth night, curiosity had worn down caution the way it generally does, and Theo climbed the narrow attic stairs with his phone's flashlight held out in front of him like a small, useless shield.

The attic was exactly what he expected — dust, boxes, a single round window clouded with grime, moonlight falling through it in a pale, uneven circle onto the floorboards. He nearly turned back immediately. But in the circle of moonlight, faint as a photograph left too long in the sun, he saw the shape of a woman sitting at a spinning wheel that was not actually there, humming a tune that was not actually being sung by anyone he could see, her hands moving in the specific motion of someone winding thread that did not exist.

Theo did not scream, mostly because his throat seemed to have forgotten how. He backed down the stairs instead, careful and silent, and did not sleep much that night.

He told his mother the next morning, expecting to be laughed at or hushed. Instead, she went very quiet, and after a long moment said that his grandmother — Theo's namesake's great-grandmother, three generations back, whom nobody living had actually met — used to sit up in that attic every night for years, spinning wool long after everyone said she should have stopped, because it was the last thing her late husband had taught her to do before he passed, and she wasn't ready to let the habit go.

"The house remembers her," his mother said, not entirely as a joke. "Old houses do that, sometimes. It's not dangerous. It's just — leftover."

Theo was not fully reassured by "leftover," but he went back up the next night anyway, flashlight in hand, more curious now than frightened. The humming woman was there again, exactly as before, hands moving through their invisible thread, and this time Theo noticed something he'd missed the first time: she was humming toward the round window, as though watching for someone on the road below, someone who — as far as Theo's mother's stories went — had never come home from a fishing trip gone wrong, decades before Theo was even a thought in anyone's mind.

He started visiting the attic most nights after that, sitting quietly in the doorway, not speaking, mostly just present. The humming woman never turned to look at him, never seemed to know he was there at all — she simply replayed her small, patient waiting, night after night, the way a scratched record replays its skip forever unless someone finally lifts the needle.

It was Theo's little sister, Nell, only six and considerably braver than Theo about most things, who finally suggested the obvious fix, in the maddeningly simple way six-year-olds sometimes cut straight to the center of a problem grown-ups have overcomplicated. "Maybe," she said, "she's just waiting for someone to tell her it's okay to stop."

Theo thought this was either brilliant or a terrible idea, and decided there was only one way to find out. The next night, he climbed the attic stairs, sat down in his usual spot in the doorway, and, feeling considerably more foolish than brave, spoke into the moonlit circle where the humming woman sat winding her invisible thread.

"He's not coming back," Theo said quietly. "I'm sorry. But it's okay. You can stop waiting now."

The humming did not stop immediately. It continued for a moment longer, the same patient, wordless tune, before it slowly, gradually softened — not vanishing all at once, but fading the way a sound fades when someone walking away gets farther and farther down a long hallway, until at last the attic held only moonlight, dust, and ordinary, empty quiet.

Theo never saw the humming woman again after that night. The attic door, oddly, has latched properly ever since, no matter how many times it gets opened. His mother says it's simply because his father finally fixed it. Theo isn't entirely sure that's the whole explanation, but he's decided it's the kind of thing that doesn't need explaining twice — just remembered, the way the house apparently remembers everything, until, every so often, gently, it doesn't have to anymore.`
  },
  {
    id:"snow-queen", age:"12-13", category:"magical", character:"royalty", tag:"classic",
    title:"The Snow Queen", accent:"#b17bea", minutes:16, rating:4.8,
    popular:false, isNew:false, difficulty:"Confident",
    blurb:"A girl crosses a frozen world to save her friend from a splinter of enchanted glass — and a heart of ice.",
    text:`Long ago, a wicked goblin crafted a mirror that twisted every reflection it showed — beauty turned ugly, kindness turned cruel, and anything good in a person shrank to nearly nothing while anything unkind grew monstrous and large. The goblin was so pleased with his cursed mirror that he tried carrying it up to heaven itself to mock the angels, but it slipped from his grasp partway there and shattered into a billion tiny pieces, scattering across the entire world on the wind.

Most of the shards were smaller than grains of sand, and when one blew into a person's eye, that person would begin seeing only flaws in everything around them. Far worse, when a shard lodged in someone's heart, it would freeze there, turning that heart slowly, steadily, to ice.

In a quiet town, two children named Kai and Gerda had grown up together in neighboring attic rooms, connected by a shared window box of roses they tended together every summer, closer than most brothers and sisters. One winter evening, while playing near his window, a splinter of the cursed mirror blew directly into Kai's eye, and — though he didn't understand what had happened, only that something small and sharp had stung him — a second splinter drove itself straight into his heart.

Kai changed almost immediately. He mocked the roses he'd once loved for being crooked. He mimicked people cruelly behind their backs. He stopped wanting to play with Gerda at all, preferring instead the cold, glittering geometry of frost patterns on the windowpane, which he now found far more beautiful than anything warm or living.

That winter, while sledding with older boys in the town square, Kai tied his small sled to a large, elegant white sleigh passing by, hoping for a fast ride. The sleigh belonged to the Snow Queen herself, tall and beautiful and cold as the winter itself, and when she noticed the boy trailing behind her, she wrapped him in her fur cloak, kissed his forehead once to numb him fully against the cold, and carried him away to her palace far in the frozen north. Kai never came home. By spring, the whole town assumed he had died in the snow, and mourned him — all except Gerda, who refused to believe it, and set out that same spring to find him herself.

Gerda's journey took her the length of a story all its own. She was nearly kept forever by a lonely old woman skilled in small enchantments, who wanted a child to keep and made Gerda's memory of Kai fade for a time inside a garden that never let winter arrive — until Gerda noticed a single rose the old woman had forgotten to enchant away, and remembering Kai all at once, fled that garden before it could close around her for good.

She was nearly frightened off by a crow who nonetheless helped guide her to a nearby palace, where she'd hoped, mistakenly, to find Kai grown into a prince. She was captured briefly by robbers, and would have fared far worse if not for a fierce robber girl who took a liking to her and lent her a reindeer, Bae, to carry her the rest of the way north, saying simply that Gerda's determination was the most interesting thing she'd seen all winter.

She was blessed by a wise Finnish woman who told her plainly that Gerda's real power needed no spell at all: "She is strong already," the woman said, "in that good, warm heart of hers, strong enough to walk into the Snow Queen's palace on her own two feet, if she only keeps believing it."

At last, half-frozen and utterly exhausted, Gerda reached the Snow Queen's palace — a vast hall built entirely of wind-carved ice, glittering coldly under a sky of shifting northern lights. In the very center of it, on a frozen lake cracked into a thousand identical pieces, sat Kai, blue-lipped and silent, arranging shards of ice into shapes and patterns for a puzzle the Snow Queen had set him, one he could never quite solve because the final piece required spelling out a single word — "Eternity" — with a heart too frozen to manage it.

"Kai," Gerda called, running to him across the ice, "it's me. It's Gerda."

He looked up at her with flat, uninterested eyes, entirely unmoved, and went back to arranging his ice shards without a word.

Undeterred, Gerda knelt beside him and simply began to cry — hot, real tears, the kind a heart entirely made of ice could never produce — and her tears fell directly onto his chest, over the place where the splinter of cursed mirror had lodged. Warmed at last by something real, the shard in his heart melted and washed away in her tears, and in the same instant the fragment in his eye loosened too, and fell.

Kai burst into tears himself, deep, shuddering sobs that seemed to loosen something frozen far deeper than his eye or his heart, and when he looked at Gerda again, he finally, truly saw her — his oldest friend, who had walked the length of a frozen world alone to find him.

"Gerda," he said, her name sounding entirely different now, warm instead of merely familiar. "How did you get all the way here?"

"I walked," she said simply, "and I didn't stop."

Around them, the shards of ice on the frozen lake began, on their own, to arrange themselves into the very word the Snow Queen had demanded — Eternity — though neither child much cared about the puzzle any longer. Hand in hand, they walked out of the palace together, and found, waiting outside, that spring had somehow reached even this frozen northern country, the ice softening to slush beneath their feet as they made their long way home.

They arrived back in their own town to find their attic rooms exactly as they'd left them, the rose bush between their windows blooming as though no time at all had passed, and though both of them had grown up a great deal on their long journey there and back, they sat together by the roses that first evening home exactly the way they always had — proof, if either of them needed it, that some things, warmed enough and held onto tightly enough, simply do not stay frozen forever.`
  },
  {
    id:"beauty-beast", age:"12-13", category:"fairytale", character:"royalty", tag:"classic",
    title:"Beauty and the Beast", accent:"#e0479a", minutes:15, rating:4.9,
    popular:true, isNew:false, difficulty:"Confident",
    blurb:"A merchant's daughter trades her freedom for her father's life — and finds more than a curse in the Beast's castle.",
    text:`A merchant who had once been wealthy lost nearly everything in a string of misfortunes, and moved with his three daughters to a small cottage in the countryside, where they learned, for the first time, what real work and real hardship meant. Two of the daughters complained bitterly about their reduced circumstances. The youngest, known simply as Beauty for her gentle nature as much as her looks, adjusted without complaint and did her share of the work cheerfully, which her sisters resented rather than admired.

When word arrived that one of the merchant's lost ships had safely returned to port, he set off to reclaim what fortune he could, promising to bring back gifts. His two eldest daughters demanded jewels and fine gowns. Beauty, asked what she wanted, thought for a moment and asked only for a single rose, since none grew near their new cottage.

The voyage proved a disappointment — the ship's cargo had already been claimed by creditors, and the merchant started home with nothing, poorer even than before. Caught in a sudden snowstorm on the return journey, he lost his way in a dark forest and, half-frozen, stumbled upon a magnificent castle, its gates standing open as though expecting him. Inside, he found warm fires lit, a table set with food, and not a single living soul in sight to thank. Assuming the castle's absent owner would not begrudge a freezing traveler shelter, he ate, slept, and in the morning prepared to leave — pausing only to pluck a single rose from a garden bush on his way out, remembering Beauty's request.

The moment he broke the stem, a monstrous roar shook the garden, and a creature emerged from the shadows — the Beast, master of the castle, part man and part something far wilder, his voice thunderous with fury. "I sheltered you, fed you, warmed you by my own fire," the Beast roared, "and you repay me by stealing the one thing I treasure in this whole garden!"

Terrified, the merchant begged forgiveness, explaining the rose was meant only as a gift for his youngest daughter. The Beast's anger cooled, slightly, into something colder and more calculating. "Then you may go," he said, "on one condition — that one of your daughters comes willingly to take your place here, forever. Return in three days with her answer, or return yourself to die in her stead."

The merchant rode home in despair and told his daughters everything. His two eldest immediately blamed Beauty for her greedy request for a rose, though it had cost nothing compared to their own demands for jewels. Beauty, horrified at the thought of her father returning to face death, quietly resolved to go in his place, and no amount of argument from her father could talk her out of it once her mind was made up.

She arrived at the castle expecting horror and found instead comfort beyond anything she'd known even in her family's wealthiest days — beautiful rooms, a library stocked with every book she could wish for, and a Beast who, despite his fearsome appearance, spoke to her every evening at dinner with surprising gentleness, asking only, each night before he left her, "Beauty, will you marry me?"

Each night, she refused, gently but firmly, and each night he accepted her answer without anger, wishing her only a good night's sleep before withdrawing. Over months, Beauty found herself growing genuinely fond of these evening conversations, looking forward to them, even as she remained certain she couldn't love someone whose appearance still occasionally startled her.

One evening, looking into a magic mirror the castle had given her to see her family from afar, she saw her father lying gravely ill, pining for the daughter he feared he'd lost forever. Distraught, she begged the Beast to let her visit home, just briefly, to nurse her father back to health.

"Go," the Beast said, though something in his voice suggested the request cost him greatly. "But promise to return within a week. I do not believe I could survive losing you entirely."

Beauty promised, and returned home to find her father genuinely revived simply by the sight of her. Her sisters, meanwhile, jealous of the comfort and fine clothes Beauty had clearly enjoyed at the castle despite her sad situation, conspired to delay her return past the promised week, hoping the Beast's fury might finally destroy her for breaking her word.

On the tenth night away, Beauty had a dream so vivid and so troubling — the Beast lying motionless in his garden, among his roses, dying of a broken heart from her absence — that she woke in a panic and rushed back to the castle at once, arriving desperate and out of breath.

She found the garden exactly as her dream had shown it: the Beast collapsed among the rose bushes, barely breathing, having given up on her return entirely. Beauty threw herself down beside him, weeping, and realized in that moment, with a clarity that startled her, that she loved him — not despite his strange and frightening appearance, but entirely apart from it, for the patient, gentle creature she had come to know over their many quiet evenings together.

"Please don't die," she said. "I came back. I should have realized so much sooner — I love you. Please, don't leave me now."

The moment the words left her, the castle grounds filled with light. The Beast's form began to shift and change beneath her hands, and where the monstrous creature had lain, there now knelt a young man, handsome and very much alive, blinking up at her in evident astonishment of his own.

"An enchantress cursed me years ago," he explained, once he'd recovered enough to speak, "for turning away an old woman who came to my door in need, not knowing she was truly a powerful fairy testing my character. She transformed me into a beast until someone could see past my appearance and love me regardless — and warned that if no one ever did, I would remain this way forever."

Beauty, still faintly stunned by the sudden transformation, found she recognized something familiar and steady in his eyes regardless of the face around them — the same patient, gentle creature she'd grown to love over their long, quiet evenings, changed now only on the outside. They were married soon after, with Beauty's father and even, eventually, her sisters in attendance, and the castle that had once felt like a prison became, from that day forward, simply and happily, home.`
  },
  {
    id:"lighthouse-lullaby", age:"6-7", category:"bedtime", character:"sea", tag:"original",
    title:"The Lighthouse Keeper's Lullaby", accent:"#8393cf", minutes:5, rating:4.8,
    popular:false, isNew:true, difficulty:"Easy",
    blurb:"An old lighthouse keeper hums the tide to sleep every night, and one small fishing boat learns to listen for it.",
    text:`Old Tomas kept the lighthouse at the end of Gull Point, and every single evening, just as the sun dipped below the water, he lit the great lamp and began to hum.

It was not a loud hum. It was a low, rolling sort of tune, the kind that sounded like waves folding gently onto sand, and it drifted out over the harbor along with the beam of light.

Nobody had ever taught Tomas the tune. He said the sea had taught it to him, a little more each year, until one day he simply knew the whole thing by heart.

Down in the harbor, a small fishing boat named the Marigold was often the last one home. Her captain was a young woman named Nell, who fished the farthest waters and always seemed to lose track of time.

On foggy nights, when Nell couldn't see the light through the mist, she would cut her engine and listen instead. And there it was — Tomas's low, rolling hum, floating out across the water, showing her the way home as surely as any beam of light could.

"How do you always find your way back?" her little brother asked her once, tucked into the bow with a blanket around his shoulders.

"I follow the lighthouse's lullaby," Nell said, steering gently toward the sound. "The sea gets sleepy at night, and so does everything on it. You just have to hum along, and it hums you home."

Her brother thought that sounded like magic, but Nell just smiled, because to her it felt like something even better than magic — it felt like being expected, like somebody was always waiting up for her with a warm light and a familiar tune.

That night, as the Marigold slid safely into harbor, Nell hummed the last few notes back toward the lighthouse, soft and sure. Up in his tower, Tomas heard it, smiled to himself, and turned the lamp down low, because the last boat was finally home, and the whole harbor could go to sleep.`
  },
  {
    id:"witch-wool-blanket", age:"10-11", category:"bedtime", character:"witches", tag:"original",
    title:"The Witch Who Knitted Dreams", accent:"#8393cf", minutes:8, rating:4.7,
    popular:false, isNew:true, difficulty:"Growing",
    blurb:"A retired witch knits blankets that give the sleeper one perfect dream — until one night she finally knits one for herself.",
    text:`Old Hessa had given up spellcasting decades ago, back when her joints grew too stiff for wand-waving and her eyesight too soft for reading tiny curse-labels. But she had not given up magic entirely. She had simply moved it into her knitting needles.

Every blanket Hessa made carried exactly one dream inside it, woven so carefully into the yarn that only the sleeper beneath it would ever notice. She sold them from a small cart at the edge of the village market — deep blue ones for dreams of flying, moss green for dreams of talking to animals, gold-flecked grey for dreams of finding something long lost.

Children saved their coins for months to buy one. Parents whispered that Hessa's blankets were the only reason half the village slept soundly at all, in a world that could otherwise feel a little too loud, a little too uncertain, right before the lights went out.

What almost nobody knew was that Hessa herself hadn't slept properly in nearly thirty years. She had knitted thousands of dreams into thousands of blankets, and never once, not a single time, had she thought to knit one for herself.

"Why not?" asked Pip, a small girl who visited the cart every market day just to watch Hessa's needles click and dance, even though her family could rarely spare the coins to buy one.

Hessa considered this for a long moment, her needles pausing mid-stitch for the first time that anyone could remember. "I suppose," she said slowly, "I never let myself believe I deserved a dream of my own. There's always been another blanket to finish, another child waiting."

Pip thought this was possibly the saddest thing she had ever heard, and she said so, quite plainly, the way only children manage to say the truest things.

That night, after the market closed and the cart was wheeled home, Hessa sat by her fire with a ball of the softest silver-blue wool she owned — wool she'd been saving, she realized now, for exactly this reason, without ever quite admitting it to herself. She knitted slowly, humming as she went, weaving in not someone else's dream, but a small piece of her own oldest wish: to fly, just once, over the village she'd spent her whole long life quietly looking after.

When she finally wrapped the blanket around her own shoulders and closed her eyes, the dream came exactly as she'd stitched it — soaring low over rooftops she knew by heart, past the market cart and the children asleep beneath her handiwork, out over moonlit fields she hadn't properly seen in years.

She woke the next morning feeling lighter than she had in decades, and when Pip came skipping up to the cart that afternoon, Hessa was already halfway through knitting a second blanket for herself — because it turned out, once you started believing you deserved a good dream, it was rather hard to stop.`
  },
  {
    id:"ghost-of-maple-house", age:"8-9", category:"scary", character:"heroes", tag:"original",
    title:"The Friendly Ghost of Maple House", accent:"#e08a3f", minutes:7, rating:4.6,
    popular:false, isNew:true, difficulty:"Growing",
    blurb:"Every new family that moves into Maple House hears footsteps at midnight — until one girl decides to say hello instead of scream.",
    text:`Every family that had ever lived at Maple House left within a year, and every single one of them gave the same reason: footsteps. Slow, careful footsteps that crossed the upstairs hallway at exactly midnight, every single night, without fail.

When the Okafor family moved in, their daughter Zuri heard about the footsteps from a neighbor before she'd even finished unpacking her books. "Everyone leaves," the neighbor warned, shaking her head. "Nobody's ever stayed past a year."

Zuri, who was not easily frightened and was, if anything, extremely curious, decided this was less a warning and more an invitation.

The first night, she lay awake until midnight arrived exactly on schedule, and sure enough — footsteps, slow and even, crossing the hallway just outside her door. Her heart pounded, but instead of pulling the blanket over her head like the families before her, she sat up, took a breath, and called out, "Hello? I can hear you."

The footsteps stopped completely.

"I'm not scared," Zuri added, which was only slightly true. "Well — not very scared. You can come say hello if you want. I don't mind."

There was a long pause. Then, slowly, a boy appeared at the edge of her doorway — translucent, a little blurry around the edges like an old photograph left in the rain, wearing clothes that looked at least a hundred years out of fashion.

"Nobody's ever asked me to say hello before," he said, sounding surprised. "They usually scream. Or move out. Sometimes both, quite quickly, in that order."

"I'm Zuri," she said. "Who are you?"

"Samuel," he said. "I used to live here. I still do, I suppose, though it's rather lonely, being the only one who stays."

It turned out Samuel wasn't haunting anyone on purpose at all — he simply walked the hallway each midnight out of habit, the way he'd done every night as a boy checking that his little sister's door was shut tight against drafts, back when the house was warm and full and his.

Once Zuri knew that, the footsteps stopped seeming frightening at all. She started leaving her door open a crack each night, and Samuel started pausing to chat before continuing his rounds — about the house's history, about how gardens used to look, about a hundred small things nobody living had thought to ask him in a very long time.

The Okafor family stayed at Maple House for many years after that, far longer than anyone before them. And on quiet midnights, if you listened carefully from the hallway, you might still hear two sets of footsteps instead of one — one very much alive, and one simply glad, after all this time, of the company.`
  },
  {
    id:"attic-that-hummed", age:"12-13", category:"scary", character:"heroes", tag:"original",
    title:"The Attic That Hummed", accent:"#e08a3f", minutes:11, rating:4.7,
    popular:false, isNew:true, difficulty:"Confident",
    blurb:"Every house on Thistle Row has an attic, but only one hums after dark, and Mara is the only one who ever climbs the ladder to find out why.",
    text:`Every house on Thistle Row had an attic, and every attic on Thistle Row was, by all accounts, perfectly ordinary — dusty, cobwebbed, full of the sort of forgotten boxes that nobody quite had the energy to sort through. Every attic, that is, except the one at number eleven, which had hummed, low and steady, every night for as long as anyone could remember.

The Whitfields had lived at number eleven for three generations, and each generation had simply learned to live with the sound, the way you learn to live with a creaky stair or a draft under a particular door. Mara's grandmother called it "the house breathing." Her father called it "old pipes" and refused to discuss it further. Mara, at thirteen, found both explanations thoroughly unsatisfying.

So one autumn evening, while her parents were occupied downstairs, Mara pulled down the attic ladder and climbed up with a flashlight clutched tightly in one hand.

The humming grew louder as her head cleared the attic floor — not mechanical at all, she realized immediately, nothing like pipes or wind through gaps in the roofing. It was almost musical, a single low note that seemed to come from everywhere in the room at once, vibrating faintly through the floorboards beneath her palms.

Her flashlight beam swept across the usual dusty boxes, an old rocking horse missing one ear, a stack of yellowed newspapers tied with string — and then landed on something Mara had never seen before: a small wooden chest, tucked into the farthest corner, humming so strongly now that the air itself seemed to shiver around it.

Her hand hesitated over the latch for a long moment. Every instinct told her this was precisely the sort of thing that, in the stories her grandmother told, a sensible person left well alone. But Mara had never been especially good at leaving things alone, and the humming, up close, didn't feel threatening so much as patient — like something that had been waiting a very long time for someone curious enough to finally open it.

Inside, nestled in a bed of ancient, moth-eaten velvet, sat a single tuning fork, tarnished with age, still faintly vibrating on its own with no visible cause at all.

Tucked beside it was a folded note, the handwriting shaky and old-fashioned: "To whoever finds this — my sister and I made a promise, long before either of us had families of our own, that whichever of us passed first would send a sound the other could always follow home, no matter how far apart life took us. I never learned how to stop it ringing. I'm not certain I ever wanted to. If you can still hear it, know that it means someone, somewhere, is still waiting for someone else to come home. — E.W., 1931."

Mara sat very still in the dusty attic for a long while after reading it, the tuning fork humming softly in her open palm, feeling considerably less like she'd uncovered something frightening and considerably more like she'd stumbled into the middle of a hundred-year-old promise that was never actually meant to be broken.

She didn't tell her parents exactly what she'd found — only that the humming was nothing to worry about, which was, she decided, entirely true. She wrapped the tuning fork carefully back in its velvet and left it exactly where it was.

That night, and every night after, when Mara heard the house humming faintly beneath her floorboards as she drifted off to sleep, she no longer heard an old, unexplained noise at all. She heard someone, somewhere long ago and far away, quietly keeping a promise — and she found, rather to her own surprise, that she didn't want it to ever stop.`
  },
  {
    id:"case-of-missing-honey", age:"6-7", category:"mystery", character:"animals", tag:"original",
    title:"The Case of the Missing Honey", accent:"#4fa39c", minutes:5, rating:4.8,
    popular:true, isNew:true, difficulty:"Easy",
    blurb:"Detective Bramble the badger investigates who's been sneaking honey from Mrs. Bumble's hive.",
    text:`Mrs. Bumble the bee kept the finest honey in all of Thistledown Wood, and every morning for a week, a little had gone missing from her hive — just a smear here, a dab there, always overnight, always while she slept.

"This calls," she announced, straightening her tiny apron, "for a detective."

Luckily, Thistledown Wood had exactly one, and his name was Bramble — a badger with round spectacles, a magnifying glass he carried everywhere, and a nose that could sniff out clues nobody else had noticed.

"First," said Bramble, kneeling by the hive, "we look for tracks." Sure enough, in the soft mud below, he found small, round paw prints leading away into the ferns. "Too small for a fox. Too big for a mouse."

Next, he sniffed the empty honey jar left carelessly by the hive's entrance. "Sticky," he announced, "and smells faintly of... pine needles?"

Bramble followed the paw prints and the piney smell together, deeper into the wood, past the old oak, past the stream, until they led straight to a hollow log where a small red squirrel named Ferdie was curled up fast asleep, honey still smeared adorably across his whiskers.

"Ferdie!" gasped Mrs. Bumble, who had followed along the whole way, buzzing indignantly. "Was it you all along?"

Ferdie woke with a guilty start. "I didn't mean to keep taking it," he admitted, cheeks turning pink beneath his fur. "I just moved into that pine grove nearby, and I didn't know anybody yet, and your honey smelled so warm and welcoming, and I suppose I got a bit carried away."

Mrs. Bumble's indignant buzzing softened considerably. "You could have simply asked, you silly squirrel. I always share with neighbors — that's rather the whole point of having any."

Detective Bramble closed his notebook with a satisfied click. "Case solved," he announced. "Though I'd say this one ends less with a culprit and more with a new friend."

And it did — from then on, Ferdie visited Mrs. Bumble's hive every week, honey freely offered instead of secretly taken, and Bramble the badger got an open invitation to the honey-tasting that followed every single time, purely, he insisted, for professional reasons.`
  },
  {
    id:"clockmakers-riddle", age:"10-11", category:"mystery", character:"heroes", tag:"original",
    title:"The Clockmaker's Riddle", accent:"#4fa39c", minutes:9, rating:4.7,
    popular:false, isNew:true, difficulty:"Growing",
    blurb:"When the town's only clock stops at the same minute every day, twelve-year-old Theo sets out to learn why.",
    text:`The great clock in the tower at the center of Ferrow had kept perfect time for over a hundred years, chiming faithfully on every hour, until the week it started stopping — always, oddly, at exactly seventeen minutes past three, and always for exactly one minute, before starting again as if nothing had happened at all.

The town clockmaker, an elderly man named Aldous, insisted nothing was mechanically wrong. "I've checked every gear twice over," he told the worried town council. "The clock is not broken. It is simply... pausing."

Twelve-year-old Theo, who spent most afternoons apprenticing in Aldous's workshop and had a habit of noticing things other people walked straight past, found this explanation far more interesting than alarming.

"Clocks don't pause for no reason," Theo said thoughtfully, sweeping metal shavings from the workshop floor. "Even if it's not broken, something is making it stop."

Aldous only smiled a small, tired smile and said nothing, which Theo found suspicious in itself.

That afternoon, Theo climbed the tower's spiral staircase alone, arriving at the great clock face at exactly three-fifteen, determined to watch the mystery unfold firsthand. At seventeen minutes past three exactly, the hands froze mid-tick — and in the sudden silence, Theo heard something faint drifting up from below: someone humming, soft and slow, from the small garden at the base of the tower.

Peering down through the clock face's glass, Theo spotted Aldous himself, sitting on the garden bench where he sat every single afternoon, holding a small framed photograph and humming quietly to it for exactly one minute before tucking it away and returning to his workshop.

When Theo asked him about it that evening, Aldous set down his tools and was quiet for a long moment before answering.

"That's my Eleanor," he said finally. "My wife. We were married at three-seventeen in the afternoon, right in that garden, fifty-one years ago come spring. She passed on three years back, and I found I couldn't quite let the minute go by unmarked. So each day, I stop what I'm doing, however briefly, and remember her."

"But the clock," Theo pressed gently. "Why does it stop too?"

Aldous's eyes crinkled with the first real smile Theo had seen from him all week. "Because I built that clock with my own two hands, the same year I married her. I suppose, after all these years together, it's simply learned to pause when I do."

Theo never did tell the town council the full truth of the mystery — only that the clock was working exactly as it should, which, Theo had come to realize, was entirely accurate. Some things, it turned out, weren't puzzles to be solved and fixed at all. They were simply quiet ways of remembering, built to last exactly as long as they needed to.`
  },
  {
    id:"last-tide-map", age:"12-13", category:"adventure", character:"sea", tag:"original",
    title:"The Last Tide Map", accent:"#6fa15c", minutes:12, rating:4.8,
    popular:true, isNew:true, difficulty:"Confident",
    blurb:"A cabin girl inherits a map that only reveals its route at the exact turn of the tide, and races a rival crew to a legendary sandbar island.",
    text:`The map had belonged to Wren's grandmother, and for most of Wren's life it had looked like nothing more than a blank sheet of aged, salt-stained parchment, rolled up and forgotten in a sea chest below deck.

It was only on the night her grandmother finally told her the truth — dying, propped up in her bunk, voice thin as sea-spray — that Wren learned the parchment wasn't blank at all. "It only shows itself," her grandmother whispered, "at the exact turn of the tide. Low to high, not a moment before or after. Find that moment, and it'll show you the way to Solace Bar."

Solace Bar was a sandbar island that appeared only during the lowest tides of the year, said to hold a cache of pearls beyond counting, left behind by a captain who'd valued freedom over fortune and buried his haul rather than let it corrupt his crew. Most sailors called it a myth. Wren's grandmother, until her final breath, called it home to something she'd seen with her own two eyes as a young woman, decades before.

Wren inherited the map, the small fishing sloop, and precious little else besides. What she also inherited, unfortunately, was a rival — Captain Silas Drummond, who had heard the same old legend from a very different source and commanded a ship three times the size of Wren's, with a crew twice as ruthless.

The race to Solace Bar began the moment word got out that Wren possessed a genuine map, and it very quickly became clear that Drummond intended to follow her sloop rather than chart his own uncertain course.

Wren's small crew — just herself, her steady first mate Ossian, and a sharp-eyed cabin boy named Fenn — knew they couldn't outrun Drummond's larger ship on open water. Their only advantage was the map itself, and the fact that only Wren knew precisely when and how to read it.

She spent three sleepless nights studying the tide tables her grandmother had left behind, calculating the exact turn of the coming spring tide — the lowest of the entire year, when Solace Bar would surface for perhaps an hour before vanishing beneath the waves again for another twelve months.

On the appointed night, with Drummond's ship looming dangerously close behind, Wren unrolled the parchment at precisely the turning of the tide, and watched, breath held, as faint golden lines bloomed slowly across the blank page — a route through a maze of hidden shoals that no chart in Drummond's possession could ever show him.

"Hold tight," Wren called to Ossian at the wheel, tracing the newly revealed path with one finger. "Sharp turn to starboard in three, two, one—"

The little sloop cut hard through water Wren's grandmother had once sailed as a young woman, threading between shoals that would have torn Drummond's heavier ship apart had he dared follow blindly. He didn't dare. His larger vessel fell back, forced onto safer, slower water, while Wren's sloop skimmed on ahead through the only safe channel in the strait.

They reached Solace Bar just as its pale, curved shore broke the surface in the moonlight, and there, exactly where her grandmother's stories had always promised, a weathered chest sat half-buried in the sand — not bursting with pearls after all, Wren discovered, kneeling to open it, but filled instead with letters, dozens of them, written across decades by sailors who had found the island before her and left behind not treasure, but truth: directions, warnings, small kindnesses for whoever came next.

Wren understood, kneeling there with the tide already creeping back toward the buried chest, exactly what her grandmother had truly left her. Not a fortune in pearls. A promise, passed hand to hand across generations, that the sea rewarded patience and care over greed and haste — and that some maps were never meant to lead to gold at all, only to exactly the right person, at exactly the right moment.

She added her own letter to the chest before the tide reclaimed the island, sealed it carefully, and sailed for home with Ossian and Fenn beside her, already looking forward to the day, decades from now, when she might pass the map on to someone else entirely.`
  },
  {
    id:"tiny-stars-first-spell", age:"4-5", category:"magical", character:"witches", tag:"original",
    title:"The Tiny Star's First Spell", accent:"#b17bea", minutes:4, rating:4.9,
    popular:true, isNew:true, difficulty:"Easy",
    blurb:"A baby star wants to learn to twinkle all by herself before the sun comes up.",
    text:`High up in the velvet sky lived a tiny star named Wink, who was, by star standards, extremely young — so young she hadn't yet learned to twinkle on her own.

Every night, an old friendly moon helped her along, humming a soft little spell that made Wink's light flicker and dance. But Wink wanted very badly to twinkle all by herself, without any help at all.

"Please teach me," she asked the moon one evening. "I want to shine on my own before the sun comes up."

The moon smiled, round and silver. "Twinkling isn't something I can simply teach you," she said gently. "It comes from inside. You have to believe your light is worth sharing, and then — well, then it simply happens."

Wink tried very hard to believe it. She scrunched up tight and thought happy thoughts and wished as hard as any tiny star possibly could. Nothing happened. She just glowed the same small, steady glow she always had.

"I don't think I can do it," she sighed, dimming just a little with disappointment.

Just then, far below on Earth, a little girl looked up from her bedroom window and spotted Wink glowing softly among all the bigger, brighter stars. "Look, Mama!" she whispered. "That little star is my favorite. It doesn't blink too fast — I can always find it."

Wink heard this, faint and faraway, and something warm bubbled up inside her chest. Someone loved her small, steady light exactly the way it already was.

And right then — without even trying — Wink twinkled. Just once, just a tiny flicker, all on her very own.

"There it is," said the moon softly, watching. "I told you it comes from inside."

Wink twinkled again, delighted, and then again, faster and faster, until she was twinkling as merrily as any star in the whole wide sky. Down below, the little girl clapped her hands with joy.

And from that night on, Wink never needed any help at all — she simply remembered that someone, somewhere, loved her light exactly as it was, and that was all the magic she ever needed.`
  }
];

export const AGE_LIST = AGE_BANDS;
export const CATEGORY_LIST = CATEGORIES;
export const CHARACTER_LIST = CHARACTERS;

export function renderArt(story: Story): string {
  return `<svg viewBox="0 0 160 100" style="--accent:${story.accent};">${ART[story.id] || ""}</svg>`;
}
