import React from "react";
import { Alert, AlertCircle, InformationOutline, Check } from "@kiwicom/icons";
import { storiesOf } from "@storybook/react";
import SystemMessage from "../src/SystemMessage";

storiesOf("SystemMessage", module)
  .add("error basic", () => <SystemMessage type="error">Type your message here</SystemMessage>)
  .add("warning basic", () => <SystemMessage type="warning">Type your message here</SystemMessage>)
  .add("info basic", () => <SystemMessage type="info">Type your message here</SystemMessage>)
  .add("success basic", () => <SystemMessage type="success">Type your message here</SystemMessage>)
  .add("error with title", () => (
    <SystemMessage title="Title" type="error">
      Type your message here
    </SystemMessage>
  ))
  .add("error with icon", () => (
    <SystemMessage type="error" icon={AlertCircle}>
      Type your message here
    </SystemMessage>
  ))
  .add("error with title and  icon", () => (
    <SystemMessage title="Title" type="error" icon={AlertCircle}>
      Type your message here
    </SystemMessage>
  ))
  .add("warning with icon", () => (
    <SystemMessage type="warning" icon={Alert}>
      Type your message here
    </SystemMessage>
  ))
  .add("warning with title and  icon", () => (
    <SystemMessage title="Title" type="warning" icon={Alert}>
      Type your message here
    </SystemMessage>
  ))
  .add("info with icon", () => (
    <SystemMessage type="info" icon={InformationOutline}>
      Type your message here
    </SystemMessage>
  ))
  .add("info with title and  icon", () => (
    <SystemMessage title="Title" type="info" icon={InformationOutline}>
      Type your message here
    </SystemMessage>
  ))
  .add("success with icon", () => (
    <SystemMessage type="success" icon={Check}>
      Type your message here
    </SystemMessage>
  ))
  .add("success with title and  icon", () => (
    <SystemMessage title="Title" type="success" icon={Check}>
      Type your message here
    </SystemMessage>
  ));
