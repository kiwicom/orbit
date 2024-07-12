import React from "react";
import { action } from "@storybook/addon-actions";

import ButtonPrimitiveComponent from "./ButtonPrimitive";
import * as Icons from "../icons";
import { SPACINGS_AFTER } from "../common/consts";
import BadgePrimitiveComponent from "./BadgePrimitive";
import IllustrationPrimitiveComponent, { SIZE_OPTIONS } from "./IllustrationPrimitive";

const getIcon = source => Icons[source];

export default {
  title: "Primitives",
};

export const BadgePrimitive = ({ icon, className }) => {
  const Icon = getIcon(icon);

  return (
    <BadgePrimitiveComponent className={className} icon={Icon && <Icon />}>
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

BadgePrimitive.args = {
  icon: "Airplane",
  className: "bg-gradient-to-r from-[#fd1d1d] to-[#ffae28] text-white-normal",
};

BadgePrimitive.argTypes = {
  icon: {
    options: Object.keys(Icons),
    control: {
      type: "select",
    },
  },
};

export const IllustrationPrimitive = ({ size, dataTest, spaceAfter }) => {
  return (
    <IllustrationPrimitiveComponent
      size={size}
      name="Accommodation"
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

IllustrationPrimitive.args = {
  size: SIZE_OPTIONS.MEDIUM,
  dataTest: "test",
  spaceAfter: SPACINGS_AFTER.SMALL,
};

IllustrationPrimitive.argTypes = {
  size: {
    options: Object.values(SIZE_OPTIONS),
    control: {
      type: "select",
    },
  },
  spaceAfter: {
    options: Object.values(SPACINGS_AFTER),
    control: {
      type: "select",
    },
  },
};

export const ButtonPrimitive = ({
  asComponent,
  ariaControls,
  ariaExpanded,
  background,
  backgroundHover,
  backgroundActive,
  backgroundFocus,
  boxShadow,
  boxShadowHover,
  boxShadowActive,
  boxShadowFocus,
  children,
  circled,
  dataTest,
  disabled,
  external,
  fontSize,
  fontWeight,
  foreground,
  foregroundHover,
  foregroundActive,
  foregroundFocus,
  fullWidth,
  height,
  href,
  iconLeft,
  iconRight,
  icons,
  loading,
  padding,
  role,
  spaceAfter,
  submit,
  title,
  tabIndex,
  width,
  contentAlign,
  contentWidth,
}) => {
  const IconLeft = getIcon(iconLeft);
  const IconRight = getIcon(iconRight);

  return (
    <ButtonPrimitiveComponent
      asComponent={asComponent}
      contentAlign={contentAlign}
      contentWidth={contentWidth}
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

ButtonPrimitive.args = {
  asComponent: "button",
  ariaControls: "",
  ariaExpanded: false,
  background: "#d63737",
  backgroundHover: "#da0a0a",
  backgroundActive: "#da0a0a",
  backgroundFocus: "#da0a0a",
  boxShadow: "0 8px 8px -6px rgba(0,0,0,.25)",
  boxShadowHover: "0 8px 8px -6px rgba(0,0,0,.25)",
  boxShadowActive: "0 8px 8px -6px rgba(0,0,0,.25)",
  boxShadowFocus: "0 8px 8px -6px rgba(0,0,0,.25)",
  children: "ButtonPrimitive",
  circled: false,
  dataTest: "test",
  disabled: false,
  external: false,
  fontSize: "14px",
  fontWeight: "bold",
  foreground: "#faf333",
  foregroundHover: "#faf333",
  foregroundActive: "#faf333",
  foregroundFocus: "#faf333",
  fullWidth: false,
  height: "46px",
  href: "",
  iconLeft: "",
  iconRight: "ChevronForward",
  icons: {
    width: "16px",
    height: "16px",
    leftMargin: "2px",
    rightMargin: "2px",
    foreground: "#faf333",
    foregroundHover: "#faf333",
    foregroundActive: "#faf333",
  },
  loading: false,
  padding: "0 10px 0 10px",
  role: "",
  spaceAfter: SPACINGS_AFTER.SMALL,
  submit: false,
  title: "",
  tabIndex: 0,
  width: "",
  contentAlign: "center",
  contentWidth: "100%",
};

ButtonPrimitive.argTypes = {
  spaceAfter: {
    options: Object.values(SPACINGS_AFTER),
    control: {
      type: "select",
    },
  },
  contentAlign: {
    options: ["start", "center", "end", "space-between"],
    control: {
      type: "select",
    },
  },
  iconLeft: {
    options: Object.keys(Icons),
    control: {
      type: "select",
    },
  },
  iconRight: {
    options: Object.keys(Icons),
    control: {
      type: "select",
    },
  },
};
