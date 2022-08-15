declare const HandleKeyDown: (
  onAction?: React.MouseEventHandler<HTMLElement> | React.KeyboardEventHandler<HTMLElement>,
  action?: () => void,
) => React.KeyboardEventHandler<HTMLElement>;

export { HandleKeyDown, HandleKeyDown as default };
