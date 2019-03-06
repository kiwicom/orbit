// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, text } from "@storybook/addon-knobs";

import * as Icons from "../icons";
import Button from "../Button";
import ButtonLink from "../ButtonLink";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import ButtonGroup from "./index";

storiesOf("ButtonGroup", module)
  .add("With Buttons", () => {
    const connected = boolean("Connected", true);
    const dataTest = text("dataTest", "test");
    return (
      <ButtonGroup connected={connected} dataTest={dataTest}>
        <Button icon={<Icons.Airplane />}>Button</Button>
        <Button icon={<Icons.ChevronDown />} />
      </ButtonGroup>
    );
  })
  .add("With ButtonLinks", () => {
    const connected = boolean("Connected", true);
    const dataTest = text("dataTest", "test");
    return (
      <ButtonGroup connected={connected} dataTest={dataTest}>
        <ButtonLink type="secondary" icon={<Icons.Airplane />}>
          Button
        </ButtonLink>
        <ButtonLink type="secondary" icon={<Icons.ChevronDown />} />
      </ButtonGroup>
    );
  })
  .add("RTL", () => (
    <RenderInRtl>
      <ButtonGroup connected>
        <Button icon={<Icons.Airplane />}>Button</Button>
        <Button icon={<Icons.ChevronDown />} />
      </ButtonGroup>
    </RenderInRtl>
  ));
