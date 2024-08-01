import * as React from "react";
import { action } from "@storybook/addon-actions";

import { TYPE_OPTIONS, SIZE_OPTIONS } from "./consts";
import { TYPE_OPTIONS as TEXT_TYPES } from "../Text/consts";
import * as Icons from "../icons";
import Text from "../Text";
import Box from "../Box";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import TextLink from ".";

const validate = (rel: string) => (rel !== undefined && rel !== "" ? rel : undefined);

const getIcon = (source: string | null) => source && Icons[source];

export default {
  title: "TextLink",
};

export const PrimaryLink = ({ href, external, children }) => {
  return (
    <TextLink external={external} onClick={action("clicked")} href={href} type="primary">
      {children}
    </TextLink>
  );
};

PrimaryLink.story = {
  name: "Primary link",

  parameters: {
    info: "Text links are used in paragraphs when part of the text needs to be actionable. It inherits the visual style of the parent paragraph. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

PrimaryLink.args = {
  href: "https://kiwi.com",
  external: false,
  children: "Primary link",
};

export const SecondaryLink = ({ href, external, children }) => {
  return (
    <TextLink external={external} onClick={action("clicked")} href={href} type="secondary">
      {children}
    </TextLink>
  );
};

SecondaryLink.story = {
  name: "Secondary link",

  parameters: {
    info: "Text links are used in paragraphs when part of the text needs to be actionable. It inherits the visual style of the parent paragraph. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

SecondaryLink.args = {
  href: "https://kiwi.com",
  external: false,
  children: "Secondary link",
};

export const LinkWithLeftIcon = ({ href, children, icon }) => {
  const Icon = getIcon(icon);

  return (
    <TextLink onClick={action("clicked")} href={href} iconLeft={Icon && <Icon />} standAlone>
      {children}
    </TextLink>
  );
};

LinkWithLeftIcon.story = {
  name: "Link with left icon",

  parameters: {
    info: "Text links are used in paragraphs when part of the text needs to be actionable. It inherits the visual style of the parent paragraph. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

LinkWithLeftIcon.args = {
  href: "https://kiwi.com",
  children: "TextLink with icon",
  icon: "ChevronBackward",
};

LinkWithLeftIcon.argTypes = {
  icon: {
    options: Object.keys(Icons),
    control: {
      type: "select",
    },
  },
};

export const LinkWithRightIcon = ({ href, children, icon }) => {
  const Icon = getIcon(icon);

  return (
    <TextLink onClick={action("clicked")} href={href} iconRight={Icon && <Icon />}>
      {children}
    </TextLink>
  );
};

LinkWithRightIcon.story = {
  name: "Link with right icon",

  parameters: {
    info: "Text links are used in paragraphs when part of the text needs to be actionable. It inherits the visual style of the parent paragraph. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

LinkWithRightIcon.args = {
  href: "https://kiwi.com",
  children: "TextLink with icon",
  icon: "ChevronForward",
};

LinkWithRightIcon.argTypes = {
  icon: {
    options: Object.keys(Icons),
    control: {
      type: "select",
    },
  },
};

export const Playground = ({
  href,
  type,
  size,
  external,
  children,
  rel,
  iconRight,
  iconLeft,
  dataTest,
  tabIndex,
  stopPropagation,
  standAlone,
  noUnderline,
}) => {
  const IconRight = getIcon(iconRight);
  const IconLeft = getIcon(iconLeft);
  return (
    <Box
      padding="300"
      borderRadius="100"
      background={type === TYPE_OPTIONS.WHITE ? "inkLight" : "cloudNormal"}
    >
      <TextLink
        external={external}
        onClick={action("clicked")}
        href={href}
        type={type}
        size={size}
        rel={validate(rel)}
        iconRight={IconRight && <IconRight />}
        iconLeft={IconLeft && <IconLeft />}
        dataTest={dataTest}
        tabIndex={tabIndex}
        stopPropagation={stopPropagation}
        standAlone={standAlone}
        noUnderline={noUnderline}
      >
        {children}
      </TextLink>
    </Box>
  );
};

Playground.story = {
  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

Playground.args = {
  href: "https://kiwi.com",
  type: TYPE_OPTIONS.SECONDARY,
  size: SIZE_OPTIONS.SMALL,
  external: true,
  children: "Custom link",
  rel: "",
  iconRight: "ChevronForward",
  iconLeft: "",
  dataTest: "test",
  tabIndex: "",
  stopPropagation: false,
  standAlone: false,
  noUnderline: false,
};

Playground.argTypes = {
  type: {
    options: Object.values(TYPE_OPTIONS),
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
  iconRight: {
    options: Object.keys(Icons),
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
};

export const TextLinkInText = ({ type }) => {
  return (
    <Text type={type}>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dapibus fermentum ipsum. Duis
      ante orci, molestie vitae vehicula venenatis, tincidunt ac pede.{" "}
      <TextLink onClick={action("onClick")} type={type}>
        Etiam dui sem
      </TextLink>
      , fermentum vitae, sagittis id, malesuada in, quam. Vivamus luctus egestas leo. Integer
      imperdiet lectus quis justo. Duis condimentum augue id magna semper rutrum. Quisque porta. Sed
      elit dui, pellentesque a, faucibus vel, interdum nec, diam.
    </Text>
  );
};

TextLinkInText.story = {
  name: "TextLink inside paragraph",
  parameters: {
    info: "It inherits the visual style of the parent paragraph. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

TextLinkInText.args = {
  type: TEXT_TYPES.CRITICAL,
};

TextLinkInText.argTypes = {
  type: {
    options: Object.values(TEXT_TYPES),
    control: {
      type: "select",
    },
  },
};

export const Accessibility = ({ children, title }) => {
  return (
    <TextLink title={title} onClick={action("clicked")} type="primary">
      {children}
    </TextLink>
  );
};

Accessibility.story = {
  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

Accessibility.args = {
  children: "Primary link",
  title: "Clarify purpose of a link for screen readers",
};

export const Rtl = () => (
  <RenderInRtl>
    <TextLink onClick={action("clicked")} href="#" iconRight={<Icons.ChevronForward />}>
      Link
    </TextLink>
  </RenderInRtl>
);

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
