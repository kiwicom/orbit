/**
 * Transforms for Orbit v26 migration.
 *
 * Major changes in v26:
 * 1. Loading component now requires one of these props: text, title, or ariaHidden
 * 2. Card and Accordion components with loading prop now require loadingTitle or loadingHidden
 *
 * This codemod handles:
 * - Adding title prop with default loading message to Loading components that don't have any accessibility props
 * - Converting aria-hidden to ariaHidden
 * - Adding loadingTitle prop to Card and Accordion components that have loading prop but no loading accessibility props
 */

/**
 * Creates an intl.formatMessage expression container for loading labels
 *
 * @param {Object} j - The jscodeshift API object.
 * @param {string} messageId - The ID of the message to be formatted.
 * @param {string} defaultMessage - The default message to be displayed if the message ID is not found.
 */
function createIntlMessageContainer(j, messageId, defaultMessage) {
  return j.jsxExpressionContainer(
    j.callExpression(j.memberExpression(j.identifier("intl"), j.identifier("formatMessage")), [
      j.objectExpression([
        j.objectProperty(j.identifier("id"), j.literal(messageId)),
        j.objectProperty(j.identifier("defaultMessage"), j.literal(defaultMessage)),
      ]),
    ]),
  );
}

/**
 * Checks if a component has any of the accessibility props
 */
function hasAccessibilityProps(attributes) {
  return attributes.some(attr => {
    if (attr.type !== "JSXAttribute") return false;
    return ["text", "title", "ariaHidden", "aria-hidden"].includes(attr.name.name);
  });
}

/**
 * Handles transformations for Loading components
 * - Adds title prop if no accessibility props exist
 * - Converts aria-hidden to ariaHidden
 *
 * @param {Object} j - The jscodeshift API object
 * @param {Object} path - The current JSX element path
 */
function transformLoadingComponent(j, path) {
  const { attributes } = path.node.openingElement;

  if (!Array.isArray(attributes)) {
    // Handle malformed JSX
    return;
  }

  // Convert aria-hidden to ariaHidden if it exists
  attributes.forEach(attr => {
    if (attr.type === "JSXAttribute" && attr.name.name === "aria-hidden") {
      // eslint-disable-next-line no-param-reassign
      attr.name.name = "ariaHidden";
    }
  });

  // If component already has any accessibility props, we're done
  if (hasAccessibilityProps(attributes)) {
    return;
  }

  // Add title prop with default loading message
  attributes.push(
    j.jsxAttribute(
      j.jsxIdentifier("title"),
      createIntlMessageContainer(j, "common.loading", "Loading"),
    ),
  );
}

/**
 * Checks if a component has a loading prop
 */
function hasLoadingProp(attributes) {
  return attributes.some(attr => {
    if (attr.type !== "JSXAttribute") return false;
    return attr.name.name === "loading";
  });
}

/**
 * Checks if a component has loading accessibility props
 */
function hasLoadingAccessibilityProps(attributes) {
  return attributes.some(attr => {
    if (attr.type !== "JSXAttribute") return false;
    return ["loadingTitle", "loadingHidden"].includes(attr.name.name);
  });
}

/**
 * Handles transformations for Card and Accordion components
 * - Adds loadingTitle prop if loading prop exists but no loading accessibility props exist
 *
 * @param {Object} j - The jscodeshift API object
 * @param {Object} path - The current JSX element path
 */
function transformCardOrAccordionComponent(j, path) {
  const { attributes } = path.node.openingElement;

  if (!Array.isArray(attributes)) {
    // Handle malformed JSX
    return;
  }

  // If component doesn't have loading prop, nothing to do
  if (!hasLoadingProp(attributes)) {
    return;
  }

  // If component already has loading accessibility props, we're done
  if (hasLoadingAccessibilityProps(attributes)) {
    return;
  }

  // Add loadingTitle prop with default loading message
  attributes.push(
    j.jsxAttribute(
      j.jsxIdentifier("loadingTitle"),
      createIntlMessageContainer(j, "common.loading", "Loading"),
    ),
  );
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
      return openingElement.name.type === "JSXIdentifier";
    })
    .forEach(path => {
      const { name } = path.node.openingElement;

      if (name.name === "Loading") {
        transformLoadingComponent(j, path);
      } else if (name.name === "Card" || name.name === "Accordion") {
        transformCardOrAccordionComponent(j, path);
      }
    });

  return root.toSource();
}
