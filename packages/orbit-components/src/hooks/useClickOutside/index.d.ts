import React from "react";

declare const UseClickOutside: <T extends HTMLElement, K extends HTMLElement>(
  ref: React.RefObject<T>,
  handler: (ev: React.SyntheticEvent<K>) => void,
) => void;

export { UseClickOutside, UseClickOutside as default };
