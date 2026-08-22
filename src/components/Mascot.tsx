export default function Mascot({ size = 96, className }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="A cheerful little owl reading a book on a crescent moon"
    >
      <path d="M14 78c8-30 30-30 44-14 16-18 46-12 50 16 3 22-16 30-32 22-10 20-52 20-62-4-4-9-3-15 0-20z" fill="var(--gold)" opacity="0.16" />
      <path d="M92 20a26 26 0 1 0 10 30 20 20 0 1 1-10-30z" fill="var(--gold-soft)" />
      <circle cx="24" cy="18" r="2.2" fill="var(--cream)" />
      <circle cx="40" cy="10" r="1.4" fill="var(--cream)" />
      <circle cx="12" cy="34" r="1.6" fill="var(--cream)" />
      <g transform="translate(30 40)">
        <ellipse cx="24" cy="46" rx="24" ry="21" fill="var(--grad-1)" />
        <path d="M6 30c-6-10-4-22 4-26 3 6 2 12-1 17 4-4 10-6 15-4-4 5-6 10-6 15z" fill="var(--grad-1)" />
        <path d="M42 30c6-10 4-22-4-26-3 6-2 12 1 17-4-4-10-6-15-4 4 5 6 10 6 15z" fill="var(--grad-1)" />
        <circle cx="15" cy="40" r="9" fill="var(--cream)" />
        <circle cx="33" cy="40" r="9" fill="var(--cream)" />
        <circle cx="15" cy="41" r="4" fill="var(--navy-deep)" />
        <circle cx="33" cy="41" r="4" fill="var(--navy-deep)" />
        <circle cx="13" cy="39" r="1.3" fill="var(--cream)" />
        <circle cx="31" cy="39" r="1.3" fill="var(--cream)" />
        <path d="M20 48l4 4 4-4" fill="none" stroke="var(--grad-4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <ellipse cx="24" cy="66" rx="16" ry="4" fill="var(--navy-deep)" opacity="0.28" />
        <g transform="translate(6 60)">
          <path d="M0 4c5-4 10-4 15 0 5-4 10-4 15 0v8c-5-3-10-3-15 0-5-3-10-3-15 0z" fill="var(--cream)" stroke="var(--grad-1)" strokeWidth="1.4" />
          <line x1="15" y1="4" x2="15" y2="12" stroke="var(--grad-1)" strokeWidth="1.4" />
        </g>
      </g>
      <circle cx="100" cy="70" r="2" fill="var(--gold)" />
      <circle cx="108" cy="52" r="1.4" fill="var(--gold)" />
    </svg>
  );
}
