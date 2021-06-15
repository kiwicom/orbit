// @flow
import * as React from "react";
import styled, { css } from "styled-components";
import convertHexToRgba from "@kiwicom/orbit-design-tokens/lib/convertHexToRgba";

import Text from "../Text";
import CheckCircle from "./CheckCircle";
import useTheme from "../hooks/useTheme";
import defaultTheme from "../defaultTheme";
import { WizardStepContext } from "./WizardContext";

const StyledContainer = styled.div`
  ${({ theme, disabled, glow }) => css`
    width: ${theme.orbit.widthIconSmall};
    height: ${theme.orbit.heightIconSmall};
    border-radius: 50%;
    background: ${theme.orbit.paletteProductNormal};
    ${disabled &&
    css`
      background: ${theme.orbit.paletteCloudNormalHover};
    `}
    ${glow &&
    css`
      box-shadow: 0 0 0 4px ${convertHexToRgba(theme.orbit.paletteProductNormal, 20)};
    `};

    svg {
      display: block;
    }
  `};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledContainer.defaultProps = {
  theme: defaultTheme,
};

const WizardStepIcon = (): React.Node => {
  const { index, status, isCompact, isActive } = React.useContext(WizardStepContext);
  const theme = useTheme();

  return (
    <StyledContainer disabled={status === "disabled"} glow={isActive && !isCompact}>
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
    </StyledContainer>
  );
};

export default WizardStepIcon;
