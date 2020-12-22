// @flow
const pauseEvent = (
  event:
    | SyntheticKeyboardEvent<HTMLDivElement>
    | SyntheticMouseEvent<HTMLDivElement>
    | SyntheticTouchEvent<HTMLDivElement>,
) => {
  if (typeof event.stopPropagation === "function") {
    event.stopPropagation();
  }
  if (
    typeof event.preventDefault === "function" &&
    (typeof event.cancelable !== "boolean" || event.cancelable)
  ) {
    event.preventDefault();
  }
};

export default pauseEvent;
