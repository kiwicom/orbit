import React from "react";

import Radio from "../Radio";
import { LABEL_SIZES } from "./consts";
import Checkbox from "../Checkbox";

import ChoiceGroup from ".";

export default function ChoiceGroupStory() {
  return (
    <div className="space-y-xl flex flex-col">
      <ChoiceGroup onChange={() => {}}>
        <Checkbox label="Lol" value="lol" />
        <Checkbox label="Kek" value="kek" />
        <Checkbox label="Bur" value="bur" disabled />
      </ChoiceGroup>
      <div className="space-y-xs flex flex-col">
        {Object.values(LABEL_SIZES).map(size => (
          <ChoiceGroup onChange={() => {}} label="Some choices lmao" labelSize={size}>
            <Radio label="Lol" value="lol" />
            <Radio label="Kek" value="kek" />
            <Radio label="Bur" value="bur" disabled />
          </ChoiceGroup>
        ))}
      </div>
      <ChoiceGroup onChange={() => {}} label="Some choices lmao" error="God damnit">
        <Radio label="Lol" value="lol" />
        <Radio label="Kek" value="kek" />
        <Radio label="Bur" value="bur" disabled />
      </ChoiceGroup>
      <ChoiceGroup onChange={() => {}} label="Some choices lmao" filter>
        <Radio label="Lol" value="lol" />
        <Radio label="Kek" value="kek" />
        <Radio label="Bur" value="bur" disabled />
      </ChoiceGroup>
    </div>
  );
}
