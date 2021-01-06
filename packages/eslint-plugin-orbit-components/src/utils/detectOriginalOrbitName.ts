import { types as t } from "@babel/core";

const detectOriginalOrbitName = (node: t.ImportDeclaration) => {
  const specifier = node.specifiers[0];
  // IF NAMED import
  if (t.isImportSpecifier(specifier) && t.isIdentifier(specifier.imported)) {
    return specifier.imported.name;
  }
  const originalImport = node.source.value.match(/@kiwicom\/orbit-components\/(?:lib|es)\/([^/]*)/);
  if (originalImport) return originalImport[1];
};

export default detectOriginalOrbitName;
