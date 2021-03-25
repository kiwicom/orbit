// @flow
import styled, { css } from "styled-components";

import { left } from "../../../utils/rtl";
import defaultTheme from "../../../defaultTheme";

const renderStatus = (type, theme) => {
  if (type === "success") return theme.orbit.colorTextSuccess;
  if (type === "warning") return theme.orbit.colorTextWarning;
  if (type === "critical") return theme.orbit.colorTextCritical;

  return theme.orbit.paletteCloudNormalHover;
};

const StyledProgressLine: any = styled.span`
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
