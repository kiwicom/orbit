"use client";

import * as React from "react";

import IllustrationPrimitive, { SIZE_OPTIONS } from "../primitives/IllustrationPrimitive";
import type { Props } from "./types";

const Illustration = ({ size = SIZE_OPTIONS.MEDIUM, role = "presentation", ...props }: Props) => (
  <IllustrationPrimitive {...props} size={size} role={role} />
);

export default Illustration;
