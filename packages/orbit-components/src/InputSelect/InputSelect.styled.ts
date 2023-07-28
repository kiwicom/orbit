import styled, { css } from "styled-components";

import type { Props } from "./types";
import mq from "../utils/mediaQuery";
import { right, left } from "../utils/rtl";
import getSpacingToken from "../common/getSpacingToken";
import defaultTheme from "../defaultTheme";
import { ModalWrapperContent } from "../Modal";
import { StyledModalHeader } from "../Modal/ModalHeader";
import { StyledModalSection } from "../Modal/ModalSection";
import { StyledModalFooter } from "../Modal/ModalFooter";
import { Field } from "../InputField";

export const StyledLabel = styled.label<{ spaceAfter?: Props["spaceAfter"] }>`
  position: relative;
  margin-bottom: ${getSpacingToken};
`;

StyledLabel.defaultProps = {
  theme: defaultTheme,
};

export const StyledModalWrapper = styled.div<{
  $maxHeight?: Props["maxHeight"];
  isScrolled?: boolean;
}>`
  ${({ theme, isScrolled }) => css`
    ${StyledModalSection} {
      padding-left: 0;
      padding-right: 0;
    }

    ${Field} {
      margin-top: ${theme.orbit.spaceXSmall};
    }

    ${StyledModalFooter} {
      box-shadow: none;
    }

    ${StyledModalHeader} {
      position: sticky;
      padding-bottom: ${isScrolled && theme.orbit.spaceMedium};
      box-shadow: ${isScrolled && theme.orbit.boxShadowFixed};
      top: 0px;
    }

    ${ModalWrapperContent} {
      height: 100%;
    }
  `};
`;

StyledModalWrapper.defaultProps = {
  theme: defaultTheme,
};

export const StyledDropdown = styled.ul<{
  $maxHeight?: Props["maxHeight"];
  $maxWidth?: Props["maxWidth"];
  $hasLabel?: boolean;
}>`
  ${({ theme, $maxHeight, $maxWidth, $hasLabel }) => css`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    margin: 0;
    padding: 0;
    font-family: ${theme.orbit.fontFamily};
    box-sizing: border-box;
    width: 100%;
    background: ${theme.orbit.paletteWhiteNormal};
    z-index: 3;

    ${mq.largeMobile(css`
      position: absolute;
      ${left}: 0;
      overflow-y: scroll;
      max-height: ${$maxHeight};
      max-width: ${$maxWidth};
      box-shadow: ${theme.orbit.boxShadowAction};
      border-radius: ${theme.orbit.borderRadiusNormal};
      top: calc(
        ${parseInt(theme.orbit.heightInputNormal, 10)}px +
          ${$hasLabel
            ? parseInt(theme.orbit.spaceXLarge, 10)
            : parseInt(theme.orbit.spaceXSmall, 10)}px
      );
    `)}
  `};
`;

StyledDropdown.defaultProps = {
  theme: defaultTheme,
};

export const StyledCloseButton = styled.button<{ $disabled: Props["disabled"] }>`
  ${({ theme, $disabled }) => css`
  border: 0;
  background: transparent;
  cursor: ${$disabled ? "not-allowed" : "pointer"};
  pointer-events: ${$disabled ? "none" : "auto"};
  appearance: none;
  padding: 0;
  margin-${right}: ${theme.orbit.spaceXSmall};
`};
`;

StyledCloseButton.defaultProps = {
  theme: defaultTheme,
};
