import { useState, useCallback } from "react";

import UseStateWithCallback from "./index.d";

const useStateWithCallback: typeof UseStateWithCallback = (defaultValue, callback) => {
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
