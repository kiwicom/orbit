import React, { SyntheticEvent } from "react";
import styled from "styled-components";
import { InputField, Text } from "@kiwicom/orbit-components";

import BooleanKnob from "./knobs/Boolean";
import Select from "./knobs/Select";
import { Knob } from "../Example";

interface Props {
  knobs: Knob[];
  onChange: (val) => void;
}

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto 1fr;
  grid-gap: 20px;
  align-items: center;
  padding: 20px;
`;

const Playground = ({ knobs, onChange }: Props) => {
  const defaultVals = knobs.reduce((acc, { name, defaultValue }) => {
    acc[name] = defaultValue;
    return acc;
  }, {});

  const [values, setValues] = React.useState(defaultVals);

  const handleChange = (ev: SyntheticEvent<HTMLElement, Event>) => {
    const { name, value, checked } = ev.target as HTMLInputElement;

    setValues({
      ...defaultVals,
      [name]: String(value || checked),
    });
  };

  React.useEffect(() => {
    if (onChange) onChange(values);
  }, [onChange, values]);

  return (
    <StyledWrapper>
      {knobs.map(({ type, name, options, defaultValue }) => {
        if (type === "textfield") {
          return (
            <React.Fragment key={name}>
              <Text weight="bold" size="small" type="secondary">
                {name}
              </Text>
              <InputField size="small" value={values[name]} onChange={handleChange} />
            </React.Fragment>
          );
        }

        if (type === "checkbox") {
          return (
            <BooleanKnob key={name} checked={values[name]} onChange={handleChange} name={name} />
          );
        }

        if (type === "select")
          return (
            <Select
              key={name}
              value={defaultValue}
              onChange={handleChange}
              name={name}
              options={options}
            />
          );

        return null;
      })}
    </StyledWrapper>
  );
};

export default Playground;
