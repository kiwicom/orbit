// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { object, select, text, boolean } from "@storybook/addon-knobs";

import Airplane from "../icons/Airplane";
import SIZE_OPTIONS from "./consts";
import CountryFlag from "../CountryFlag";
import { CODES } from "../CountryFlag/consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import SPACINGS_AFTER from "../common/getSpacingToken/consts";

import Select from "./index";

const objectOptions = [
  { value: 0, label: "Zero-th item" },
  { value: 1, label: "First item" },
  { value: 2, label: "Second item" },
  { value: 3, label: "Third item" },
];

storiesOf("Select", module)
  .add("Default", () => <Select options={objectOptions} onChange={action("onChange")} />, {
    info:
      "Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
  })
  .add(
    "With prefix",
    () => (
      <Select
        label="Select box (with prefix)"
        options={objectOptions}
        onChange={action("onChange")}
        prefix={<Airplane color="secondary" />}
      />
    ),
    {
      info:
        "Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "With CountryFlag prefix",
    () => {
      const code = select("Code", Object.values(CODES), CODES.ANYWHERE);
      return (
        <Select
          label="Select box (with prefix)"
          options={objectOptions}
          onChange={action("onChange")}
          prefix={<CountryFlag code={code} />}
        />
      );
    },
    {
      info:
        "Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "With placeholder",
    () => {
      const placeholder = text("Placeholder", "Select value from list");
      return (
        <Select
          label="Select box (with placeholder)"
          placeholder={placeholder}
          options={objectOptions}
          onChange={action("onChange")}
        />
      );
    },
    {
      info:
        "Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "With help message",
    () => (
      <Select
        label="Select box (with help text)"
        options={objectOptions}
        help="Most common choice is Booking cancellation"
        onChange={action("onChange")}
      />
    ),
    {
      info:
        "Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "With error message",
    () => (
      <Select
        label="Select box (with error text)"
        options={objectOptions}
        error={<div>You need to select some value.</div>}
        onChange={action("onChange")}
      />
    ),
    {
      info:
        "Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "With small size",
    () => (
      <Select
        label="Select box (small size)"
        size="small"
        options={objectOptions}
        onChange={action("onChange")}
      />
    ),
    {
      info:
        "Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Playground",
    () => {
      const placeholder = text("Placeholder", "Select value from list");
      const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.NORMAL);
      const disabled = boolean("Disabled", false);
      const name = text("Name", "name");
      const customValueText = text("customValueText", null);
      const option = object("Options", objectOptions);
      const value = select("Value", [undefined].concat(...objectOptions.map(opt => opt.value)));
      const dataTest = text("dataTest", "test");
      const spaceAfter = select("spaceAfter", [null, ...Object.values(SPACINGS_AFTER)]);
      const id = text("ID", "select-id");
      const required = boolean("Required", false);
      const label = text("Label", "Label");
      const error = text("Error", "");
      const help = text("Help", "");

      return (
        <Select
          id={id}
          required={required}
          placeholder={placeholder}
          size={size}
          options={option}
          disabled={disabled}
          name={name}
          label={label}
          error={error}
          help={help}
          onChange={action("onChange")}
          onBlur={action("onBlur")}
          onFocus={action("onFocus")}
          dataTest={dataTest}
          value={value}
          customValueText={customValueText}
          spaceAfter={spaceAfter}
        />
      );
    },
    {
      info:
        "Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "RTL",
    () => {
      const label = text("Label", "Label");
      const error = text("Error", "");
      const help = text("Help", "");

      return (
        <RenderInRtl>
          <Select
            label={label}
            error={error}
            help={help}
            placeholder="My placeholder"
            options={objectOptions}
          />
        </RenderInRtl>
      );
    },
    {
      info: "This is a preview of this component in RTL setup.",
    },
  );
