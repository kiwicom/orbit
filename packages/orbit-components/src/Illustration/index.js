// @flow
import * as React from "react";

import { SIZE_OPTIONS } from "../primitives/IllustrationPrimitive/consts";
import IllustrationPrimitive from "../primitives/IllustrationPrimitive";

import type { Props } from "./index";

const Illustration = ({ size = SIZE_OPTIONS.MEDIUM, ...props }: Props) => (
  <IllustrationPrimitive {...props} size={size} />
);

export default Illustration;
