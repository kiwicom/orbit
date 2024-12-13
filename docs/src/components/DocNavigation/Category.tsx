import React from "react";

interface Props {
  name: React.ReactNode;
  children: React.ReactNode;
}

export default function Category({ name, children }: Props) {
  return (
    <div className="mb-4">
      <div className="text-ink-dark px-4 py-2 text-sm font-bold">{name}</div>
      <div className="pl-4">{children}</div>
    </div>
  );
}
