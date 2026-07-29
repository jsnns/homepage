import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";

/**
 * LaTeX-paper register for an essay's formal appendix: double rule, numbered
 * subsections (via .appendix CSS), justified text, booktabs tables, and real
 * KaTeX equations. Wrap the appendix content; use <Eq/> for display math and
 * <M/> inline.
 */
export const Appendix = ({
  label = "Appendix A",
  title,
  children,
}: {
  label?: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section className="appendix clear-both mt-16 md:-mr-[204px]">
    <div className="border-t border-[#14110d]" />
    <div className="mt-[3px] border-t border-[#14110d]" />
    <div className="mt-6 font-mono text-[9px] uppercase tracking-[0.24em] text-[#a39a89]">
      {label}
    </div>
    <h2 className="mt-2 text-[24px] font-semibold tracking-[-0.01em]">
      {title}
    </h2>
    <div className="appendix-body mt-6 text-[15px] leading-[1.7]">
      {children}
    </div>
  </section>
);

/** Display equation. */
export const Eq = ({ math }: { math: string }) => (
  <div className="eq my-5">
    <BlockMath math={math} />
  </div>
);

/** Inline math. */
export const M = ({ math }: { math: string }) => <InlineMath math={math} />;
