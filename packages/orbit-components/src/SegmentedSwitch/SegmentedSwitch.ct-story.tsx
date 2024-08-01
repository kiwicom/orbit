import * as React from "react";

import type { Option } from "./types";

import SegmentedSwitch from ".";

const options: Option[] = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
];

const optionsWithDefaultChecked: Option[] = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female", defaultChecked: true },
];

export function SegmentedSwitchStory() {
  return (
    <div className="gap-400 p-400 flex flex-col">
      <SegmentedSwitch options={options} onChange={() => {}} />
      <SegmentedSwitch options={options} label="Custom label" onChange={() => {}} />
      <SegmentedSwitch
        options={optionsWithDefaultChecked}
        label="Custom label"
        onChange={() => {}}
      />
      <SegmentedSwitch
        options={options}
        label="Custom label"
        help="Do or do not. There is no try."
        onChange={() => {}}
      />
      <SegmentedSwitch
        options={options}
        label="Custom label"
        error="You shall not pass!"
        onChange={() => {}}
      />
      <div className="mt-800">
        <SegmentedSwitch
          options={options}
          label="Custom label"
          help="Do or do not. There is no try."
          showTooltip
          onChange={() => {}}
        />
      </div>
      <div className="mt-800">
        <SegmentedSwitch
          options={options}
          label="Custom label"
          error="You shall not pass!"
          onChange={() => {}}
          showTooltip
        />
      </div>
      <SegmentedSwitch options={options} maxWidth="300px" onChange={() => {}} />
    </div>
  );
}

export function SegmentedSwitchErrorStory() {
  return (
    <div className="p-400">
      <SegmentedSwitch
        options={options}
        label="Custom label"
        error="You shall not pass!"
        onChange={() => {}}
        dataTest="switch-error"
      />
    </div>
  );
}

export function SegmentedSwitchSelectedStory() {
  return (
    <div className="p-400">
      <SegmentedSwitch
        options={optionsWithDefaultChecked}
        label="Custom label"
        onChange={() => {}}
        dataTest="switch-selected"
      />
    </div>
  );
}
