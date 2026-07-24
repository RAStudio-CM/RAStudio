import type { HTMLAttributes, ReactNode } from "react";

type Props = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  as?: "section" | "div";
  spacing?: "compact" | "default" | "large";
};

export default function Section({ children, as = "section", spacing = "default", className = "", ...props }: Props) {
  const Component = as;
  return <Component className={`dsSection dsSection--${spacing} ${className}`.trim()} {...props}>{children}</Component>;
}
