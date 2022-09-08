import styled, { css } from "styled-components";

import { Type } from "../types";
import { left } from "../../../utils/rtl";
import defaultTheme from "../../../defaultTheme";

const renderStatus = ({ type, theme }: { type?: Type; theme: typeof defaultTheme }): string => {
  if (!type) return "";

  if (type === "success") return theme.orbit.colorTextSuccess;
  if (type === "warning") return theme.orbit.colorTextWarning;
  if (type === "critical") return theme.orbit.colorTextCritical;

  return theme.orbit.paletteCloudNormalHover;
};

const StyledProgressLine = styled.span<{ status?: Type; desktop?: boolean }>`
  ${({ desktop, theme, status }) => css`
    ${!desktop && `position: absolute`};
    ${!desktop && `top: 18px`};
    width: ${desktop ? "50%" : "2px"};
    ${left}: 11px;
    background: ${renderStatus({ type: status, theme })};
    height: ${desktop ? `2px` : `calc(100% + 4px)`};
  `}
`;

StyledProgressLine.defaultProps = {
  theme: defaultTheme,
};

export default StyledProgressLine;
