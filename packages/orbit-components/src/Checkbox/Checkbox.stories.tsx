import * as React from "react";
import { action } from "@storybook/addon-actions";

import Text from "../Text";
import TextLink from "../TextLink";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import Tooltip from "../Tooltip";

import Checkbox from ".";

export default {
  title: "CheckBox",
};

export const Default = ({ label, checked }) => {
  return <Checkbox label={label} checked={checked} onChange={action("changed")} />;
};

Default.story = {
  parameters: {
    info: "Checkbox needs only label and onChange by default.",
  },
};

Default.args = {
  label: "Label",
  checked: false,
};

export const WithHelp = ({ label, value, info }) => {
  return <Checkbox label={label} value={value} info={info} onChange={action("changed")} />;
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
  return (
    <Checkbox label={label} hasError={hasError} checked={checked} onChange={action("changed")} />
  );
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
    <Checkbox
      label={
        <Text>
          I instruct Kiwi.com to cancel this booking under the herein specified conditions and to
          process a refund in accordance with Kiwi.com&rsquo;&nbsp;
          <TextLink stopPropagation href="https://kiwi.com" external>
            Terms and Conditions
          </TextLink>
          .
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
    <Checkbox
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

export const Playground = ({
  label,
  value,
  checked,
  disabled,
  hasError,
  readOnly,
  info,
  dataTest,
  name,
}) => {
  return (
    <Checkbox
      label={label}
      value={value}
      checked={checked}
      disabled={disabled}
      name={name}
      hasError={hasError}
      dataTest={dataTest}
      info={info}
      readOnly={readOnly}
      onChange={action("changed")}
    />
  );
};

Playground.story = {
  parameters: {
    info: "Playground of Checkbox",
  },
};

Playground.args = {
  label: "Label",
  value: "value",
  checked: false,
  disabled: false,
  hasError: false,
  readOnly: false,
  info: "Additional information for this choice",
  dataTest: "test",
  name: "name",
};

export const Rtl = () => (
  <RenderInRtl>
    <Checkbox
      label={
        <Text>
          I instruct Kiwi.com to cancel this booking under the herein specified conditions and to
          process a refund in accordance with Kiwi.com&rsquo;&nbsp;
          <TextLink>Terms and Conditions</TextLink>.
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
