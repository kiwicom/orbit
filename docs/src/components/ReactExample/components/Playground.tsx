import React, { SyntheticEvent } from "react";
import styled from "styled-components";
import { Text } from "@kiwicom/orbit-components";

import BooleanKnob from "./knobs/Boolean";
import SelectKnob from "./knobs/Select";
import TextKnob from "./knobs/Text";
import IconKnob from "./knobs/Icon";
import { ExampleKnob } from "../Example";

interface Props {
  exampleKnobs: ExampleKnob[];
  onChange: (val) => void;
}

const StyledWrapper = styled.div`
  padding: 20px;
`;

const StyledKnobsWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto 1fr;
  grid-gap: 20px;
  align-items: center;
`;

const Playground = ({ exampleKnobs, onChange }: Props) => {
  const defaultVals = exampleKnobs.reduce((acc, { component, knobs }) => {
    acc[component] = knobs.reduce((knobAcc, { defaultValue, name }) => {
      // eslint-disable-next-line no-param-reassign
      knobAcc[name] = defaultValue;
      return knobAcc;
    }, {});

    return acc;
  }, {});

  const [values, setValues] = React.useState(defaultVals);

  const handleChange = React.useCallback((ev: SyntheticEvent<HTMLElement, Event>) => {
    const { name, value, checked } = ev.target as HTMLInputElement;
    const [component, field] = name.split("-");

    if (checked) {
      setValues(prev => ({
        ...prev,
        [component]: { ...prev[component], [field]: String(checked) },
      }));
    } else if (name.includes("-icon")) {
      setValues(prev => ({
        ...prev,
        [component]: { ...prev[component], [field]: `${value}-icon` },
      }));
    } else {
      setValues(prev => ({
        ...prev,
        [component]: {
          ...prev[component],
          [field]: value,
        },
      }));
    }
  }, []);

  React.useEffect(() => {
    if (onChange) onChange(values);
  }, [values]);

  return (
    <>
      {exampleKnobs.map(({ component, knobs }) => {
        return (
          <StyledWrapper key={component}>
            <Text weight="bold" spaceAfter="medium">
              {component}
            </Text>
            <StyledKnobsWrapper>
              {knobs.map(({ type, name, options }) => {
                const fieldName = `${component}-${name}`;
                if (type === "boolean") {
                  return (
                    <BooleanKnob
                      key={name}
                      checked={values[component][name]}
                      onChange={handleChange}
                      name={fieldName}
                    />
                  );
                }

                if (type === "select") {
                  return (
                    <SelectKnob
                      key={name}
                      value={values[component][name]}
                      onChange={handleChange}
                      name={fieldName}
                      options={options}
                    />
                  );
                }

                if (type === "icon") {
                  return (
                    <IconKnob
                      key={name}
                      value={values[component][name]}
                      name={fieldName}
                      onChange={handleChange}
                    />
                  );
                }

                return (
                  <TextKnob
                    key={name}
                    value={values[component][name]}
                    onChange={handleChange}
                    name={fieldName}
                  />
                );
              })}
            </StyledKnobsWrapper>
          </StyledWrapper>
        );
      })}
    </>
  );
};
export default Playground;
