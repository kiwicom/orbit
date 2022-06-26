import { css } from "styled-components";

export const boxShadowDefault = css`
  box-shadow: 0px 4px 6px -2px rgba(37, 42, 49, 0.06), 0px 10px 15px -3px rgba(37, 42, 49, 0.1),
    0px -1px 6px -2px rgba(37, 42, 49, 0.1);
`;

export const boxShadowActive = css`
  box-shadow: 0px 10px 10px -5px rgba(37, 42, 49, 0.06), 0px 20px 25px -5px rgba(37, 42, 49, 0.1),
    0px -1px 6px -2px rgba(37, 42, 49, 0.1);
`;

// visually hidden, but visible to screen readers
export const srOnly = css`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

// revert sr-only styles
export const notSrOnly = css`
  position: static;
  width: auto;
  height: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  clip: auto;
  white-space: normal;
`;
