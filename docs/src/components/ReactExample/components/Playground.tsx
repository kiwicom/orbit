import React, { SyntheticEvent } from "react";
import styled from "styled-components";

import BooleanKnob from "./knobs/Boolean";
import SelectKnob from "./knobs/Select";
import TextKnob from "./knobs/Text";
import IconKnob from "./knobs/Icon";
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

  const handleChange = React.useCallback((ev: SyntheticEvent<HTMLElement, Event>) => {
    const { name, value, checked } = ev.target as HTMLInputElement;

    if (checked) {
      setValues(prev => ({ ...prev, [name]: String(checked) }));
    } else if (name.includes("icon")) {
      setValues(prev => ({ ...prev, [name]: `${value}-icon` }));
    } else {
      setValues(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  }, []);

  React.useEffect(() => {
    if (onChange) onChange(values);
  }, [values]);

  return (
    <StyledWrapper>
      {knobs.map(({ type, name, options, defaultValue }) => {
        if (type === "boolean") {
          return (
            <BooleanKnob key={name} checked={values[name]} onChange={handleChange} name={name} />
          );
        }

        if (type === "select") {
          return (
            <SelectKnob
              key={name}
              value={defaultValue}
              onChange={handleChange}
              name={name}
              options={options}
            />
          );
        }

        if (type === "icon") {
          return <IconKnob key={name} value={values[name]} name={name} onChange={handleChange} />;
        }

        return <TextKnob key={name} value={values[name]} onChange={handleChange} name={name} />;
      })}
    </StyledWrapper>
  );
};

export default Playground;
