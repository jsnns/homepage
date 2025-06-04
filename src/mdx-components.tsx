import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // dropping h1 and h2 down a level to make space for the title which will be h1
    h1: (props) => (
      <h2 className="text-xl font-semibold mt-12 mb-4" {...props} />
    ),
    h2: (props) => (
      <h3 className="text-lg font-semibold text-accent mt-12 mb-4" {...props} />
    ),
    h3: (props) => (
      <h3 className="text-md font-semibold mt-6 mb-2" {...props} />
    ),
    hr: (props) => (
      <hr
        className="my-8 border-accent/50 border-dashed border-spacing-8"
        {...props}
      />
    ),
    em: (props) => <em className="italic text-accent" {...props} />,
    p: (props) => <p className="leading-relaxed my-3" {...props} />,
    ul: (props) => <ul className="list-disc ml-4" {...props} />,
    ol: (props) => <ol className="list-decimal ml-4" {...props} />,
    li: (props) => <li className="my-2" {...props} />,
    a: (props) => <a className="underline" {...props} />,
    code: (props) => (
      <code className="text-accent font-semibold font-mono" {...props} />
    ),
    blockquote: (props) => (
      <blockquote className="border-l-4 border-accent pl-4 italic" {...props} />
    ),
  };
}
