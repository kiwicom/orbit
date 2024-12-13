import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function DocNavigationWidth({ children }: Props) {
  return <div className="w-[280px] flex-none">{children}</div>;
}
