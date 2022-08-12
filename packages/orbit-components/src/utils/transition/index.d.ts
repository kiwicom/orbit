import { InterpolationFunction, ThemeProps } from "styled-components";

export type TransitionDuration = "slow" | "normal" | "fast";

export declare const Transition: (
  properties: string[],
  duration: TransitionDuration,
  timingFunction: string,
) => InterpolationFunction<ThemeProps<any>>;

export default Transition;
