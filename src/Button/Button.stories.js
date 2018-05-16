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
  .addWithChapters("Default button", () => ({
    title: "Default button",
    info: "Some description about default settings of Button component.",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <ThemeProvider>
                <Button type="primary" size="normal">
                  Button
                </Button>
              </ThemeProvider>
            ),
            options,
          },
        ],
      },
    ],
  }))
  .addWithChapters("Facebook button", () => ({
    title: "Facebook button",
    info: "Some description about Facebook button. ",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <ThemeProvider>
                <Button
                  onClick={action("clicked")}
                  type="facebook"
                  size="normal"
                  icon={<Icons.Facebook />}
                >
                  Sign in with Facebook
                </Button>
              </ThemeProvider>
            ),
            options,
          },
        ],
      },
    ],
  }))
  .addWithChapters("Google button", () => ({
    title: "Google button",
    info: "Some description about Google button. ",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <ThemeProvider>
                <Button
                  onClick={action("clicked")}
                  type="google"
                  size="normal"
                  icon={<Icons.Google />}
                  bordered
                >
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
  .addWithChapters("Destructive button", () => ({
    title: "Destructive button",
    info: "Some description about Destructive button. ",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <ThemeProvider>
                <Button
                  onClick={action("clicked")}
                  type="critical"
                  size="normal"
                  icon={<Icons.Remove />}
                >
                  Delete
                </Button>
              </ThemeProvider>
            ),
            options,
          },
        ],
      },
    ],
  }))
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
