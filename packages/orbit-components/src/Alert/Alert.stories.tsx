import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import * as Icons from "../icons";
import { TYPE_OPTIONS } from "./consts";
import { TYPE_OPTIONS as BUTTON_TYPE_OPTIONS } from "./AlertButton/consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import { SPACINGS_AFTER } from "../common/consts";
import List from "../List";
import ListItem from "../List/ListItem";
import Text from "../Text";
import Stack from "../Stack";
import Heading from "../Heading";
import CountryFlag from "../CountryFlag";
import TextLink from "../TextLink";

import Alert, { AlertButton } from ".";

const getIcon = (source: string | null) => (source ? Icons[source] : null);

type AlertPropsAndCustomArgs = React.ComponentProps<typeof Alert> & {
  message?: string;
  button?: string;
};

const meta: Meta<AlertPropsAndCustomArgs> = {
  title: "Alert",
  component: Alert,

  args: {
    title: "Some additional information",
    message: "The quick, brown fox jumps over a lazy dog.",
    type: TYPE_OPTIONS.INFO,
    icon: true,
    closable: false,
    spaceAfter: SPACINGS_AFTER.SMALL,
    suppressed: false,
  },

  argTypes: {
    icon: {
      options: Object.keys(Icons),
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
  },
};

export default meta;
type Story = StoryObj<AlertPropsAndCustomArgs>;

export const Default: Story = {
  render: ({ icon, ...args }) => {
    const Icon = typeof icon === "string" && getIcon(icon);

    return <Alert {...args} icon={Icon ? <Icon /> : true} />;
  },

  parameters: {
    info: "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    controls: { exclude: ["message"] },
  },
};

export const Content: Story = {
  render: ({ message, icon, ...args }) => {
    const Icon = typeof icon === "string" && getIcon(icon);

    return (
      <Alert {...args} icon={Icon ? <Icon /> : true}>
        {message}
      </Alert>
    );
  },

  parameters: {
    controls: { exclude: ["title"] },
  },

  args: {
    title: "",
  },
};

export const Button: Story = {
  render: ({ type }) => {
    return <AlertButton type={type}>AlertButton</AlertButton>;
  },

  parameters: {
    controls: { exclude: ["title", "message", "icon", "closable", "spaceAfter", "suppressed"] },
  },

  args: {
    type: BUTTON_TYPE_OPTIONS.INFO,
  },

  argTypes: {
    type: {
      options: Object.values(BUTTON_TYPE_OPTIONS),
      control: {
        type: "select",
      },
    },
  },
};

export const InfoAlert: Story = {
  render: ({ message, icon, ...args }) => {
    const Icon = typeof icon === "string" && getIcon(icon);

    return (
      <Alert {...args} icon={Icon ? <Icon /> : true}>
        {message}
      </Alert>
    );
  },

  parameters: {
    info: "Use when you need to inform users about something that is happening in their booking or a trip. If the issue is potentially dangerous, consider using warning alert. Keep in mind that warning alert can stress users more than the informational one. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const SuccessAlert: Story = {
  render: ({ message, icon, ...args }) => {
    const Icon = typeof icon === "string" && getIcon(icon);

    return (
      <Alert {...args} icon={Icon ? <Icon /> : true}>
        {message}
      </Alert>
    );
  },

  parameters: {
    info: "Use when a user just performed some action and we need to tell them that action was successful. This button is usually used without an action button.Avoid using success banner if there is any follow-up action, for example, in cases where we need to confirm something to users by e-mail later. It's recommended to use informational alert instead. Visit Orbit.Kiwi for more detailed guidelines.",
  },

  args: {
    title: "You did it!",
    message: "The quick, brown fox jumps over a lazy dog.",
    type: TYPE_OPTIONS.SUCCESS,
  },
};

export const WarningAlert: Story = {
  render: ({ message, icon, ...args }) => {
    const Icon = typeof icon === "string" && getIcon(icon);

    return (
      <Alert {...args} icon={Icon ? <Icon /> : true}>
        {message}
      </Alert>
    );
  },

  parameters: {
    info: "Use in cases when you need to inform users about a potentially dangerous situation in their trip and it requires some action from them. However, if the issue requires immediate attention, use critical alert instead. Visit Orbit.Kiwi for more detailed guidelines.",
  },

  args: {
    title: "Be careful!",
    message: "The quick, brown fox jumps over a lazy dog.",
    type: TYPE_OPTIONS.WARNING,
  },
};

export const CriticalAlert: Story = {
  render: ({ message, icon, ...args }) => {
    const Icon = typeof icon === "string" && getIcon(icon);

    return (
      <Alert {...args} icon={Icon ? <Icon /> : true}>
        {message}
      </Alert>
    );
  },

  parameters: {
    info: "Use when something is blocking users from continuing or when some issue needs to be resolved immediately. A critical alert should provide some form of solution for their problem. If something is important for users to solve as soon as possible, automatic open of a modal window is worthy of considering. Visit Orbit.Kiwi for more detailed guidelines.",
  },

  args: {
    title: "Something has gone horribly wrong",
    message: "The quick, brown fox jumps over a lazy dog.",
    type: TYPE_OPTIONS.CRITICAL,
  },
};

export const OnlyTitle: Story = {
  render: ({ icon, ...args }) => {
    const Icon = typeof icon === "string" && getIcon(icon);

    return <Alert {...args} icon={Icon ? <Icon /> : true} />;
  },

  parameters: {
    info: "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    controls: { exclude: ["message"] },
  },

  args: {
    title: "The quick, brown fox jumps over a lazy dog.",
  },
};

export const InlineActions: Story = {
  render: ({ type, icon, button, ...args }) => {
    const Icon = typeof icon === "string" && getIcon(icon);

    return (
      <Alert
        {...args}
        icon={Icon ? <Icon /> : true}
        onClose={action("Close")}
        inlineActions={
          <AlertButton type={type} href="#">
            {button}
          </AlertButton>
        }
      />
    );
  },

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    controls: { exclude: ["message"] },
  },

  args: {
    title: "You can change the title by changing the Title control",
    button: "I am a link",
    icon: "Ai",
  },
};

export const WithTextLink: Story = {
  render: args => {
    return (
      <Alert {...args}>
        <p>
          <TextLink type="primary">This is</TextLink> a primary textlink.
          <br />
          <TextLink type="secondary">This is</TextLink> a secondary textlink.
        </p>
      </Alert>
    );
  },

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    controls: { exclude: ["title", "message", "icon"] },
  },

  args: {
    title: "",
    icon: false,
  },
};

