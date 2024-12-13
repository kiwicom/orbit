import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function MenuItemTitle({ children }: Props) {
  return <div className="text-ink-dark mb-1 text-lg font-bold">{children}</div>;
}
