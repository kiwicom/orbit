// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text, select, object } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import ButtonPrimitive from "./ButtonPrimitive";
import * as Icons from "../icons";
import { SIZE_OPTIONS } from "./IllustrationPrimitive/consts";
import SPACINGS_AFTER from "../common/getSpacingToken/consts";
import BadgePrimitive from "./BadgePrimitive";
import Illustration from "./IllustrationPrimitive";

const getIcons = (name, defaultIcon) => select(name, [null, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

storiesOf("Primitives", module)
  .add(
    "BadgePrimitive",
    () => {
      const Icon = getIcon(getIcons("Airplane"));
      const background = text("Background", "linear-gradient(#fd1d1d, #ffae28)");
      const foregroundColor = text("ForegroundColor", "#fff");
      const borderColor = text("borderColor", null);

      return (
        <BadgePrimitive
          background={background}
          foregroundColor={foregroundColor}
          icon={Icon && <Icon />}
          borderColor={borderColor}
        >
          BadgePrimitive
        </BadgePrimitive>
      );
    },
    {
      info: "This is a preview of this component in RTL setup.",
    },
  )
  .add(
    "IllustrationPrimitive",
    () => {
      const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.MEDIUM);
      const name = "Accommodation";
      const dataTest = text("dataTest", "test");
      const spaceAfter = select("spaceAfter", [null, ...Object.values(SPACINGS_AFTER)]);
      return <Illustration size={size} name={name} dataTest={dataTest} spaceAfter={spaceAfter} />;
    },
    {
      info: "Explore our new set of illustrations for Kiwi.com.",
    },
  )
  .add("ButtonPrimitive", () => {
    const background = text("Background", "#d63737");
    const backgroundHover = text("BackgroundHover", "background: #da0a0a");
    const backgroundActive = text("BackgroundActive", "background: #da0a0a");
    const backgroundFocus = text("BackgroundFocus", "background: #da0a0a");
    const foreground = text("Foreground", "#faf333");
    const foregroundHover = text("ForegroundHover", "#faf333");
    const foregroundActive = text("ForegroundActive", "#faf333");
    const foregroundFocus = text("ForegroundFocus", "#faf333");
    const boxShadow = text("boxShadow", "box-shadow: 0 8px 8px -6px rgba(0,0,0,.25)");
    const boxShadowHover = text("boxShadow", "box-shadow: 0 8px 8px -6px rgba(0,0,0,.25)");
    const boxShadowActive = text("boxShadow", "box-shadow: 0 8px 8px -6px rgba(0,0,0,.25)");
    const boxShadowFocus = text("boxShadow", " box-shadow: 0 8px 8px -6px rgba(0,0,0,.25)");
    const fontWeight = text("fontWeight", "bold");
    const fontSize = text("fontSize", "14px");
    const height = text("height", 60);
    const width = text("width");
    const padding = text("padding", "20px");
    const spinner = object("spinner", { height: "20", width: "20" });
    const iconContainer = object("iconContainer", {
      width: "20px",
      height: "20px",
      spacing: "0 0 0 8px",
    });
    const IconLeft = getIcon(getIcons("iconLeft", ""));
    const IconRight = getIcon(getIcons("iconRight", "ChevronDown"));

    return (
      <ButtonPrimitive
        background={background}
        backgroundHover={backgroundHover}
        backgroundActive={backgroundActive}
        backgroundFocus={backgroundFocus}
        foreground={foreground}
        foregroundHover={foregroundHover}
        foregroundFocus={foregroundFocus}
        foregroundActive={foregroundActive}
        boxShadow={boxShadow}
        boxShadowHover={boxShadowHover}
        boxShadowActive={boxShadowActive}
        boxShadowFocus={boxShadowFocus}
        fontWeight={fontWeight}
        fontSize={fontSize}
        height={height}
        onClick={action("onClick")}
        width={width}
        padding={padding}
        spinner={spinner}
        iconContainer={iconContainer}
        iconLeft={IconLeft && <IconLeft />}
        iconRight={IconRight && <IconRight />}
      >
        ButtonPrimitive
      </ButtonPrimitive>
    );
  });
