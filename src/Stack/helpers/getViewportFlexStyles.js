// @flow
import { css } from "styled-components";

import getJustify from "./getJustify";
import getDirection from "./getDirection";
import getWidth from "./getWidth";
import getDisplay from "./getDisplay";
import getShrink from "./getShrink";
import getWrap from "./getWrap";
import getGrow from "./getGrow";
import getAlign from "./getAlign";
import getBasis from "./getBasis";
import getSpacingToken from "../../common/getSpacingToken/index";
import type { GetViewportFlexStyles } from "./getViewportFlexStyles";

const getViewportFlexStyles: GetViewportFlexStyles = viewport => props => {
  const { flex, theme } = props;
  const { inline, direction, wrap, grow, shrink, basis, justify, align, spaceAfter } = props[
    viewport
  ];

  return css`
    ${flex &&
      css`
        display: ${getDisplay(inline)};
        flex-direction: ${getDirection(direction)};
        flex-wrap: ${getWrap(wrap)};
        flex-grow: ${getGrow(grow)};
        flex-shrink: ${getShrink(shrink)};
        flex-basis: ${getBasis(basis)};
        justify-content: ${getJustify(justify)};
        align-content: ${getAlign(align)};
        align-items: ${getAlign(align)};
      `};
    width: ${getWidth(inline)};
    margin-bottom: ${getSpacingToken({ spaceAfter, theme })};
  `;
};

export default getViewportFlexStyles;
