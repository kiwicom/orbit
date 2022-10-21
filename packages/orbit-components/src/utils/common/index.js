// @flow
import { css } from "styled-components";

export const firstToUpper = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

export const defaultFocus = (): any => css`
  outline: 1px solid Highlight;
  outline: 1px solid -webkit-focus-ring-color;
`;
