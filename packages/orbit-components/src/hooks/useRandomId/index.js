// @flow
import { useUIDSeed } from "react-uid";

import type { useRandomID } from "./index.js.flow";

const useRandomId: useRandomID = (name: string) => {
  return useUIDSeed()(name);
};

export default useRandomId;
