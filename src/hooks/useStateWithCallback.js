// @flow
import { useState, useCallback } from "react";

import type { Return } from "./useStateWithCallback";

export default function useStateWithCallback<S>(
  defaultValue: S,
  callback: S => void | Promise<any>,
): Return<S> {
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
}
