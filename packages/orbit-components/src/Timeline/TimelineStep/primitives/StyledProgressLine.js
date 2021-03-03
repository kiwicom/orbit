// @flow
import styled, { css } from "styled-components";

import { left } from "../../../utils/rtl";
import defaultTheme from "../../../defaultTheme";

const renderStatus = (type, theme) => {
  if (type === "success") return theme.orbit.textForegroundSuccess;
  if (type === "warning") return theme.orbit.textForegroundWarning;
  if (type === "critical") return theme.orbit.textForegroundCritical;

  return theme.orbit.paletteCloudNormalHover;
};

const StyledProgressLine = styled.span`
  ${({ desktop, theme, status }) => css`
    ${!desktop && `position: absolute`};
    ${!desktop && `top: 18px`};
    width: ${desktop ? "50%" : "2px"};
    ${left}: 11px;
    background: ${renderStatus(status, theme)};
    height: ${desktop ? `2px` : `calc(100% + 4px)`};
  `}
`;

StyledProgressLine.defaultProps = {
  theme: defaultTheme,
};

export default StyledProgressLine;
