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

/**
 * Transforms the given file to add aria labels to HorizontalScroll components.
 *
 * @param {Object} file - The file object containing the source code.
 * @param {Object} api - The jscodeshift API object.
 */
export default function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  // Find all HorizontalScroll components
  root
    .find(j.JSXElement)
    .filter(path => {
      const { openingElement } = path.node;
      return (
        openingElement.name.type === "JSXIdentifier" &&
        openingElement.name.name === "HorizontalScroll"
      );
    })
    .forEach(path => {
      const { attributes } = path.node.openingElement;

      // Check if arrows prop exists and is true
      const hasArrows = attributes.some(attr => {
        if (attr.type === "JSXAttribute" && attr.name.name === "arrows") {
          // Check if arrows is explicitly set to true
          return (
            attr.value === null || // <HorizontalScroll arrows />
            (attr.value.type === "JSXExpressionContainer" && attr.value.expression.value === true) // <HorizontalScroll arrows={true} />
          );
        }
        return false;
      });

      if (hasArrows) {
        // Check if aria labels already exist
        const hasLeftLabel = attributes.some(
          attr => attr.type === "JSXAttribute" && attr.name.name === "arrowLeftAriaLabel",
        );
        const hasRightLabel = attributes.some(
          attr => attr.type === "JSXAttribute" && attr.name.name === "arrowRightAriaLabel",
        );

        // Add missing aria labels with FormattedMessage
        if (!hasLeftLabel) {
          attributes.push(
            j.jsxAttribute(
              j.jsxIdentifier("arrowLeftAriaLabel"),
              createIntlMessageContainer(j, "common.screenreader.arrow.scroll_left", "Scroll left"),
            ),
          );
        }
        if (!hasRightLabel) {
          attributes.push(
            j.jsxAttribute(
              j.jsxIdentifier("arrowRightAriaLabel"),
              createIntlMessageContainer(
                j,
                "common.screenreader.arrow.scroll_right",
                "Scroll right",
              ),
            ),
          );
        }
      }
    });

  return root.toSource();
}
