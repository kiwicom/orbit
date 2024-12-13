import React from "react";

interface Props {
  children: React.ReactNode;
  tile?: boolean;
  onClick?: () => void;
}

export default function MenuItem({ children, tile, onClick }: Props) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={e => {
        if (e.key === "Enter" || e.key === " ") {
          onClick?.();
        }
      }}
      className={`
        rounded-normal hover:bg-cloud-light flex cursor-pointer items-center justify-between
        p-4
        ${tile ? "bg-white-normal" : ""}
      `}
    >
      {children}
    </div>
  );
}
