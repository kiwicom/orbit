// @flow
import * as Common from "../../common/common.d.ts";

type Event = Common.Event<
  React.SyntheticEvent<HTMLDivElement> | React.SyntheticKeyboardEvent<HTMLElement>
>;

const HandleKeyDown: (
  onClick?: Event,
  action?: () => void,
) => (ev: React.SyntheticKeyboardEvent<HTMLElement>) => void;

export { HandleKeyDown, HandleKeyDown as default };
