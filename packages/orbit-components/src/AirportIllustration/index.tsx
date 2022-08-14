import React from "react";

import { Props } from "./index.d";
import { SIZE_OPTIONS } from "../primitives/IllustrationPrimitive/consts";
import IllustrationPrimitive from "../primitives/IllustrationPrimitive";

const AirportIllustration = ({ size = SIZE_OPTIONS.MEDIUM, ...props }: Props): React.ReactNode => (
  <IllustrationPrimitive {...props} size={size} />
);

export default AirportIllustration;
