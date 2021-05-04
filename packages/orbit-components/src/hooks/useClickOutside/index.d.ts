declare const UseClickOutside: (
  ref: { readonly current: HTMLElement | null | undefined },
  // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
  handler: (ev: React.SyntheticEvent<HTMLLinkElement>) => void,
) => void;

export { UseClickOutside, UseClickOutside as default };
