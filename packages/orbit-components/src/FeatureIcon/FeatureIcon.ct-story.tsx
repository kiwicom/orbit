import React from "react";

import { NAME_OPTIONS } from "./consts";

import FeatureIcon from ".";

export default function FeatureIconVisualStory() {
  return (
    <div className="space-x-200 flex">
      {Object.values(NAME_OPTIONS).map(name => (
        <FeatureIcon name={name} />
      ))}
    </div>
  );
}
