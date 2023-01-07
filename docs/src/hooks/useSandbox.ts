import React from "react";

import { load, save } from "../utils/storage";

const useSandbox = (exampleId: string, initialCode: string) => {
  const [code, setCode] = React.useState(() => {
    try {
      const storedCode = load(exampleId);
      return storedCode || initialCode;
    } catch (err) {
      console.error(err);
      return initialCode;
    }
  });

  const [origin, setOrigin] = React.useState("");

  React.useEffect(() => {
    setOrigin(window.location.origin);

    window.addEventListener("storage", e => {
      if (e.key === exampleId && e.newValue) {
        setCode(e.newValue);
      }
    });
  }, [exampleId]);

  const updateLocalStorage = (newCode: string) => {
    try {
      save(exampleId, newCode);
      setCode(newCode);
    } catch (err) {
      console.error(err);
    }
  };

  const restoreLocalStorage = () => {
    try {
      window.localStorage.removeItem(exampleId);
      setCode(initialCode);
    } catch (err) {
      console.error(err);
    }
  };

  return { code, origin, updateLocalStorage, restoreLocalStorage };
};

export default useSandbox;
