// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import media from "../utils/media";
import defaultTokens from "../defaultTokens";
import { ALIGNS, JUSTIFY, DIRECTIONS, SPACINGS, TOKENS } from "./consts";
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
  const margin =
    finalDirection === DIRECTIONS.COLUMN
      ? `0 0 ${tokens[finalType][finalSpacing]} 0`
      : `0 ${tokens[finalType][finalSpacing]} 0 0`;
  return css`
    & > * {
      margin: ${margin};
      ${!isDesktop &&
        css`
          &:last-child {
            margin: 0;
          }
        `};
    }
  `;
};

// getAlign is used for align-items and align-center
// you can't specify the height for the Stack, so it's a safe approach
const getAlign = align => {
  const tokens = {
    [ALIGNS.START]: "flex-start",
    [ALIGNS.END]: "flex-end",
    [ALIGNS.CENTER]: "center",
    [ALIGNS.STRETCH]: "stretch",
  };
  return align && tokens[align];
};

const getJustify = justify => {
  const tokens = {
    [JUSTIFY.START]: "flex-start",
    [JUSTIFY.END]: "flex-end",
    [JUSTIFY.CENTER]: "center",
    [JUSTIFY.BETWEEN]: "space-between",
    [JUSTIFY.AROUND]: "space-around",
  };
  return justify && tokens[justify];
};

const isDefined = prop => typeof prop !== "undefined";

const getDisplay = inline => isDefined(inline) && (inline ? "inline-flex" : "flex");

const getDirection = direction =>
  direction && (direction === DIRECTIONS.ROW ? DIRECTIONS.ROW : DIRECTIONS.COLUMN);

const getWrap = wrap => isDefined(wrap) && (wrap ? "wrap" : "nowrap");

const getGrow = grow => isDefined(grow) && (grow ? "1" : "0");

const getShrink = shrink => isDefined(shrink) && (shrink ? "1" : "0");

const flexAttributes = ({ inline, direction, wrap, grow, shrink, basis, justify, align }) => css`
  display: ${getDisplay(inline)};
  flex-direction: ${getDirection(direction)};
  flex-wrap: ${getWrap(wrap)};
  flex-grow: ${getGrow(grow)};
  flex-shrink: ${getShrink(shrink)};
  flex-basis: ${basis};
  justify-content: ${getJustify(justify)};
  align-content: ${getAlign(align)};
  align-items: ${getAlign(align)};
`;

const flexAttributesDesktop = ({
  desktop,
  inline,
  direction,
  wrap,
  grow,
  shrink,
  basis,
  justify,
  align,
}) => css`
  display: ${inline !== desktop.inline && getDisplay(desktop.inline)};
  flex-direction: ${getDirection(direction !== desktop.direction && desktop.direction)};
  flex-wrap: ${wrap !== desktop.wrap && getWrap(desktop.wrap)};
  flex-grow: ${grow !== desktop.grow && getGrow(desktop.grow)};
  flex-shrink: ${shrink !== desktop.shrink && getShrink(desktop.shrink)};
  flex-basis: ${basis !== desktop.basis && desktop.basis};
  justify-content: ${getJustify(justify !== desktop.justify && desktop.justify)};
  align-content: ${getAlign(align !== desktop.align && desktop.align)};
  align-items: ${getAlign(align !== desktop.align && desktop.align)};
`;

const StyledStack = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  // if not inline 100 %
  width: ${({ inline }) => !inline && "100%"};
  // all flex styles
  ${({ flex }) => flex && flexAttributes};
  // spacing between children
  ${getSpacing()};
  // spaceAfter for Stack
  margin-bottom: ${getSpacingToken};

  ${media.desktop`
    // spacing between children needs to set again - different spacings for desktop
    ${getSpacing(true)};
    // spaceAfter can be different for desktop
    ${({ desktop, theme, spaceAfter }) => {
      if (desktop) {
        const { spaceAfter: desktopSpaceAfter } = desktop;
        return (
          isDefined(desktopSpaceAfter) &&
          spaceAfter !== desktopSpaceAfter &&
          css`
            margin-bottom: ${getSpacingToken({ spaceAfter: desktopSpaceAfter, theme })};
          `
        );
      }
      return null;
    }};
    // if not inline 100 %
    width: ${({ inline, desktop }) =>
      desktop && inline !== desktop.inline && !desktop.inline && "100%"};
    // all other styles
    ${({ desktop, flex }) => desktop && flex && flexAttributesDesktop};
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
    justify = JUSTIFY.START,
    grow = true,
    wrap = false,
    shrink = false,
    basis,
    desktop,
    spaceAfter,
    children,
  } = props;

  // turn on FLEX automatically or manually with prop flex
  const flex =
    props.flex ||
    Object.keys(props)
      .map(item => !(item === "children" || item === "spaceAfter" || item === "spacing"))
      .includes(true);

  return (
    <StyledStack
      flex={flex}
      direction={direction}
      align={align}
      justify={justify}
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
