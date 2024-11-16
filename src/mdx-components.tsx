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
    p: (props) => <p className="leading-relaxed my-3" {...props} />,
    ul: (props) => <ul className="list-disc my-4 ml-4" {...props} />,
    ol: (props) => <ol className="list-decimal my-4 ml-4" {...props} />,
    li: (props) => <li className="my-2" {...props} />,
    a: (props) => <a className="underline" {...props} />,
    code: (props) => (
      <code
        className="bg-white bg-opacity-10 font-mono p-1 rounded"
        {...props}
      />
    ),
  };
}
