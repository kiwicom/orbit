import { Basis } from "../index.d";
import { Theme } from "../../defaultTheme";

const getBasis = (basis: Basis) => ({ theme }: { theme: Theme }): Basis | null => {
  if (typeof basis === "undefined") return null;
  if (typeof basis === "function") return basis(theme);

  return basis;
};

export default getBasis;
