import React from "react";
import { ChevronDown } from "@kiwicom/orbit-components/icons";

interface Props {
  label: React.ReactNode;
  expanded: boolean;
  hasCategories: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export default function Collapse({ expanded, label, hasCategories, children, onClick }: Props) {
  return (
    <div className="mb-2">
      <button
        type="button"
        onClick={onClick}
        className={`
          flex w-full items-center justify-between px-4 py-2 text-base font-bold
          ${expanded ? "text-ink-dark" : "text-ink-light hover:text-ink-dark"}
        `}
      >
        {label}
        <ChevronDown
          size="small"
          color={expanded ? "primary" : "secondary"}
          className={`transition-transform${expanded ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`
          duration-fast overflow-hidden transition-all
          ${expanded ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}
          ${hasCategories ? "pl-4" : ""}
        `}
      >
        {children}
      </div>
    </div>
  );
}
