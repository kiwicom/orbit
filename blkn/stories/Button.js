import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Money } from "@kiwicom/icons";

import Button from "../src/Button/";

storiesOf("Button", module)
  .add("normal primary", () => (
    <Button title="Your Label" onClick={action("clicked")} size="normal" type="primary" />
  ))
  .add("normal primary disabled", () => (
    <Button title="Your Label" isDisabled size="normal" type="primary" />
  ))
  .add("small primary", () => (
    <Button title="Your Label" onClick={action("clicked")} size="small" type="primary" />
  ))
  .add("small primary disabled", () => (
    <Button title="Your Label" isDisabled size="small" type="primary" />
  ))
  .add("large primary", () => (
    <Button title="Your Label" onClick={action("clicked")} size="large" type="primary" />
  ))
  .add("large primary disabled", () => (
    <Button title="Your Label" isDisabled size="large" type="primary" />
  ))
  .add("normal secondary", () => (
    <Button title="Your Label" onClick={action("clicked")} size="normal" type="secondary" />
  ))
  .add("normal secondary disabled", () => (
    <Button title="Your Label" isDisabled size="normal" type="secondary" />
  ))
  .add("small secondary", () => (
    <Button title="Your Label" onClick={action("clicked")} size="small" type="secondary" />
  ))
  .add("small secondary disabled", () => (
    <Button title="Your Label" isDisabled size="small" type="secondary" />
  ))
  .add("large secondary", () => (
    <Button title="Your Label" onClick={action("clicked")} size="large" type="secondary" />
  ))
  .add("large secondary disabled", () => (
    <Button title="Your Label" isDisabled size="large" type="secondary" />
  ))
  .add("normal primary with icon", () => (
    <Button
      title="Your Label"
      onClick={action("clicked")}
      size="normal"
      icon={Money}
      type="primary"
    />
  ))
  .add("normal secondary with icon", () => (
    <Button title="Your Label" onClick={action("clicked")} size="normal" secondary icon={Money} />
  ));
