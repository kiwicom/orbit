import React from "react";

import { TYPE_OPTIONS, ALIGN } from "./consts";

import Heading from ".";

export default function HeadingVisualStory() {
  return (
    <div className="space-y-xs flex flex-col">
      {Object.values(TYPE_OPTIONS).map(type => (
        <Heading type={type}>Type {type}</Heading>
      ))}

      {Object.values(ALIGN).map(align => (
        <Heading align={align}>Align {align}</Heading>
      ))}
    </div>
  );
}
