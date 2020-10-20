// @flow
import type { CreateRel } from "./createRel";

const createRel: CreateRel = ({ rel, href, external }) => {
  const relValues = rel ? rel.split(" ") : [];
  // add noopener and noreferrer whenever external
  if (external && href) {
    if (!relValues.includes("noopener")) {
      relValues.push("noopener");
    }
    if (!relValues.includes("noreferrer")) {
      relValues.push("noreferrer");
    }
  }
  return relValues.length > 0 ? relValues.join(" ") : undefined;
};

export default createRel;
