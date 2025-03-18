"use client";

import React from "react";

import type { Props } from "./types";
import IllustrationPrimitive, { SIZE_OPTIONS } from "../primitives/IllustrationPrimitive";

const AirportIllustration = ({
  size = SIZE_OPTIONS.MEDIUM,
  role = "presentation",
  ...props
}: Props) => <IllustrationPrimitive {...props} size={size} role={role} />;

export default AirportIllustration;
