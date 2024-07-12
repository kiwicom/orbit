import * as React from "react";
import { action } from "@storybook/addon-actions";

import * as Icons from "../icons";
import { TYPE_OPTIONS, INPUTMODE } from "./consts";
import { NAME_OPTIONS } from "../ServiceLogo/consts.mts";
import ButtonLink from "../ButtonLink";
import TextLink from "../TextLink";
import ServiceLogo from "../ServiceLogo";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import Tag from "../Tag";
import { SPACINGS_AFTER } from "../common/consts";

import InputField from ".";

const getIcon = (source: string | null) => source && Icons[source];

export default {
  title: "InputField",
};

export const DefaultInput = ({ label, value, placeholder }) => {
  return (
    <InputField label={label} value={value} placeholder={placeholder} onChange={action("change")} />
  );
};

DefaultInput.story = {
  name: "Default input",

  parameters: {
    info: "Some description about this type of InputField in general.",
  },
};

DefaultInput.args = {
  label: "Label",
  value: "",
  placeholder: "Placeholder",
};

export const NumberInput = ({ label, value, placeholder, maxValue, minValue }) => {
  return (
    <InputField
      type="number"
      value={value}
      label={label}
      placeholder={placeholder}
      maxValue={maxValue}
      minValue={minValue}
      onChange={action("change")}
    />
  );
};

NumberInput.story = {
  name: "Number input",

  parameters: {
    info: "Some description about this type of InputField in general.",
  },
};

NumberInput.args = {
  label: "Number",
  value: "2",
  placeholder: "Number",
  maxValue: 3,
  minValue: 1,
};

export const PasswordInput = ({ label, value, placeholder }) => {
  return (
    <InputField
      type="password"
      label={label}
      value={value}
      placeholder={placeholder}
      onChange={action("change")}
    />
  );
};

PasswordInput.story = {
  name: "Password input",

  parameters: {
    info: "Some description about this type of InputField in general.",
  },
};

PasswordInput.args = {
  label: "Password",
  value: "p422W0rd",
  placeholder: "Password",
};

export const PassportOrIdInput = ({ label, placeholder }) => {
  return (
    <InputField
      type="passportid"
      label={label}
      placeholder={placeholder}
      onChange={action("change")}
    />
  );
};

PassportOrIdInput.story = {
  name: "Passport or ID Input",

  parameters: {
    info: "Some description about this type of InputField in general.",
  },
};

PassportOrIdInput.args = {
  label: "Passport or ID number",
  placeholder: "588539238",
};

export const EmailInput = ({ label, value, placeholder }) => {
  return (
    <InputField
      type="email"
      label={label}
      value={value}
      placeholder={placeholder}
      onChange={action("change")}
      help={
        <div>
          Did you mean&nbsp;
          <TextLink onClick={action("clicked")}>name@example.com</TextLink>?
        </div>
      }
    />
  );
};

EmailInput.story = {
  name: "Email input",

  parameters: {
    info: "Some description about this type of InputField in general.",
  },
};

EmailInput.args = {
  label: "Email",
  value: "name@example.co",
  placeholder: "Email",
};

export const WithTextPrefix = ({ label, value, placeholder, prefix }) => {
  return (
    <InputField
      label={label}
      value={value}
      placeholder={placeholder}
      prefix={prefix}
      onChange={action("change")}
    />
  );
};

WithTextPrefix.story = {
  name: "With text prefix",

  parameters: {
    info: "Some description about this type of InputField in general.",
  },
};

WithTextPrefix.args = {
  label: "Label",
  value: "",
  placeholder: "Placeholder",
  prefix: "$",
};

export const WithTextSuffix = ({ label, value, placeholder, suffix }) => {
  return (
    <InputField
      label={label}
      value={value}
      placeholder={placeholder}
      suffix={<div style={{ paddingRight: "12px" }}>{suffix}</div>}
      onChange={action("change")}
    />
  );
};

WithTextSuffix.story = {
  name: "With text suffix",

  parameters: {
    info: "Some description about this type of InputField in general.",
  },
};

WithTextSuffix.args = {
  label: "Label",
  value: "",
  placeholder: "Placeholder",
  suffix: "Some long text",
};

