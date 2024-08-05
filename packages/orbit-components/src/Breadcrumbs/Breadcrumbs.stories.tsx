import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { SPACINGS_AFTER } from "../common/consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import Breadcrumbs, { BreadcrumbsItem } from ".";

type BreadcrumbsPropsAndCustomArgs = React.ComponentProps<typeof Breadcrumbs> &
  React.ComponentProps<typeof BreadcrumbsItem>;

const meta: Meta<BreadcrumbsPropsAndCustomArgs> = {
  title: "Breadcrumbs",
  component: Breadcrumbs,

  parameters: {
    controls: {
      exclude: ["goBackTitle"],
    },
  },
};

export default meta;
type Story = StoryObj<BreadcrumbsPropsAndCustomArgs>;

export const Default = {
  render: args => (
    <Breadcrumbs {...args} onGoBack={action("onGoBack")}>
      <BreadcrumbsItem href="https://kiwi.com" onClick={action("clicked")}>
        Kiwi.com
      </BreadcrumbsItem>
      <BreadcrumbsItem href="#1" onClick={action("clicked")}>
        1. Level
      </BreadcrumbsItem>
      <BreadcrumbsItem onClick={action("clicked")}>2. Level</BreadcrumbsItem>
      <BreadcrumbsItem href="#3">3. Level</BreadcrumbsItem>
      <BreadcrumbsItem>4. Level</BreadcrumbsItem>
    </Breadcrumbs>
  ),

  parameters: {
    controls: {
      disable: true,
    },
  },
};

export const Playground: Story = {
  render: ({ spaceAfter, href, withGoBack, backHref }) => (
    <Breadcrumbs
      backHref={backHref}
      onGoBack={withGoBack ? action("onGoBack") : undefined}
      spaceAfter={spaceAfter}
    >
      <BreadcrumbsItem id="rocket" href={href} onClick={action("clicked")}>
        Kiwi.com
      </BreadcrumbsItem>
      <BreadcrumbsItem id="rocket2" href={href} onClick={action("clicked")}>
        1. Level
      </BreadcrumbsItem>
      <BreadcrumbsItem id="rocket3" href={href} onClick={action("clicked")}>
        2. Level
      </BreadcrumbsItem>
      <BreadcrumbsItem id="rocket4" href={href} onClick={action("clicked")}>
        3. Level
      </BreadcrumbsItem>
      <BreadcrumbsItem id="rocket5" href={href} onClick={action("clicked")}>
        4. Level
      </BreadcrumbsItem>
    </Breadcrumbs>
  ),

  args: {
    spaceAfter: SPACINGS_AFTER.SMALL,
    href: "https://kiwi.com",
    withGoBack: true,
    backHref: "",
  },

  argTypes: {
    spaceAfter: {
      options: Object.values(SPACINGS_AFTER),
      control: {
        type: "select",
      },
    },
  },
};

export const Rtl: Story = {
  render: args => (
    <RenderInRtl>
      <Breadcrumbs {...args} onGoBack={action("onGoBack")}>
        <BreadcrumbsItem id="rocket" href="https://kiwi.com" onClick={action("clicked")}>
          Kiwi.com
        </BreadcrumbsItem>
        <BreadcrumbsItem id="rocket2" href="https://kiwi.com" onClick={action("clicked")}>
          1. Level
        </BreadcrumbsItem>
        <BreadcrumbsItem id="rocket3" href="https://kiwi.com" onClick={action("clicked")}>
          2. Level
        </BreadcrumbsItem>
        <BreadcrumbsItem id="rocket4" href="https://kiwi.com" onClick={action("clicked")}>
          3. Level
        </BreadcrumbsItem>
        <BreadcrumbsItem id="rocket5" href="https://kiwi.com" onClick={action("clicked")}>
          4. Level
        </BreadcrumbsItem>
      </Breadcrumbs>
    </RenderInRtl>
  ),

  parameters: {
    controls: {
      disable: true,
    },
  },
};

export const BackLink: Story = {
  render: args => (
    <Breadcrumbs {...args} backHref="https://www.kiwi.com">
      {null}
    </Breadcrumbs>
  ),

  parameters: {
    info: "Render the back button as a link.",
    controls: {
      disable: true,
    },
  },
};
