export type IconName =
  | 'support'
  | 'amc'
  | 'network'
  | 'shield'
  | 'database'
  | 'building'
  | 'bolt'
  | 'check'
  | 'eye'
  | 'compass'
  | 'users'
  | 'server';

const paths: Record<IconName, React.ReactNode> = {
  support: (
    <>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
      <path d="M7 9l2 2 4-4" />
    </>
  ),
  amc: (
    <>
      <path d="M9 3h6a2 2 0 0 1 2 2v16l-5-3-5 3V5a2 2 0 0 1 2-2z" />
      <path d="M9 8h6M9 12h4" />
    </>
  ),
  network: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2a10 10 0 0 1 10 10M12 2a10 10 0 0 0-10 10M12 22a10 10 0 0 1-10-10M12 22a10 10 0 0 0 10-10" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2l8 3v7c0 5-3.5 9-8 10-4.5-1-8-5-8-10V5l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
    </>
  ),
  building: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2M10 21v-4h4v4" />
    </>
  ),
  bolt: <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />,
  check: <path d="M5 12l5 5L20 7" />,
  eye: (
    <>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M16 8l-2 6-6 2 2-6 6-2z" />
    </>
  ),
  users: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  server: (
    <>
      <rect x="2" y="2" width="20" height="8" rx="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" />
      <path d="M6 6h.01M6 18h.01" />
    </>
  ),
};

export default function Icon({
  name,
  size = 24,
  className,
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
