// @flow
import { useUIDSeed } from "react-uid";

import type { useRandomID } from "./index.js.flow";

const useRandomId: useRandomID = () => {
  return useUIDSeed();
};

export default useRandomId;
