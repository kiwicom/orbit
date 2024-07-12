import * as React from "react";

import { NAMES } from "./consts.mts";
import { SIZE_OPTIONS } from "../primitives/IllustrationPrimitive";
import IllustrationPrimitiveList from "../primitives/IllustrationPrimitive/IllustrationPrimitiveList";
import type { Name } from "./types";

import Illustration from ".";

export default {
  title: "Illustration",
};

export const Playground = ({ size, name, dataTest, alt }) => {
  return (
    <Illustration size={size} name={name} dataTest={dataTest} margin={{ bottom: 12 }} alt={alt} />
  );
};

Playground.story = {
  parameters: {
    info: "Explore our new set of illustrations for Kiwi.com.",
  },
};

Playground.args = {
  size: SIZE_OPTIONS.MEDIUM,
  name: "Accommodation" as Name,
  dataTest: "test",
  alt: "",
};

Playground.argTypes = {
  size: {
    options: Object.values(SIZE_OPTIONS),
    control: {
      type: "select",
    },
  },
  name: {
    options: NAMES,
    control: {
      type: "select",
    },
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
