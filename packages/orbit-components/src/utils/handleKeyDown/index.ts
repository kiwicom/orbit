import KEY_CODE_MAP from "../../common/keyMaps";
import { HandleKeyDown } from "./index.d";

const handleKeyDown: typeof HandleKeyDown = (onAction, action) => ev => {
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
