// @flow
import { useUIDSeed, useUID } from "react-uid";

import type { useRandomIdSeedType, useRandomIdType } from ".";

export const useRandomIdSeed: useRandomIdSeedType = () => {
  return useUIDSeed();
};

const useRandomId: useRandomIdType = () => {
  return useUID();
};

export default useRandomId;
