import React from "react";
import { Text } from "@kiwicom/orbit-components";

import Switch from "../../../Switch";
import { Knob } from "../../Example";

interface Props extends Pick<Knob, "name"> {
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const BooleanKnob = ({ checked, name, onChange }: Props) => {
  return (
    <>
      <Text size="small">{name.split("-")[1]}</Text>
      <Switch name={name} checked={checked} onChange={onChange} />
    </>
  );
};

export default BooleanKnob;
