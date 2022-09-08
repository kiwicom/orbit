import * as React from "react";
import { text, select, boolean, object } from "@storybook/addon-knobs";

import { ELEMENT_OPTIONS, TYPE_OPTIONS, ALIGN } from "./consts";
import SPACINGS_AFTER from "../common/getSpacingToken/consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import Heading from ".";

export default {
  title: "Heading",
};

export const Default = () => {
  const customTitle = text("Title", "Orbit design system");
  return <Heading>{customTitle}</Heading>;
};

Default.story = {
  parameters: {
    info:
      "Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const TitleDisplay = () => {
  const customTitle = text("Title", "Orbit design system");
  const as = select("as", Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H1);
  return (
    <Heading type="display" as={as}>
      {customTitle}
    </Heading>
  );
};

TitleDisplay.story = {
  parameters: {
    info:
      "Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const TitleDisplaySubtitle = () => {
  const customTitle = text("Title", "Orbit design system");
  const as = select("as", Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H1);
  return (
    <Heading type="displaySubtitle" as={as}>
      {customTitle}
    </Heading>
  );
};

TitleDisplaySubtitle.story = {
  name: "Title displaySubtitle",

  parameters: {
    info:
      "Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const Title1 = () => {
  const customTitle = text("Title", "Orbit design system");
  const as = select("as", Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H1);
  return (
    <Heading type="title1" as={as}>
      {customTitle}
    </Heading>
  );
};

Title1.story = {
  parameters: {
    info:
      "Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const Title2 = () => {
  const customTitle = text("Title", "Orbit design system");
  const as = select("as", Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H2);
  return (
    <Heading type="title2" as={as}>
      {customTitle}
    </Heading>
  );
};

Title2.story = {
  parameters: {
    info:
      "Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const Title3 = () => {
  const customTitle = text("Title", "Orbit design system");
  const as = select("as", Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H3);
  return (
    <Heading type="title3" as={as}>
      {customTitle}
    </Heading>
  );
};

Title3.story = {
  parameters: {
    info:
      "Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const Title4 = () => {
  const customTitle = text("Title", "Orbit design system");
  const as = select("as", Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H4);
  return (
    <Heading type="title4" as={as}>
      {customTitle}
    </Heading>
  );
};

Title4.story = {
  parameters: {
    info:
      "Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const Title5 = () => {
  const customTitle = text("Title", "Orbit design system");
  const as = select("as", Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H5);
  return (
    <Heading type="title5" as={as}>
      {customTitle}
    </Heading>
  );
};

Title5.story = {
  parameters: {
    info:
      "Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const InvertedHeading = () => {
  const as = select("as", Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H1);
  const type = select("Type", Object.values(TYPE_OPTIONS), TYPE_OPTIONS.DISPLAY);
  const inverted = boolean("Inverted", true);
  const customTitle = text("Title", "Orbit design system");

  return (
    <div style={{ padding: 20, backgroundColor: "#46515E" }}>
      <Heading type={type} as={as} inverted={inverted}>
        {customTitle}
      </Heading>
    </div>
  );
};

InvertedHeading.story = {
  name: "Inverted heading",

  parameters: {
    info:
      "Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const Playground = () => {
  const as = select("as", Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H2);
  const type = select("Type", Object.values(TYPE_OPTIONS), TYPE_OPTIONS.DISPLAY);
  const dataTest = text("dataTest", "test");
  const id = text("ID", "ID-OF-A-ELEMENT");
  const customTitle = text("Title", "Orbit design system");
  const dataA11ySection = text("dataA11ySection", "ID-OF-SECTION");
  const spaceAfter = select(
    "spaceAfter",
    [undefined, ...Object.values(SPACINGS_AFTER)],
    SPACINGS_AFTER.SMALL,
  );

  const align = select("align", [undefined, ...Object.values(ALIGN)], ALIGN.START);

  const mediumMobile = object("mediumMobile", {
    type,
  });

  const largeMobile = object("largeMobile", {
    type,
  });

  const tablet = object("tablet", {
    type,
  });

  const desktop = object("desktop", {
    type,
  });

  const largeDesktop = object("largeDesktop", {
    type,
  });

  return (
    <Heading
      id={id}
      as={as}
      dataA11ySection={dataA11ySection}
      type={type}
      align={align}
      dataTest={dataTest}
      spaceAfter={spaceAfter}
      mediumMobile={mediumMobile}
      largeMobile={largeMobile}
      tablet={tablet}
      desktop={desktop}
      largeDesktop={largeDesktop}
    >
      {customTitle}
    </Heading>
  );
};

Playground.story = {
  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Accessibility = () => {
  const dataA11ySection = text("dataA11ySection", "ID-OF-SECTION");
  const customTitle = text("Title", "Orbit design system");
  return <Heading dataA11ySection={dataA11ySection}>{customTitle}</Heading>;
};

Accessibility.story = {
  parameters: {
    info: "This is a preview of component accessibility props",
  },
};

export const Rtl = () => (
  <RenderInRtl>
    <Heading type="display">Orbit design system</Heading>
  </RenderInRtl>
);

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