export const CompactInput = ({ value, label, placeholder, required, error }) => {
  return (
    <InputField
      label={label}
      inlineLabel
      error={error}
      value={value}
      placeholder={placeholder}
      required={required}
      onChange={action("change")}
    />
  );
};

CompactInput.story = {
  name: "Compact input",

  parameters: {
    info: "Compact input with FormLabel as prefix",
  },
};

CompactInput.args = {
  value: "",
  label: "Label",
  placeholder: "Placeholder",
  required: false,
  error: "",
};

export const CompactInputWithTags = ({ value, label, placeholder, required, error }) => {
  return (
    <InputField
      label={label}
      inlineLabel
      tags={
        <>
          <Tag selected onRemove={action("onRemove")}>
            Brno
          </Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
        </>
      }
      error={error}
      value={value}
      placeholder={placeholder}
      required={required}
      onChange={action("change")}
    />
  );
};

CompactInputWithTags.story = {
  name: "Compact input with tags",

  parameters: {
    info: "Compact input with FormLabel as prefix",
  },
};

CompactInputWithTags.args = {
  value: "",
  label: "Label",
  placeholder: "Placeholder",
  required: false,
  error: "",
};

export const RequiredField = ({ label, value, placeholder, required }) => {
  return (
    <InputField
      label={label}
      value={value}
      placeholder={placeholder}
      required={required}
      onChange={action("change")}
    />
  );
};

RequiredField.story = {
  name: "Required field",

  parameters: {
    info: "Some description about this type of InputField in general.",
  },
};

RequiredField.args = {
  label: "Label",
  value: "",
  required: true,
  placeholder: "Placeholder",
};

export const WithIconPrefix = ({ label, value, placeholder, prefixIcon }) => {
  const Prefix = getIcon(prefixIcon);

  return (
    <InputField
      label={label}
      value={value}
      placeholder={placeholder}
      prefix={Prefix && <Prefix />}
      onChange={action("change")}
    />
  );
};

WithIconPrefix.story = {
  name: "With Icon prefix",

  parameters: {
    info: "Some description about this type of InputField in general.",
  },
};

WithIconPrefix.args = {
  label: "Label",
  value: "",
  placeholder: "Placeholder",
  prefixIcon: "Search",
};

WithIconPrefix.argTypes = {
  prefixIcon: {
    options: Object.keys(Icons),
    control: {
      type: "select",
    },
  },
};

export const WithButtonLinkSuffix = ({ label, value, placeholder, suffixIcon }) => {
  const Suffix = getIcon(suffixIcon);

  return (
    <InputField
      label={label}
      value={value}
      placeholder={placeholder}
      suffix={
        Suffix && (
          <ButtonLink type="primary" compact iconLeft={<Suffix />} onClick={action("clicked")} />
        )
      }
      onChange={action("change")}
    />
  );
};

WithButtonLinkSuffix.story = {
  name: "With ButtonLink suffix",

  parameters: {
    info: "Some description about this type of InputField in general.",
  },
};

WithButtonLinkSuffix.args = {
  label: "Label",
  value: "",
  placeholder: "Placeholder",
  suffixIcon: "Visibility",
};

WithButtonLinkSuffix.argTypes = {
  suffixIcon: {
    options: Object.keys(Icons),
    control: {
      type: "select",
    },
  },
};

export const WithServiceLogoSuffix = ({ label, value, placeholder, name, grayScale }) => {
  return (
    <InputField
      label={label}
      value={value}
      placeholder={placeholder}
      suffix={<ServiceLogo name={name} grayScale={grayScale} />}
      onChange={action("change")}
    />
  );
};

WithServiceLogoSuffix.story = {
  name: "With ServiceLogo prefix",

  parameters: {
    info: "Some description about this type of InputField in general.",
  },
};

WithServiceLogoSuffix.args = {
  label: "Label",
  value: "",
  placeholder: "Placeholder",
  name: NAME_OPTIONS.AIRHELP,
  grayScale: false,
};

WithServiceLogoSuffix.argTypes = {
  name: {
    options: Object.values(NAME_OPTIONS),
    control: {
      type: "select",
    },
  },
};

