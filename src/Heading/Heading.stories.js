// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, select } from "@storybook/addon-knobs/react";

import withTheme from "../withTheme";

import Heading from "./index";

setAddon(chaptersAddon);

const options = {
  allowSourceToggling: false,
  allowPropTablesToggling: false,
};

storiesOf("Heading", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addDecorator(withTheme)
  .addWithChapters("Default", () => {
    const customTitle = text("Title", "Orbit design system");
    return {
      title: "Default",
      info:
        "Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Heading>{customTitle}</Heading>
              ),
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Title Display", () => {
    const customTitle = text("Title", "Orbit design system");
    const element = select(
      "Element",
      {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
      },
      "h1",
    );
    return {
      title: "Title Display",
      info:
        "Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Heading type="display" element={element}>
                  {customTitle}
                </Heading>
              ),
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Title 1", () => {
    const customTitle = text("Title", "Orbit design system");
    const element = select(
      "Element",
      {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
      },
      "h1",
    );
    return {
      info:
        "Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Heading type="title1" element={element}>
                  {customTitle}
                </Heading>
              ),
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Title 2", () => {
    const customTitle = text("Title", "Orbit design system");
    const element = select(
      "Element",
      {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
      },
      "h2",
    );
    return {
      info:
        "Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Heading type="title2" element={element}>
                  {customTitle}
                </Heading>
              ),
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Title 3", () => {
    const customTitle = text("Title", "Orbit design system");
    const element = select(
      "Element",
      {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
      },
      "h3",
    );
    return {
      info:
        "Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Heading type="title3" element={element}>
                  {customTitle}
                </Heading>
              ),
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Playground", () => {
    const element = select(
      "Element",
      {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
      },
      "h2",
    );
    const type = select(
      "Type",
      {
        display: "display",
        title1: "title1",
        title2: "title2",
        title3: "title3",
      },
      "display",
    );

    const customTitle = text("Title", "Orbit design system");
    return {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Heading element={element} type={type}>
                  {customTitle}
                </Heading>
              ),
              options,
            },
          ],
        },
      ],
    };
  });
