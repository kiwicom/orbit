import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Wrapper({ children }: Props) {
  // Converting styled-components grid layout to Tailwind classes
  return (
    <div className="relative grid min-h-screen grid-cols-[100%] grid-rows-[auto_1fr_auto] items-stretch">
      {children}
    </div>
  );
}
