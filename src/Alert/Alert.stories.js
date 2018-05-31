// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs/react";

import ThemeProvider from "../Theming/ThemeProvider";
import * as Icons from "../icons";

import Alert, { TYPE_OPTIONS } from "./index";

setAddon(chaptersAddon);

const getIcons = defaultIcon => select("Icon", [undefined, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];
const renderTitle = title => (title === "" ? undefined : title);

const options = {
  showSource: true,
  allowSourceToggling: false,
  showPropTables: false,
  allowPropTablesToggling: false,
};

storiesOf("Alert", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Default", () => {
    const message = "The quick, brown fox jumps over a lazy dog.";
    return {
      info:
        "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <ThemeProvider>
                  <Alert>{message}</Alert>
                </ThemeProvider>
              ),
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Info alert", () => {
    const title = text("Title");
    const message = text("Message", "The quick, brown fox jumps over a lazy dog.");
    return {
      info:
        "Use when you need to inform users about something that is happening in their booking or a trip. If the issue is potentially dangerous, consider using warning alert. Keep in mind that warning alert can stress users more than the informational one. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <ThemeProvider>
                  <Alert title={renderTitle(title)} icon>
                    {message}
                  </Alert>
                </ThemeProvider>
              ),
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Success alert", () => {
    const title = text("Title");
    const message = text("Message", "The quick, brown fox jumps over a lazy dog.");
    return {
      info:
        "Use when a user just performed some action and we need to tell them that action was successful. This button is usually used without an action button.\n" +
        "Avoid using success banner if there is any follow-up action, for example, in cases where we need to confirm something to users by e-mail later. It's recommended to use informational alert instead. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <ThemeProvider>
                  <Alert type="success" title={renderTitle(title)} icon>
                    {message}
                  </Alert>
                </ThemeProvider>
              ),
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Warning alert", () => {
    const title = text("Title");
    const message = text("Message", "The quick, brown fox jumps over a lazy dog.");
    return {
      info:
        "Use in cases when you need to inform users about a potentially dangerous situation in their trip and it requires some action from them. However, if the issue requires immediate attention, use critical alert instead. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <ThemeProvider>
                  <Alert type="warning" title={renderTitle(title)} icon>
                    {message}
                  </Alert>
                </ThemeProvider>
              ),
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Critical alert", () => {
    const title = text("Title");
    const message = text("Message", "The quick, brown fox jumps over a lazy dog.");
    return {
      info:
        "Use when something is blocking users from continuing or when some issue needs to be resolved immediately. A critical alert should provide some form of solution for their problem. If something is important for users to solve as soon as possible, automatic open of a modal window is worthy of considering. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <ThemeProvider>
                  <Alert type="critical" title={renderTitle(title)} icon>
                    {message}
                  </Alert>
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
    const type = select("Type", Object.values(TYPE_OPTIONS), "info");
    const title = text("Title", "You can change the title by changing the Title knob");
    const message = text("Message", "Also you can change the message by changing the Message knob");
    const closable = boolean("Closable", false);
    const Icon = getIcon(getIcons("Airplane"));
    return {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <ThemeProvider>
                  <Alert
                    type={type}
                    icon={Icon && <Icon />}
                    title={renderTitle(title)}
                    closable={closable}
                    onClose={action("Close")}
                  >
                    {message}
                  </Alert>
                </ThemeProvider>
              ),
              options,
            },
          ],
        },
      ],
    };
  });
