import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-4xl font-bold mb-6 text-[#1e3a5f]">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-3xl font-semibold mb-4 text-[#1e3a5f] mt-8">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-2xl font-semibold mb-3 text-[#1e3a5f] mt-6">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="text-lg leading-relaxed mb-4 text-gray-700">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="ml-4">{children}</li>
  ),
  a: ({ children, href }) => (
    <a href={href} className="text-[#1e3a5f] hover:underline font-medium">
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-[#1e3a5f] pl-4 italic my-4 text-gray-600">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-[#1e3a5f]">
      {children}
    </code>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
