declare const HandleKeyDown: (
  onClick?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>,
  action?: () => void,
) => (ev: React.KeyboardEvent<HTMLElement>) => void;

export { HandleKeyDown, HandleKeyDown as default };
