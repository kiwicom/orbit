// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs";

import Text from "../Text";
import TextLink from "../TextLink";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import Stack from "../Stack";
import Tooltip from "../Tooltip";
import Airplane from "../icons/Airplane";

import Radio from "./index";

storiesOf("Radio", module)
  .add(
    "Default",
    () => {
      const label = text("Label", "Label");
      const checked = boolean("Checked", false);
      return <Radio label={label} checked={checked} onChange={action("changed")} />;
    },
    {
      info: "Radio needs only label and onChange by default.",
    },
  )
  .add(
    "With help",
    () => {
      const label = text("Label", "Label");
      const value = text("Value", "value");
      const info = text("Info", "Additional information to this choice");
      return <Radio label={label} value={value} info={info} onChange={action("changed")} />;
    },
    {
      info: "Additionally you can add info to this component.",
    },
  )
  .add(
    "With TextLink in label",
    () => {
      const checked = boolean("checked", true);
      return (
        <Radio
          label={
            <Text>
              Lorem ipsum dolor sit&nbsp;
              <TextLink>amet</TextLink>.
            </Text>
          }
          checked={checked}
          value="value"
          onChange={action("changed")}
        />
      );
    },
    {
      info: "Additionally you can add info to this component.",
    },
  )
  .add(
    "With Tooltip",
    () => {
      return (
        <Radio
          label="Direct"
          value="one"
          disabled
          tooltip={
            <Tooltip
              content="There are no results available with this option"
              preferredPosition="top"
            />
          }
        />
      );
    },
    {
      info: "Additionally you can add tooltip to this component.",
    },
  )
  .add(
    "With stack and icon",
    () => {
      const label = text("Label", "Label");
      const value = text("Value", "value");
      const info = text("Info", "Additional information to this choice");
      return (
        <Radio
          label={
            <Stack align="center">
              <Text size="small">{label}</Text>
              <Tooltip content="Tooltip content">
                <Airplane size="small" />
              </Tooltip>
            </Stack>
          }
          value={value}
          info={info}
          onChange={action("changed")}
        />
      );
    },
    {
      info: "Additionally you can add info to this component.",
    },
  )
  .add(
    "Playground",
    () => {
      const label = text("Label", "Label");
      const value = text("Value", "value");
      const checked = boolean("Checked", true);
      const disabled = boolean("Disabled", false);
      const hasError = boolean("hasError", false);
      const info = text("Info", "Additional information for this choice");
      const name = text("Name", "name");
      const dataTest = text("dataTest", "test");

      return (
        <Radio
          label={label}
          value={value}
          checked={checked}
          disabled={disabled}
          hasError={hasError}
          name={name}
          info={info}
          dataTest={dataTest}
          onChange={action("changed")}
        />
      );
    },
    {
      info: "Playground of Radio",
    },
  )
  .add(
    "RTL",
    () => (
      <RenderInRtl>
        <Radio
          label={
            <Text>
              Lorem ipsum dolor sit&nbsp;
              <TextLink>amet</TextLink>.
            </Text>
          }
          checked
          value="value"
          onChange={action("changed")}
        />
      </RenderInRtl>
    ),
    {
      info: "This is a preview of this component in RTL setup.",
    },
  );
