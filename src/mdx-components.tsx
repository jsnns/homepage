import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // dropping h1 and h2 down a level to make space for the title which will be h1
    h1: (props) => (
      <h2 className="text-[24px] font-semibold mt-12 mb-4" {...props} />
    ),
    h2: (props) => (
      <h3 className="text-[20px] font-semibold mt-12 mb-4" {...props} />
    ),
    h3: (props) => (
      <h4 className="text-[19px] font-semibold mt-6 mb-2" {...props} />
    ),
    // section break: three squares, styled by .essay-body hr in essay.css
    hr: (props) => <hr {...props} />,
    em: (props) => <em className="italic" {...props} />,
    p: (props) => <p className="my-3" {...props} />,
    ul: (props) => <ul className="list-disc ml-5 my-3" {...props} />,
    ol: (props) => <ol className="list-decimal ml-5 my-3" {...props} />,
    li: (props) => <li className="my-0.5" {...props} />,
    a: (props) => (
      <a
        className="underline decoration-[#b0a794] decoration-dotted underline-offset-[3px] hover:text-accent"
        {...props}
      />
    ),
    code: (props) => (
      <code className="font-mono text-[0.82em] text-accent" {...props} />
    ),
    blockquote: (props) => (
      <blockquote
        className="my-8 border-t-2 border-accent bg-accent/[0.06] px-[30px] py-[22px] text-[17px] italic leading-[1.5] text-[#2b261f] md:text-[18px] [&>p]:my-0"
        {...props}
      />
    ),
    table: (props) => (
      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse text-[15px]" {...props} />
      </div>
    ),
    thead: (props) => <thead className="border-b border-[#14110d]" {...props} />,
    th: (props) => (
      <th className="text-left py-2 pr-4 font-semibold" {...props} />
    ),
    td: (props) => (
      <td className="py-2 pr-4 border-b border-[#eae2d1]" {...props} />
    ),
  };
}
