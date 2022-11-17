import React from "react";

import type { Props } from "./types";
import { SIZE_OPTIONS } from "../primitives/IllustrationPrimitive/consts";
import IllustrationPrimitive from "../primitives/IllustrationPrimitive";

const AirportIllustration = ({ size = SIZE_OPTIONS.MEDIUM, ...props }: Props) => (
  <IllustrationPrimitive {...props} size={size} />
);

export default AirportIllustration;
export { Props };
