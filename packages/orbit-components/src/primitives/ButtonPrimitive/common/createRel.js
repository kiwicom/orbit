// @flow
import type { CreateRel } from "./createRel";

const createRel: CreateRel = ({ rel, href, external }) => {
  const relValues = rel ? rel.split(" ") : [];
  // add noopener  whenever external
  if (external && href) {
    if (!relValues.includes("noopener")) {
      relValues.push("noopener");
    }
  }
  return relValues.length > 0 ? relValues.join(" ") : undefined;
};

export default createRel;
