import React from "react";

interface Props {
  children: React.ReactNode;
  visible: boolean;
}

export default function Menu({ children, visible }: Props) {
  if (!visible) return null;

  return (
    <div className="bg-white-normal border-cloud-normal rounded-normal shadow-raised absolute inset-x-0 z-10 mt-1 border">
      {children}
    </div>
  );
}
