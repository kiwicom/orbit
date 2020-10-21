// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs";

import RenderInRtl from "../utils/rtl/RenderInRtl";
import { ALIGN, JUSTIFY, SPACING } from "./consts";

import Inline from "./index";

const PlaceHolder = () => {
  return <div style={{ width: "50px", height: "50px", background: "grey" }} />;
};

const dataTest = "test";

const TestChildren = () => {
  return (
    <>
      <PlaceHolder />
      <PlaceHolder />
      <PlaceHolder />
      <PlaceHolder />
      <PlaceHolder />
      <PlaceHolder />
    </>
  );
};

storiesOf("Inline", module)
  .add(
    "Default",
    () => {
      const spacing = select("spacing", SPACING, SPACING[1]);
      return (
        <Inline spacing={spacing} dataTest={dataTest}>
          <TestChildren />
        </Inline>
      );
    },
    {
      info:
        "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Playground",
    () => {
      const as = text("As", "div");
      const align = select("align", ALIGN, ALIGN[0]);
      const justify = select("justify", JUSTIFY, JUSTIFY[0]);
      const spacing = select("spacing", SPACING, SPACING[1]);

      return (
        <Inline as={as} align={align} justify={justify} dataTest={dataTest} spacing={spacing}>
          <TestChildren />
        </Inline>
      );
    },
    {
      info: "Some description about this type of component. ",
    },
  )
  .add(
    "RTL",
    () => {
      const spacing = select("spacing", SPACING, SPACING[1]);
      return (
        <RenderInRtl>
          <Inline spacing={spacing} dataTest={dataTest}>
            <TestChildren />
          </Inline>
        </RenderInRtl>
      );
    },
    {
      info: "This is a preview of this component in RTL setup.",
    },
  );
