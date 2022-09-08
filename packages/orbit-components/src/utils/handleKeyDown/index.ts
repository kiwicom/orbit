import * as Common from "../../common/types";
import KEY_CODE_MAP from "../../common/keyMaps";

type Event<T> = Common.Event<React.SyntheticEvent<T>> | React.KeyboardEventHandler<T>;

type HandleKeyDown = <K>(onClick?: Event<K>, action?: () => void) => React.KeyboardEventHandler<K>;

const handleKeyDown: HandleKeyDown = (onAction, action) => ev => {
  if (ev.keyCode === KEY_CODE_MAP.ENTER) {
    if (onAction) {
      onAction(ev);
    }

    if (action) {
      action();
    }
  } else if (ev.keyCode === KEY_CODE_MAP.SPACE) {
    ev.preventDefault();
    if (onAction) {
      onAction(ev);
    }

    if (action) {
      action();
    }
  }
};

export default handleKeyDown;
