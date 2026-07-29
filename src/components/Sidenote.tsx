/**
 * 4b margin notes. On desktop these float into the essay's right rail
 * (see .sidenote in essay.css); on mobile they render inline as small asides.
 */
export const Sidenote = ({
  label,
  accent = false,
  children,
}: {
  label?: string;
  accent?: boolean;
  children: React.ReactNode;
}) => (
  <aside
    className={`sidenote my-6 border-l-2 pl-[14px] font-mono text-[11px] leading-[1.65] text-[#6a6255] md:my-0 ${
      accent ? "border-accent" : "border-[#ddd3bf]"
    }`}
  >
    {label && (
      <span
        className={`mb-[5px] block text-[9px] uppercase tracking-[0.16em] ${
          accent ? "text-accent" : "text-[#b0a794]"
        }`}
      >
        {label}
      </span>
    )}
    {children}
  </aside>
);

/** Tiny labeled bar chart for sidenotes, e.g. survival bands. */
export const Bands = ({ rows }: { rows: [string, number][] }) => (
  <div className="grid gap-[6px] font-mono text-[11px] text-[#6a6255]">
    {rows.map(([label, pct]) => (
      <div key={label} className="flex items-center gap-[6px]">
        <span className="w-9 flex-none">{label}</span>
        <span
          className="h-[6px] flex-none bg-accent"
          style={{ width: `${pct * 0.8}px` }}
        />
        <span>{pct}%</span>
      </div>
    ))}
  </div>
);
