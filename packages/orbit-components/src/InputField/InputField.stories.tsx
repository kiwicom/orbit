import * as React from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean, select, number, object } from "@storybook/addon-knobs";

import * as Icons from "../icons";
import { SIZE_OPTIONS, TYPE_OPTIONS, INPUTMODE } from "./consts";
// @ts-expect-error currently it can't resolve mts properly
import { NAME_OPTIONS } from "../ServiceLogo/consts.mts";
import ButtonLink from "../ButtonLink";
import TextLink from "../TextLink";
import ServiceLogo from "../ServiceLogo";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import Tag from "../Tag";
import SPACINGS_AFTER from "../common/getSpacingToken/consts";

import InputField from ".";

const getIcons = (name: string, defaultIcon: string) =>
  select(name, [null, ...Object.keys(Icons)], defaultIcon);
const getIcon = (source: string | null) => source && Icons[source];

export default {
  title: "InputField",
};

export const DefaultInput = () => {
  const label = text("Label", "Label");
  const value = text("Value", "");
  const placeholder = text("Placeholder", "Placeholder");

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

export const SmallInput = () => {
  const label = text("Label", "Label");
  const value = text("Value", "");
  const placeholder = text("Placeholder", "Placeholder");

  return (
    <InputField
      size="small"
      label={label}
      value={value}
      placeholder={placeholder}
      onChange={action("change")}
    />
  );
};

SmallInput.story = {
  name: "Small input",

  parameters: {
    info: "Some description about this type of InputField in general.",
  },
};

export const NumberInput = () => {
  const label = text("Label", "Number");
  const value = text("Value", "2");
  const placeholder = text("Placeholder", "Number");
  const maxValue = number("maxValue", 3);
  const minValue = number("minValue", 1);

  return (
    <InputField
      type="number"
      label={label}
      value={value}
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

export const PasswordInput = () => {
  const label = text("Label", "Password");
  const value = text("Value", "p422W0rd");
  const placeholder = text("Placeholder", "Password");

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

export const PassportOrIdInput = () => {
  const label = text("Label", "Passport or ID number");
  const placeholder = text("Placeholder", "588539238");

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

export const EmailInput = () => {
  const label = text("Label", "Email");
  const value = text("Value", "name@example.co");
  const placeholder = text("Placeholder", "Email");

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

export const WithTextPrefix = () => {
  const label = text("Label", "Label");
  const value = text("Value", "");
  const placeholder = text("Placeholder", "Placeholder");
  const prefix = text("Prefix", "$");

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

export const WithTextSuffix = () => {
  const label = text("Label", "Label");
  const value = text("Value", "");
  const placeholder = text("Placeholder", "Placeholder");
  const suffix = text("Suffix", "Some long text");

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

export const CompactInput = () => {
  const value = text("Value", "");
  const label = text("Label", "Label");
  const placeholder = text("Placeholder", "Placeholder");
  const required = boolean("required", false);
  const error = text("Error", "");

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

export const CompactInputWithTags = () => {
  const value = text("Value", "");
  const label = text("Label", "Label");
  const placeholder = text("Placeholder", "Placeholder");
  const required = boolean("required", false);
  const error = text("Error", "");

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

export const RequiredField = () => {
  const label = text("Label", "Label");
  const value = text("Value", "");
  const required = boolean("required", true);
  const placeholder = text("Placeholder", "Placeholder");

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

export const WithIconPrefix = () => {
  const label = text("Label", "Label");
  const value = text("Value", "");
  const placeholder = text("Placeholder", "Placeholder");
  const Prefix = getIcon(getIcons("Prefix", "Search"));

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

export const WithButtonLinkSuffix = () => {
  const label = text("Label", "Label");
  const value = text("Value", "");
  const placeholder = text("Placeholder", "Placeholder");
  const Suffix = getIcon(getIcons("Suffix", "Visibility"));

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

export const WithServiceLogoPrefix = () => {
  const label = text("Label", "Label");
  const value = text("Value", "");
  const placeholder = text("Placeholder", "Placeholder");
  const name = select("Type", Object.values(NAME_OPTIONS), NAME_OPTIONS.AIRHELP);
  const grayScale = boolean("GrayScale", false);

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

WithServiceLogoPrefix.story = {
  name: "With ServiceLogo prefix",

  parameters: {
    info: "Some description about this type of InputField in general.",
  },
};

export const WithError = () => {
  const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.SMALL);
  const type = select("Type", Object.values(TYPE_OPTIONS), TYPE_OPTIONS.TEXT);
  const name = text("Name", "input");
  const label = text("Label", "");
  const inlineLabel = boolean("inline label", true);
  const value = text("Value", "");
  const placeholder = text("Placeholder", "Placeholder");
  const Prefix = getIcon(getIcons("Prefix", "Search"));
  const Suffix = getIcon(getIcons("Suffix", "Visibility"));
  const help = text("Help", "");
  const error = text("Error", "Please fill out as you have on your passport");
  const disabled = boolean("Disabled", false);
  const maxValue = number("maxValue", NaN);
  const minValue = number("minValue", NaN);
  const required = boolean("required", false);
  const maxLength = number("maxLength", NaN);
  const minLength = number("minLength", NaN);
  const readOnly = boolean("readOnly", false);
  const autoComplete = text("autoComplete", "off");
  const dataTest = text("dataTest", "test");
  const spaceAfter = select("spaceAfter", SPACINGS_AFTER, SPACINGS_AFTER.MEDIUM);
  const id = text("id", "ID");

  return (
    <InputField
      size={size}
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
            size={size}
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

export const WithHelp = () => {
  const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.SMALL);
  const type = select("Type", Object.values(TYPE_OPTIONS), TYPE_OPTIONS.TEXT);
  const name = text("Name", "input");
  const label = text("Label", "Label");
  const inlineLabel = boolean("inline label", true);
  const value = text("Value", "");
  const placeholder = text("Placeholder", "Placeholder");
  const Prefix = getIcon(getIcons("Prefix", "Search"));
  const Suffix = getIcon(getIcons("Suffix", "Visibility"));
  const help = text("Help", "Please fill out as you have on your passport");
  const error = text("Error", "");
  const disabled = boolean("Disabled", false);
  const maxValue = number("maxValue", NaN);
  const minValue = number("minValue", NaN);
  const required = boolean("required", false);
  const maxLength = number("maxLength", NaN);
  const minLength = number("minLength", NaN);
  const readOnly = boolean("readOnly", false);
  const autoComplete = text("autoComplete", "off");
  const dataTest = text("dataTest", "test");
  const spaceAfter = select("spaceAfter", Object.values(SPACINGS_AFTER), SPACINGS_AFTER.MEDIUM);
  const id = text("id", "ID");

  return (
    <InputField
      size={size}
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
            size={size}
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

export const Playground = () => {
  const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.NORMAL);
  const type = select("Type", Object.values(TYPE_OPTIONS), TYPE_OPTIONS.TEXT);
  const name = text("Name", "input");
  const label = text("Label", "Label");
  const inlineLabel = boolean("inline label", false);
  const value = text("Value", "");
  const placeholder = text("Placeholder", "Placeholder");
  const Prefix = getIcon(getIcons("Prefix", "Search"));
  const Suffix = getIcon(getIcons("Suffix", "Visibility"));
  const help = text("Help", "");
  const error = text("Error", "");
  const disabled = boolean("Disabled", false);
  const width = text("width", "");
  const maxValue = number("maxValue", NaN);
  const minValue = number("minValue", NaN);
  const required = boolean("required", false);
  const maxLength = number("maxLength", NaN);
  const minLength = number("minLength", NaN);
  const readOnly = boolean("readOnly", false);
  const autoComplete = text("autoComplete", "off");
  const dataTest = text("dataTest", "test");
  const spaceAfter = select("spaceAfter", Object.values(SPACINGS_AFTER), SPACINGS_AFTER.SMALL);
  const id = text("id", "ID");
  const inputMode = select("inputMode", Object.values(INPUTMODE), INPUTMODE.TEXT);
  const dataAttrs = object("dataAttrs", { "data-recording-ignore": true });

  return (
    <InputField
      size={size}
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
            iconLeft={<Suffix />}
            size={size}
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

export const Rtl = () => {
  const help = text("Help", "Please fill out as you have on your passport");
  const error = text("Error", "");
  const inlineLabel = boolean("inline label", false);
  const label = text("Label", "");

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
