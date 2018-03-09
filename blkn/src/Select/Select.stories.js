// @flow

import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Select from "./index";

const objectOptions = [
  { value: 1, label: "One" },
  { value: 2, label: "Two" },
  { value: 3, label: "Three" },
  { value: 4, label: "Four" },
];

const hiddenOptions = [
  { value: "one", label: "One" },
  { value: "two", label: "Two" },
  { value: "three", label: "Three" },
  { visible: false, value: "hidden-four", label: "Hidden Four" },
];
const disabledOptions = [
  { value: "one", label: "One" },
  { value: "two", label: "Two" },
  { value: "three", label: "Three" },
  { disabled: true, value: "hidden-four", label: "Hidden Four" },
];

storiesOf("Select", module)
  .add("Default", () => <Select value="" options={objectOptions} onChange={action("onChange")} />)
  .add("Default with placeholder", () => (
    <Select
      value=""
      placeholder="MyPlaceHolder"
      options={objectOptions}
      onChange={action("onChange")}
    />
  ))
  .add("Hidden 'Four' option", () => (
    <Select value="" options={hiddenOptions} onChange={action("onChange")} />
  ))
  .add("Disabled 'Four' option", () => (
    <Select value="" options={disabledOptions} onChange={action("onChange")} />
  ))
  .add("With error feedback", () => (
    <Select
      value=""
      options={objectOptions}
      error="Error message here"
      onChange={action("onChange")}
    />
  ))
  .add("With help feedback", () => (
    <Select
      value=""
      options={objectOptions}
      help="A helpful message here"
      onChange={action("onChange")}
    />
  ))
  .add("With label NOT filled", () => (
    <Select label="Choose number" value="" options={objectOptions} onChange={action("onChange")} />
  ))
  .add("With label with help", () => (
    <Select
      label="Choose number"
      help="Helpful feedback"
      value=""
      options={objectOptions}
      onChange={action("onChange")}
    />
  ))
  .add("With label filled", () => (
    <Select label="Choose number" value="2" options={objectOptions} onChange={action("onChange")} />
  ));
