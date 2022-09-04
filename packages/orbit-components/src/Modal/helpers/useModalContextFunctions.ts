import { useContext, useEffect } from "react";

import { ModalContext } from "../ModalContext";

const useModalContextFunctions = (): void => {
  const { callContextFunctions } = useContext(ModalContext);
  useEffect(() => {
    if (callContextFunctions) callContextFunctions();
  }, [callContextFunctions]);
};

export default useModalContextFunctions;
