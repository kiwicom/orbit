import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function TocWrapper({ children }: Props) {
  return (
    <div className="tablet:pt-space-1000 tablet:order-2">
      <div className="duration-normal sticky top-0 overflow-hidden transition-[top]">
        {children}
      </div>
    </div>
  );
}
