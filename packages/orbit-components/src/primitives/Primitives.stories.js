// @flow
import * as React from "react";
import { text, select, object, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import ButtonPrimitiveComponent from "./ButtonPrimitive";
import * as Icons from "../icons";
import { SIZE_OPTIONS } from "./IllustrationPrimitive/consts";
import SPACINGS_AFTER from "../common/getSpacingToken/consts";
import BadgePrimitiveComponent from "./BadgePrimitive";
import IllustrationPrimitiveComponent from "./IllustrationPrimitive";

const getIcons = (name, defaultIcon) => select(name, [null, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

export default {
  title: "Primitives",
};

export const BadgePrimitive = (): React.Node => {
  const Icon = getIcon(getIcons("icon", "Airplane"));
  const background = text("Background", "linear-gradient(#fd1d1d, #ffae28)");
  const foregroundColor = text("ForegroundColor", "#fff");
  const borderColor = text("borderColor", null);

  return (
    <BadgePrimitiveComponent
      background={background}
      foregroundColor={foregroundColor}
      icon={Icon && <Icon />}
      borderColor={borderColor}
    >
      BadgePrimitive
    </BadgePrimitiveComponent>
  );
};

BadgePrimitive.story = {
  name: "BadgePrimitive",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};

export const IllustrationPrimitive = (): React.Node => {
  const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.MEDIUM);
  const name = "Accommodation";
  const dataTest = text("dataTest", "test");
  const spaceAfter = select("spaceAfter", [null, ...Object.values(SPACINGS_AFTER)]);
  return (
    <IllustrationPrimitiveComponent
      size={size}
      name={name}
      dataTest={dataTest}
      spaceAfter={spaceAfter}
    />
  );
};

IllustrationPrimitive.story = {
  name: "IllustrationPrimitive",

  parameters: {
    info: "Explore our new set of illustrations for Kiwi.com.",
  },
};

export const ButtonPrimitive = (): React.Node => {
  const asComponent = text("asComponent", "button");
  const ariaControls = text("ariaControls", null);
  const ariaExpanded = boolean("ariaExpanded", false);
  const background = text("background", "#d63737");
  const backgroundHover = text("backgroundHover", "#da0a0a");
  const backgroundActive = text("backgroundActive", "#da0a0a");
  const backgroundFocus = text("backgroundFocus", "#da0a0a");
  const boxShadow = text("boxShadow", "0 8px 8px -6px rgba(0,0,0,.25)");
  const boxShadowHover = text("boxShadow", "0 8px 8px -6px rgba(0,0,0,.25)");
  const boxShadowActive = text("boxShadow", "0 8px 8px -6px rgba(0,0,0,.25)");
  const boxShadowFocus = text("boxShadow", "0 8px 8px -6px rgba(0,0,0,.25)");
  const children = text("children", "ButtonPrimitive");
  const circled = boolean("circled", false);
  const dataTest = text("dataTest", "test");
  const disabled = boolean("disabled", false);
  const external = boolean("external", false);
  const fontSize = text("fontSize", "14px");
  const fontWeight = text("fontWeight", "bold");
  const foreground = text("foreground", "#faf333");
  const foregroundHover = text("foregroundHover", "#faf333");
  const foregroundActive = text("foregroundActive", "#faf333");
  const foregroundFocus = text("foregroundFocus", "#faf333");
  const fullWidth = boolean("fullWidth", false);
  const height = text("height", "46px");
  const href = text("href", null);
  const IconLeft = getIcon(getIcons("iconLeft", ""));
  const IconRight = getIcon(getIcons("iconRight", "ChevronRight"));
  const icons = object("icons", {
    width: "16px",
    height: "16px",
    leftMargin: "2px",
    rightMargin: "2px",
    foreground: "#faf333",
    foregroundHover: "#faf333",
    foregroundActive: "#faf333",
  });
  const loading = boolean("loading", false);
  const padding = text("padding", "0 10px 0 10px");
  const role = text("role", null);
  const size = select("Size", Object.values(BUTTON_SIZES), BUTTON_SIZES.NORMAL);
  const spaceAfter = select("spaceAfter", [null, ...Object.values(SPACINGS_AFTER)]);
  const submit = boolean("submit", false);
  const title = text("title", null);
  const tabIndex = text("tabIndex", null);
  const width = text("width", null);

  return (
    <ButtonPrimitiveComponent
      asComponent={asComponent}
      ariaControls={ariaControls}
      ariaExpanded={ariaExpanded}
      background={background}
      backgroundHover={backgroundHover}
      backgroundActive={backgroundActive}
      backgroundFocus={backgroundFocus}
      boxShadow={boxShadow}
      boxShadowHover={boxShadowHover}
      boxShadowActive={boxShadowActive}
      boxShadowFocus={boxShadowFocus}
      circled={circled}
      dataTest={dataTest}
      disabled={disabled}
      external={external}
      fontSize={fontSize}
      fontWeight={fontWeight}
      foreground={foreground}
      foregroundHover={foregroundHover}
      foregroundFocus={foregroundFocus}
      foregroundActive={foregroundActive}
      fullWidth={fullWidth}
      height={height}
      href={href}
      iconLeft={IconLeft && <IconLeft />}
      iconRight={IconRight && <IconRight />}
      icons={icons}
      loading={loading}
      onClick={action("onClick")}
      padding={padding}
      role={role}
      size={size}
      spaceAfter={spaceAfter}
      submit={submit}
      title={title}
      tabIndex={tabIndex}
      width={width}
    >
      {children}
    </ButtonPrimitiveComponent>
  );
};

ButtonPrimitive.story = {
  name: "ButtonPrimitive",
};
