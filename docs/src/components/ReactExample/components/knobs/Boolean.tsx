import React from "react";
import { Text } from "@kiwicom/orbit-components";

import Switch from "../../../Switch";
import { Knob } from "../../Example";

interface Props extends Pick<Knob, "name"> {
  checked: boolean;
  onChange: (ev: React.SyntheticEvent<HTMLInputElement, Event>) => void;
}

const parseBool = b => !/^(false|0)$/i.test(b) && !!b;

const BooleanKnob = ({ checked, name, onChange }: Props) => {
  return (
    <>
      <Text weight="bold" size="small" type="secondary">
        {name}
      </Text>
      <Switch name={name} checked={parseBool(checked)} onChange={onChange} />
    </>
  );
};

export default BooleanKnob;