export const Playground: Story = {
  render: ({ message, button, type, icon, suppressed, ...args }) => {
    const Icon = typeof icon === "string" && getIcon(icon);

    return (
      <Alert
        type={type}
        {...args}
        icon={Icon ? <Icon /> : true}
        suppressed={suppressed}
        onClose={action("Close")}
      >
        <Stack spacing="small">
          <Stack spacing="XXSmall">
            <div>{message}</div>
            <List>
              <ListItem>
                <Text type={type}>623 Kč will be refunded by your payment card</Text>
              </ListItem>
              <ListItem>623 Kč will be refunded by your payment card</ListItem>
            </List>
          </Stack>
          <Stack direction="row" spacing="XSmall">
            <AlertButton type={type} href="#">
              {button}
            </AlertButton>
            <AlertButton
              type={suppressed ? "secondary" : (`${type}Subtle` as BUTTON_TYPE_OPTIONS)}
              href="#"
            >
              {button}
            </AlertButton>
          </Stack>
        </Stack>
      </Alert>
    );
  },

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },

  args: {
    type: TYPE_OPTIONS.INFO,
    title: "You can change the title by changing the Title control",
    message: "Also you can change the message by changing the Message control",
    button: "I am a link",
    icon: "Airplane",
  },
};

export const Rtl: Story = {
  render: ({ icon, ...args }) => {
    const Icon = typeof icon === "string" && getIcon(icon);

    return (
      <RenderInRtl>
        <Alert {...args} icon={Icon ? <Icon /> : true} onClose={action("Close")}>
          <Stack spacing="XSmall">
            <Stack spacing="XXSmall">
              <Text>
                Requirements found here are for reference purposes only. Contact the embassy or your
                foreign ministry for more information.
              </Text>
              <Heading type="title4">
                Make sure you know your visa requirements for these countries:
              </Heading>
              <List>
                <ListItem icon={<CountryFlag code="pl" name="Poland" />}>Poland</ListItem>
              </List>
            </Stack>
            <AlertButton type="info">Check Visa Requirements</AlertButton>
          </Stack>
        </Alert>
      </RenderInRtl>
    );
  },

  parameters: {
    info: "This is a preview of this component in RTL setup.",
    controls: { exclude: ["message"] },
  },

  args: {
    icon: "Airplane",
  },
};
