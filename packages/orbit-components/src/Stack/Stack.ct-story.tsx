import React from "react";

import type { Props } from "./types";

import Stack from ".";

export default function StackStory(props: Omit<Props, "children">) {
  return (
    <Stack {...props}>
      <div className="bg-blue-normal text-white-normal flex h-[50px] items-center">First child</div>
      <div className="bg-blue-dark text-white-normal flex h-[70px] items-center">Second child</div>
      <div className="bg-blue-darker text-white-normal flex h-[90px] items-center">Third child</div>
    </Stack>
  );
}
