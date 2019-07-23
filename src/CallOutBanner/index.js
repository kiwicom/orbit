// @flow
import * as React from "react";
import styled, { css } from "styled-components";
import convertHexToRgba from "@kiwicom/orbit-design-tokens/lib/convertHexToRgba";

import defaultTheme from "../defaultTheme";
import Heading from "../Heading";
import Stack from "../Stack";
import Text from "../Text";

import type { Props } from "./index";

const StyledCallOutBanner = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  background: ${({ theme }) => theme.orbit.paletteWhite}
  border-radius: ${({ theme }) => theme.orbit.borderRadiusSmall};
  padding: ${({ theme }) => theme.orbit.spaceLarge};
  ${({ onClick }) =>
    onClick
      ? css`
          box-shadow: 0 0 2px 0 ${({ theme }) => convertHexToRgba(theme.orbit.paletteInkNormal, 16)},
            0 1px 4px 0 ${({ theme }) => convertHexToRgba(theme.orbit.paletteInkNormal, 12)};
          transition: box-shadow ${({ theme }) => theme.orbit.durationFast} ease-in-out;
          cursor: pointer;
          :focus,
          :active,
          :hover {
            box-shadow: 0 1px 4px 0
                ${({ theme }) => convertHexToRgba(theme.orbit.paletteInkNormal, 16)},
              0 4px 8px 0 ${({ theme }) => convertHexToRgba(theme.orbit.paletteInkNormal, 12)};
            outline: none;
          }
          border: 1px solid transparent;
        `
      : css`
          border: 1px solid rgb(232, 237, 241);
        `};
`;

StyledCallOutBanner.defaultProps = {
  theme: defaultTheme,
};

const StyledIllustration = styled.div`
  padding-right: ${({ theme }) => theme.orbit.spaceLarge};
`;

StyledIllustration.defaultProps = {
  theme: defaultTheme,
};

const CallOutBanner = ({
  children,
  illustration,
  actions,
  title,
  onClick,
  tabIndex,
  description,
  dataTest,
}: Props) => (
  <StyledCallOutBanner
    onClick={onClick}
    tabIndex={(onClick || tabIndex) && (tabIndex || 0)}
    data-test={dataTest}
  >
    {illustration && <StyledIllustration>{illustration}</StyledIllustration>}
    <Stack spacing="natural">
      <Stack spacing="condensed">
        <Stack spacing="tight">
          {title && <Heading type="title3">{title}</Heading>}
          {description && <Text>{description}</Text>}
        </Stack>
        {children}
      </Stack>
      {actions}
    </Stack>
  </StyledCallOutBanner>
);

export default CallOutBanner;
