// @flow
import { css } from "styled-components";
import type { CSSRules } from "styled-components";

import type { Theme } from "../../../defaultTheme";
import { left } from "../../../utils/rtl";

export type ResolvePlacement = ({|
  inputSize: "small" | "normal",
  theme: Theme,
  placement: string,
  inlineLabel: boolean,
|}) => CSSRules;

const resolvePlacement: ResolvePlacement = ({ inputSize, theme, placement, inlineLabel }) => {
  const vertical = placement === "top-start" || placement === "top-end" ? "bottom" : "top";

  if (inputSize === "normal") {
    if (theme.rtl) {
      return css`
        ${vertical}: 0;
        ${left}: 8px;
      `;
    }
    return css`
      ${vertical}: 0;
      ${left}: 18px;
    `;
  }

  if (theme.rtl) {
    return css`
      ${vertical}: 0;
      ${left}: 8px;
    `;
  }

  return css`
    ${vertical}: 0;
    ${left}: ${inlineLabel ? "22px" : "18px"};
  `;
};

export default resolvePlacement;
