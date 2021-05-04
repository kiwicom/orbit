declare const UseClickOutside: (
  ref: { readonly current: HTMLElement | null | undefined },
  // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
  handler: (ev: React.SyntheticEvent<HTMLLinkElement>) => void,
  isOff?: boolean,
) => void;

export { UseClickOutside, UseClickOutside as default };
