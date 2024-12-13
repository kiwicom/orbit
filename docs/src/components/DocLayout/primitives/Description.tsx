import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Description({ children }: Props) {
  return <span className="flex leading-[22px]">{children}</span>;
}
