import * as React from "react";
import { text, boolean, select } from "@storybook/addon-knobs";

import CountryFlag from "../CountryFlag";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import TextLink from "../TextLink";
import Text from "../Text";

import ChoiceTile from ".";

export default {
  title: "ChoiceTile",
};

export const DefaultRadio = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <ChoiceTile
        icon={<CountryFlag code="anywhere" />}
        title="This is the title"
        description="This is the description"
        label="Free"
        type="radio"
      />
      <ChoiceTile
        icon={<CountryFlag code="anywhere" />}
        title="This is the title"
        description="This is the description inline"
        type="radio"
        label="230.00€"
        selected
        inline
      />
    </div>
  );
};

DefaultRadio.story = {
  parameters: {
    info: `ChoiceTile component can have any custom content as children. Title, icon/flag and description can be defined via props. 
    If clickable elements are used in custom content, be sure to stop the propagation of the click event in order to prevent effects on the ChoiceTile.`,
  },
};

export const DefaultCheckbox = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <ChoiceTile
        icon={<CountryFlag code="anywhere" />}
        title="This is the title"
        description="This is the description"
        type="checkbox"
        selected
      />
      <ChoiceTile
        icon={<CountryFlag code="anywhere" />}
        title="This is the title"
        description="This is the description"
        type="checkbox"
      />
      <ChoiceTile
        icon={<CountryFlag code="anywhere" />}
        title="This is the title"
        description="This is the description"
        type="checkbox"
        selected
      />
    </div>
  );
};

DefaultCheckbox.story = {
  parameters: {
    info: `ChoiceTile component can have any custom content as children. Title, icon/flag and description can be defined via props. 
    If clickable elements are used in custom content, be sure to stop the propagation of the click event in order to prevent effects on the ChoiceTile.`,
  },
};

export const Playground = () => {
  const label = text("Label", "Label");
  const title = text("Title", "This is the title");
  const description = text("Description", "This is the description");
  const selected = boolean("Selected", false);
  const inline = boolean("Inline", false);
  const type = select("Type", ["radio", "checkbox"], "radio");
  const icon = boolean("Flag", true);
  const customContent = text("Content", "This is the custom content");

  return (
    <ChoiceTile
      icon={icon && <CountryFlag code="anywhere" />}
      title={title}
      description={description}
      label={label}
      type={type}
      selected={selected}
      inline={inline}
    >
      {customContent}
    </ChoiceTile>
  );
};

Playground.story = {
  parameters: {
    info: "Playground of ChoiceTile",
  },
};

export const Rtl = () => {
  const [selected, setSelected] = React.useState(false);

  return (
    <RenderInRtl>
      <ChoiceTile
        icon={<CountryFlag code="anywhere" />}
        title="This is the title"
        description="This is the description"
        label="$16.90"
        type="checkbox"
        selected={selected}
        onClick={() => setSelected(prevState => !prevState)}
      >
        <Text>This is some custom content</Text>
        <TextLink href="#/" onClick={e => e.stopPropagation()}>
          Custom link with event propagation stopped
        </TextLink>
      </ChoiceTile>
    </RenderInRtl>
  );
};

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
