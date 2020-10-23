import * as Common from "../../common/common";

type Event = Common.Event<React.SyntheticEvent<HTMLDivElement> | React.KeyboardEvent<HTMLElement>>;

declare const HandleKeyDown: (
  onClick?: Event,
  action?: () => void,
) => (ev: React.KeyboardEvent<HTMLElement>) => void;

export { HandleKeyDown, HandleKeyDown as default };
