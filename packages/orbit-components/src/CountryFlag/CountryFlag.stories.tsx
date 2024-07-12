import React from "react";

import { CODES, SIZES } from "./consts";

import CountryFlag from ".";

export default {
  title: "CountryFlag",
};

export const Default = ({ code }) => {
  return <CountryFlag code={code} />;
};

Default.story = {
  parameters: {
    info: "Country flag displays one flag of selected country. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

Default.args = {
  code: CODES.ANYWHERE,
};

Default.argTypes = {
  code: {
    options: Object.values(CODES),
    control: {
      type: "select",
    },
  },
};

export const Playground = ({ code, name, size, dataTest }) => {
  return <CountryFlag code={code} name={name} dataTest={dataTest} size={size} />;
};

Playground.story = {
  parameters: {
    info: "Country flag displays one flag of selected country. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

Playground.args = {
  code: CODES.ANYWHERE,
  name: "Country",
  size: SIZES.SMALL,
  dataTest: "test",
};

Playground.argTypes = {
  code: {
    options: Object.values(CODES),
    control: {
      type: "select",
    },
  },
  size: {
    options: Object.values(SIZES),
    control: {
      type: "select",
    },
  },
};
