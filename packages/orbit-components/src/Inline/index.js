// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../defaultTheme";
import { DEVICES as DEVICES_CONSTS } from "../utils/mediaQuery/consts";
import media from "../utils/mediaQuery";
import { left } from "../utils/rtl";

import type { Props } from "./index";

const formatCSS = (key, value): string => {
  return `${key}: ${value};`;
};

const normalizeSpacing = (el, theme): string => {
  const tokens = {
    none: null,
    "xx-small": theme.orbit.spaceXXSmall,
    "x-small": theme.orbit.spaceXSmall,
    small: theme.orbit.spaceSmall,
    medium: theme.orbit.spaceMedium,
    large: theme.orbit.spaceLarge,
    "x-large": theme.orbit.spaceXLarge,
    "xx-large": theme.orbit.spaceXLarge,
    "xxx-large": theme.orbit.spaceXLarge,
  };
  if (el !== "none") {
    return `
      margin-${left({ theme })}: -${tokens[el]};
      margin-top: -${tokens[el]};

      & > *{
        margin-${left({ theme })}: ${tokens[el]};
        margin-top: ${tokens[el]};
      }
    `;
  }
  return "";
};

const normalize = object => ({ theme }) => {
  if (!object) {
    return null;
  }
  return Object.keys(object).reduce((acc, key) => {
    const val = object[key];

    if (key === "align") {
      return [...acc, formatCSS("justify-content", val)];
    }

    if (key === "justify") {
      return [...acc, formatCSS("align-items", val)];
    }

    if (key === "spacing") {
      return [...acc, normalizeSpacing(val, theme)];
    }

    if (val) {
      return [...acc, formatCSS(key, val)];
    }

    return acc;
  }, []);
};

const StyledInline = styled(({ as: Element, children, dataTest }) => (
  <Element data-test={dataTest}>{children}</Element>
))`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  // map to mediaQueries
  ${({ responsiveArray }) => {
    return Object.keys(responsiveArray).map(query => {
      const value = responsiveArray[query];
      // DEVICES_CONSTS[0] === "smallMobile"
      if (query !== DEVICES_CONSTS[0] && typeof value !== "undefined") {
        return media[query](css`
          ${normalize(value)}
        `);
      }
      // smallMobile is not in media obj so it needs to be rendered as a default
      return normalize(value);
    });
  }}
`;

StyledInline.defaultProps = {
  theme: defaultTheme,
};

const Inline = (props: Props) => {
  const {
    as = "div",
    mediumMobile,
    largeMobile,
    tablet,
    desktop,
    largeDesktop,
    children,
    dataTest,

    // Rest of the props serve as smallMobile default
    ...smallMobile
  } = props;
  const responsiveArray = { smallMobile, mediumMobile, largeMobile, tablet, desktop };
  return (
    <StyledInline as={as} dataTest={dataTest} responsiveArray={responsiveArray}>
      {children}
    </StyledInline>
  );
};

export default Inline;