export const WithError = ({
  type,
  name,
  label,
  inlineLabel,
  value,
  placeholder,
  prefixIcon,
  suffixIcon,
  help,
  error,
  disabled,
  maxValue,
  minValue,
  required,
  maxLength,
  minLength,
  readOnly,
  autoComplete,
  dataTest,
  spaceAfter,
  id,
}) => {
  const Prefix = getIcon(prefixIcon);
  const Suffix = getIcon(suffixIcon);

  return (
    <InputField
      type={type}
      name={name}
      label={label}
      inlineLabel={inlineLabel}
      value={value}
      dataTest={dataTest}
      placeholder={placeholder}
      required={required}
      prefix={Prefix && <Prefix />}
      suffix={
        Suffix && (
          <ButtonLink
            iconLeft={<Suffix />}
            compact
            size="normal"
            onClick={action("clicked")}
            disabled={disabled}
          />
        )
      }
      help={help}
      error={error}
      disabled={disabled}
      maxValue={maxValue}
      minValue={minValue}
      maxLength={maxLength}
      minLength={minLength}
      readOnly={readOnly}
      autoComplete={autoComplete}
      onChange={action("change")}
      onFocus={action("focus")}
      onBlur={action("blur")}
      spaceAfter={spaceAfter}
      id={id}
    />
  );
};

WithError.story = {
  name: "With error",

  parameters: {
    info: "Some description about this type of InputField in general.",
  },
};

WithError.args = {
  type: TYPE_OPTIONS.TEXT,
  name: "input",
  label: "",
  inlineLabel: true,
  value: "",
  placeholder: "Placeholder",
  prefixIcon: "Search",
  suffixIcon: "Visibility",
  help: "",
  error: "Please fill out as you have on your passport",
  disabled: false,
  maxValue: NaN,
  minValue: NaN,
  required: false,
  maxLength: NaN,
  minLength: NaN,
  readOnly: false,
  autoComplete: "off",
  dataTest: "test",
  spaceAfter: SPACINGS_AFTER.MEDIUM,
  id: "ID",
};

WithError.argTypes = {
  type: {
    options: Object.values(TYPE_OPTIONS),
    control: {
      type: "select",
    },
  },
  prefixIcon: {
    options: Object.keys(Icons),
    control: {
      type: "select",
    },
  },
  suffixIcon: {
    options: Object.keys(Icons),
    control: {
      type: "select",
    },
  },
  spaceAfter: {
    options: Object.values(SPACINGS_AFTER),
    control: {
      type: "select",
    },
  },
};

export const WithHelp = ({
  type,
  name,
  label,
  inlineLabel,
  value,
  dataTest,
  placeholder,
  prefixIcon,
  suffixIcon,
  help,
  error,
  disabled,
  maxValue,
  minValue,
  required,
  maxLength,
  minLength,
  readOnly,
  autoComplete,
  spaceAfter,
  id,
}) => {
  const Prefix = getIcon(prefixIcon);
  const Suffix = getIcon(suffixIcon);

  return (
    <InputField
      type={type}
      name={name}
      label={label}
      inlineLabel={inlineLabel}
      value={value}
      dataTest={dataTest}
      placeholder={placeholder}
      required={required}
      prefix={Prefix && <Prefix />}
      suffix={
        Suffix && (
          <ButtonLink
            iconLeft={<Suffix />}
            compact
            size="normal"
            onClick={action("clicked")}
            disabled={disabled}
          />
        )
      }
      help={help}
      error={error}
      disabled={disabled}
      maxValue={maxValue}
      minValue={minValue}
      maxLength={maxLength}
      minLength={minLength}
      readOnly={readOnly}
      autoComplete={autoComplete}
      onChange={action("change")}
      onFocus={action("focus")}
      onBlur={action("blur")}
      spaceAfter={spaceAfter}
      id={id}
    />
  );
};

WithHelp.story = {
  name: "With help",

  parameters: {
    info: "Some description about this type of InputField in general.",
  },
};

WithHelp.args = {
  type: TYPE_OPTIONS.TEXT,
  name: "input",
  label: "Label",
  inlineLabel: true,
  value: "",
  placeholder: "Placeholder",
  prefixIcon: "Search",
  suffixIcon: "Visibility",
  help: "Please fill out as you have on your passport",
  error: "",
  disabled: false,
  maxValue: NaN,
  minValue: NaN,
  required: false,
  maxLength: NaN,
  minLength: NaN,
  readOnly: false,
  autoComplete: "off",
  dataTest: "test",
  spaceAfter: SPACINGS_AFTER.MEDIUM,
  id: "ID",
};

