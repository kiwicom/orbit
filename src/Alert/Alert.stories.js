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

import Alert from "./index";

const getIcons = defaultIcon => select("Icon", [undefined, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

storiesOf("Alert", module)
  .add("Default", () => {
    const message = "The quick, brown fox jumps over a lazy dog.";
    return <Alert>{message}</Alert>;
  })
  .add("Info alert", () => {
    const title = text("Title");
    const message = text("Message", "The quick, brown fox jumps over a lazy dog.");
    return (
      <Alert title={title} icon>
        {message}
      </Alert>
    );
  })
  .add("Success alert", () => {
    const title = text("Title");
    const message = text("Message", "The quick, brown fox jumps over a lazy dog.");
    return (
      <Alert type="success" title={title} icon>
        {message}
      </Alert>
    );
  })
  .add("Warning alert", () => {
    const title = text("Title");
    const message = text("Message", "The quick, brown fox jumps over a lazy dog.");
    return (
      <Alert type="warning" title={title} icon>
        {message}
      </Alert>
    );
  })
  .add("Critical alert", () => {
    const title = text("Title");
    const message = text("Message", "The quick, brown fox jumps over a lazy dog.");
    return (
      <Alert type="critical" title={title} icon>
        {message}
      </Alert>
    );
  })
  .add("Only title", () => {
    const message = "The quick, brown fox jumps over a lazy dog.";
    return <Alert title={message} closable />;
  })
  .add("Playground", () => {
    const type = select("Type", Object.values(TYPE_OPTIONS), "info");
    const title = text("Title", "You can change the title by changing the Title knob");
    const message = text("Message", "Also you can change the message by changing the Message knob");
    const dataTest = text("dataTest", "test");
    const button = text("Button", "I am a link");
    const closable = boolean("Closable", false);
    const Icon = getIcon(getIcons("Airplane"));
    const spaceAfter = select("spaceAfter", [undefined, ...Object.values(SPACINGS_AFTER)]);
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
        <Stack spacing="compact">
          <div>{message}</div>
          <List>
            <ListItem>
              <Text type={type}>623 Kč will be refunded by your payment card</Text>
            </ListItem>
            <ListItem>623 Kč will be refunded by your payment card</ListItem>
          </List>
          <Button type={type} size="small" href="#">
            {button}
          </Button>
        </Stack>
      </Alert>
    );
  })
  .add("RTL", () => (
    <RenderInRtl>
      <Alert
        type="info"
        icon={<Icons.Airplane />}
        title="The title of the Alert"
        closable
        onClose={action("Close")}
      >
        <Stack spacing="compact">
          <div>Message of the Alert</div>
          <List>
            <ListItem>
              <Text type="info">623 Kč will be refunded by your payment card</Text>
            </ListItem>
            <ListItem>623 Kč will be refunded by your payment card</ListItem>
          </List>
          <Button type="info" size="small" href="#">
            Click on me
          </Button>
        </Stack>
      </Alert>
    </RenderInRtl>
  ));
