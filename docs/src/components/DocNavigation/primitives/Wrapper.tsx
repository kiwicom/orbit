import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Wrapper({ children }: Props) {
  return <nav className="sticky top-0 h-screen overflow-y-auto px-2 py-6">{children}</nav>;
}
