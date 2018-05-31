// @flow

import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, number, boolean, select } from "@storybook/addon-knobs/react";

import * as Icons from "../icons";
import { ThemeProvider } from "../index";

import Button from "./index";

setAddon(chaptersAddon);

const getIcons = defaultIcon => select("Icon", [undefined, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

const options = {
  showSource: true,
  allowSourceToggling: false,
  showPropTables: false,
  allowPropTablesToggling: false,
};

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
              sectionFn: () => (
                <ThemeProvider>
                  <Button onClick={action("clicked")}>{title}</Button>
                </ThemeProvider>
              ),
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Basic buttons", () => {
    const title = text("Title", "Button");
    const block = boolean("Block", false);
    const type = select("Type", ["primary", "secondary"], "primary");
    const size = select("Size", ["small", "normal", "large"], "normal");
    return {
      info:
        "Basic buttons have three sizes (large, normal and small) and can be either primary or secondary type. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <ThemeProvider>
                  <Button onClick={action("clicked")} block={block} type={type} size={size}>
                    {title}
                  </Button>
                </ThemeProvider>
              ),
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Button with icon", () => {
    const title = text("Title", "Button");
    const block = boolean("Block", false);
    const type = select("Type", ["primary", "secondary"], "primary");
    const size = select("Size", ["small", "normal", "large"], "small");
    const Icon = getIcon(getIcons("PlusCircle"));
    return {
      info:
        "Buttons with icon are great when you need to draw more attention to the action. However, it's essential to not over-use these buttons. If everything tries to grab attention, things usually get messy. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <ThemeProvider>
                  <Button
                    onClick={action("clicked")}
                    block={block}
                    type={type}
                    size={size}
                    icon={Icon && <Icon />}
                  >
                    {title}
                  </Button>
                </ThemeProvider>
              ),
              options,
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
              <ThemeProvider>
                <Button
                  onClick={action("clicked")}
                  type="facebook"
                  icon={<Icons.Facebook />}
                  bordered
                >
                  Sign in with Facebook
                </Button>
              </ThemeProvider>
            ),
            options,
          },
          {
            sectionFn: () => (
              <ThemeProvider>
                <Button onClick={action("clicked")} type="google" icon={<Icons.Google />} bordered>
                  Sign in with Google
                </Button>
              </ThemeProvider>
            ),
            options,
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
                <ThemeProvider>
                  <Button
                    title={title}
                    onClick={action("clicked")}
                    type="info"
                    size="small"
                    icon={Icon && <Icon />}
                  >
                    {title}
                  </Button>
                </ThemeProvider>
              ),
              options,
            },
            {
              sectionFn: () => (
                <ThemeProvider>
                  <Button
                    onClick={action("clicked")}
                    type="success"
                    size="small"
                    icon={Icon && <Icon />}
                  >
                    {title}
                  </Button>
                </ThemeProvider>
              ),
              options,
            },
            {
              sectionFn: () => (
                <ThemeProvider>
                  <Button
                    onClick={action("clicked")}
                    type="warning"
                    size="small"
                    icon={Icon && <Icon />}
                  >
                    {title}
                  </Button>
                </ThemeProvider>
              ),
              options,
            },
            {
              sectionFn: () => (
                <ThemeProvider>
                  <Button
                    onClick={action("clicked")}
                    type="critical"
                    size="small"
                    icon={Icon && <Icon />}
                  >
                    {title}
                  </Button>
                </ThemeProvider>
              ),
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Destructive buttons", () => {
    const title = text("Title", "Destructive button");
    const bordered = boolean("Bordered", false);
    const size = select(
      "Size",
      {
        small: "small",
        normal: "normal",
        large: "large",
      },
      "normal",
    );

    return {
      info:
        "Destructive buttons are a specific version of critical status buttons, paired together with 'Remove' icon. We use them when we need to inform our users about possible dangerous actions (canceling a booking, removing an item, etc.). Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <ThemeProvider>
                  <Button
                    onClick={action("clicked")}
                    bordered={bordered}
                    type="critical"
                    size={size}
                    icon={<Icons.Remove />}
                  >
                    {title}
                  </Button>
                </ThemeProvider>
              ),
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Playground", () => {
    const title = text("Title", "Button");
    const disabled = boolean("Disabled", false);
    const block = boolean("Block", false);
    const type = select(
      "Type",
      {
        primary: "primary",
        secondary: "secondary",
        info: "info",
        success: "success",
        warning: "warning",
        critical: "critical",
        facebook: "facebook",
        google: "google",
      },
      "primary",
    );
    const size = select(
      "Size",
      {
        small: "small",
        normal: "normal",
        large: "large",
      },
      "normal",
    );
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
                <ThemeProvider>
                  <Button
                    onClick={action("clicked")}
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
                </ThemeProvider>
              ),
              options,
            },
          ],
        },
      ],
    };
  });
