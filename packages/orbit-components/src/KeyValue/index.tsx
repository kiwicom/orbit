import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../defaultTheme";
import { SPACINGS } from "../utils/layout/consts";
import Text from "../Text";
import type { Props } from "./types";

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

const StyledWrapper = styled.div<{ spacing: Props["spacing"]; $direction: Props["direction"] }>`
  ${({ $direction, spacing, theme }) => css`
    display: flex;
    flex-direction: ${$direction};
    align-items: ${$direction !== "column" ? "center" : "flex-start"};
    gap: ${resolveSpacing({ spacing, theme })};
  `};
`;

StyledWrapper.defaultProps = {
  theme: defaultTheme,
};

const KeyValue = ({ dataTest, label, value, direction, size = "normal", icon, spacing }: Props) => {
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
export { Props };
