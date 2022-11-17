import type * as Common from "../types";
import type defaultTheme from "../../defaultTheme";

export interface Props extends Common.SpaceAfter {
  readonly theme: typeof defaultTheme;
}
