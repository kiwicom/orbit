// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../defaultTheme";
import media from "../utils/mediaQuery";
import { DEVICES as DEVICES_CONSTS } from "../utils/mediaQuery/consts";
import { WIDTH_AND_HEIGHT } from "./consts";

import type { Props } from "./index";

const jsxPropsMap = {
  flexWrap: "flex-wrap",
  flexShrink: "flex-shrink",
  flexGrow: "flex-grow",
  flexDirection: "flex-direction",
  alignItems: "align-items",
  justifyContent: "justify-content",
  textAlign: "text-align",
  maxWidth: "max-width",
  maxHeight: "max-height",
};

const isJsxProp = (key): boolean => {
  return Object.keys(jsxPropsMap).includes(key);
};

const formatCSS = (key, value): string => {
  return `${key}: ${value};`;
};

const firstToUpper = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const normalizeSpacing = (el, property, theme): string[] => {
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

  if (typeof el === "object") {
    return Object.keys(el).map(key => {
      const val = el[key];
      return formatCSS(`${property}-${key}`, tokens[val]);
    });
  }
  if (el !== "none") {
    return [formatCSS(property, tokens[el])];
  }
  return [];
};

const normalizeToken = (token, property, prefix, theme): string => {
  return formatCSS(property, theme.orbit[prefix + firstToUpper(token)]);
};

const normalizeSize = (val, property): string => {
  if (val === WIDTH_AND_HEIGHT.FULL) {
    return formatCSS(property, "100%");
  }
  return formatCSS(property, val);
};

const normalizeElevation = (val, key, theme): string[] => {};

const normalize = object => ({ theme }) => {
  if (!object) {
    return null;
  }
  return Object.keys(object).reduce((acc, key) => {
    const val = object[key];

    if (key === "padding" || key === "margin") {
      return [...acc, ...normalizeSpacing(val, key, theme)];
    }

    if (key === "color" || key === "background") {
      return [...acc, normalizeToken(val, key, "palette", theme)];
    }

    if (key === "height" || key === "width") {
      return [...acc, normalizeSize(val, key)];
    }

    if (key === "borderRadius") {
      return [...acc, normalizeToken(val, key, "border", theme)];
    }

    if (key === "elevation") {
      return [...acc, ...normalizeElevation(val, key, theme)];
    }

    if (isJsxProp(key)) {
      return [...acc, formatCSS(jsxPropsMap[key], val)];
    }

    if (val) {
      return [...acc, formatCSS(key, val)];
    }

    return acc;
  }, []);
};

const StyledBox = styled(({ className, as: Element, children, dataTest }) => (
  <Element className={className} data-test={dataTest}>
    {children}
  </Element>
))`
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

StyledBox.defaultProps = {
  theme: defaultTheme,
};

const Box = (props: Props) => {
  const {
    as = "div",
    mediumMobile,
    largeMobile,
    tablet,
    desktop,
    largeDesktop,
    children,
    dataTest,
    className,

    // Rest of the props serve as smallMobile default
    ...smallMobile
  } = props;

  const responsiveArray = { smallMobile, mediumMobile, largeMobile, tablet, desktop };

  return (
    <StyledBox as={as} dataTest={dataTest} className={className} responsiveArray={responsiveArray}>
      {children}
    </StyledBox>
  );
};
export default Box;
