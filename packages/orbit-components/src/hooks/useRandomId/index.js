// @flow
import { useUIDSeed, useUID } from "react-uid";

import type { useRandomIdSeedType, useRandomIdType } from "./index.js.flow";

export const useRandomIdSeed: useRandomIdSeedType = () => {
  return useUIDSeed();
};

export const useRandomId: useRandomIdType = () => {
  return useUID();
};
