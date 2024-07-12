import * as React from "react";
import { action } from "@storybook/addon-actions";

import Text from "../Text";
import TextLink from "../TextLink";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import Stack from "../Stack";
import Tooltip from "../Tooltip";
import Airplane from "../icons/Airplane";

import Radio from ".";

export default {
  title: "Radio",
};

export const Default = ({ label, checked }) => {
  return <Radio label={label} checked={checked} onChange={action("changed")} />;
};

Default.story = {
  parameters: {
    info: "Radio needs only label and onChange by default.",
  },
};

Default.args = {
  label: "Label",
  checked: false,
};

export const WithHelp = ({ label, value, info }) => {
  return <Radio label={label} value={value} info={info} onChange={action("changed")} />;
};

WithHelp.story = {
  name: "With help",

  parameters: {
    info: "Additionally you can add info to this component.",
  },
};

WithHelp.args = {
  label: "Label",
  value: "value",
  info: "Additional information about this choice",
};

export const WithError = ({ label, hasError, checked }) => {
  return <Radio label={label} hasError={hasError} checked={checked} onChange={action("changed")} />;
};

WithError.story = {
  name: "With error",

  parameters: {
    info: "Show there is an error with the hasError prop. Only displays when checked and disabled are false.",
  },
};

WithError.args = {
  label: "Label",
  hasError: true,
  checked: false,
};

export const WithTextLinkInLabel = ({ checked }) => {
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
};

WithTextLinkInLabel.story = {
  name: "With TextLink in label",

  parameters: {
    info: "Additionally you can add info to this component.",
  },
};

WithTextLinkInLabel.args = {
  checked: true,
};

export const WithTooltip = () => {
  return (
    <Radio
      label="Direct"
      value="one"
      disabled
      tooltip={
        <Tooltip content="There are no results available with this option" placement="top" />
      }
    />
  );
};

WithTooltip.story = {
  parameters: {
    info: "Additionally you can add tooltip to this component.",
  },
};

export const WithStackAndIcon = ({ label, value, info }) => {
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
};

WithStackAndIcon.story = {
  name: "With stack and icon",

  parameters: {
    info: "Additionally you can add info to this component.",
  },
};

WithStackAndIcon.args = {
  label: "Label",
  value: "value",
  info: "Additional information to this choice",
};

export const Playground = ({ label, value, checked, disabled, hasError, info, name, dataTest }) => {
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
};

Playground.story = {
  parameters: {
    info: "Playground of Radio",
  },
};

Playground.args = {
  label: "Label",
  value: "value",
  checked: true,
  disabled: false,
  hasError: false,
  info: "Additional information for this choice",
  name: "name",
  dataTest: "test",
};

export const Rtl = () => (
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
);

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
