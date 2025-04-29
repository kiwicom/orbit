/**
 * Transforms for Orbit v24 migration.
 *
 * Major changes in v24:
 * 1. React 18.3+ is now required (dropped support for React 17)
 * 2. Removed useId prop from OrbitProvider (leverages React 18's built-in useId hook)
 *
 * This codemod handles:
 * - Removing the useId prop from OrbitProvider components
 *
 * Usage:
 * ```
 * npx jscodeshift -t https://raw.githubusercontent.com/kiwicom/orbit/master/packages/orbit-components/transforms/transforms-v24.js --parser=tsx --extensions=ts,tsx <pathToYourCode>
 * ```
 *
 * Remember to run prettier after applying this codemod.
 *
 * @param {Object} file - The file object containing the source code.
 * @param {Object} api - The jscodeshift API object.
 * @returns {string} The transformed source code.
 */

/**
 * Handles transformations for OrbitProvider components
 * - Removes the useId prop as it's no longer needed with React 18.3+
 *
 * @param {Object} j - The jscodeshift API object
 * @param {Object} path - The current JSX element path
 */
function transformOrbitProvider(j, path) {
  const { attributes } = path.node.openingElement;

  // Find and remove the useId attribute if it exists
  const useIdAttrIndex = attributes.findIndex(
    attr => attr.type === "JSXAttribute" && attr.name.name === "useId",
  );

  if (useIdAttrIndex !== -1) {
    attributes.splice(useIdAttrIndex, 1);
  }
}

/**
 * Main transformer function
 */
export default function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  // Process all JSX elements in a single pass for better performance
  root
    .find(j.JSXElement)
    .filter(path => {
      const { openingElement } = path.node;
      // Only process JSX elements with identifiers (not fragments)
      return openingElement.name.type === "JSXIdentifier";
    })
    .forEach(path => {
      const { attributes, name } = path.node.openingElement;

      if (!Array.isArray(attributes)) {
        // Handle malformed JSX
        return;
      }

      // Apply the appropriate transformation based on component type
      switch (name.name) {
        case "OrbitProvider":
          transformOrbitProvider(j, path);
          break;
        // Add cases for other components as needed
        // case "OtherComponent":
        //   transformOtherComponent(j, path);
        //   break;
        default:
          // No transformation needed
          break;
      }
    });

  return root.toSource();
}
