export const Colophon = () => (
  <div className="group relative mt-[28px] w-fit">
    <span className="cursor-help border-b border-dotted border-[#b0a794] font-mono text-[10px] uppercase tracking-[0.2em] text-[#a39a89]">
      written with my agents
    </span>
    <div className="pointer-events-none absolute bottom-full left-0 z-20 mb-2 w-[340px] rounded-sm border border-[#d9cfbc] bg-[#f6f1e6] p-4 opacity-0 shadow-[0_2px_12px_rgba(20,17,13,0.08)] transition-opacity duration-150 group-hover:pointer-events-auto group-hover:opacity-100">
      <p className="text-[14px] leading-[1.55] text-[#14110d]">
        &quot;Sounds like AI&quot; deletes the best thinking first. Using tools
        to create isn&apos;t inhuman. Every tool since fire had its deniers,
        and history marks them irrelevant fast.
      </p>
      <p className="mt-2 text-[12px] leading-[1.5] text-[#a39a89]">
        (Pangram flags this note as AI-written. I typed it myself. Point
        proven.)
      </p>
    </div>
  </div>
);
