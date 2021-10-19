import { ThemeProps } from "../../defaultTheme";

export type TransitionDuration = "slow" | "normal" | "fast";

export declare const transition: (
  properties: string[],
  duration: TransitionDuration,
  timingFunction: string,
) => (options: ThemeProps) => string | null;

export default transition;
