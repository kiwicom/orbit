import React from "react";
import { Text, InputField } from "@kiwicom/orbit-components";

import { Knob } from "../../Example";

interface Props extends Pick<Knob, "name"> {
  value: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const NumberKnob = ({ value, name, onChange }: Props) => {
  return (
    <>
      <Text weight="bold" size="small" type="secondary">
        {name.split("-")[1]}
      </Text>
      {/* @ts-expect-error: todo */}
      <InputField type="number" inputMode="numeric" name={name} value={value} onChange={onChange} />
    </>
  );
};

export default NumberKnob;
