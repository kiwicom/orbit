import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function MobileTocWrapper({ children }: Props) {
  return <div className="mb-space-large tablet:hidden">{children}</div>;
}
