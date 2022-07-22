type Key =
  | "TAB"
  | "ENTER"
  | "SPACE"
  | "ARROW_UP"
  | "ARROW_DOWN"
  | "ARROW_LEFT"
  | "ARROW_RIGHT"
  | "HOME"
  | "END"
  | "ESC";

const KEY_CODE: Record<Key, number> = {
  TAB: 9,
  ENTER: 13,
  SPACE: 32,
  ARROW_UP: 38,
  ARROW_DOWN: 40,
  ARROW_LEFT: 37,
  ARROW_RIGHT: 39,
  HOME: 36,
  END: 35,
  ESC: 27,
};

export default KEY_CODE;
