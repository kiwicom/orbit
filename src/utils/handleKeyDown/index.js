// @flow
import KEY_CODE_MAP from "../../common/keyMaps";

import type { HandleKeyDown } from ".";

const handleKeyDown: HandleKeyDown = (onClick, action) => ev => {
  if (ev.keyCode === KEY_CODE_MAP.ENTER) {
    if (onClick) {
      onClick(ev);
    }

    if (action) {
      action();
    }
  } else if (ev.keyCode === KEY_CODE_MAP.SPACE) {
    ev.preventDefault();
    if (onClick) {
      onClick(ev);
    }

    if (action) {
      action();
    }
  }
};

export default handleKeyDown;
