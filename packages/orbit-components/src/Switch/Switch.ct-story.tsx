import React from "react";

import Airplane from "../icons/Airplane";

import Switch from ".";

export function SwitchStory() {
  return (
    <div className="space-y-200 flex flex-col">
      {/* Default unchecked */}
      <Switch checked={false} onChange={() => {}} />

      {/* Default checked */}
      <Switch checked onChange={() => {}} />

      {/* Disabled unchecked */}
      <Switch checked={false} onChange={() => {}} disabled />

      {/* Disabled checked */}
      <Switch checked onChange={() => {}} disabled />

      {/* With icon unchecked */}
      <Switch
        checked={false}
        onChange={() => {}}
        icon={<Airplane ariaLabel="Notifications are off" />}
      />

      {/* With icon checked */}
      <Switch checked onChange={() => {}} icon={<Airplane ariaLabel="Notifications are on" />} />

      {/* With icon disabled unchecked */}
      <Switch
        checked={false}
        onChange={() => {}}
        disabled
        icon={<Airplane ariaLabel="Notifications are off" />}
      />

      {/* With icon disabled checked */}
      <Switch
        checked
        onChange={() => {}}
        disabled
        icon={<Airplane ariaLabel="Notifications are on" />}
      />
    </div>
  );
}

export default SwitchStory;
