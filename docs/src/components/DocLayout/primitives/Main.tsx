import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Main({ children }: Props) {
  // Converting styled-components styles to Tailwind classes
  return <main className="font-base relative flex max-w-[90rem] flex-1 flex-col">{children}</main>;
}
