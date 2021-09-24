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

declare const KEY_CODE: Record<Key, number>;

export default KEY_CODE;
