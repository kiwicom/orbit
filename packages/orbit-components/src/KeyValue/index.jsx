// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../defaultTheme";
import { SPACINGS } from "../utils/layout/consts";
import Text from "../Text";

import type { Props } from ".";

const getSpacing = ({ theme }) => ({
  [SPACINGS.XXXSMALL]: theme.orbit.spaceXXXSmall,
  [SPACINGS.XXSMALL]: theme.orbit.spaceXXSmall,
  [SPACINGS.XSMALL]: theme.orbit.spaceXSmall,
  [SPACINGS.SMALL]: theme.orbit.spaceSmall,
  [SPACINGS.MEDIUM]: theme.orbit.spaceMedium,
  [SPACINGS.LARGE]: theme.orbit.spaceLarge,
  [SPACINGS.XLARGE]: theme.orbit.spaceXLarge,
  [SPACINGS.XXLARGE]: theme.orbit.spaceXXLarge,
});

const resolveSpacing = ({ spacing, theme }) => getSpacing({ theme })[spacing];

const StyledWrapper = styled.div`
  ${({ $direction, spacing, theme }) => css`
    display: flex;
    flex-direction: ${$direction};
    align-items: ${$direction !== "column" ? "center" : "flex-start"};
    gap: ${resolveSpacing({ spacing, theme })};
  `};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledWrapper.defaultProps = {
  theme: defaultTheme,
};

const KeyValue = ({
  dataTest,
  label,
  value,
  spacing,
  icon,
  size = "normal",
  direction = "column",
}: Props): React.Node => {
  return (
    <StyledWrapper data-test={dataTest} $direction={direction} spacing={spacing}>
      {label && (
        <Text type="secondary" size={size === "normal" ? "small" : "normal"}>
          {label}
        </Text>
      )}
      {icon}
      <Text size={size} weight="bold">
        {value}
      </Text>
    </StyledWrapper>
  );
};

export default KeyValue;
