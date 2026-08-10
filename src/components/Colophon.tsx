export const Colophon = () => (
  <div className="group relative mt-[10px] w-fit">
    <span className="cursor-help border-b border-dotted border-[#b0a794] font-mono text-[9px] uppercase tracking-[0.14em] text-[#a39a89]">
      written with my agents
    </span>
    <div className="pointer-events-none absolute left-0 top-full z-20 mt-2 w-[300px] rounded-sm border border-[#d9cfbc] bg-[#f6f1e6] p-4 normal-case opacity-0 shadow-[0_2px_12px_rgba(20,17,13,0.08)] transition-opacity duration-150 group-hover:pointer-events-auto group-hover:opacity-100">
      <p className="font-sans text-[14px] leading-[1.55] tracking-normal text-[#14110d]">
        &quot;Sounds like AI&quot; deletes the best thinking first. Using tools
        to create isn&apos;t inhuman.
      </p>
      <p className="mt-2 font-sans text-[14px] leading-[1.55] tracking-normal text-[#14110d]">
        Every tool since fire had its deniers, and history marks them
        irrelevant fast.
      </p>
      <p className="mt-2 font-sans text-[12px] leading-[1.5] tracking-normal text-[#a39a89]">
        (Also your tools for detecting this kind of stuff are worse than you
        think. Pangram flags this note as AI-written. I typed it myself. Point
        proven.)
      </p>
    </div>
  </div>
);
