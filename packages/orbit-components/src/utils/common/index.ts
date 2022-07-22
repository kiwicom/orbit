import { css } from "styled-components";

export const firstToUpper = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

export const defaultFocus = () => css`
  outline: 2px solid Highlight;
  outline: 2px solid -webkit-focus-ring-color;
`;
