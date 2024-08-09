import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { ELEMENT_OPTIONS, TYPE_OPTIONS, ALIGN } from "./consts";
import { SPACINGS_AFTER } from "../common/consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import Heading from ".";

const meta: Meta<typeof Heading> = {
  title: "Heading",
  component: Heading,

  parameters: {
    info: "Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  },

  args: {
    children: "Orbit design system",
  },

  argTypes: {
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
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  parameters: {
    controls: {
      exclude: ["type", "as", "inverted", "align", "spaceAfter"],
    },
  },
};

export const TitleDisplay: Story = {
  args: {
    as: ELEMENT_OPTIONS.H1,
    type: TYPE_OPTIONS.DISPLAY,
  },

  parameters: {
    controls: {
      exclude: ["inverted"],
    },
  },
};

export const TitleDisplaySubtitle: Story = {
  args: {
    as: ELEMENT_OPTIONS.H1,
    type: TYPE_OPTIONS.DISPLAYSUBTITLE,
  },

  parameters: {
    controls: {
      exclude: ["inverted"],
    },
  },
};

export const Title0: Story = {
  args: {
    as: ELEMENT_OPTIONS.H1,
    type: TYPE_OPTIONS.TITLE0,
  },

  parameters: {
    controls: {
      exclude: ["inverted"],
    },
  },
};

export const Title1: Story = {
  args: {
    as: ELEMENT_OPTIONS.H1,
    type: TYPE_OPTIONS.TITLE1,
  },

  parameters: {
    controls: {
      exclude: ["inverted"],
    },
  },
};

export const Title2: Story = {
  args: {
    as: ELEMENT_OPTIONS.H2,
    type: TYPE_OPTIONS.TITLE2,
  },

  parameters: {
    controls: {
      exclude: ["inverted"],
    },
  },
};

export const Title3: Story = {
  args: {
    as: ELEMENT_OPTIONS.H3,
    type: TYPE_OPTIONS.TITLE3,
  },

  parameters: {
    controls: {
      exclude: ["inverted"],
    },
  },
};

export const Title4: Story = {
  args: {
    as: ELEMENT_OPTIONS.H4,
    type: TYPE_OPTIONS.TITLE4,
  },

  parameters: {
    controls: {
      exclude: ["inverted"],
    },
  },
};

export const Title5: Story = {
  args: {
    as: ELEMENT_OPTIONS.H5,
    type: TYPE_OPTIONS.TITLE5,
  },

  parameters: {
    controls: {
      exclude: ["inverted"],
    },
  },
};

export const Title6: Story = {
  args: {
    as: ELEMENT_OPTIONS.H6,
    type: TYPE_OPTIONS.TITLE6,
  },

  parameters: {
    controls: {
      exclude: ["inverted"],
    },
  },
};

export const InvertedHeading: Story = {
  render: ({ children, ...args }) => (
    <div style={{ padding: 20, backgroundColor: "#46515E" }}>
      <Heading {...args}>{children}</Heading>
    </div>
  ),

  args: {
    as: ELEMENT_OPTIONS.H1,
    type: TYPE_OPTIONS.DISPLAY,
    inverted: true,
  },
};

export const Rtl: Story = {
  render: ({ children, ...args }) => (
    <RenderInRtl>
      <Heading {...args}>{children}</Heading>
    </RenderInRtl>
  ),

  parameters: {
    info: "This is a preview of this component in RTL setup.",
    controls: {
      exclude: ["inverted"],
    },
  },

  args: {
    type: TYPE_OPTIONS.DISPLAY,
  },
};

export const Playground: Story = {
  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },

  args: {
    type: TYPE_OPTIONS.DISPLAY,
    align: ALIGN.START,
    as: ELEMENT_OPTIONS.H2,
    inverted: false,
    spaceAfter: SPACINGS_AFTER.SMALL,
    dataA11ySection: "ID-OF-SECTION",
    id: "ID-OF-A-ELEMENT",
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
  },
};
