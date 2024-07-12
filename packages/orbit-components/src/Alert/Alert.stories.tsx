import * as React from "react";
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

const getIcon = (source: string): React.ReactNode => Icons[source];

export default {
  title: "Alert",
};

export const Default = ({ title }) => {
  return <Alert icon title={title} />;
};

Default.story = {
  parameters: {
    info: "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

Default.args = {
  title: "The quick, brown fox jumps over a lazy dog.",
};

export const Content = ({ message }) => {
  return <Alert icon>{message}</Alert>;
};

Content.args = {
  message: "The quick, brown fox jumps over a lazy dog.",
};

export const Button = ({ type }) => {
  return <AlertButton type={type}>AlertButton</AlertButton>;
};

Button.args = {
  type: BUTTON_TYPE_OPTIONS.INFO,
};

Button.argTypes = {
  type: {
    options: Object.values(BUTTON_TYPE_OPTIONS),
    control: {
      type: "select",
    },
  },
};

export const InfoAlert = ({ title, message }) => {
  return (
    <Alert title={title} icon>
      {message}
    </Alert>
  );
};

InfoAlert.story = {
  name: "Info alert",

  parameters: {
    info: "Use when you need to inform users about something that is happening in their booking or a trip. If the issue is potentially dangerous, consider using warning alert. Keep in mind that warning alert can stress users more than the informational one. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

InfoAlert.args = {
  title: "Some additional information",
  message: "The quick, brown fox jumps over a lazy dog.",
};

export const SuccessAlert = ({ title, message }) => {
  return (
    <Alert type="success" title={title} icon>
      {message}
    </Alert>
  );
};

SuccessAlert.story = {
  name: "Success alert",

  parameters: {
    info: "Use when a user just performed some action and we need to tell them that action was successful. This button is usually used without an action button.Avoid using success banner if there is any follow-up action, for example, in cases where we need to confirm something to users by e-mail later. It's recommended to use informational alert instead. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

SuccessAlert.args = {
  title: "You did it!",
  message: "The quick, brown fox jumps over a lazy dog.",
};

export const WarningAlert = ({ title, message }) => {
  return (
    <Alert type="warning" title={title} icon>
      {message}
    </Alert>
  );
};

WarningAlert.story = {
  name: "Warning alert",

  parameters: {
    info: "Use in cases when you need to inform users about a potentially dangerous situation in their trip and it requires some action from them. However, if the issue requires immediate attention, use critical alert instead. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

WarningAlert.args = {
  title: "Be careful!",
  message: "The quick, brown fox jumps over a lazy dog.",
};

export const CriticalAlert = ({ title, message }) => {
  return (
    <Alert type="critical" title={title} icon>
      {message}
    </Alert>
  );
};

CriticalAlert.story = {
  name: "Critical alert",

  parameters: {
    info: "Use when something is blocking users from continuing or when some issue needs to be resolved immediately. A critical alert should provide some form of solution for their problem. If something is important for users to solve as soon as possible, automatic open of a modal window is worthy of considering. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

CriticalAlert.args = {
  title: "Something has gone horribly wrong",
  message: "The quick, brown fox jumps over a lazy dog.",
};

export const OnlyTitle = ({ title }) => {
  return <Alert title={title} closable />;
};

OnlyTitle.story = {
  name: "Only title",

  parameters: {
    info: "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

OnlyTitle.args = {
  title: "The quick, brown fox jumps over a lazy dog.",
};

export const InlineActions = ({ type, icon, title, closable, button }) => {
  const Icon = getIcon(icon);

  return (
    <Alert
      type={type}
      icon={Icon}
      title={title}
      closable={closable}
      onClose={action("Close")}
      inlineActions={
        <AlertButton type={type} href="#">
          {button}
        </AlertButton>
      }
    />
  );
};

InlineActions.story = {
  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

InlineActions.args = {
  type: TYPE_OPTIONS.INFO,
  title: "You can change the title by changing the Title knob",
  button: "I am a link",
  closable: false,
  icon: "Airplane",
};

InlineActions.argTypes = {
  type: {
    options: Object.values(TYPE_OPTIONS),
    control: {
      type: "select",
    },
  },
  icon: {
    options: Object.keys(Icons),
    control: {
      type: "select",
    },
  },
};

export const WithTextLink = ({ type }) => {
  return (
    <Alert type={type}>
      <p>
        <TextLink type="primary">This is</TextLink> a primary textlink.
        <br />
        <TextLink type="secondary">This is</TextLink> a secondary textlink.
      </p>
    </Alert>
  );
};

WithTextLink.story = {
  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

WithTextLink.args = {
  type: TYPE_OPTIONS.INFO,
};

WithTextLink.argTypes = {
  type: {
    options: Object.values(TYPE_OPTIONS),
    control: {
      type: "select",
    },
  },
};

export const Playground = ({
  type,
  title,
  message,
  dataTest,
  button,
  closable,
  icon,
  spaceAfter,
  suppressed,
}) => {
  const Icon = getIcon(icon);
  return (
    <Alert
      type={type}
      icon={Icon}
      title={title}
      suppressed={suppressed}
      closable={closable}
      onClose={action("Close")}
      dataTest={dataTest}
      spaceAfter={spaceAfter}
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
          <AlertButton type={suppressed ? "secondary" : undefined} href="#">
            {button}
          </AlertButton>
        </Stack>
      </Stack>
    </Alert>
  );
};

Playground.story = {
  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

Playground.args = {
  type: TYPE_OPTIONS.INFO,
  title: "You can change the title by changing the Title knob",
  message: "Also you can change the message by changing the Message knob",
  dataTest: "test",
  button: "I am a link",
  closable: false,
  icon: "Airplane",
  spaceAfter: SPACINGS_AFTER.SMALL,
  suppressed: false,
};

Playground.argTypes = {
  type: {
    options: Object.values(TYPE_OPTIONS),
    control: {
      type: "select",
    },
  },
  icon: {
    options: Object.keys(Icons),
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
};

export const Rtl = ({ icon }) => {
  const Icon = getIcon(icon);

  return (
    <RenderInRtl>
      <Alert
        type="info"
        icon={Icon}
        title="The title of the Alert"
        closable
        onClose={action("Close")}
      >
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
};

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};

Rtl.args = {
  icon: "Airplane",
};

Rtl.argTypes = {
  icon: {
    options: Object.keys(Icons),
    control: "select",
  },
};
