import React from "react";

interface Props {
  children: React.ReactNode;
  hasTabs: boolean;
}

export default function TopWrapper({ children, hasTabs }: Props) {
  return (
    <div
      className={`flex w-full items-end justify-between ${hasTabs ? "pl-[calc(2rem_-_16px)]" : ""}`}
    >
      {children}
    </div>
  );
}
