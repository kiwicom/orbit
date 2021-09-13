// @flow
import { css } from "styled-components";
import type { CSSRules } from "styled-components";

import type { Theme } from "../../../defaultTheme";
import { left } from "../../../utils/rtl";

export type ResolvePlacement = ({|
  inputSize: "small" | "normal",
  theme: Theme,
|}) => CSSRules;

const resolvePlacement: ResolvePlacement = ({ inputSize, theme }) => {
  if (inputSize === "normal") {
    if (theme.rtl) {
      return css`
        bottom: 0;
        ${left}: 8px;
      `;
    }
    return css`
      bottom: 0;
      ${left}: 18px;
    `;
  }

  if (theme.rtl) {
    return css`
      bottom: 0;
      ${left}: 8px;
    `;
  }

  return css`
    bottom: 0;
    ${left}: 22px;
  `;
};

export default resolvePlacement;
