export type Return<S> = [S, (arg0: S) => void];

export default function useStateWithCallback<S>(
  defaultValue: S,
  callback?: (arg0: S) => void | Promise<any>,
): Return<S>;
