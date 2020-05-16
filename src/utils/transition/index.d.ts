// @flow
import { ThemeProps } from "../../defaultTheme";

export declare const Transition: (
  properties: string[],
  duration: "slow" | "normal" | "fast",
  timingFunction: string,
) => (theme: ThemeProps) => string | null;

export default Transition;
