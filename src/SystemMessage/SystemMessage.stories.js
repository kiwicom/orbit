// @flow

import React from "react";
import { storiesOf } from "@storybook/react";
import { Icons } from "../";
import SystemMessage from "./index";

const { Alert, AlertCircle, InformationOutline, Check } = Icons;

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
    <SystemMessage type="error" Icon={AlertCircle}>
      Type your message here
    </SystemMessage>
  ))
  .add("error with title and  icon", () => (
    <SystemMessage title="Title" type="error" Icon={AlertCircle}>
      Type your message here
    </SystemMessage>
  ))
  .add("warning with icon", () => (
    <SystemMessage type="warning" Icon={Alert}>
      Type your message here
    </SystemMessage>
  ))
  .add("warning with title and  icon", () => (
    <SystemMessage title="Title" type="warning" Icon={Alert}>
      Type your message here
    </SystemMessage>
  ))
  .add("info with icon", () => (
    <SystemMessage type="info" Icon={InformationOutline}>
      Type your message here
    </SystemMessage>
  ))
  .add("info with title and  icon", () => (
    <SystemMessage title="Title" type="info" Icon={InformationOutline}>
      Type your message here
    </SystemMessage>
  ))
  .add("success with icon", () => (
    <SystemMessage type="success" Icon={Check}>
      Type your message here
    </SystemMessage>
  ))
  .add("success with title and  icon", () => (
    <SystemMessage title="Title" type="success" Icon={Check}>
      Type your message here
    </SystemMessage>
  ));
