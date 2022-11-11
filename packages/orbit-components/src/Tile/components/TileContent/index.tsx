import * as React from "react";
import styled, { css } from "styled-components";

import mq from "../../../utils/mediaQuery";
import defaultTheme from "../../../defaultTheme";

interface Props {
  noPadding: boolean;
  withPointer?: boolean;
  withBorder?: boolean;
  useMargins?: boolean;
}

const getPadding = ({
  noPadding,
  useMargins,
  theme,
}: {
  noPadding?: Props["noPadding"];
  useMargins?: Props["useMargins"];
  theme: typeof defaultTheme;
}) => {
  if (noPadding) return null;

  if (!useMargins) {
    return css`
      padding: ${theme.orbit.spaceMedium};

      ${mq.largeMobile(css`
        padding: ${theme.orbit.spaceLarge};
      `)}
    `;
  }

  return css`
    padding: ${theme.orbit.spaceMedium} 0;
    margin: 0 ${theme.orbit.spaceMedium};

    ${mq.largeMobile(css`
      padding: ${theme.orbit.spaceLarge} 0;
      margin: 0 ${theme.orbit.spaceLarge};
    `)}
  `;
};

const StyledTileContent = styled.div<Props>`
  ${({ theme, withBorder, withPointer }) => css`
    font-size: ${theme.orbit.fontSizeTextNormal};
    line-height: ${theme.orbit.lineHeightTextNormal};
    ${withPointer &&
    css`
      cursor: pointer;
    `};
    ${withBorder &&
    css`
      border-top: 1px solid ${theme.orbit.paletteCloudNormal};
    `};
    ${getPadding};
  `}
`;

StyledTileContent.defaultProps = {
  theme: defaultTheme,
};

const TileContent = React.forwardRef<HTMLDivElement, React.PropsWithChildren<Props>>(
  ({ children, noPadding, withPointer, withBorder, useMargins = true }, ref) => {
    return (
      <StyledTileContent
        noPadding={noPadding}
        ref={ref}
        withPointer={withPointer}
        withBorder={withBorder}
        useMargins={useMargins}
      >
        {children}
      </StyledTileContent>
    );
  },
);

export default TileContent;
