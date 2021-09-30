import React from "react";
import { Textarea, Text } from "@kiwicom/orbit-components";

import { Knob } from "../../Example";

interface Props extends Pick<Knob, "name"> {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const ObjectKnob = ({ value, name, onChange }: Props) => {
  return (
    <>
      <Text size="small">{name.split("-")[1]}</Text>
      <Textarea
        name={name}
        value={typeof value === "object" ? JSON.stringify(value) : value}
        // @ts-expect-error TODO
        onChange={onChange}
        fullHeight
        resizable
        rows={2}
      />
    </>
  );
};

export default ObjectKnob;
