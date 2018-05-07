// @flow

import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, number, boolean, select } from "@storybook/addon-knobs/react";

import * as Icons from "../icons";

import Button from "./index";

setAddon(chaptersAddon);

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
  .addWithChapters("Default button", () => {
    const title = text("Title", "Button");
    const disabled = boolean("Disabled", false);
    const loading = boolean("Loading Icon", false);
    const block = boolean("Block", false);
    const variation = select(
      "Variation",
      {
        filled: "filled",
        bordered: "bordered",
        link: "link",
      },
      "filled",
    );
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
    const showIcon = boolean("Show Icon", false);
    const source = select("Icon", Object.keys(Icons), "Airplane");
    const onlyIcon = boolean("Only Icon", false);

    return {
      title: "Default button",
      info: "Some description about default settings of Button component.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Button
                  title={title}
                  onClick={action("clicked")}
                  disabled={disabled}
                  loading={loading}
                  block={block}
                  variation={variation}
                  type={type}
                  size={size}
                  width={width}
                  Icon={showIcon ? Icons[source] : undefined}
                  onlyIcon={onlyIcon}
                />
              ),
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Icon only", () => {
    const variation = select(
      "Variation",
      {
        filled: "filled",
        bordered: "bordered",
        link: "link",
      },
      "link",
    );
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
      "info",
    );
    const size = select(
      "Size",
      {
        small: "small",
        normal: "normal",
        large: "large",
      },
      "small",
    );
    const source = select("Icon", Object.keys(Icons), "CloseCircle");

    return {
      title: "Only icon button",
      info: "Some description about this type of component.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Button
                  onClick={action("clicked")}
                  variation={variation}
                  type={type}
                  size={size}
                  Icon={Icons[source]}
                  onlyIcon
                />
              ),
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Facebook button", () => {
    const title = text("Title", "Sign in with Facebook");
    const disabled = boolean("Disabled", false);
    const loading = boolean("Loading Icon", false);
    const block = boolean("Block", false);
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

    return {
      title: "Facebook button",
      info: "Some description about Facebook button. ",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Button
                  title={title}
                  onClick={action("clicked")}
                  disabled={disabled}
                  loading={loading}
                  block={block}
                  variation="filled"
                  type="facebook"
                  size={size}
                  width={width}
                  Icon={Icons.Facebook}
                />
              ),
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Google button", () => {
    const title = text("Title", "Sign in with Google");
    const disabled = boolean("Disabled", false);
    const loading = boolean("Loading Icon", false);
    const block = boolean("Block", false);
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

    return {
      title: "Google button",
      info: "Some description about Google button. ",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Button
                  title={title}
                  onClick={action("clicked")}
                  disabled={disabled}
                  loading={loading}
                  block={block}
                  variation="bordered"
                  type="google"
                  size={size}
                  width={width}
                  Icon={Icons.Google}
                />
              ),
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Destructive button", () => {
    const title = text("Title", "Delete");
    const disabled = boolean("Disabled", false);
    const loading = boolean("Loading Icon", false);
    const block = boolean("Block", false);
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

    return {
      title: "Destructive button",
      info: "Some description about Destructive button. ",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Button
                  title={title}
                  onClick={action("clicked")}
                  disabled={disabled}
                  loading={loading}
                  block={block}
                  variation="filled"
                  type="critical"
                  size={size}
                  width={width}
                  Icon={Icons.Remove}
                />
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
    const loading = boolean("Loading Icon", false);
    const block = boolean("Block", false);
    const variation = select(
      "Variation",
      {
        filled: "filled",
        bordered: "bordered",
        link: "link",
      },
      "filled",
    );
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
    const showIcon = boolean("Show Icon", false);
    const source = select("Icon", Object.keys(Icons), "Airplane");
    const onlyIcon = boolean("Only Icon", false);

    return {
      title: "Playground button",
      info: "Some description about this type of component. ",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Button
                  title={title}
                  onClick={action("clicked")}
                  disabled={disabled}
                  loading={loading}
                  block={block}
                  variation={variation}
                  type={type}
                  size={size}
                  width={width}
                  Icon={showIcon ? Icons[source] : undefined}
                  onlyIcon={onlyIcon}
                />
              ),
              options,
            },
          ],
        },
      ],
    };
  });
