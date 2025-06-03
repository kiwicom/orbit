import type React from "react";

import type { Globals } from "../../../common/types";
import type { TYPE_OPTIONS } from "./consts";

export type Type = `${TYPE_OPTIONS}`;

export interface Props extends Globals<HTMLButtonElement> {
  children: React.ReactNode;
  type?: Type;
  active?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
