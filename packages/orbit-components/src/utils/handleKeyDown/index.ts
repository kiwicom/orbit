import KEY_CODE_MAP from "../../common/keyMaps";

type HandleKeyDown = <K>(
  onAction?: React.KeyboardEventHandler<K>,
  action?: (ev: any) => void,
) => (ev: React.KeyboardEvent<K>) => void;

const handleKeyDown: HandleKeyDown = (onAction, action) => ev => {
  if (ev.keyCode === KEY_CODE_MAP.ENTER) {
    if (onAction) {
      onAction(ev);
    }

    if (action) {
      action(ev);
    }
  } else if (ev.keyCode === KEY_CODE_MAP.SPACE) {
    ev.preventDefault();
    if (onAction) {
      onAction(ev);
    }

    if (action) {
      action(ev);
    }
  }
};

export default handleKeyDown;
