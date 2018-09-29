// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import media from "../utils/media";
import defaultTokens from "../defaultTokens";
import { ALIGNS, JUSTIFY, DIRECTIONS, SPACINGS } from "./consts";
import getSpacingToken from "../common/getSpacingToken";
import { rtlSpacing } from "../utils/rtl";

import type { Props } from "./index";

const isDefined = prop => typeof prop !== "undefined";

// TODO: use tokens for spacings and RTL
const getMobileSpacing = ({ spacing, direction }) => {
  const tokens = {
    [SPACINGS.EXTRATIGHT]: "2px",
    [SPACINGS.TIGHT]: "4px",
    [SPACINGS.CONDENSED]: "8px",
    [SPACINGS.COMPACT]: "12px",
    [SPACINGS.NATURAL]: "16px",
    [SPACINGS.COMFY]: "20px",
    [SPACINGS.LOOSE]: "28px",
    [SPACINGS.EXTRALOOSE]: "36px",
  };
  const margin =
    direction === DIRECTIONS.COLUMN ? `0 0 ${tokens[spacing]} 0` : `0 ${tokens[spacing]} 0 0`;
  return css`
    & > * {
      margin: ${margin}!important;
      &:last-child {
        margin: 0 !important;
      }
    }
  `;
};

// TODO: use tokens for spacings and RTL
const getDesktopSpacing = ({ spacing, direction, desktop }) => {
  const finalDirection = desktop?.direction || direction;
  const finalSpacing = desktop?.spacing || spacing;
  const tokens = {
    [SPACINGS.EXTRATIGHT]: "2px",
    [SPACINGS.TIGHT]: "4px",
    [SPACINGS.CONDENSED]: "8px",
    [SPACINGS.COMPACT]: "12px",
    [SPACINGS.NATURAL]: "16px",
    [SPACINGS.COMFY]: "24px",
    [SPACINGS.LOOSE]: "32px",
    [SPACINGS.EXTRALOOSE]: "40px",
  };

  const margin =
    finalDirection === DIRECTIONS.COLUMN
      ? `0 0 ${tokens[finalSpacing]} 0`
      : `0 ${tokens[finalSpacing]} 0 0`;
  return css`
    & > * {
      margin: ${rtlSpacing(margin)}!important;
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

const getDisplay = inline => isDefined(inline) && (inline ? "inline-flex" : "flex");

const getDirection = direction =>
  direction && (direction === DIRECTIONS.ROW ? DIRECTIONS.ROW : DIRECTIONS.COLUMN);

const getWrap = wrap => isDefined(wrap) && (wrap ? "wrap" : "nowrap");

const getGrow = grow => isDefined(grow) && (grow ? "1" : "0");

const getShrink = shrink => isDefined(shrink) && (shrink ? "1" : "0");

const getWidth = inline => isDefined(inline) && (!inline && "100%");

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
  width: ${({ inline }) => getWidth(inline)};
  // all flex styles
  ${({ flex }) => flex && flexAttributes};
  // spacing between children
  ${getMobileSpacing};
  // spaceAfter for Stack
  margin-bottom: ${getSpacingToken};

  ${media.desktop`
    // spacing between children needs to set again - different spacings for desktop
    ${getDesktopSpacing};
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
      desktop && inline !== desktop.inline && getWidth(desktop.inline)};
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

  // when flex - use direction, otherwise column because it's block element
  const direction = flex ? DIRECTIONS.ROW : DIRECTIONS.COLUMN;

  return (
    <StyledStack
      flex={flex}
      direction={props.direction || direction}
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
