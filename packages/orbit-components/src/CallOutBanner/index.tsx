import * as React from "react";
import styled, { css } from "styled-components";

import mq from "../utils/mediaQuery";
import defaultTheme from "../defaultTheme";
import Heading from "../Heading";
import Stack from "../Stack";
import Text from "../Text";
import { Props } from "./types";

const StyledCallOutBanner = styled.div<Partial<Props>>`
  ${({ theme, onClick }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background: ${theme.orbit.paletteWhite};
    border-radius: ${theme.orbit.borderRadiusSmall};
    padding: ${theme.orbit.spaceMedium};
    ${onClick
      ? css`
          box-shadow: ${theme.orbit.boxShadowAction};
          transition: box-shadow ${theme.orbit.durationFast} ease-in-out;
          cursor: pointer;
          :focus,
          :active,
          :hover {
            box-shadow: ${theme.orbit.boxShadowActionActive};
            outline: none;
          }
          border: 1px solid transparent;
        `
      : css`
          border: 1px solid ${theme.orbit.paletteCloudNormal};
        `};
    ${mq.largeMobile(css`
      flex-direction: row;
      padding: ${theme.orbit.spaceLarge};
    `)};
  `};
`;

StyledCallOutBanner.defaultProps = {
  theme: defaultTheme,
};

const StyledIllustration = styled.div`
  padding-bottom: ${({ theme }) => theme.orbit.spaceMedium};
  ${mq.largeMobile(css`
    padding-right: ${({ theme }) => theme.orbit.spaceLarge};
    padding-bottom: 0;
  `)};
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
  id,
}: Props) => (
  <StyledCallOutBanner
    onClick={onClick}
    tabIndex={(onClick || tabIndex) && (tabIndex || 0)}
    data-test={dataTest}
    id={id}
  >
    {illustration && <StyledIllustration>{illustration}</StyledIllustration>}
    <Stack spacing="medium">
      <Stack spacing="XSmall">
        <Stack spacing="XXSmall">
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
