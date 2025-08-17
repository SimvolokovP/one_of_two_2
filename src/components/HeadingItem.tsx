import type { PropsWithChildren } from "react";

interface HeadingItemProps {
  title?: string;
  description?: string;
}

export function HeadingItem({
  children,
  description = "",
  title = "",
}: PropsWithChildren<HeadingItemProps>) {
  return (
    <div>
      <div className="text-accent text-xl font-bold mb-2">{title}</div>
      <div className="text-main font-light text-base mb-4">{description}</div>
      {children}
    </div>
  );
}
