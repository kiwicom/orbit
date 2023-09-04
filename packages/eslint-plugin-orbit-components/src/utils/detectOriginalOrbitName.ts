import { AST_NODE_TYPES, TSESTree as t } from "@typescript-eslint/utils";

const detectOriginalOrbitName = (node: t.ImportDeclaration) => {
  const specifier = node.specifiers[0];
  // IF NAMED import
  if (
    specifier.type === AST_NODE_TYPES.ImportSpecifier &&
    specifier.imported.type === AST_NODE_TYPES.Identifier
  ) {
    return specifier.imported.name;
  }
  const originalImport = node.source.value.match(/@kiwicom\/orbit-components\/(?:lib|es)\/([^/]*)/);
  if (originalImport) return originalImport[1];
  return undefined;
};

export default detectOriginalOrbitName;
