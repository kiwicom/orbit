export type Return<S> = [S, (arg0: S) => void, (arg0: S) => void, () => void];

export default function useStateWithTimeout<S>(defaultValue: S, timeout?: number): Return<S>;
