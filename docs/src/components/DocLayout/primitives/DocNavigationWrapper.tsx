import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function DocNavigationWrapper({ children }: Props) {
  return (
    <div className="pt-space-600 pb-space-600 sticky top-0 h-screen overflow-y-auto">
      {children}
    </div>
  );
}
