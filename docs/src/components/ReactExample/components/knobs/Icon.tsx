import React from "react";
import * as Icons from "@kiwicom/orbit-components/icons";
import { Select, Text } from "@kiwicom/orbit-components";

import { Knob } from "../../Example";

interface Props extends Pick<Knob, "name"> {
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

const Icon = ({ name, value, onChange }: Props) => {
  return (
    <>
      <Text weight="bold" size="small" type="secondary">
        {name.split("-")[1]}
      </Text>
      <Select
        name={name}
        value={value.split("-")[0]}
        onChange={onChange}
        options={Object.keys(Icons)
          .filter(n => n !== "__esModule")
          .map(key => ({
            label: key,
            value: key,
            key,
          }))}
      />
    </>
  );
};

export default Icon;
