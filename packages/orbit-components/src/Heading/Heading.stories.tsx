import * as React from "react";

import { ELEMENT_OPTIONS, TYPE_OPTIONS, ALIGN } from "./consts";
import { SPACINGS_AFTER } from "../common/consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import Heading from ".";

export default {
  title: "Heading",
};

export const Default = ({ customTitle }) => {
  return <Heading>{customTitle}</Heading>;
};

Default.story = {
  parameters: {
    info: "Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

Default.args = {
  customTitle: "Orbit design system",
};

export const TitleDisplay = ({ customTitle, as }) => {
  return (
    <Heading type="display" as={as}>
      {customTitle}
    </Heading>
  );
};

TitleDisplay.story = {
  parameters: {
    info: "Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

TitleDisplay.args = {
  customTitle: "Orbit design system",
  as: ELEMENT_OPTIONS.H1,
};

TitleDisplay.argTypes = {
  as: {
    options: Object.values(ELEMENT_OPTIONS),
    control: {
      type: "select",
    },
  },
};

export const TitleDisplaySubtitle = ({ customTitle, as }) => {
  return (
    <Heading type="displaySubtitle" as={as}>
      {customTitle}
    </Heading>
  );
};

TitleDisplaySubtitle.story = {
  name: "Title displaySubtitle",

  parameters: {
    info: "Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

TitleDisplaySubtitle.args = {
  customTitle: "Orbit design system",
  as: ELEMENT_OPTIONS.H1,
};

TitleDisplaySubtitle.argTypes = {
  as: {
    options: Object.values(ELEMENT_OPTIONS),
    control: {
      type: "select",
    },
  },
};

export const Title1 = ({ customTitle, as }) => {
  return (
    <Heading type="title1" as={as}>
      {customTitle}
    </Heading>
  );
};

Title1.story = {
  parameters: {
    info: "Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

Title1.args = {
  customTitle: "Orbit design system",
  as: ELEMENT_OPTIONS.H1,
};

Title1.argTypes = {
  as: {
    options: Object.values(ELEMENT_OPTIONS),
    control: {
      type: "select",
    },
  },
};

export const Title2 = ({ customTitle, as }) => {
  return (
    <Heading type="title2" as={as}>
      {customTitle}
    </Heading>
  );
};

Title2.story = {
  parameters: {
    info: "Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

Title2.args = {
  customTitle: "Orbit design system",
  as: ELEMENT_OPTIONS.H2,
};

Title2.argTypes = {
  as: {
    options: Object.values(ELEMENT_OPTIONS),
    control: {
      type: "select",
    },
  },
};

export const Title3 = ({ customTitle, as }) => {
  return (
    <Heading type="title3" as={as}>
      {customTitle}
    </Heading>
  );
};

Title3.story = {
  parameters: {
    info: "Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

Title3.args = {
  customTitle: "Orbit design system",
  as: ELEMENT_OPTIONS.H3,
};

Title3.argTypes = {
  as: {
    options: Object.values(ELEMENT_OPTIONS),
    control: {
      type: "select",
    },
  },
};

export const Title4 = ({ customTitle, as }) => {
  return (
    <Heading type="title4" as={as}>
      {customTitle}
    </Heading>
  );
};

Title4.story = {
  parameters: {
    info: "Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

Title4.args = {
  customTitle: "Orbit design system",
  as: ELEMENT_OPTIONS.H4,
};

Title4.argTypes = {
  as: {
    options: Object.values(ELEMENT_OPTIONS),
    control: {
      type: "select",
    },
  },
};

export const Title5 = ({ customTitle, as }) => {
  return (
    <Heading type="title5" as={as}>
      {customTitle}
    </Heading>
  );
};

Title5.story = {
  parameters: {
    info: "Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

Title5.args = {
  customTitle: "Orbit design system",
  as: ELEMENT_OPTIONS.H5,
};

Title5.argTypes = {
  as: {
    options: Object.values(ELEMENT_OPTIONS),
    control: {
      type: "select",
    },
  },
};

export const Title6 = ({ customTitle, as }) => {
  return (
    <Heading type="title6" as={as}>
      {customTitle}
    </Heading>
  );
};

Title6.story = {
  parameters: {
    info: "Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

Title6.args = {
  customTitle: "Orbit design system",
  as: ELEMENT_OPTIONS.H6,
};

Title6.argTypes = {
  as: {
    options: Object.values(ELEMENT_OPTIONS),
    control: {
      type: "select",
    },
  },
};

export const InvertedHeading = ({ as, type, inverted, customTitle }) => {
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
    info: "Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

InvertedHeading.args = {
  as: ELEMENT_OPTIONS.H1,
  type: TYPE_OPTIONS.DISPLAY,
  inverted: true,
  customTitle: "Orbit design system",
};

InvertedHeading.argTypes = {
  as: {
    options: Object.values(ELEMENT_OPTIONS),
    control: {
      type: "select",
    },
  },
  type: {
    options: Object.values(TYPE_OPTIONS),
    control: {
      type: "select",
    },
  },
};

export const Playground = ({
  as,
  type,
  customTitle,
  dataA11ySection,
  align,
  dataTest,
  spaceAfter,
  mediumMobile,
  largeMobile,
  tablet,
  desktop,
  largeDesktop,
  id,
}) => {
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
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

Playground.args = {
  as: ELEMENT_OPTIONS.H2,
  type: TYPE_OPTIONS.DISPLAY,
  dataTest: "test",
  id: "ID-OF-A-ELEMENT",
  customTitle: "Orbit design system",
  dataA11ySection: "ID-OF-SECTION",
  spaceAfter: SPACINGS_AFTER.SMALL,
  align: ALIGN.START,
  mediumMobile: {
    type: TYPE_OPTIONS.DISPLAY,
  },
  largeMobile: {
    type: TYPE_OPTIONS.DISPLAY,
  },
  tablet: {
    type: TYPE_OPTIONS.DISPLAY,
  },
  desktop: {
    type: TYPE_OPTIONS.DISPLAY,
  },
  largeDesktop: {
    type: TYPE_OPTIONS.DISPLAY,
  },
};

Playground.argTypes = {
  as: {
    options: Object.values(ELEMENT_OPTIONS),
    control: {
      type: "select",
    },
  },
  type: {
    options: Object.values(TYPE_OPTIONS),
    control: {
      type: "select",
    },
  },
  spaceAfter: {
    options: Object.values(SPACINGS_AFTER),
    control: {
      type: "select",
    },
  },
  align: {
    options: Object.values(ALIGN),
    control: {
      type: "select",
    },
  },
};

export const Accessibility = ({ dataA11ySection, customTitle }) => {
  return <Heading dataA11ySection={dataA11ySection}>{customTitle}</Heading>;
};

Accessibility.story = {
  parameters: {
    info: "This is a preview of component accessibility props",
  },
};

Accessibility.args = {
  dataA11ySection: "ID-OF-SECTION",
  customTitle: "Orbit design system",
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
