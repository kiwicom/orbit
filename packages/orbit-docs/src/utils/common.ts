import React from "react";

export const pascalize = (str: string) =>
  str
    .replace(/-(.)/g, (_match, chartacter: string) => chartacter.toUpperCase())
    .replace(/^(.)/, ($1: string) => $1.toUpperCase());

export const slugify = (str: string) => {
  if (str) {
    return str
      .trim()
      .toLowerCase()
      .replace(/[\s_]+/g, "-") // replace all spaces and underscores with hyphens
      .replace(/[^A-Za-z0-9-/]+/g, ""); // remove everything not basic
  }
  return "";
};

export const getTextFromChildren = (children?: React.ReactNode): string => {
  if (typeof children === "string") return children;
  if (typeof children === "number") return children.toString();
  if (Array.isArray(children)) return children.map(child => getTextFromChildren(child)).join(" ");
  if (!children || typeof children !== "object" || !("props" in children)) return "";
  return getTextFromChildren(children.props.children);
};
