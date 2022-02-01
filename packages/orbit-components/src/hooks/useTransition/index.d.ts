import React from "react";

export declare function useTransition(options: {
  readonly show: boolean;
  readonly appear?: boolean;
}): {
  ref: React.MutableRefObject<HTMLElement | null>;
  mounted: boolean;
  enter: boolean;
  done: boolean;
};
