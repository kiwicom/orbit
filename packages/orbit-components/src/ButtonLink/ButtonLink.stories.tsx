import * as React from "react";
import { action } from "@storybook/addon-actions";

import * as Icons from "../icons";
import { TYPES } from "./consts";
import { SIZE_OPTIONS } from "../primitives/ButtonPrimitive/common/consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import { SPACINGS_AFTER } from "../common/consts";

import ButtonLink from ".";

const getIcon = (source: string | null) => (source ? Icons[source] : null);

export default {
  title: "ButtonLink",
};

export const Default = () => <ButtonLink href="https://kiwi.com">ButtonLink</ButtonLink>;

Default.story = {
  parameters: {
    info: "Link buttons have a similar look as classic links, but the area surrounding them is clickable. That makes them great to use outside of paragraphs or for less important actions in the interface. We use Link buttons only in a small and normal version.",
  },
};

export const Secondary = () => (
  <ButtonLink href="https://kiwi.com" type="secondary">
    ButtonLink
  </ButtonLink>
);

Secondary.story = {
  parameters: {
    info: "Link buttons have a similar look as classic links, but the area surrounding them is clickable. That makes them great to use outside of paragraphs or for less important actions in the interface. We use Link buttons only in a small and normal version.",
  },
};

export const Critical = () => (
  <ButtonLink onClick={action("onClick")} type="critical">
    ButtonLink
  </ButtonLink>
);

Critical.story = {
  parameters: {
    info: "Link buttons have a similar look as classic links, but the area surrounding them is clickable. That makes them great to use outside of paragraphs or for less important actions in the interface. We use Link buttons only in a small and normal version.",
  },
};

export const Circled = ({ type, size, iconLeft, circled }) => {
  const IconLeft = getIcon(iconLeft);

  return (
    <ButtonLink
      type={type}
      size={size}
      iconLeft={iconLeft && <IconLeft />}
      onClick={action("clicked")}
      circled={circled}
      title="Button"
    />
  );
};

Circled.story = {
  parameters: {
    info: "Link buttons have a similar look as classic links, but the area surrounding them is clickable. That makes them great to use outside of paragraphs or for less important actions in the interface. We use Link buttons only in a small and normal version.",
  },
};

Circled.args = {
  circled: true,
  type: TYPES.SECONDARY,
  size: SIZE_OPTIONS.LARGE,
  iconLeft: "Airplane",
};

Circled.argTypes = {
  iconLeft: {
    options: Object.keys(Icons),
    control: {
      type: "select",
    },
  },
  type: {
    options: Object.values(TYPES),
    control: {
      type: "select",
    },
  },
  size: {
    options: Object.values(SIZE_OPTIONS),
    control: {
      type: "select",
    },
  },
};

export const Playground = ({
  children,
  disabled,
  fullWidth,
  type,
  size,
  width,
  iconLeft,
  iconRight,
  href,
  dataTest,
  external,
  compact,
  submit,
  ariaExpanded,
  ariaControls,
  tabIndex,
  spaceAfter,
  title,
  rel,
}) => {
  const IconLeft = getIcon(iconLeft);
  const IconRight = getIcon(iconRight);

  return (
    <ButtonLink
      disabled={disabled}
      fullWidth={fullWidth}
      type={type}
      size={size}
      href={href}
      dataTest={dataTest}
      iconLeft={IconLeft && <IconLeft />}
      iconRight={IconRight && <IconRight />}
      width={String(width)}
      external={external}
      onClick={action("clicked")}
      compact={compact}
      submit={submit}
      ariaExpanded={ariaExpanded}
      ariaControls={ariaControls}
      tabIndex={tabIndex}
      spaceAfter={spaceAfter}
      title={title}
      rel={rel}
    >
      {children}
    </ButtonLink>
  );
};

Playground.story = {
  parameters: {
    info: "Link buttons have a similar look as classic links, but the area surrounding them is clickable. That makes them great to use outside of paragraphs or for less important actions in the interface. We use Link buttons only in a small and normal version.",
  },
};

Playground.args = {
  children: "ButtonLink",
  disabled: false,
  fullWidth: false,
  type: TYPES.SECONDARY,
  size: SIZE_OPTIONS.LARGE,
  width: NaN,
  iconLeft: "Airplane",
  iconRight: "ChevronDown",
  href: "",
  dataTest: "test",
  external: false,
  compact: false,
  submit: false,
  ariaExpanded: false,
  ariaControls: "element ID",
  tabIndex: "0",
  spaceAfter: undefined,
  title: "Additional information for accessibility",
  rel: "nofollow",
};

Playground.argTypes = {
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
  type: {
    options: Object.values(TYPES),
    control: {
      type: "select",
    },
  },
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

export const Accessibility = ({ children, ariaExpanded, ariaControls, title }) => {
  return (
    <ButtonLink ariaExpanded={ariaExpanded} ariaControls={ariaControls} title={title}>
      {children}
    </ButtonLink>
  );
};

Accessibility.story = {
  parameters: {
    info: "This is a preview of component accessibility props",
  },
};

Accessibility.args = {
  children: "ButtonLink",
  ariaExpanded: false,
  ariaControls: "element ID",
  title: "Additional information for accessibility",
};

export const Rtl = () => (
  <RenderInRtl>
    <ButtonLink iconLeft={<Icons.Airplane />}>ButtonLink</ButtonLink>
  </RenderInRtl>
);

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
