import { useUIDSeed, useUID } from "react-uid";

type UseRandomIdSeed = () => (id: string) => string;
type UseRandomId = () => string;

export const useRandomIdSeed: UseRandomIdSeed = () => {
  return useUIDSeed();
};

const useRandomId: UseRandomId = () => {
  return useUID();
};

export default useRandomId;
