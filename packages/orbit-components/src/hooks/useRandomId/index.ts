import { useRandomId as useRandomIdContext } from "../../OrbitProvider/RandomId/Provider";

type UseRandomIdSeed = () => (id: string) => string;
type UseRandomId = () => string;

export const useRandomId: UseRandomId = () => {
  const useId = useRandomIdContext();
  return useId();
};

export const useRandomIdSeed: UseRandomIdSeed = () => {
  const useId = useRandomIdContext();
  const prefix = useId();
  return (seed: string) => `${prefix}-${seed}`;
};

export default useRandomId;
