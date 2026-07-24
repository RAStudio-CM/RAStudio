import type { HTMLAttributes, ReactNode } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  size?: "wide" | "copy";
};

export default function Container({ children, className = "", size = "wide", ...props }: Props) {
  return <div className={`dsContainer dsContainer--${size} ${className}`.trim()} {...props}>{children}</div>;
}
