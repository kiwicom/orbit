// @flow

import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, number, boolean, select } from "@storybook/addon-knobs/react";

import * as Icons from "../icons";
import Button, { TYPE_OPTIONS, SIZE_OPTIONS } from "./Button";

setAddon(chaptersAddon);

const getIcons = defaultIcon => select("Icon", [undefined, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Default", () => {
    const title = text("Title", "Default button");

    return {
      info:
        "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => <Button onClick={action("clicked")}>{title}</Button>,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Basic buttons", () => {
    const title = text("Title", "Button");
    const block = boolean("Block", false);
    const type = select("Type", [TYPE_OPTIONS.PRIMARY, TYPE_OPTIONS.SECONDARY], "primary");
    const size = select("Size", Object.values(SIZE_OPTIONS), "normal");

    return {
      info:
        "Basic buttons have three sizes (large, normal and small) and can be either primary or secondary type. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Button onClick={action("clicked")} block={block} type={type} size={size}>
                  {title}
                </Button>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Button with icon", () => {
    const title = text("Title", "Button");
    const block = boolean("Block", false);
    const type = select("Type", [TYPE_OPTIONS.PRIMARY, TYPE_OPTIONS.SECONDARY], "primary");
    const size = select("Size", Object.values(SIZE_OPTIONS), "small");
    const Icon = getIcon(getIcons("PlusCircle"));

    return {
      info:
        "Buttons with icon are great when you need to draw more attention to the action. However, it's essential to not over-use these buttons. If everything tries to grab attention, things usually get messy. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Button
                  onClick={action("clicked")}
                  block={block}
                  type={type}
                  size={size}
                  icon={Icon && <Icon />}
                >
                  {title}
                </Button>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Social buttons", () => ({
    info: "We use social buttons only in normal size.",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <Button
                onClick={action("clicked")}
                type="facebook"
                icon={<Icons.Facebook />}
                bordered
              >
                Sign in with Facebook
              </Button>
            ),
          },
          {
            sectionFn: () => (
              <Button onClick={action("clicked")} type="google" icon={<Icons.Google />} bordered>
                Sign in with Google
              </Button>
            ),
          },
        ],
      },
    ],
  }))
  .addWithChapters("Status buttons", () => {
    const title = text("Title", "Button");
    const Icon = getIcon(getIcons("CloseCircle"));

    return {
      info:
        "We use status buttons exclusively in Alert messages when we need to show supporting action connected to the displayed message. We only use the small size of buttons. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Button
                  onClick={action("clicked")}
                  type="info"
                  size="small"
                  icon={Icon && <Icon />}
                >
                  {title}
                </Button>
              ),
            },
            {
              sectionFn: () => (
                <Button
                  onClick={action("clicked")}
                  type="success"
                  size="small"
                  icon={Icon && <Icon />}
                >
                  {title}
                </Button>
              ),
            },
            {
              sectionFn: () => (
                <Button
                  onClick={action("clicked")}
                  type="warning"
                  size="small"
                  icon={Icon && <Icon />}
                >
                  {title}
                </Button>
              ),
            },
            {
              sectionFn: () => (
                <Button
                  onClick={action("clicked")}
                  type="critical"
                  size="small"
                  icon={Icon && <Icon />}
                >
                  {title}
                </Button>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Destructive buttons", () => {
    const title = text("Title", "Destructive button");
    const bordered = boolean("Bordered", false);
    const size = select("Size", Object.values(SIZE_OPTIONS), "normal");

    return {
      info:
        "Destructive buttons are a specific version of critical status buttons, paired together with 'Remove' icon. We use them when we need to inform our users about possible dangerous actions (canceling a booking, removing an item, etc.). Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Button
                  onClick={action("clicked")}
                  bordered={bordered}
                  type="critical"
                  size={size}
                  icon={<Icons.Remove />}
                >
                  {title}
                </Button>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Button as a link", () => {
    const title = text("Title", "I am a link");
    const href = text("Href", "https://kiwi.com");
    const external = boolean("External", false);
    const disabled = boolean("Disabled", false);
    const size = select("Size", Object.values(SIZE_OPTIONS), "normal");

    return {
      info:
        "If you need to, you can pass some href to this component and it will automatically render into anchor.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Button
                  onClick={action("clicked")}
                  href={href}
                  external={external}
                  size={size}
                  disabled={disabled}
                  bordered
                  icon={<Icons.Airplane />}
                >
                  {title}
                </Button>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Playground", () => {
    const title = text("Title", "Button");
    const href = text("Href", undefined);
    const external = boolean("External", false);
    const component = text("Component", "button");
    const disabled = boolean("Disabled", false);
    const block = boolean("Block", false);
    const type = select("Type", Object.values(TYPE_OPTIONS), "primary");
    const size = select("Size", Object.values(SIZE_OPTIONS), "normal");
    const width = number("Width", 0);
    const bordered = boolean("Bordered", false);
    const Icon = getIcon(getIcons("Airplane"));

    return {
      title: "Playground button",
      info: "Some description about this type of component. ",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Button
                  onClick={action("clicked")}
                  component={component}
                  href={href}
                  external={external}
                  disabled={disabled}
                  block={block}
                  bordered={bordered}
                  type={type}
                  size={size}
                  icon={Icon && <Icon />}
                  width={width}
                >
                  {title}
                </Button>
              ),
            },
          ],
        },
      ],
    };
  });
