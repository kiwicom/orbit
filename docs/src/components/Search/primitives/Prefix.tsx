import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Prefix({ children }: Props) {
  return <div className="text-ink-light mr-2 flex items-center">{children}</div>;
}
