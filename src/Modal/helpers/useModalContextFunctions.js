// @flow
import { useContext, useEffect } from "react";

import { ModalContext } from "../ModalContext";
import type { UseModalContextFunctions } from "./useModalContextFunctions";

const useModalContextFunctions: UseModalContextFunctions = () => {
  const { callContextFunctions } = useContext(ModalContext);
  useEffect(() => {
    if (callContextFunctions) callContextFunctions();
  }, [callContextFunctions]);
};

export default useModalContextFunctions;
