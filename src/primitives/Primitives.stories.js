// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs";

import * as Icons from "../icons";
import { SIZE_OPTIONS } from "./IllustrationPrimitive/consts";
import SPACINGS_AFTER from "../common/getSpacingToken/consts";
import BadgePrimitive from "./BadgePrimitive";
import Illustration from "./IllustrationPrimitive";

const getIcons = defaultIcon => select("Icon", [null, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

storiesOf("Primitives", module)
  .add(
    "BadgePrimitive",
    () => {
      const Icon = getIcon(getIcons("Airplane"));
      const background = text("Background", "linear-gradient(#fd1d1d, #ffae28)");
      const foregroundColor = text("ForegroundColor", "#fff");

      return (
        <BadgePrimitive
          background={background}
          foregroundColor={foregroundColor}
          icon={Icon && <Icon />}
        >
          BadgePrimitive
        </BadgePrimitive>
      );
    },
    {
      info: "This is a preview of this component in RTL setup.",
    },
  )
  .add(
    "IllustrationPrimitive",
    () => {
      const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.MEDIUM);
      const name = "Accommodation";
      const dataTest = text("dataTest", "test");
      const spaceAfter = select("spaceAfter", [null, ...Object.values(SPACINGS_AFTER)]);
      return <Illustration size={size} name={name} dataTest={dataTest} spaceAfter={spaceAfter} />;
    },
    {
      info: "Explore our new set of illustrations for Kiwi.com.",
    },
  );
