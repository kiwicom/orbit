// @flow
import * as Common from "../../common/common";

declare const UseClickOutside: (
  ref: { current: HTMLElement | null | undefined },
  handler: (ev: React.SyntheticEvent<HTMLLinkElement>) => void,
) => void;

export { UseClickOutside, UseClickOutside as default };
