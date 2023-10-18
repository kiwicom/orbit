import * as React from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean, select } from "@storybook/addon-knobs";

import * as Icons from "../icons";
import { TYPE_OPTIONS } from "./consts";
import { TYPE_OPTIONS as BUTTON_TYPE_OPTIONS } from "./AlertButton/consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import SPACINGS_AFTER from "../common/getSpacingToken/consts";
import List from "../List";
import ListItem from "../List/ListItem";
import Text from "../Text";
import Stack from "../Stack";
import Heading from "../Heading";
import CountryFlag from "../CountryFlag";
import TextLink from "../TextLink";

import Alert, { AlertButton } from ".";

const getIcons = (defaultIcon: string) => select("Icon", ["", ...Object.keys(Icons)], defaultIcon);

const getIcon = (source: string): React.ReactNode => Icons[source];

export default {
  title: "Alert",
};

export const Default = () => {
  const message = "The quick, brown fox jumps over a lazy dog.";
  return <Alert icon title={message} />;
};

Default.story = {
  parameters: {
    info: "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const Content = () => {
  const message = "The quick, brown fox jumps over a lazy dog.";
  return <Alert icon>{message}</Alert>;
};

export const Button = () => {
  const type = select("type", Object.values(BUTTON_TYPE_OPTIONS), BUTTON_TYPE_OPTIONS.INFO);

  return <AlertButton type={type}>AlertButton</AlertButton>;
};

export const InfoAlert = () => {
  const title = text("Title", "Some additional information");
  const message = text("Message", "The quick, brown fox jumps over a lazy dog.");
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

export const SuccessAlert = () => {
  const title = text("Title", "You did it!");
  const message = text("Message", "The quick, brown fox jumps over a lazy dog.");
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

export const WarningAlert = () => {
  const title = text("Title", "Be careful!");
  const message = text("Message", "The quick, brown fox jumps over a lazy dog.");
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

export const CriticalAlert = () => {
  const title = text("Title", "Something has gone horribly wrong");
  const message = text("Message", "The quick, brown fox jumps over a lazy dog.");
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

export const OnlyTitle = () => {
  const title = text("Title", "The quick, brown fox jumps over a lazy dog.");
  return <Alert title={title} closable />;
};

OnlyTitle.story = {
  name: "Only title",

  parameters: {
    info: "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const InlineActions = () => {
  const type = select("Type", Object.values(TYPE_OPTIONS), "info");
  const title = text("Title", "You can change the title by changing the Title knob");
  const button = text("Button", "I am a link");
  const closable = boolean("Closable", false);
  const Icon = getIcon(getIcons("Airplane"));

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

export const WithTextLink = () => {
  const type = select("Type", Object.values(TYPE_OPTIONS), "info");

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

export const Playground = () => {
  const type = select("Type", Object.values(TYPE_OPTIONS), "info");
  const title = text("Title", "You can change the title by changing the Title knob");
  const message = text("Message", "Also you can change the message by changing the Message knob");
  const dataTest = text("dataTest", "test");
  const button = text("Button", "I am a link");
  const closable = boolean("Closable", false);
  const Icon = getIcon(getIcons("Airplane"));
  const spaceAfter = select("spaceAfter", Object.values(SPACINGS_AFTER), SPACINGS_AFTER.SMALL);
  const suppressed = boolean("suppressed", false);

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
          <AlertButton type={suppressed ? "secondary" : `${type}Subtle`} href="#">
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

export const Rtl = () => {
  const Icon = getIcon(getIcons("Airplane"));

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

export const AlertVisualTest = () => {
  return (
    <div className="space-y-xs">
      <div className="space-x-xs flex">
        {Object.values(TYPE_OPTIONS).map(type => (
          <div className="space-y-xs">
            <Alert type={type} title="Title">
              <Text type="primary">No icon and some reasonably long text</Text>
            </Alert>

            <Alert type={type} icon title="Title">
              <Text type="primary">With icon and some reasonably long text</Text>
            </Alert>

            <Alert type={type} title="Title">
              <div className="space-x-xs">
                <TextLink>Same type link</TextLink>
                <TextLink type="secondary">Secondary type link</TextLink>
              </div>
            </Alert>
          </div>
        ))}
      </div>

      <div className="space-x-xs flex">
        {Object.values(BUTTON_TYPE_OPTIONS).map(type => (
          <>
            <AlertButton type={type}>Button</AlertButton>
            <AlertButton dataTest="AlertButtonHover" type={type}>
              Hover
            </AlertButton>
            <AlertButton dataTest="AlertButtonFocus" type={type}>
              Focus
            </AlertButton>
            <AlertButton dataTest="AlertButtonActive" type={type}>
              Active
            </AlertButton>
          </>
        ))}
      </div>

      <Alert type="info" title="Closable and only Title" closable />

      <div className="space-x-xs flex">
        <Alert type="info" title="Title" closable onClose={action("Close")}>
          <Text type="primary">Closable and some reasonably long text</Text>
        </Alert>

        <Alert type="info" icon={<Icons.Airplane />} title="Title">
          <Text type="primary">Custom icon and some reasonably long text</Text>
        </Alert>

        <Alert
          type="info"
          inlineActions={
            <AlertButton href="#" type="info">
              Inline action
            </AlertButton>
          }
          title="Title and no children"
        />
      </div>
    </div>
  );
};

AlertVisualTest.story = {
  name: "Alert visual test",
  parameters: {
    chromatic: {
      disableSnapshot: false,
    },
    pseudo: {
      hover: ["[data-test='AlertButtonHover']"],
      focus: ["[data-test='AlertButtonFocus']"],
      active: ["[data-test='AlertButtonActive']"],
    },
  },
};

export const AlertVisualTestRtl = () => {
  return (
    <RenderInRtl>
      <AlertVisualTest />
    </RenderInRtl>
  );
};

AlertVisualTestRtl.story = {
  name: "Alert visual test RTL",
  parameters: {
    chromatic: {
      disableSnapshot: false,
    },
    pseudo: {
      hover: ["[data-test='AlertButtonHover']"],
      focus: ["[data-test='AlertButtonFocus']"],
      active: ["[data-test='AlertButtonActive']"],
    },
  },
};