WithHelp.argTypes = {
  type: {
    options: Object.values(TYPE_OPTIONS),
    control: {
      type: "select",
    },
  },
  prefixIcon: {
    options: Object.keys(Icons),
    control: {
      type: "select",
    },
  },
  suffixIcon: {
    options: Object.keys(Icons),
    control: {
      type: "select",
    },
  },
  spaceAfter: {
    options: Object.values(SPACINGS_AFTER),
    control: {
      type: "select",
    },
  },
};

export const Playground = ({
  type,
  name,
  label,
  inlineLabel,
  value,
  dataTest,
  placeholder,
  prefixIcon,
  suffixIcon,
  help,
  error,
  disabled,
  width,
  maxValue,
  minValue,
  required,
  maxLength,
  minLength,
  readOnly,
  autoComplete,
  spaceAfter,
  id,
  inputMode,
  dataAttrs,
}) => {
  const Prefix = getIcon(prefixIcon);
  const Suffix = getIcon(suffixIcon);
  return (
    <InputField
      type={type}
      width={width}
      name={name}
      label={label}
      inlineLabel={inlineLabel}
      value={value}
      dataTest={dataTest}
      placeholder={placeholder}
      required={required}
      prefix={Prefix && <Prefix />}
      suffix={
        Suffix && (
          <ButtonLink
            type="primary"
            size="normal"
            iconLeft={<Suffix />}
            onClick={action("clicked")}
            disabled={disabled}
            compact
          />
        )
      }
      help={help}
      error={error}
      disabled={disabled}
      maxValue={maxValue}
      minValue={minValue}
      maxLength={maxLength}
      minLength={minLength}
      readOnly={readOnly}
      autoComplete={autoComplete}
      onChange={action("change")}
      onFocus={action("focus")}
      onBlur={action("blur")}
      onMouseUp={action("onMouseUp")}
      onMouseDown={action("onMouseDown")}
      onSelect={action("onSelect")}
      onKeyDown={action("onKeyDown")}
      spaceAfter={spaceAfter}
      id={id}
      inputMode={inputMode}
      dataAttrs={dataAttrs}
    />
  );
};

Playground.story = {
  parameters: {
    info: "Some description about this type of InputField in general.",
  },
};

Playground.args = {
  type: TYPE_OPTIONS.TEXT,
  name: "input",
  label: "Label",
  inlineLabel: true,
  value: "",
  placeholder: "Placeholder",
  prefixIcon: "Search",
  suffixIcon: "Visibility",
  help: "",
  error: "",
  disabled: false,
  width: "",
  maxValue: NaN,
  minValue: NaN,
  required: false,
  maxLength: NaN,
  minLength: NaN,
  readOnly: false,
  autoComplete: "off",
  dataTest: "test",
  spaceAfter: SPACINGS_AFTER.SMALL,
  id: "ID",
  inputMode: INPUTMODE.TEXT,
  dataAttrs: { "data-recording-ignore": true },
};

Playground.argTypes = {
  type: {
    options: Object.values(TYPE_OPTIONS),
    control: {
      type: "select",
    },
  },
  prefixIcon: {
    options: Object.keys(Icons),
    control: {
      type: "select",
    },
  },
  suffixIcon: {
    options: Object.keys(Icons),
    control: {
      type: "select",
    },
  },
  spaceAfter: {
    options: Object.values(SPACINGS_AFTER),
    control: {
      type: "select",
    },
  },
  inputMode: {
    options: Object.values(INPUTMODE),
    control: {
      type: "select",
    },
  },
};

export const Rtl = ({ help, error, inlineLabel, label }) => {
  return (
    <RenderInRtl>
      <InputField
        label={label}
        inlineLabel={inlineLabel}
        help={help}
        error={error}
        placeholder="Placeholder"
        prefix="$"
        suffix={<ButtonLink compact iconLeft={<Icons.Visibility />} />}
      />
    </RenderInRtl>
  );
};

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};

Rtl.args = {
  help: "Please fill out as you have on your passport",
  error: "",
  inlineLabel: false,
  label: "",
};
