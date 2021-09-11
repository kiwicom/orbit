// @flow
import { css } from "styled-components";

import { left } from "../../../utils/rtl";
import type { ResolvePlacement } from "./resolvePlacement.js.flow";

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
