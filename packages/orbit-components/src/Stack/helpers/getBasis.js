// @flow
import type { GetBasis } from "./getBasis";

const getBasis: GetBasis = basis => ({ theme }) => {
  if (typeof basis === "undefined") {
    return null;
  }
  if (typeof basis === "function") {
    return basis(theme);
  }
  return basis;
};

export default getBasis;
