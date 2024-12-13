import React from "react";

interface Props {
  children: React.ReactNode;
  padding?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  elevation?: "level3";
}

export default function Prose({ children, padding, elevation }: Props) {
  const getPadding = () => {
    const top = padding?.top === "none" ? "pt-0" : `pt-space-${padding?.top || "1000"}`;
    const bottom = `pb-space-${padding?.bottom || "1000"}`;
    const left = `pl-space-${padding?.left || "800"}`;
    const right = `pr-space-${padding?.right || "800"}`;
    return `${top} ${bottom} ${left} ${right}`;
  };

  const elevationClass = elevation === "level3" ? "shadow-elevation-3" : "";

  return <div className={`prose max-w-none ${getPadding()} ${elevationClass}`}>{children}</div>;
}
