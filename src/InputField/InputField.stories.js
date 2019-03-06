// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import styles from "@sambego/storybook-styles";
import { withKnobs, text, boolean, select, number } from "@storybook/addon-knobs";

import * as Icons from "../icons";
import { SIZE_OPTIONS, TYPE_OPTIONS } from "./consts";
import { NAME_OPTIONS } from "../ServiceLogo/consts";
import ButtonLink from "../ButtonLink";
import TextLink from "../TextLink";
import ServiceLogo from "../ServiceLogo";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import InputField from "./index";

const getIcons = (name, defaultIcon) =>
  select(name, [undefined, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

storiesOf("InputField", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .add("Default input", () => {
    const label = text("Label", "Label");
    const value = text("Value", "");
    const placeholder = text("Placeholder", "Placeholder");

    return (
      <InputField
        label={label}
        value={value}
        placeholder={placeholder}
        onChange={action("change")}
      />
    );
  })
  .add("Small input", () => {
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
  })
  .add("Number input", () => {
    const label = text("Label", "Number");
    const value = text("Value", 2);
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
  })
  .add("Password input", () => {
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
  })
  .add("Passport or ID Input", () => {
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
  })
  .add("Email input", () => {
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
  })
  .add("With text prefix", () => {
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
  })
  .add("With text suffix", () => {
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
  })

  .add("Compact input", () => {
    const value = text("Value", "");
    const label = text("Label", "Label");
    const placeholder = text("Placeholder", "Placeholder");
    const required = boolean("required", false);
    const error = text("Error", undefined);

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
  })
  .add("Required field", () => {
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
  })
  .add("With Icon prefix", () => {
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
  })
  .add("With ButtonLink suffix", () => {
    const label = text("Label", "Label");
    const value = text("Value", "");
    const placeholder = text("Placeholder", "Placeholder");
    const Suffix = getIcon(getIcons("Suffix", "Visibility"));

    return (
      <InputField
        label={label}
        value={value}
        placeholder={placeholder}
        suffix={Suffix && <ButtonLink transparent icon={<Suffix />} onClick={action("clicked")} />}
        onChange={action("change")}
      />
    );
  })
  .add("With ServiceLogo prefix", () => {
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
  })
  .add("Playground", () => {
    const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.SMALL);
    const type = select("Type", Object.values(TYPE_OPTIONS), TYPE_OPTIONS.TEXT);
    const name = text("Name", "input");
    const label = text("Label", "Label");
    const inlineLabel = boolean("inline label", false);
    const value = text("Value", "");
    const placeholder = text("Placeholder", "Placeholder");
    const Prefix = getIcon(getIcons("Prefix", "Search"));
    const Suffix = getIcon(getIcons("Suffix", "Visibility"));
    const help = text("Help", undefined);
    const error = text("Error", undefined);
    const disabled = boolean("Disabled", false);
    const maxValue = number("maxValue", undefined);
    const minValue = number("minValue", undefined);
    const required = boolean("required", false);
    const maxLength = number("maxLength", undefined);
    const minLength = number("minLength", undefined);
    const readOnly = boolean("readOnly", false);
    const dataTest = text("dataTest", "test");

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
              transparent
              icon={<Suffix />}
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
        onChange={action("change")}
        onFocus={action("focus")}
        onBlur={action("blur")}
      />
    );
  })
  .add("RTL", () => (
    <RenderInRtl>
      <InputField
        placeholder="Placeholder"
        label="My label"
        prefix="$"
        suffix={<ButtonLink iconLeft={<Icons.Visibility />} />}
      />
    </RenderInRtl>
  ));
