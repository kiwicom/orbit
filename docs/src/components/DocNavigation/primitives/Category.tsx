import React from "react";

interface Props {
  children: React.ReactNode;
  title: string;
  isOpen?: boolean;
  onClick?: () => void;
}

export default function Category({ children, title, isOpen, onClick }: Props) {
  return (
    <div>
      <button
        type="button"
        onClick={onClick}
        className="text-ink-dark hover:bg-cloud-light rounded-normal flex w-full items-center justify-between px-4 py-2 text-sm font-bold"
      >
        {title}
        <span className={`transition-transform${isOpen ? "rotate-180" : ""}`}>▼</span>
      </button>
      {isOpen && <div className="pl-4">{children}</div>}
    </div>
  );
}
