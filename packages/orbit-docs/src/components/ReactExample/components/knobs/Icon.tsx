import React from "react";
import * as Icons from "@kiwicom/orbit-components/icons";
import { Select, Text } from "@kiwicom/orbit-components";

import { Knob } from "../../Example";

interface Props extends Pick<Knob, "name"> {
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

const Icon = ({ name, value, onChange }: Props) => {
  const val = value ? value.split("-")[0] : "";
  return (
    <>
      <Text size="small" type="secondary">
        {name.split("-")[1]}
      </Text>
      <Select
        name={name}
        value={val}
        /* @ts-expect-error: todo */
        onChange={onChange}
        options={[
          { label: "null", value: "null" },
          ...Object.keys(Icons)
            .filter(n => n !== "__esModule")
            .map(key => ({
              label: key,
              value: key,
              key,
            })),
        ]}
      />
    </>
  );
};

export default Icon;
