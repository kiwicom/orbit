// @flow
import KEY_CODE_MAP from "../../common/keyMaps";

const handleKeyDown = (
  ev: SyntheticKeyboardEvent<HTMLElement>,
  onClick?: (
    e?: SyntheticEvent<HTMLDivElement> | SyntheticKeyboardEvent<HTMLElement>,
  ) => void | Promise<any>,
  action?: () => void,
) => {
  if (ev.keyCode === KEY_CODE_MAP.ENTER) {
    if (onClick) {
      onClick();
    }

    if (action) {
      action();
    }
  } else if (ev.keyCode === KEY_CODE_MAP.SPACE) {
    ev.preventDefault();
    if (onClick) {
      onClick();
    }

    if (action) {
      action();
    }
  }
};

export default handleKeyDown;
