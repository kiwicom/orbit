import React from "react";
import { Text, InputField } from "@kiwicom/orbit-components";

import { Knob } from "../../Example";

interface Props extends Pick<Knob, "name"> {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const TextKnob = ({ value, name, onChange }: Props) => {
  return (
    <>
      <Text weight="bold" size="small" type="secondary">
        {name.split("-")[1]}
      </Text>
      <InputField name={name} value={value} onChange={onChange} />
    </>
  );
};

export default TextKnob;
