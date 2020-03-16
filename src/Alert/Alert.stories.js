// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, boolean, select } from "@storybook/addon-knobs";

import * as Icons from "../icons";
import Button from "../Button";
import { TYPE_OPTIONS } from "./consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import SPACINGS_AFTER from "../common/getSpacingToken/consts";
import List from "../List";
import ListItem from "../List/ListItem";
import Text from "../Text";
import Stack from "../Stack";
import Heading from "../Heading";
import CountryFlag from "../CountryFlag";

import Alert from "./index";

const getIcons = defaultIcon => select("Icon", [null, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

storiesOf("Alert", module)
  .add(
    "Default",
    () => {
      const message = "The quick, brown fox jumps over a lazy dog.";
      return <Alert icon title={message} />;
    },
    {
      info:
        "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Info alert",
    () => {
      const title = text("Title", "Some additional information");
      const message = text("Message", "The quick, brown fox jumps over a lazy dog.");
      return (
        <Alert title={title} icon>
          {message}
        </Alert>
      );
    },
    {
      info:
        "Use when you need to inform users about something that is happening in their booking or a trip. If the issue is potentially dangerous, consider using warning alert. Keep in mind that warning alert can stress users more than the informational one. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Success alert",
    () => {
      const title = text("Title", "You did it!");
      const message = text("Message", "The quick, brown fox jumps over a lazy dog.");
      return (
        <Alert type="success" title={title} icon>
          {message}
        </Alert>
      );
    },
    {
      info:
        "Use when a user just performed some action and we need to tell them that action was successful. This button is usually used without an action button.\n" +
        "Avoid using success banner if there is any follow-up action, for example, in cases where we need to confirm something to users by e-mail later. It's recommended to use informational alert instead. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Warning alert",
    () => {
      const title = text("Title", "Be careful!");
      const message = text("Message", "The quick, brown fox jumps over a lazy dog.");
      return (
        <Alert type="warning" title={title} icon>
          {message}
        </Alert>
      );
    },
    {
      info:
        "Use in cases when you need to inform users about a potentially dangerous situation in their trip and it requires some action from them. However, if the issue requires immediate attention, use critical alert instead. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Critical alert",
    () => {
      const title = text("Title", "Something has gone horribly wrong");
      const message = text("Message", "The quick, brown fox jumps over a lazy dog.");
      return (
        <Alert type="critical" title={title} icon>
          {message}
        </Alert>
      );
    },
    {
      info:
        "Use when something is blocking users from continuing or when some issue needs to be resolved immediately. A critical alert should provide some form of solution for their problem. If something is important for users to solve as soon as possible, automatic open of a modal window is worthy of considering. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Only title",
    () => {
      const title = text("Title", "The quick, brown fox jumps over a lazy dog.");
      return <Alert title={title} closable />;
    },
    {
      info:
        "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Inline Actions",
    () => {
      const type = select("Type", Object.values(TYPE_OPTIONS), "info");
      const title = text("Title", "You can change the title by changing the Title knob");
      const button = text("Button", "I am a link");
      const closable = boolean("Closable", false);
      const Icon = getIcon(getIcons("Airplane"));

      return (
        <Alert
          type={type}
          icon={Icon && <Icon />}
          title={title}
          closable={closable}
          onClose={action("Close")}
          inlineActions={
            <Button type={type} size="small" href="#">
              {button}
            </Button>
          }
        />
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "Playground",
    () => {
      const type = select("Type", Object.values(TYPE_OPTIONS), "info");
      const title = text("Title", "You can change the title by changing the Title knob");
      const message = text(
        "Message",
        "Also you can change the message by changing the Message knob",
      );
      const dataTest = text("dataTest", "test");
      const button = text("Button", "I am a link");
      const closable = boolean("Closable", false);
      const Icon = getIcon(getIcons("Airplane"));
      const spaceAfter = select("spaceAfter", [null, ...Object.values(SPACINGS_AFTER)]);

      return (
        <Alert
          type={type}
          icon={Icon && <Icon />}
          title={title}
          closable={closable}
          onClose={action("Close")}
          dataTest={dataTest}
          spaceAfter={spaceAfter}
        >
          <Stack spacing="condensed">
            <Stack spacing="tight">
              <div>{message}</div>
              <List>
                <ListItem>
                  <Text type={type}>623 Kč will be refunded by your payment card</Text>
                </ListItem>
                <ListItem>623 Kč will be refunded by your payment card</ListItem>
              </List>
            </Stack>
            <Button type={type} size="small" href="#">
              {button}
            </Button>
          </Stack>
        </Alert>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "RTL",
    () => (
      <RenderInRtl>
        <Alert
          type="info"
          icon={<Icons.Airplane />}
          title="The title of the Alert"
          closable
          onClose={action("Close")}
        >
          <Stack spacing="condensed">
            <Stack spacing="tight">
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
            <Button type="info" size="small">
              Check Visa Requirements
            </Button>
          </Stack>
        </Alert>
      </RenderInRtl>
    ),
    {
      info: "This is a preview of this component in RTL setup.",
    },
  );
