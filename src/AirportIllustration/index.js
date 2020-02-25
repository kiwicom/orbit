// @flow
import * as React from "react";

import { SIZE_OPTIONS } from "../primitives/IllustrationPrimitive/consts";
import IllustrationPrimitive from "../primitives/IllustrationPrimitive";

import type { Props } from "./index";

const AirportIllustration = ({ name, size = SIZE_OPTIONS.MEDIUM, dataTest, spaceAfter }: Props) => (
  <IllustrationPrimitive name={name} size={size} dataTest={dataTest} spaceAfter={spaceAfter} />
);

export default AirportIllustration;
