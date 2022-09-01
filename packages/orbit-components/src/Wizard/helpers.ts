import { css, FlattenInterpolation, ThemeProps, DefaultTheme } from "styled-components";

import { left, right } from "../utils/rtl";
import { Status } from "./WizardContext";
import { Theme } from "../defaultTheme";

export const resolveStepBorder = ({
  isColumnOnDesktop,
  index,
  status,
  isLastStep,
  nextStepStatus,
}: {
  isColumnOnDesktop: boolean;
  index: number;
  status: Status;
  isLastStep: boolean;
  nextStepStatus: Status;
}) => ({ theme }: { theme: Theme }): FlattenInterpolation<ThemeProps<DefaultTheme>> => {
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
