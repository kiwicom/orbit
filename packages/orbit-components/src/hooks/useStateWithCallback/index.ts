import { useState, useCallback } from "react";

type Return<S> = [S, (arg0: S) => void];

const useStateWithCallback = <S>(
  defaultValue: S,
  callback?: (arg0: S) => void | Promise<any>,
): Return<S> => {
  const [state, setState] = useState(defaultValue);

  const setStateWithCallback = useCallback(
    value =>
      setState(prevValue => {
        if (value !== prevValue) {
          if (callback) {
            callback(value);
          }
        }
        return value;
      }),
    [callback],
  );
  return [state, setStateWithCallback];
};

export default useStateWithCallback;
