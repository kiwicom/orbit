import type { Globals } from "../../../common/types";
import type { TYPE_OPTIONS } from "./consts";

export type Type = `${TYPE_OPTIONS}`;

export interface Props extends Globals {
  children: React.ReactNode;
  type?: Type;
  active?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
