// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs";

import { CODES } from "./consts";

import CountryFlag from "./index";

storiesOf("CountryFlag", module)
  .add("Default", () => {
    const code = select("Code", Object.values(CODES), CODES.ANYWHERE);

    return <CountryFlag code={code} />;
  })
  .add("Playground", () => {
    const code = select("Code", Object.values(CODES), CODES.ANYWHERE);
    const name = text("Name", "Country");
    const dataTest = text("dataTest", "test");
    return <CountryFlag code={code} name={name} dataTest={dataTest} />;
  });
