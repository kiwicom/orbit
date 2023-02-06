import React from "react";
import styled, { css } from "styled-components";
import { convertHexToRgba } from "@kiwicom/orbit-design-tokens";

import { useTabs, useTab } from "../../TabContext";
import type { Props } from "./types";
import { TYPE_OPTIONS } from "./consts";
import defaultTheme from "../../../defaultTheme";

const getColorBackground = ({ type, theme }) => {
  if (type === TYPE_OPTIONS.MEDIUM) return theme.orbit.backgroundColorTabBundleMedium;
  if (type === TYPE_OPTIONS.BASIC) return theme.orbit.backgroundColorTabBundleBasic;

  return theme.orbit.backgroundColorTabBundleTop;
};

const getBackgroundType = (state?: "hover" | "active") => ({
  theme,
  $type,
}: {
  theme: typeof defaultTheme;
  $type: Props["type"];
}) => {
  if (state === "hover") {
    if ($type === TYPE_OPTIONS.MEDIUM) return convertHexToRgba(theme.orbit.paletteBundleMedium, 8);
    if ($type === TYPE_OPTIONS.BASIC) return convertHexToRgba(theme.orbit.paletteBundleBasic, 8);
    return theme.orbit.paletteWhiteHover;
  }

  if (state === "active") {
    if ($type === TYPE_OPTIONS.MEDIUM) return convertHexToRgba(theme.orbit.paletteBundleMedium, 12);
    if ($type === TYPE_OPTIONS.BASIC) return convertHexToRgba(theme.orbit.paletteBundleBasic, 12);

    return theme.orbit.paletteWhiteActive;
  }

  return "none";
};

const StyledTab = styled.button<{
  $type: Props["type"];
  active?: Props["active"];
  compact: Props["compact"];
}>`
  ${({ theme, active, $type }) => css`
    display: flex;
    border: 0;
    position: relative;
    appearance: none;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-family: ${theme.orbit.fontFamily};
    cursor: pointer;
    padding: 10px 16px;
    background: ${getBackgroundType()};
    font-weight: ${theme.orbit.fontWeightMedium};
    font-size: ${theme.orbit.fontSizeTextLarge};
    border-radius: ${theme.orbit.borderRadiusNormal} ${theme.orbit.borderRadiusNormal} 0 0;
    transition: background ${theme.orbit.durationFast} ease-in-out;
    border-bottom-width: ${active && "2px"};
    border-style: solid;
    border-image-slice: 1;
    border-image-source: ${active &&
    $type !== TYPE_OPTIONS.DEFAULT &&
    getColorBackground({ type: $type, theme })};

    border-bottom: ${active &&
    $type === TYPE_OPTIONS.DEFAULT &&
    `2px solid ${theme.orbit.paletteProductNormal}`};

    &:hover {
      background: ${getBackgroundType("hover")};
    }

    &:focus,
    &:active {
      background: ${getBackgroundType("active")};
    }
  `};
`;

StyledTab.defaultProps = {
  theme: defaultTheme,
};

const StyledTabText = styled.span<{ type: Props["type"] }>`
  ${({ theme, type }) => css`
    color: ${theme.orbit.paletteInkDark};

    ${type !== TYPE_OPTIONS.DEFAULT &&
    css`
      background: ${getColorBackground};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    `};
  `};
`;

StyledTabText.defaultProps = {
  theme: defaultTheme,
};

const Tab = ({ children, dataTest, type = TYPE_OPTIONS.DEFAULT }: Props) => {
  const { setSelected, selected } = useTabs();
  const { index, compact } = useTab();

  return (
    <StyledTab
      data-test={dataTest}
      onClick={() => setSelected(index)}
      type="button"
      $type={type}
      role="tab"
      aria-selected={selected === index}
      aria-controls={`panel-${index}`}
      compact={compact}
      active={selected === index}
    >
      <StyledTabText type={type}>{children}</StyledTabText>
    </StyledTab>
  );
};

export default Tab;
