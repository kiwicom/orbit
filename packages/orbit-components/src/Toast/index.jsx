// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import getSpacingToken from "../common/getSpacingToken";
import mq from "../utils/mediaQuery";
import Stack from "../Stack";
import defaultTheme from "../defaultTheme";
import Text from "../Text";
import { resolveFadeAnimations, lightAnimation } from "./helpers";

import type { Props } from ".";

const StyledWrapper = styled(({ className, children, dataTest }) => (
  <div className={className} data-test={dataTest}>
    {children}
  </div>
))`
  ${({ offsetX, offsetY, theme }) => css`
    position: absolute;
    left: 50%;
    top: ${offsetY};
    z-index: ${theme.orbit.zIndexOnTheTop};
    transform: translateX(${offsetX});
    margin-bottom: ${getSpacingToken};
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledWrapper.defaultProps = {
  theme: defaultTheme,
};

const StyledInnerWrapper = styled.div`
  ${({ theme, animate }) => css`
    position: relative;
    cursor: pointer;
    border-radius: ${theme.orbit.borderRadiusLarge};
    background: ${theme.orbit.paletteInkNormal};
    padding: ${theme.orbit.spaceXSmall};
    width: 100%;
    overflow: hidden;
    will-change: transform;
    ${resolveFadeAnimations};

    svg {
      min-height: 20px;
    }

    ${mq.largeMobile(css`
      max-width: 360px;
      padding: ${theme.orbit.spaceSmall};
    `)}

    ${
      animate &&
      css`
        &:before {
          content: "";
          will-change: transform;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: ${theme.orbit.paletteWhite};
          opacity: 0.1;
          animation: ${lightAnimation} 5s linear;
        }
      `
    }
    }
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledInnerWrapper.defaultProps = {
  theme: defaultTheme,
};

const Toast = ({
  dataTest,
  spaceAfter,
  children,
  iconLeft,
  animate = true,
  offsetX = "-50%",
  offsetY = "0",
}: Props): React.Node => {
  const [isHovered, setHovered] = React.useState(false);

  return (
    <StyledWrapper dataTest={dataTest} offsetX={offsetX} offset={offsetY} spaceAfter={spaceAfter}>
      <StyledInnerWrapper
        animate={animate}
        isHovered={isHovered}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Stack flex shrink spacing="XSmall">
          {iconLeft}
          <Text type="white">{children}</Text>
        </Stack>
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

export default Toast;
