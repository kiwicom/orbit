// @flow

import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import styles from "@sambego/storybook-styles/dist/index";

import { CODES } from "./consts";

import CountryFlag from "./index";

storiesOf("CountryFlag", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
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
