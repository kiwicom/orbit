// @flow

import React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { withScreenshot } from "storybook-chrome-screenshot";
import chaptersAddon from "react-storybook-addon-chapters";

import Typography from "./index";

setAddon(chaptersAddon);

const options = {
  showSource: false,
  allowSourceToggling: true,
  showPropTables: false,
  allowPropTablesToggling: false,
};

storiesOf("Typography", module)
  .addDecorator(withScreenshot())
  .addWithChapters("Typography", {
    info: "Examples of possible combinations to achieve typographically nice texts.",
    chapters: [
      {
        title: "Large text",
        sections: [
          {
            sectionFn: () => <Typography size="large">Default text.</Typography>,
            options,
          },
          {
            sectionFn: () => (
              <Typography size="large" type="secondary">
                Secondary text.
              </Typography>
            ),
            options,
          },
          {
            sectionFn: () => (
              <Typography size="large" type="attention">
                Attention seeking text.
              </Typography>
            ),
            options,
          },
          {
            sectionFn: () => (
              <Typography size="large" type="active">
                Active seeking text.
              </Typography>
            ),
            options,
          },
        ],
      },
      {
        title: "Normal text",
        sections: [
          {
            sectionFn: () => <Typography>Default text.</Typography>,
            options,
          },
          {
            sectionFn: () => <Typography type="secondary">Secondary text.</Typography>,
            options,
          },
          {
            sectionFn: () => (
              <Typography type="secondary" variant="bold">
                Secondary bold text.
              </Typography>
            ),
            options,
          },
          {
            sectionFn: () => <Typography type="attention">Attention seeking text.</Typography>,
            options,
          },
          {
            sectionFn: () => <Typography type="active">ACtive seeking text.</Typography>,
            options,
          },
        ],
      },
      {
        title: "Small text",
        sections: [
          {
            sectionFn: () => <Typography size="small">Default text.</Typography>,
            options,
          },
          {
            sectionFn: () => (
              <Typography size="small" variant="bold">
                Default bold text.
              </Typography>
            ),
            options,
          },
          {
            sectionFn: () => (
              <Typography size="small" type="secondary">
                Secondary text.
              </Typography>
            ),
            options,
          },
          {
            sectionFn: () => (
              <Typography size="small" type="secondary" variant="bold">
                Secondary bold text.
              </Typography>
            ),
            options,
          },
          {
            sectionFn: () => (
              <Typography size="small" type="attention">
                Attention seeking text.
              </Typography>
            ),
            options,
          },
          {
            sectionFn: () => (
              <Typography size="small" type="attention" variant="bold">
                Attention seeking bold text.
              </Typography>
            ),
            options,
          },
          {
            sectionFn: () => (
              <Typography size="small" type="active" variant="bold">
                Active seeking bold text.
              </Typography>
            ),
            options,
          },
          {
            sectionFn: () => (
              <Typography size="small" type="error">
                Error text.
              </Typography>
            ),
            options,
          },
        ],
      },
      {
        title: "Header text",
        sections: [
          {
            sectionFn: () => <Typography size="header">Header sized text</Typography>,
            options,
          },
        ],
      },
    ],
  });
