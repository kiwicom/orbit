import type { Basis } from "../types";
import type { Theme } from "../../defaultTheme";

const getBasis = (basis: Basis) => ({ theme }: { theme: Theme }): Basis => {
  if (typeof basis === "undefined") return "";
  if (typeof basis === "function") return basis(theme);

  return basis;
};

export default getBasis;
