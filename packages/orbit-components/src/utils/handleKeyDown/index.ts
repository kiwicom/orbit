type HandleKeyDown = <K>(
  onAction?: React.KeyboardEventHandler<K>,
  action?: (ev: any) => void,
) => (ev: React.KeyboardEvent<K>) => void;

const handleKeyDown: HandleKeyDown = (onAction, action) => ev => {
  if (ev.code === "Enter") {
    if (onAction) {
      onAction(ev);
    }

    if (action) {
      action(ev);
    }
  } else if (ev.code === "Space") {
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
