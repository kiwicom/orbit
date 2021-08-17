import React from "react";
import { Text, Select } from "@kiwicom/orbit-components";

import { Knob } from "../../Example";

interface Props extends Pick<Knob, "name" | "options"> {
  value: string;
  onChange: (ev: React.SyntheticEvent<HTMLSelectElement, Event>) => void;
}

const SelectKnob = ({ value, name, onChange, options }: Props) => {
  if (!options) return null;

  return (
    <>
      <Text weight="bold" size="small" type="secondary">
        {name.split("-")[1]}
      </Text>
      <Select
        name={name}
        value={value}
        onChange={onChange}
        options={options?.map(opt => ({ label: opt, key: opt, value: opt }))}
      />
    </>
  );
};

export default SelectKnob;
