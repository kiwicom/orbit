import * as Common from "../types";
import defaultTheme from "../../defaultTheme";

export interface Props extends Common.SpaceAfter {
  readonly theme: typeof defaultTheme;
}
