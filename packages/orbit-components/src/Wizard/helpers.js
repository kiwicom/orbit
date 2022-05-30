// @flow
import { css } from "styled-components";
import type { CSSRules } from "styled-components";

import { left, right } from "../utils/rtl";
import type { Status } from "./WizardContext";
import type { Theme } from "../defaultTheme";

type ResolveStepBorder = ({|
  isColumnOnDesktop: boolean,
  isLastStep: boolean,
  index: number,
  status: string,
  nextStepStatus: Status,
|}) => ({|
  theme: Theme,
|}) => CSSRules;

export const resolveStepBorder: ResolveStepBorder = ({
  isColumnOnDesktop,
  index,
  status,
  isLastStep,
  nextStepStatus,
}) => ({ theme }) => {
  return css`
    ${isColumnOnDesktop
      ? css`
          &:before {
            display: ${index === 0 ? "none" : "block"};
          }

          &:after {
            display: ${isLastStep ? "none" : "block"};
          }

          &:after {
            content: "";
            position: absolute;
            ${left}: ${parseFloat(theme.orbit.heightIconSmall) + 1}px;
            top: ${parseFloat(theme.orbit.heightIconSmall) + 1}px;
            width: 2px;
            height: 40px;
          }
        `
      : css`
          &:before,
          &:after {
            display: block;
            content: "";
            position: absolute;
            top: ${parseFloat(theme.orbit.heightIconSmall) / 2 - 1}px;
            width: 50%;
            height: 2px;
          }
        `}

    &:before {
      ${left}: 0;
      background: ${status === "disabled"
        ? theme.orbit.paletteCloudNormalHover
        : theme.orbit.paletteProductNormal};
    }

    &:after {
      ${right}: 0;
      background: ${status === "disabled" || nextStepStatus === "disabled"
        ? theme.orbit.paletteCloudNormalHover
        : theme.orbit.paletteProductNormal};
    }
  `;
};

export default resolveStepBorder;
