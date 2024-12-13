import React from "react";
import { Link as GatsbyLink } from "gatsby";

interface Props {
  children: React.ReactNode;
  to: string;
  isActive?: boolean;
  onClick?: () => void;
}

export default function Link({ children, to, isActive, onClick }: Props) {
  return (
    <GatsbyLink
      to={to}
      onClick={onClick}
      className={`
        rounded-normal block px-4 py-2 text-sm
        ${
          isActive
            ? "bg-cloud-normal text-ink-dark font-bold"
            : "text-ink-light hover:text-ink-dark hover:bg-cloud-light"
        }
      `}
    >
      {children}
    </GatsbyLink>
  );
}
