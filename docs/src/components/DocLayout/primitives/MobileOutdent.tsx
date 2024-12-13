import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function MobileOutdent({ children }: Props) {
  return (
    <div
      className={`
      tablet:mx-0 tablet:pr-8 tablet:[&>*:last-child]:mb-12 largeDesktop:p-0
      relative -mx-8
      flex h-full
      flex-col
      px-8
    `}
    >
      {children}
    </div>
  );
}
