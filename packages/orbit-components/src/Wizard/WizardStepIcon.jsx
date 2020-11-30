// @flow
import * as React from "react";
import styled, { css } from "styled-components";
import transparentColor from "@kiwicom/orbit-design-tokens/lib/js/transparentColor";

import Text from "../Text";
import CheckCircle from "./CheckCircle";
import useTheme from "../hooks/useTheme";
import defaultTheme from "../defaultTheme";
import { WizardStepContext } from "./WizardContext";

export const StyledStepIconContainer: any = styled.div`
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
    box-shadow: ${$glow && `0 0 0 4px ${transparentColor(theme.orbit.paletteProductNormal, 20)}`};
    position: relative;
    top: -2px;

    svg {
      display: block;
    }
  `};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledStepIconContainer.defaultProps = {
  theme: defaultTheme,
};

const WizardStepIcon = (): React.Node => {
  const { index, status, isCompact, isActive } = React.useContext(WizardStepContext);
  const theme = useTheme();

  return (
    <StyledStepIconContainer $disabled={status === "disabled"} $glow={isActive && !isCompact}>
      {status === "completed" ? (
        <CheckCircle
          ariaLabel="completed"
          size="small"
          customColor={theme.orbit.paletteProductNormal}
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
