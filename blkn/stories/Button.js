import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Money } from "@kiwicom/icons";

import Button from "../src/Button/";

storiesOf("Button", module).add("normal primary", () => (
  <Button title="Your Label" onClick={action("clicked")} size="normal" />
));

storiesOf("Button", module).add("normal primary disabled", () => (
  <Button title="Your Label" disabled={true} size="normal" />
));

storiesOf("Button", module).add("small primary", () => (
  <Button title="Your Label" onClick={action("clicked")} size="small" />
));

storiesOf("Button", module).add("small primary disabled", () => (
  <Button title="Your Label" disabled={true} size="small" />
));

storiesOf("Button", module).add("large primary", () => (
  <Button title="Your Label" onClick={action("clicked")} size="large" />
));

storiesOf("Button", module).add("large primary disabled", () => (
  <Button title="Your Label" disabled={true} size="large" />
));

storiesOf("Button", module).add("normal secondary", () => (
  <Button title="Your Label" onClick={action("clicked")} size="normal" secondary={true} />
));

storiesOf("Button", module).add("normal secondary disabled", () => (
  <Button title="Your Label" disabled={true} size="normal" secondary={true} />
));

storiesOf("Button", module).add("small secondary", () => (
  <Button title="Your Label" onClick={action("clicked")} size="small" secondary={true} />
));

storiesOf("Button", module).add("small secondary disabled", () => (
  <Button title="Your Label" disabled={true} size="small" secondary={true} />
));

storiesOf("Button", module).add("large secondary", () => (
  <Button title="Your Label" onClick={action("clicked")} size="large" secondary={true} />
));

storiesOf("Button", module).add("large secondary disabled", () => (
  <Button title="Your Label" disabled={true} size="large" secondary={true} />
));

storiesOf("Button", module).add("normal primary with icon", () => (
  <Button title="Your Label" onClick={action("clicked")} size="normal" icon={Money} />
));

storiesOf("Button", module).add("normal secondary with icon", () => (
  <Button
    title="Your Label"
    onClick={action("clicked")}
    size="normal"
    secondary={true}
    icon={Money}
  />
));
