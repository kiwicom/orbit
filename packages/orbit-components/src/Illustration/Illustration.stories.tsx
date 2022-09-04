import * as React from "react";
import { select, text } from "@storybook/addon-knobs";

import { NAMES } from "./consts";
import { SIZE_OPTIONS } from "../primitives/IllustrationPrimitive/consts";
import SPACINGS_AFTER from "../common/getSpacingToken/consts";
import IllustrationPrimitiveList from "../primitives/IllustrationPrimitive/IllustrationPrimitiveList";
import { Name } from "./index.d";

import Illustration from ".";

export default {
  title: "Illustration",
};

export const Playground = () => {
  const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.MEDIUM);
  const name = select("Name", Object.values(NAMES), "Accommodation") as Name;
  const dataTest = text("dataTest", "test");
  const alt = text("alt", "");
  const spaceAfter = select("spaceAfter", Object.values(SPACINGS_AFTER), SPACINGS_AFTER.NORMAL);
  return (
    <Illustration size={size} name={name} dataTest={dataTest} spaceAfter={spaceAfter} alt={alt} />
  );
};

Playground.story = {
  parameters: {
    info: "Explore our new set of illustrations for Kiwi.com.",
  },
};

export const ListOfAllIllustrations = () => {
  return <IllustrationPrimitiveList nameOfComponent="Illustration" images={NAMES} />;
};

ListOfAllIllustrations.story = {
  name: "List of all Illustrations",

  parameters: {
    info: "Explore our new set of illustrations for Kiwi.com.",
  },
};
