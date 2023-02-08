import styled, { css } from "styled-components";

import { StyledText } from "../Text";
import defaultTheme from "../defaultTheme";
import mq from "../utils/mediaQuery";
import { defaultFocus } from "../utils/common";
import { left } from "../utils/rtl";
import { StyledLabel as RadioLabel } from "../Radio";
import { StyledLabel as CheckboxLabel } from "../Checkbox";

export const StyledChoiceTile = styled.div<{ selected?: boolean }>`
  ${({ theme, selected }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: ${theme.orbit.borderRadiusNormal};
    padding: ${theme.orbit.spaceSmall};
    box-shadow: ${theme.orbit.boxShadowAction};
    cursor: pointer;
    transition: box-shadow ${theme.orbit.durationFast} ease-in-out;
    ${selected && defaultFocus};

    ${mq.tablet(css`
      padding: ${theme.orbit.spaceMedium};
    `)}

    &:hover {
      box-shadow: ${theme.orbit.boxShadowActionActive};
    }
  `}
`;

StyledChoiceTile.defaultProps = {
  theme: defaultTheme,
};

export const StyledChoiceTileHeading = styled(StyledText)`
  ${({ theme }) => css`
    font-size: ${theme.orbit.fontSizeHeadingTitle3};
    font-weight: ${theme.orbit.fontWeightHeadingTitle3};
    line-height: ${theme.orbit.lineHeightHeadingTitle3};
  `}
`;

StyledChoiceTileHeading.defaultProps = {
  theme: defaultTheme,
};

export const StyledChoiceTileContent = styled.div<{ onlyCustomContent?: boolean }>`
  ${({ theme, onlyCustomContent }) => css`
    padding-top: ${!onlyCustomContent && theme.orbit.spaceSmall};
  `}
`;

StyledChoiceTileContent.defaultProps = {
  theme: defaultTheme,
};

export const StyledChoiceTileLabel = styled(StyledText)<{ selected?: boolean }>`
  ${({ theme, selected }) => css`
    font-size: ${theme.orbit.fontSizeTextLarge};
    font-weight: ${theme.orbit.fontWeightMedium};
    color: ${selected && theme.orbit.paletteBlueNormal};
  `}
`;

StyledChoiceTileLabel.defaultProps = {
  theme: defaultTheme,
};

export const StyledInputWrapper = styled.div<{ fullWidth?: boolean }>`
  ${({ theme, fullWidth }) => css`
    margin-${left}: ${!fullWidth && "auto"};
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: ${!fullWidth && "start"};
    line-height: ${theme.orbit.lineHeightTextLarge};
    justify-content: space-between;
    padding-top: ${theme.orbit.spaceSmall};
    gap: ${theme.orbit.spaceXSmall};

    ${CheckboxLabel},
    ${RadioLabel} {
      width: ${fullWidth && "auto"};
    }

    ${mq.tablet(css`
      padding: 0;
    `)}
  `}
`;

StyledInputWrapper.defaultProps = {
  theme: defaultTheme,
};
