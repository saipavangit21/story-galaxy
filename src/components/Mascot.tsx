export default function Mascot({ size = 96, className }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="A cheerful cartoon fox astronaut floating among the stars with a book"
    >
      <circle cx="60" cy="60" r="58" fill="var(--gold)" opacity="0.1" />
      <circle cx="14" cy="22" r="2" fill="var(--cream)" />
      <circle cx="104" cy="18" r="1.6" fill="var(--cream)" />
      <circle cx="108" cy="76" r="1.8" fill="var(--cream)" />
      <circle cx="10" cy="88" r="1.4" fill="var(--cream)" />
      <path d="M94 26l2.4 5.6L102 34l-5.6 2.4L94 42l-2.4-5.6L86 34l5.6-2.4z" fill="var(--gold)" />

      <g transform="translate(24 18)">
        <ellipse cx="36" cy="92" rx="26" ry="8" fill="var(--navy-deep)" opacity="0.25" />

        <path d="M14 30c-8-10-7-24 2-29 3 7 1 13-2 19 5-3 10-3 15-1-5 4-8 9-9 12z" fill="var(--grad-4)" />
        <path d="M58 30c8-10 7-24-2-29-3 7-1 13 2 19-5-3-10-3-15-1 5 4 8 9 9 12z" fill="var(--grad-4)" />
        <path d="M18 27c-5-7-4-16 1-19 2 5 1 8-1 12 3-2 6-2 9-1-3 3-6 6-6 8z" fill="var(--grad-2)" opacity="0.65" />
        <path d="M54 27c5-7 4-16-1-19-2 5-1 8 1 12-3-2-6-2-9-1 3 3 6 6 6 8z" fill="var(--grad-2)" opacity="0.65" />

        <circle cx="36" cy="53" r="28" fill="var(--grad-4)" />
        <path d="M18 58c2 10 9 16 18 16s16-6 18-16c-3 5-10 9-18 9s-15-4-18-9z" fill="var(--cream)" />
        <ellipse cx="18" cy="56" rx="5.5" ry="3.6" fill="var(--grad-2)" opacity="0.55" />
        <ellipse cx="54" cy="56" rx="5.5" ry="3.6" fill="var(--grad-2)" opacity="0.55" />
        <circle cx="26.5" cy="47" r="5.4" fill="var(--navy-deep)" />
        <circle cx="45.5" cy="47" r="5.4" fill="var(--navy-deep)" />
        <circle cx="24.6" cy="44.8" r="1.7" fill="var(--cream)" />
        <circle cx="43.6" cy="44.8" r="1.7" fill="var(--cream)" />
        <circle cx="28.3" cy="49.4" r="0.9" fill="var(--cream)" opacity="0.8" />
        <circle cx="47.3" cy="49.4" r="0.9" fill="var(--cream)" opacity="0.8" />
        <path d="M31 59q5 4 10 0" stroke="var(--navy-deep)" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <ellipse cx="36" cy="54.5" rx="2.4" ry="1.8" fill="var(--navy-deep)" />

        <line x1="36" y1="19" x2="36" y2="8" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="36" cy="6" r="3.4" fill="var(--gold)" />
        <circle cx="36" cy="52" r="33" fill="var(--cream)" fillOpacity="0.06" stroke="var(--cream)" strokeWidth="2.6" strokeOpacity="0.85" />
        <ellipse cx="18" cy="30" rx="8" ry="4.2" fill="var(--cream)" opacity="0.6" transform="rotate(-28 18 30)" />

        <g transform="translate(18 84)">
          <path d="M0 4c4.5-3.5 9.5-3.5 14 0 4.5-3.5 9.5-3.5 14 0v8c-4.5-2.7-9.5-2.7-14 0-4.5-2.7-9.5-2.7-14 0z" fill="var(--cream)" stroke="var(--grad-1)" strokeWidth="1.4" />
          <line x1="14" y1="4" x2="14" y2="12" stroke="var(--grad-1)" strokeWidth="1.4" />
        </g>
      </g>
    </svg>
  );
}
