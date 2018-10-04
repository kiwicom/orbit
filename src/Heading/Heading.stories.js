// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs/react";

import { ELEMENT_OPTIONS, TYPE_OPTIONS } from "./consts";
import SPACINGS_AFTER from "../common/getSpacingToken/consts";

import Heading from "./index";

setAddon(chaptersAddon);

storiesOf("Heading", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
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
              sectionFn: () => <Heading>{customTitle}</Heading>,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Title Display", () => {
    const customTitle = text("Title", "Orbit design system");
    const element = select("Element", Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H1);
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
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Title 1", () => {
    const customTitle = text("Title", "Orbit design system");
    const element = select("Element", Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H1);
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
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Title 2", () => {
    const customTitle = text("Title", "Orbit design system");
    const element = select("Element", Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H2);
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
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Title 3", () => {
    const customTitle = text("Title", "Orbit design system");
    const element = select("Element", Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H3);
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
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Inverted heading", () => {
    const element = select("Element", Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H1);
    const type = select("Type", Object.values(TYPE_OPTIONS), TYPE_OPTIONS.DISPLAY);
    const inverted = boolean("Inverted", true);
    const customTitle = text("Title", "Orbit design system");

    return {
      info:
        "Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <div style={{ padding: 20, backgroundColor: "#46515E" }}>
                  <Heading type={type} element={element} inverted={inverted}>
                    {customTitle}
                  </Heading>
                </div>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Playground", () => {
    const element = select("Element", Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H2);
    const type = select("Type", Object.values(TYPE_OPTIONS), TYPE_OPTIONS.DISPLAY);
    const dataTest = text("dataTest", "test");

    const customTitle = text("Title", "Orbit design system");
    const spaceAfter = select("spaceAfter", [undefined, ...Object.values(SPACINGS_AFTER)]);
    return {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Heading element={element} type={type} dataTest={dataTest} spaceAfter={spaceAfter}>
                  {customTitle}
                </Heading>
              ),
            },
          ],
        },
      ],
    };
  });
