import { ThemeType } from "../../defaultTheme";

export declare const Transition: (
  properties: string[],
  duration: "slow" | "normal" | "fast",
  timingFunction: string,
) => (theme: ThemeType) => string | null;

export default Transition;
