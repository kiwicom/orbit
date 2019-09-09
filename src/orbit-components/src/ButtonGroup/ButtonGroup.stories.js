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
  .add(
    "With Buttons",
    () => {
      const connected = boolean("Connected", true);
      const dataTest = text("dataTest", "test");
      return (
        <ButtonGroup connected={connected} dataTest={dataTest}>
          <Button icon={<Icons.Airplane />}>Button</Button>
          <Button icon={<Icons.ChevronDown />} title="Show more" />
        </ButtonGroup>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "With ButtonLinks",
    () => {
      const connected = boolean("Connected", true);
      const dataTest = text("dataTest", "test");
      return (
        <ButtonGroup connected={connected} dataTest={dataTest}>
          <ButtonLink type="secondary" icon={<Icons.Airplane />}>
            Button
          </ButtonLink>
          <ButtonLink type="secondary" icon={<Icons.ChevronDown />} title="Show more" />
        </ButtonGroup>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "RTL",
    () => (
      <RenderInRtl>
        <ButtonGroup connected>
          <Button icon={<Icons.Airplane />}>Button</Button>
          <Button icon={<Icons.ChevronDown />} title="Show more" />
        </ButtonGroup>
      </RenderInRtl>
    ),
    {
      info: "This is a preview of this component in RTL setup.",
    },
  );
