// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import media from "../utils/media";
import defaultTokens from "../defaultTokens";
import { ALIGNS, DIRECTIONS, SPACINGS, TOKENS } from "./consts";
import { StyledButton } from "../Button";
import getSpacingToken from "../common/getSpacingToken";

import type { Props } from "./index";

// TODO: use tokens for spacings
const getSpacing = (isDesktop = false) => ({ spacing, direction, desktop }) => () => {
  const finalSpacing = (isDesktop && desktop && desktop.spacing) || spacing;
  const finalDirection = (isDesktop && desktop && desktop.direction) || direction;
  const finalType = isDesktop ? TOKENS.SPACING : TOKENS.MOBILESPACING;

  const tokens = {
    [TOKENS.SPACING]: {
      [SPACINGS.EXTRATIGHT]: "2px",
      [SPACINGS.TIGHT]: "4px",
      [SPACINGS.CONDENSED]: "8px",
      [SPACINGS.COMPACT]: "12px",
      [SPACINGS.NATURAL]: "16px",
      [SPACINGS.COMFY]: "24px",
      [SPACINGS.LOOSE]: "32px",
      [SPACINGS.EXTRALOOSE]: "40px",
    },
    [TOKENS.MOBILESPACING]: {
      [SPACINGS.EXTRATIGHT]: "2px",
      [SPACINGS.TIGHT]: "4px",
      [SPACINGS.CONDENSED]: "8px",
      [SPACINGS.COMPACT]: "12px",
      [SPACINGS.NATURAL]: "16px",
      [SPACINGS.COMFY]: "20px",
      [SPACINGS.LOOSE]: "28px",
      [SPACINGS.EXTRALOOSE]: "36px",
    },
  };

  // TODO: rtl here
  return finalDirection === DIRECTIONS.COLUMN
    ? `0 0 ${tokens[finalType][finalSpacing]} 0`
    : `0 ${tokens[finalType][finalSpacing]} 0 0`;
};

const getAlign = (name = ALIGNS.START, self = false) => {
  const align = self && name === ALIGNS.EVEN ? ALIGNS.START : name;
  const tokens = {
    [ALIGNS.START]: "flex-start",
    [ALIGNS.END]: "flex-end",
    [ALIGNS.CENTER]: "center",
    [ALIGNS.EVEN]: "space-between",
  };

  return tokens[align];
};

const isDefined = property => ({ flex, desktop }) =>
  flex && desktop && typeof property !== "undefined";

const StyledStack = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  display: ${({ inline, flex }) => flex && (inline ? "inline-flex" : "flex")};
  flex-direction: ${({ direction, flex }) =>
    flex && (direction === DIRECTIONS.ROW ? "row" : "column")};
  flex-wrap: ${({ wrap, flex }) => flex && (wrap ? "wrap" : "nowrap")};
  flex-grow: ${({ grow, flex }) => flex && (grow ? "1" : "0")};
  flex-shrink: ${({ shrink, flex }) => flex && (shrink ? "1" : "0")};
  flex-basis: ${({ basis, flex }) => flex && basis};
  justify-content: ${({ flex, align, direction }) =>
    flex && (direction === DIRECTIONS.ROW || align) && getAlign(align)};
  align-content: ${({ align, direction, flex }) =>
    flex && (direction === DIRECTIONS.COLUMN || align) && getAlign(align)};
  align-items: ${({ align, direction, flex }) =>
    flex && (direction === DIRECTIONS.COLUMN || align) && getAlign(align)};
  margin-bottom: ${getSpacingToken};
  align-self: ${({ inline, flex }) => flex && !inline && "stretch"};

  & > * {
    margin: ${({ align }) => align !== ALIGNS.EVEN && getSpacing()};
    &:last-child {
      margin: 0;
    }
  }

  // TODO other block components
  & > ${StyledButton} {
    align-self: ${({ align }) => getAlign(align, true)};
  }

  ${media.desktop`
      & > * {
        margin: ${getSpacing(true)};
      }
      
      // TODO other block components
      & > ${StyledButton} {
        align-self: ${({ desktop, align }) =>
          desktop &&
          desktop.align !== align &&
          getAlign(desktop.align === ALIGNS.EVEN ? ALIGNS.START : desktop.align)};
      }
      
      ${({ desktop }) =>
        desktop &&
        css`
          display: ${({ inline }) =>
            isDefined(desktop.inline) &&
            inline !== desktop.inline &&
            (desktop.inline ? "inline-flex" : "flex")};
          flex-direction: ${({ direction }) =>
            isDefined(desktop.direction) &&
            direction !== desktop.direction &&
            (desktop.direction === DIRECTIONS.ROW ? "row" : "column")};
          flex-wrap: ${({ wrap }) =>
            isDefined(desktop.wrap) && wrap !== desktop.wrap && (desktop.wrap ? "wrap" : "nowrap")};
          flex-grow: ${({ grow }) =>
            isDefined(desktop.grow) && grow !== desktop.grow && (desktop.grow ? "1" : "0")};
          flex-shrink: ${({ shrink }) =>
            isDefined(desktop.shrink) && shrink !== desktop.shrink && (desktop.shrink ? "1" : "0")};
          flex-basis: ${({ basis }) =>
            isDefined(desktop.basis) && basis !== desktop.basis && desktop.basis};
          justify-content: ${({ flex, align, direction }) =>
            flex &&
            desktop &&
            desktop.direction &&
            (direction !== desktop.direction || align !== desktop.align) &&
            desktop.direction === DIRECTIONS.ROW &&
            getAlign(desktop.align || align)};
          align-content: ${({ align, direction, flex }) =>
            flex &&
            desktop &&
            desktop.direction &&
            (direction !== desktop.direction || align !== desktop.align) &&
            desktop.direction === DIRECTIONS.COLUMN &&
            getAlign(desktop.align || align)};
          align-items: ${({ align, direction, flex }) =>
            flex &&
            desktop &&
            desktop.direction &&
            (direction !== desktop.direction || align !== desktop.align) &&
            desktop.direction === DIRECTIONS.COLUMN &&
            getAlign(desktop.align || align)};
        `}
    `};
`;

StyledStack.defaultProps = {
  theme: defaultTokens,
};

const Stack = (props: Props) => {
  const {
    inline = false,
    direction = DIRECTIONS.COLUMN,
    spacing = SPACINGS.NATURAL,
    align = ALIGNS.START,
    grow = true,
    wrap = false,
    shrink = false,
    basis,
    desktop,
    spaceAfter,
    children,
  } = props;

  const flex = Object.keys(props)
    .map(item => !(item === "children" || item === "spaceAfter" || item === "spacing"))
    .includes(true);

  return (
    <StyledStack
      flex={flex}
      direction={direction}
      align={align}
      wrap={wrap}
      grow={grow}
      basis={basis}
      inline={inline}
      shrink={shrink}
      spacing={spacing}
      spaceAfter={spaceAfter}
      desktop={desktop}
    >
      {children}
    </StyledStack>
  );
};
export default Stack;
