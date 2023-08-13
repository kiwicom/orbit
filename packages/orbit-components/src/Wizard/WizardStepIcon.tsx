import * as React from "react";
import styled, { css } from "styled-components";
import { convertHexToRgba } from "@kiwicom/orbit-design-tokens";

import Text from "../Text";
import Check from "../icons/Check";
import useTheme from "../hooks/useTheme";
import defaultTheme from "../defaultTheme";
import { WizardStepContext } from "./WizardContext";

export const StyledStepIconContainer = styled.div<{ $disabled?: boolean; $glow?: boolean }>`
  ${({ theme, $disabled, $glow }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: ${theme.orbit.borderRadiusCircle};
    background: ${$disabled
      ? theme.orbit.paletteCloudNormalHover
      : theme.orbit.paletteProductNormal};
    box-shadow: ${$glow && `0 0 0 4px ${convertHexToRgba(theme.orbit.paletteProductNormal, 20)}`};
    position: relative;
    top: -2px;

    svg {
      display: block;
    }
  `};
`;

StyledStepIconContainer.defaultProps = {
  theme: defaultTheme,
};

const WizardStepIcon = ({ isCompleted }: { isCompleted?: boolean }) => {
  const { index, status, isCompact, isActive } = React.useContext(WizardStepContext);
  const theme = useTheme();

  return (
    <StyledStepIconContainer $disabled={status === "disabled"} $glow={isActive && !isCompact}>
      {isCompleted || status === "completed" ? (
        <Check
          size="small"
          customColor={
            isCompleted && status !== "completed" && status !== "available"
              ? theme.orbit.paletteInkDark
              : theme.orbit.paletteWhiteNormal
          }
        />
      ) : (
        <Text
          as="div"
          type={status === "disabled" ? "primary" : "white"}
          size="small"
          align="center"
        >
          {typeof index === "number" ? index + 1 : null}
        </Text>
      )}
    </StyledStepIconContainer>
  );
};

export default WizardStepIcon;
