// @flow
import styled, { css } from "styled-components";

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

const StyledProgressLine: any = styled.span`
  ${({ desktop, theme, status, nextStatus, prevStatus, last }) => css`
    position: ${!desktop && "absolute"};
    top: ${!desktop && "18px"};
    border-width: 1px;
    border-style: ${!nextStatus && !last ? "dashed" : "solid"};
    ${getBorderStyle({ desktop, theme, status, nextStatus, prevStatus, last })};
    ${left}: ${!desktop && "11px"};
    width: ${desktop && "50%"};
    height: ${!desktop && `calc(100% + 2px)`};
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledProgressLine.defaultProps = {
  theme: defaultTheme,
};

export default StyledProgressLine;
