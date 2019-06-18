// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { select, boolean, text } from "@storybook/addon-knobs";

import { NAME_OPTIONS, SIZE_OPTIONS } from "./consts";

import ServiceLogo from "./index";

storiesOf("ServiceLogo", module).add(
  "Playground",
  () => {
    const name = select("Type", Object.values(NAME_OPTIONS), NAME_OPTIONS.AIRHELP);
    const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.MEDIUM);
    const grayScale = boolean("GrayScale", false);
    const dataTest = text("dataTest", "test");

    return <ServiceLogo name={name} size={size} grayScale={grayScale} dataTest={dataTest} />;
  },
  {
    info: "Some description about this type of component.",
  },
);
