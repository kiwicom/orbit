import { useUIDSeed, useUID } from "react-uid";

import UseRandomId, { useRandomIdSeed as UseRandomIdSeed } from "./index.d";

export const useRandomIdSeed: typeof UseRandomIdSeed = () => {
  return useUIDSeed();
};

const useRandomId: typeof UseRandomId = () => {
  return useUID();
};

export default useRandomId;
