// @flow
const detectOriginalOrbitName = node => {
  const specifier = node.specifiers[0];
  // IF NAMED import
  if (specifier.imported) {
    return specifier.imported.name;
  }
  const originalImport = node.source.value.match(/@kiwicom\/orbit-components\/(?:lib|es)\/([^/]*)/);
  return originalImport[1];
};

export default detectOriginalOrbitName;
