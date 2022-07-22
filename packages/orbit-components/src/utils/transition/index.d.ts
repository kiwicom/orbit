import { Theme } from "../../defaultTheme";

export type TransitionDuration = "slow" | "normal" | "fast";

export declare const Transition: (
  properties: string[],
  duration: TransitionDuration,
  timingFunction: string,
) => (theme: Theme) => string | null;

export default Transition;
