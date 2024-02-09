import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // dropping h1 and h2 down a level to make space for the title which will be h1
    h1: (props) => <h2 className="opacity-30 mt-12 mb-4" {...props} />,
    h2: (props) => <h3 className="text-2xl mt-12 mb-4" {...props} />,
    p: (props) => <p className="leading-relaxed my-3" {...props} />,
    ul: (props) => <ul className="list-disc my-4" {...props} />,
    ol: (props) => <ol className="list-decimal my-4" {...props} />,
    li: (props) => <li className="my-2" {...props} />,
    a: (props) => <a className="text-blue-500" {...props} />,
    code: (props) => (
      <code
        className="bg-white bg-opacity-10 font-mono p-1 rounded"
        {...props}
      />
    ),
  };
}
