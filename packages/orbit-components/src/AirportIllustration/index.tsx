"use client";

import React from "react";

import type { Props } from "./types";
import IllustrationPrimitive, { SIZE_OPTIONS } from "../primitives/IllustrationPrimitive";

const AirportIllustration = ({ size = SIZE_OPTIONS.MEDIUM, alt = "", ...props }: Props) => (
  <IllustrationPrimitive {...props} alt={alt} size={size} />
);

export default AirportIllustration;
