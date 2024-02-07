import React from "react";

import type { Name, Props } from "./types";

import Illustration from ".";

export default function IconVisualStory({ name, size }: { name: Name; size: Props["size"] }) {
  return <Illustration name={name} size={size} />;
}
