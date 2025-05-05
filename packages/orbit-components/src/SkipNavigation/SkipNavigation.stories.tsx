import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Heading from "../Heading";
import Text from "../Text";
import TextLink from "../TextLink";
import Card, { CardSection } from "../Card";
import Stack from "../Stack";
import NavigationBar from "../NavigationBar";
import ButtonLink from "../ButtonLink";
import AccountCircle from "../icons/AccountCircle";

import SkipNavigation from ".";

// Define a custom story type that includes both component props
type CombinedProps = React.ComponentProps<typeof SkipNavigation> &
  Pick<React.ComponentProps<typeof NavigationBar>, "transparentBgAtTop" | "hideOnScroll">;

type Story = StoryObj<typeof SkipNavigation>;
type CombinedStory = StoryObj<CombinedProps>;

const Content = (
  <Stack>
    <Card
      title="Focusable Card Heading"
      dataA11ySection="focusable-card-id"
      description="Buy this trip with us and you'll get exclusive premium services at Milano Bergamo Airport for free"
    >
      <CardSection>
        <Text>
          Lorem ipsum dolor sit &nbsp;
          <TextLink external={false} href="https://kiwi.com" type="primary">
            efficitur
          </TextLink>{" "}
          nulla. Ut convallis fermentum efficitur. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames. convallis.
        </Text>
      </CardSection>
    </Card>

    <Card title="Booking" dataA11ySection="booking">
      <CardSection>
        <Stack>
          <Text>
            Lorem ipsum dolor sit amet &nbsp;
            <TextLink external={false} href="https://kiwi.com" type="primary">
              fermentum
            </TextLink>{" "}
            ulla. Ut convallis fermentum efficitur.
          </Text>
          <Heading as="h2" type="title3" dataA11ySection="subheading">
            Focusable subheading
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet &nbsp;
            <TextLink external={false} href="https://kiwi.com" type="primary">
              habitant
            </TextLink>{" "}
            ulla. Ut convallis fermentum efficitur. Ut convallis fermentum efficitur. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames. convallis.
          </Text>
        </Stack>
      </CardSection>
    </Card>
  </Stack>
);

const meta: Meta<typeof SkipNavigation> = {
  title: "SkipNavigation",
  component: SkipNavigation,

  args: {
    actions: [
      {
        link: "https://www.kiwi.com/cz/pages/content/terms",
        name: "Go to terms and conditions",
      },
      {
        name: "Add baggage",
        onClick: action("Add baggage"),
      },
      {
        name: "Request refund",
        onClick: action("Request refund"),
      },
    ],
    feedbackUrl: "#",
    feedbackLabel: "Send feedback",
    firstSectionLabel: "Jump to section",
    firstActionLabel: "Common actions",
    id: "ID",
    isInNav: false,
  },

  argTypes: {
    id: {
      table: {
        category: "SkipNavigation",
      },
    },
    isInNav: {
      table: {
        category: "SkipNavigation",
      },
    },
    feedbackUrl: {
      table: {
        category: "SkipNavigation",
      },
    },
    feedbackLabel: {
      table: {
        category: "SkipNavigation",
      },
    },
    firstSectionLabel: {
      table: {
        category: "SkipNavigation",
      },
    },
    firstActionLabel: {
      table: {
        category: "SkipNavigation",
      },
    },
    actions: {
      table: {
        category: "SkipNavigation",
      },
    },
  },
};

export default meta;

export const Default: Story = {
  render: args => (
    <>
      <SkipNavigation {...args} />
      {Content}
    </>
  ),

  parameters: {
    info: "Default configuration of SkipNavigation. SkipNavigation is displayed only when focused. Use Tab or Shift + Tab to focus it.",
  },
};

export const InNavigationBar: CombinedStory = {
  render: args => {
    const { transparentBgAtTop, hideOnScroll, ...skipNavigationProps } = args;

    return (
      <>
        <NavigationBar transparentBgAtTop={transparentBgAtTop} hideOnScroll={hideOnScroll}>
          <Stack justify="between" spacing="none">
            <SkipNavigation {...skipNavigationProps} />
            <ButtonLink type="secondary">Flights</ButtonLink>
            <Stack direction="row" spacing="100" justify="end" shrink as="nav">
              <ButtonLink aria-label="Account" iconLeft={<AccountCircle />} type="secondary" />
            </Stack>
          </Stack>
        </NavigationBar>
        <div className="mt-100">{Content}</div>
      </>
    );
  },

  parameters: {
    info: "Styling for SkipNavigation when used in navigation bar. SkipNavigation is displayed only when focused. Use Tab or Shift + Tab to focus it.",
  },

  args: {
    isInNav: true,
    feedbackUrl: "",
    feedbackLabel: "",
    firstSectionLabel: "Section",
    firstActionLabel: "",
    actions: undefined,
    // NavigationBar props
    transparentBgAtTop: false,
    hideOnScroll: true,
  },

  argTypes: {
    transparentBgAtTop: {
      table: {
        category: "NavigationBar",
      },
    },
    hideOnScroll: {
      table: {
        category: "NavigationBar",
      },
    },
  },
};

export const Playground: Story = {
  render: args => (
    <>
      <SkipNavigation {...args} />
      {Content}
    </>
  ),

  parameters: {
    info: "All possible options for SkipNavigation. SkipNavigation is displayed only when focused. Use Tab or Shift + Tab to focus it.",
  },
};
