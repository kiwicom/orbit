import * as React from "react";
import styled, { css } from "styled-components";

import { usePart } from "./context";
import AlertCircle from "../../icons/AlertCircle";
import defaultTheme from "../../defaultTheme";
import type { Status } from "../types";
import StarFull from "../../icons/StarFull";
import CircleEmpty from "../../icons/CircleSmallEmpty";
import CircleSmall from "../../icons/CircleSmall";

interface Props {
  type?: Status;
  children?: React.ReactNode;
}

const lineMixin = css`
  content: "";
  position: absolute;
  height: calc(50% + 9px);
  z-index: -1;
`;

const IconStyled = styled.div<{
  index: number;
  last: boolean;
  count: number;
  isPrevHidden: boolean;
  isHidden: boolean;
}>`
  ${({ theme, index, last, count, isPrevHidden, isHidden }) => css`
    display: flex;
    justify-content: center;
    z-index: 1;
    svg {
      background: ${last || index === 0 ? "transparent" : theme.orbit.paletteWhite};
      overflow: hidden;
    }
    ${index > 0 &&
    !last &&
    css`
      padding: ${theme.orbit.spaceXXSmall} 0;
      background: radial-gradient(
        farthest-side,
        ${theme.orbit.paletteWhite},
        ${theme.orbit.paletteWhite},
        ${theme.orbit.paletteWhite},
        transparent
      );
    `}

    ${index > 0 &&
    count > 0 &&
    css`
      &:before {
        top: ${last && isPrevHidden ? "-14px" : "-9px"};
        border: 1px ${isPrevHidden ? "dashed" : "solid"} ${theme.orbit.paletteCloudNormalActive};
        ${lineMixin};
      }
    `};

    ${!last &&
    count > 0 &&
    css`
      &:after {
        bottom: ${isHidden ? "4px" : "-9px"};
        border: 1px ${isHidden ? "dashed" : "solid"} ${theme.orbit.paletteCloudNormalActive};
        ${lineMixin};
      }
    `};
  `}
`;

IconStyled.defaultProps = {
  theme: defaultTheme,
};

const RenderedIcon = ({
  isPrevHidden,
  isLast,
  isHidden,
  children,
  type,
}: {
  isHidden?: boolean;
  isPrevHidden: boolean;
  isLast: boolean;
  children: React.ReactNode;
  type: Props["type"];
}): JSX.Element => {
  if (type && children !== null)
    return <AlertCircle size="small" color={type === "neutral" ? "primary" : type} />;
  if (isHidden) return <StarFull color="warning" size="small" />;
  if (isPrevHidden && isLast) return <CircleEmpty size="small" color="tertiary" />;

  return <>{children || <CircleSmall size="small" color="secondary" />}</>;
};

const ItinerarySegmentStopIcon = ({ type, children }: Props) => {
  const { index, last, isPrevHidden, isHidden, count } = usePart();

  return (
    <IconStyled
      index={index}
      last={last}
      isPrevHidden={isPrevHidden}
      isHidden={isHidden}
      count={count}
    >
      <RenderedIcon type={type} isPrevHidden={isPrevHidden} isLast={last} isHidden={isHidden}>
        {children}
      </RenderedIcon>
    </IconStyled>
  );
};

export default ItinerarySegmentStopIcon;
