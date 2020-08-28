// @flow
import type { Transition } from "./index";

const DURATIONS = {
  SLOW: "slow",
  NORMAL: "normal",
  FAST: "fast",
};

const transition: Transition = (properties, duration, timingFunction) => ({ theme }) => {
  if (!theme.transitions) return null;
  const tokens = {
    [DURATIONS.SLOW]: theme.orbit.durationSlow,
    [DURATIONS.NORMAL]: theme.orbit.durationNormal,
    [DURATIONS.FAST]: theme.orbit.durationFast,
  };
  return properties
    .map(property => `${property} ${tokens[duration] || duration} ${timingFunction}`)
    .join(",");
};

export default transition;
