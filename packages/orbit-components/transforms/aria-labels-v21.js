/**
 * Creates an intl.formatMessage expression container for aria labels
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

function isClosableAttribute(attr) {
  if (attr.type !== "JSXAttribute" || attr.name.name !== "closable") return false;
  return (
    attr.value === null ||
    (attr.value.type === "JSXExpressionContainer" && attr.value.expression.value !== false)
  );
}

function hasAttribute(attributes, name) {
  return attributes.some(attr => attr.type === "JSXAttribute" && attr.name.name === name);
}

/**
 * Transforms the given file to add aria labels to Alert components.
 *
 * @param {Object} file - The file object containing the source code.
 * @param {Object} api - The jscodeshift API object.
 */
export default function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  root
    .find(j.JSXElement)
    .filter(path => {
      const { openingElement } = path.node;
      // Combine conditions for more efficient filtering
      return openingElement.name.type === "JSXIdentifier" && openingElement.name.name === "Alert";
    })
    .forEach(path => {
      const { attributes } = path.node.openingElement;

      if (!Array.isArray(attributes)) {
        // Handle malformed JSX
        return;
      }

      const hasClosable = attributes.some(isClosableAttribute);
      const hasLabelClose = hasAttribute(attributes, "labelClose");

      if (hasClosable && !hasLabelClose) {
        attributes.push(
          j.jsxAttribute(
            j.jsxIdentifier("labelClose"),
            createIntlMessageContainer(j, "orbit.button_close", "Close"),
          ),
        );
      }
    });

  return root.toSource();
}
