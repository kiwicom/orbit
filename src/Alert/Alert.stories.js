// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs/react";

import * as Icons from "../icons";

import Alert from "./index";

setAddon(chaptersAddon);

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
  .addWithChapters("Default alert", () => {
    const message = text("Message", "The quick, brown fox jumps over a lazy dog.");
    return {
      info: "Some description about this type of alert in general.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => <Alert>{message}</Alert>,
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Without icon", () => {
    const message = text("Message", "The quick, brown fox jumps over a lazy dog.");
    return {
      info: "Some description about this type of alert in general.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => <Alert noIcon>{message}</Alert>,
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("With title", () => {
    const title = text("Title", "Alert with title");
    const message = text("Message", "The quick, brown fox jumps over a lazy dog.");
    return {
      info: "Some description about this type of alert in general.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => <Alert title={title}>{message}</Alert>,
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("With title and without icon", () => {
    const title = text("Title", "Alert with title & without icon");
    const message = text("Message", "The quick, brown fox jumps over a lazy dog.");
    return {
      info: "Some description about this type of alert in general.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Alert title={title} noIcon>
                  {message}
                </Alert>
              ),
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Playground", () => {
    const typeOptions = {
      info: "info",
      success: "success",
      warning: "warning",
      critical: "critical",
    };
    const type = select("Type", typeOptions, "info");
    const title = text("Title", "Customisable alert title");
    const message = text("Message", "Message is customisable too");
    const closable = boolean("Closable", false);
    const noIcon = boolean("No icon", false);
    const source = select("Icon", Object.keys(Icons));
    return {
      info: "Some description about this type of alert in general.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Alert
                  type={type}
                  Icon={Icons[source]}
                  title={title}
                  closable={closable}
                  noIcon={noIcon}
                  onClose={action("Close")}
                >
                  {message}
                </Alert>
              ),
              options,
            },
          ],
        },
      ],
    };
  });
