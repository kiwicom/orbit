// @flow

import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import styles from "@sambego/storybook-styles";
import { withKnobs, text, boolean, select, number } from "@storybook/addon-knobs";

import { SIZE_OPTIONS, RESIZE_OPTIONS } from "./consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import Textarea from "./index";

storiesOf("Textarea", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .add("Default", () => {
    const value = text("Value", "");
    const placeholder = text("Placeholder", "Placeholder");

    return <Textarea placeholder={placeholder} onChange={action("change")} value={value} />;
  })
  .add("Small size", () => {
    const value = text("Value", "");
    const placeholder = text("Placeholder", "Placeholder");

    return (
      <Textarea size="small" placeholder={placeholder} onChange={action("change")} value={value} />
    );
  })
  .add("With label", () => {
    const label = text("Label", "Label");
    const value = text("Value", "");
    const placeholder = text("Placeholder", "Placeholder");

    return (
      <Textarea label={label} placeholder={placeholder} onChange={action("change")} value={value} />
    );
  })
  .add("With help", () => {
    const value = text("Value", "Something");
    const placeholder = text("Placeholder", "Placeholder");
    const help = text("Help", "Everything is fine.");

    return (
      <Textarea placeholder={placeholder} help={help} onChange={action("change")} value={value} />
    );
  })
  .add("With error", () => {
    const value = text("Value", "Something");
    const placeholder = text("Placeholder", "Placeholder");
    const error = text("Error", "Something went wrong.");

    return (
      <Textarea placeholder={placeholder} error={error} onChange={action("change")} value={value} />
    );
  })
  .add("Playground", () => {
    const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.SMALL);
    const label = text("Label", "Label");
    const value = text("Value", "");
    const fullHeight = boolean("fullHeight", true);
    const placeholder = text("Placeholder", "Placeholder");
    const help = text("Help", undefined);
    const error = text("Error", "Something went wrong.");
    const disabled = boolean("Disabled", true);
    const resize = select("resize", Object.values(RESIZE_OPTIONS), RESIZE_OPTIONS.VERTICAL);
    const maxLength = number("maxLength", undefined);
    const dataTest = text("dataTest", "test");

    return (
      <Textarea
        size={size}
        label={label}
        value={value}
        fullHeight={fullHeight}
        placeholder={placeholder}
        help={help}
        error={error}
        disabled={disabled}
        maxLength={maxLength}
        resize={resize}
        onChange={action("change")}
        onFocus={action("focus")}
        onBlur={action("blur")}
        dataTest={dataTest}
      />
    );
  })
  .add("RTL", () => (
    <RenderInRtl>
      <Textarea placeholder="My placeholder" value="Content of the Textarea" />
    </RenderInRtl>
  ));
