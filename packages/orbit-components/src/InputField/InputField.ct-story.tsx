import * as React from "react";

import Tag from "../Tag";
import type { Props } from "./types";

import InputField from ".";

// Green backgrounds to provide contrast

export function Test(props: Props) {
  return (
    <div className="p-xxs bg-[#CFC]">
      <InputField label="Label" dataTest="input" {...props} />
    </div>
  );
}

export function TestError(props: Props) {
  return (
    <div className="px-xxs py-xxl bg-[#CFC]">
      <InputField label="Label" error="Error" dataTest="input" {...props} />
    </div>
  );
}

export function TestHelp(props: Props) {
  return (
    <div className="px-xxs py-xxl bg-[#CFC]">
      <InputField label="Label" help="Help" dataTest="input" {...props} />
    </div>
  );
}

export function TestSuffix() {
  return (
    <div className="p-xxs bg-[#CFC]">
      <InputField label="Label" suffix={<span className="pe-sm">kg</span>} />
    </div>
  );
}

export function TestTags() {
  return (
    <div className="p-xxs bg-[#CFC]">
      <InputField
        label="Label"
        tags={[
          <Tag selected>Snake 🐍</Tag>,
          <Tag>Badger 🦡</Tag>,
          <Tag>Badger 🦡</Tag>,
          <Tag>Badger 🦡</Tag>,
          <Tag>Badger 🦡</Tag>,
          <Tag>Badger 🦡</Tag>,
          <Tag>Badger 🦡</Tag>,
          <Tag>Badger 🦡</Tag>,
          <Tag>Badger 🦡</Tag>,
          <Tag>Badger 🦡</Tag>,
          <Tag>Badger 🦡</Tag>,
          <Tag>Badger 🦡</Tag>,
          <Tag>Badger 🦡</Tag>,
          <Tag>Mushroom 🍄</Tag>,
          <Tag>Mushroom 🍄</Tag>,
        ]}
      />
    </div>
  );
}
