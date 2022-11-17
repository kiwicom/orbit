import styled, { css } from "styled-components";

import type { Type } from "../types";
import { left } from "../../../utils/rtl";
import defaultTheme from "../../../defaultTheme";
import { renderStatus } from "./helpers";

const getBorderStyle = ({ desktop, status, nextStatus, theme, last, prevStatus }) => {
  if (desktop) {
    if (status && !nextStatus && !last) {
      return css`
        border-image-slice: 1;
        border-image-source: linear-gradient(
          to right,
          ${renderStatus(prevStatus, theme)},
          ${renderStatus(status, theme)}
        );
      `;
    }
  }

  if (status && !nextStatus && !last) {
    return css`
      border-image-slice: 1;
      border-image-source: linear-gradient(
        to bottom,
        ${renderStatus(prevStatus, theme)},
        ${renderStatus(status, theme)}
      );
    `;
  }

  return css`
    border-color: ${renderStatus(status, theme)};
  `;
};

const StyledProgressLine = styled.span<{
  desktop?: boolean;
  status?: Type;
  nextStatus?: Type;
  prevStatus?: Type;
  last?: boolean;
}>`
  ${({ desktop, theme, status, nextStatus, prevStatus, last }) => css`
    position: ${!desktop && "absolute"};
    top: ${!desktop && "15px"};
    border-width: 1px;
    border-style: ${!nextStatus && !last ? "dashed" : "solid"};
    ${getBorderStyle({ desktop, theme, status, nextStatus, prevStatus, last })};
    ${left}: ${!desktop && "11px"};
    width: ${desktop && "50%"};
    height: ${!desktop && `calc(100% + 2px)`};
  `}
`;

StyledProgressLine.defaultProps = {
  theme: defaultTheme,
};

export default StyledProgressLine;
