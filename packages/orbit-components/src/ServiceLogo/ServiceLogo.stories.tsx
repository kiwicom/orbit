import * as React from "react";

import { NAME_OPTIONS, SIZE_OPTIONS } from "./consts";

import ServiceLogo from ".";

export default {
  title: "ServiceLogo",
};

export const Playground = ({ name, size, grayScale, dataTest, id }) => {
  return <ServiceLogo name={name} size={size} grayScale={grayScale} dataTest={dataTest} id={id} />;
};

Playground.story = {
  parameters: {
    info: "All possible options for ServiceLogo. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

Playground.args = {
  name: NAME_OPTIONS.AIRHELP,
  size: SIZE_OPTIONS.MEDIUM,
  grayScale: false,
  dataTest: "test",
  id: "ID",
};

Playground.argTypes = {
  name: {
    options: Object.values(NAME_OPTIONS),
    control: {
      type: "select",
    },
  },
  size: {
    options: Object.values(SIZE_OPTIONS),
    control: {
      type: "select",
    },
  },
};
