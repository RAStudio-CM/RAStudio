import type { ReactNode } from "react";

export default function EditorialQuote({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <blockquote className={`editorialQuote ${className}`.trim()}>{children}</blockquote>;
}
