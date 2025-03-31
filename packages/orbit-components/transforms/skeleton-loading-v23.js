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
 * Transforms the given file to add loading labels to Skeleton components.
 *
 * @param {Object} file - The file object containing the source code.
 * @param {Object} api - The jscodeshift API object.
 */
export default function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  // Find all Skeleton components
  root
    .find(j.JSXElement)
    .filter(path => {
      const { openingElement } = path.node;
      return (
        openingElement.name.type === "JSXIdentifier" && openingElement.name.name === "Skeleton"
      );
    })
    .forEach(path => {
      const { attributes } = path.node.openingElement;

      if (!Array.isArray(attributes)) {
        // Handle malformed JSX
        return;
      }

      // Check if title prop already exists
      const hasTitle = attributes.some(
        attr => attr.type === "JSXAttribute" && attr.name.name === "title",
      );

      // Add title prop with intl.formatMessage if it doesn't exist
      if (!hasTitle) {
        attributes.push(
          j.jsxAttribute(
            j.jsxIdentifier("title"),
            createIntlMessageContainer(j, "common.loading", "Loading"),
          ),
        );
      }
    });

  return root.toSource();
}
