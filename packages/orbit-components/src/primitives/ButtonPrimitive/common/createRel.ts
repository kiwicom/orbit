const createRel = ({
  rel,
  href,
  external,
}: {
  rel?: string;
  href?: string;
  external?: boolean;
}): string | undefined => {
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
