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
    const title = text("Title", "Default button");

    return {
      info:
        "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => <Button title={title} onClick={action("clicked")} />,
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Basic buttons", () => {
    const title = text("Title", "Basic button");
    const loading = boolean("Loading", false);
    const block = boolean("Block", false);
    const type = select(
      "Type",
      {
        primary: "primary",
        secondary: "secondary",
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

    return {
      info:
        "Basic buttons have three sizes (large, normal and small) and can be either primary or secondary type. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Button
                  title={title}
                  onClick={action("clicked")}
                  loading={loading}
                  block={block}
                  type={type}
                  size={size}
                />
              ),
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Link buttons", () => {
    const title = text("Title", "Link button");
    const type = select(
      "Type",
      {
        primary: "primary",
        secondary: "secondary",
      },
      "secondary",
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
    const showIcon = boolean("Show Icon", true);
    const source = select("Icon", Object.keys(Icons), "PlusCircle");

    return {
      info:
        "Link buttons have a similar look as classic links, but the area surrounding them is clickable. That makes them great to use outside of paragraphs or for less important actions in the interface. We use Link buttons only in a small and normal version. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Button
                  title={title}
                  onClick={action("clicked")}
                  variation="link"
                  type={type}
                  size={size}
                  Icon={showIcon ? Icons[source] : undefined}
                />
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
    const type = select(
      "Type",
      {
        primary: "primary",
        secondary: "secondary",
      },
      "secondary",
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
    const showIcon = boolean("Show Icon", true);
    const source = select("Icon", Object.keys(Icons), "PlusCircle");
    const onlyIcon = boolean("onlyIcon", false);
    return {
      info:
        "Buttons with icon are great when you need to draw more attention to the action. However, it's essential to not over-use these buttons. If everything tries to grab attention, things usually get messy. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Button
                  title={title}
                  onClick={action("clicked")}
                  variation="filled"
                  type={type}
                  size={size}
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
  .addWithChapters("Social buttons", () => ({
    info: "We use social buttons only in normal size.",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <Button
                title="Sign in with Facebook"
                onClick={action("clicked")}
                variation="bordered"
                type="facebook"
                Icon={Icons.Facebook}
              />
            ),
            options,
          },
          {
            sectionFn: () => (
              <Button
                title="Sign in with Google"
                onClick={action("clicked")}
                variation="bordered"
                type="google"
                Icon={Icons.Google}
              />
            ),
            options,
          },
        ],
      },
    ],
  }))
  .addWithChapters("Status buttons", () => {
    const title = text("Title", "Button");
    const showIcon = boolean("Show Icon", false);
    const source = select("Icon", Object.keys(Icons), "CloseCircle");

    return {
      info:
        "We use status buttons exclusively in Alert messages when we need to show supporting action connected to the displayed message. We only use the small size of buttons. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Button
                  title={title}
                  onClick={action("clicked")}
                  type="info"
                  size="small"
                  Icon={showIcon ? Icons[source] : undefined}
                />
              ),
              options,
            },
            {
              sectionFn: () => (
                <Button
                  title={title}
                  onClick={action("clicked")}
                  type="success"
                  size="small"
                  Icon={showIcon ? Icons[source] : undefined}
                />
              ),
              options,
            },
            {
              sectionFn: () => (
                <Button
                  title={title}
                  onClick={action("clicked")}
                  type="warning"
                  size="small"
                  Icon={showIcon ? Icons[source] : undefined}
                />
              ),
              options,
            },
            {
              sectionFn: () => (
                <Button
                  title={title}
                  onClick={action("clicked")}
                  type="critical"
                  size="small"
                  Icon={showIcon ? Icons[source] : undefined}
                />
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

    const variation = select(
      "Variation",
      {
        filled: "filled",
        bordered: "bordered",
      },
      "filled",
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

    return {
      info:
        "Destructive buttons are a specific version of critical status buttons, paired together with 'Remove' icon. We use them when we need to inform our users about possible dangerous actions (canceling a booking, removing an item, etc.). Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Button
                  title={title}
                  onClick={action("clicked")}
                  variation={variation}
                  type="critical"
                  size={size}
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
    const title = text("Title", "Playground button");
    const disabled = boolean("Disabled", false);
    const loading = boolean("Loading", false);
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
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
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
