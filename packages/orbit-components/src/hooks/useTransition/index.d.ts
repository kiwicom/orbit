import React from "react";

declare function useTransition(options: {
  readonly show: boolean;
  readonly appear?: boolean;
}): {
  ref: React.MutableRefObject<HTMLElement | null>;
  mounted: boolean;
  state: "enter" | "leave";
  done: boolean;
};

export { useTransition, useTransition as default };
