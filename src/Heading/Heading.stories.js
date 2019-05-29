// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text, select, boolean } from "@storybook/addon-knobs";

import { ELEMENT_OPTIONS, TYPE_OPTIONS } from "./consts";
import SPACINGS_AFTER from "../common/getSpacingToken/consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import Heading from "./index";

storiesOf("Heading", module)
  .add(
    "Default",
    () => {
      const customTitle = text("Title", "Orbit design system");
      return <Heading>{customTitle}</Heading>;
    },
    {
      info:
        "Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Title Display",
    () => {
      const customTitle = text("Title", "Orbit design system");
      const element = select("Element", Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H1);
      return (
        <Heading type="display" element={element}>
          {customTitle}
        </Heading>
      );
    },
    {
      info:
        "Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Title displaySubtitle",
    () => {
      const customTitle = text("Title", "Orbit design system");
      const element = select("Element", Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H1);
      return (
        <Heading type="display" element={element}>
          {customTitle}
        </Heading>
      );
    },
    {
      info:
        "Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Title 1",
    () => {
      const customTitle = text("Title", "Orbit design system");
      const element = select("Element", Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H1);
      return (
        <Heading type="title1" element={element}>
          {customTitle}
        </Heading>
      );
    },
    {
      info:
        "Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Title 2",
    () => {
      const customTitle = text("Title", "Orbit design system");
      const element = select("Element", Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H2);
      return (
        <Heading type="title2" element={element}>
          {customTitle}
        </Heading>
      );
    },
    {
      info:
        "Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Title 3",
    () => {
      const customTitle = text("Title", "Orbit design system");
      const element = select("Element", Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H3);
      return (
        <Heading type="title3" element={element}>
          {customTitle}
        </Heading>
      );
    },
    {
      info:
        "Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Title 4",
    () => {
      const customTitle = text("Title", "Orbit design system");
      const element = select("Element", Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H4);
      return (
        <Heading type="title4" element={element}>
          {customTitle}
        </Heading>
      );
    },
    {
      info:
        "Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Title 5",
    () => {
      const customTitle = text("Title", "Orbit design system");
      const element = select("Element", Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H5);
      return (
        <Heading type="title5" element={element}>
          {customTitle}
        </Heading>
      );
    },
    {
      info:
        "Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Inverted heading",
    () => {
      const element = select("Element", Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H1);
      const type = select("Type", Object.values(TYPE_OPTIONS), TYPE_OPTIONS.DISPLAY);
      const inverted = boolean("Inverted", true);
      const customTitle = text("Title", "Orbit design system");

      return (
        <div style={{ padding: 20, backgroundColor: "#46515E" }}>
          <Heading type={type} element={element} inverted={inverted}>
            {customTitle}
          </Heading>
        </div>
      );
    },
    {
      info:
        "Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Playground",
    () => {
      const element = select("Element", Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H2);
      const type = select("Type", Object.values(TYPE_OPTIONS), TYPE_OPTIONS.DISPLAY);
      const dataTest = text("dataTest", "test");

      const customTitle = text("Title", "Orbit design system");
      const dataA11ySection = text("dataA11ySection", "ID-OF-SECTION");
      const spaceAfter = select("spaceAfter", [null, ...Object.values(SPACINGS_AFTER)]);
      return (
        <Heading
          element={element}
          dataA11ySection={dataA11ySection}
          type={type}
          dataTest={dataTest}
          spaceAfter={spaceAfter}
        >
          {customTitle}
        </Heading>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "Accessibility",
    () => {
      const dataA11ySection = text("dataA11ySection", "ID-OF-SECTION");
      const customTitle = text("Title", "Orbit design system");
      return <Heading dataA11ySection={dataA11ySection}>{customTitle}</Heading>;
    },
    {
      info: "This is a preview of component accessibility props",
    },
  )
  .add(
    "RTL",
    () => (
      <RenderInRtl>
        <Heading type="display">Orbit design system</Heading>
      </RenderInRtl>
    ),
    {
      info: "This is a preview of this component in RTL setup.",
    },
  );
