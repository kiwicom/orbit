import * as React from "react";
import { action } from "@storybook/addon-actions";
import { FixedSizeList } from "react-window";

import { LABEL_ELEMENTS, LABEL_SIZES } from "./consts";
import Radio from "../Radio";
import Checkbox from "../Checkbox";

import ChoiceGroup from ".";

ChoiceGroup.displayName = "ChoiceGroup";

export default {
  title: "ChoiceGroup",
};

export const Default = ({ label }) => {
  return (
    <ChoiceGroup label={label} onChange={action("onChange")}>
      <Radio label="Reason one" value="one" />
      <Radio label="Reason two" value="two" />
      <Radio label="Reason three" value="three" />
    </ChoiceGroup>
  );
};

Default.story = {
  parameters: {
    info: "Playground of ChoiceGroup",
  },
};

Default.args = {
  label: "What was the reason for your cancellation?",
};

export const Multiple = ({ label }) => {
  return (
    <ChoiceGroup label={label} onChange={action("onChange")}>
      <Checkbox label="Reason one" value="one" />
      <Checkbox label="Reason two" value="two" />
      <Checkbox label="Reason three" value="three" />
    </ChoiceGroup>
  );
};

Multiple.story = {
  parameters: {
    info: "Playground of ChoiceGroup",
  },
};

Multiple.args = {
  label: "What was the reason for your cancellation?",
};

export const Filter = ({ label, onlySelectionText }) => {
  return (
    <ChoiceGroup
      label={label}
      filter
      onChange={action("onChange")}
      onOnlySelection={action("onOnlySelection")}
      onlySelectionText={onlySelectionText}
    >
      <Checkbox label="Reason one" value="one" disabled />
      <Checkbox label="Reason two" value="two" />
      <Checkbox label="Reason three" value="three" />
    </ChoiceGroup>
  );
};

Filter.story = {
  parameters: {
    info: "Playground of ChoiceGroup",
  },
};

Filter.args = {
  label: "What was the reason for your cancellation?",
  onlySelectionText: "Only",
};

export const WithError = ({ label, error }) => {
  return (
    <ChoiceGroup label={label} error={error} onChange={action("onChange")}>
      <Radio label="Reason one" value="one" />
      <Radio label="Reason two" value="two" />
      <Radio label="Reason three" value="three" />
    </ChoiceGroup>
  );
};

WithError.story = {
  name: "With error",

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

WithError.args = {
  label: "Label",
  error: "Error message (explain how to solve it)",
};

export const RenderProp = ({ boxShadowSize }) => {
  return (
    <ChoiceGroup label="What was the reason for your cancellation?" onChange={action("onChange")}>
      {({ Container, Item, spacing }) => (
        <FixedSizeList
          outerElementType={({ style, ...props }) => (
            <div
              style={{
                // account for extra padding
                top: `-${boxShadowSize}`,
                left: `-${boxShadowSize}`,
                ...style,
              }}
              {...props}
            />
          )}
          innerElementType={Container}
          height={150}
          itemCount={500}
          // computed height + top padding + spacing between items
          itemSize={20 + parseInt(spacing, 10)}
        >
          {({ style, index }) => (
            <div
              style={{
                // don't cut focus box shadow
                paddingTop: boxShadowSize,
                paddingLeft: boxShadowSize,
                ...style,
              }}
            >
              <Item>
                <Radio label={`Option ${index}`} value={index} />
              </Item>
            </div>
          )}
        </FixedSizeList>
      )}
    </ChoiceGroup>
  );
};

RenderProp.story = {
  name: "Render prop",
  parameters: {
    info: "A virtual list, demonstrating a use case for passing function as children",
  },
};

RenderProp.args = {
  boxShadowSize: "3px",
};

export const Playground = ({ dataTest, label, labelSize, labelAs, error, filter }) => {
  return (
    <ChoiceGroup
      dataTest={dataTest}
      label={label}
      labelSize={labelSize}
      labelAs={labelAs}
      error={error}
      filter={filter}
      onOnlySelection={action("onOnlySelection")}
      onChange={action("onChange")}
    >
      <Radio label="Reason one" value="one" />
      <Radio label="Reason two" value="two" />
      <Radio label="Reason three" value="three" />
    </ChoiceGroup>
  );
};

Playground.story = {
  parameters: {
    info: "Playground of ChoiceGroup",
  },
};

Playground.args = {
  dataTest: "test",
  label: "What was the reason for your cancellation?",
  labelSize: LABEL_SIZES.NORMAL,
  labelAs: LABEL_ELEMENTS.H4,
  error: "Something is wrong",
  filter: false,
};

Playground.argTypes = {
  labelSize: {
    options: Object.values(LABEL_SIZES),
    control: {
      type: "select",
    },
  },
  labelAs: {
    options: Object.values(LABEL_ELEMENTS),
    control: {
      type: "select",
    },
  },
};
