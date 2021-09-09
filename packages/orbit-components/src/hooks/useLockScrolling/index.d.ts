import type { MutableRefObject } from "react";

export default function useLockScrolling(
  // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
  ref: MutableRefObject<HTMLElement | null>,
  lock?: boolean,
  dependencies?: unknown[],
): void;
