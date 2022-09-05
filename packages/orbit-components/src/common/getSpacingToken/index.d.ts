import defaultTheme from "../../defaultTheme";

import * as Common from "../common";
export interface Props extends Common.SpaceAfter {
  readonly theme: typeof defaultTheme;
}
