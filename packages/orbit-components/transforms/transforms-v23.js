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
 * Transforms the given file to replace ariaLabelledBy to ariaLabelledby,
 * add loading labels to Skeleton components, and add remove labels to InputFile and InputSelect components.
 *
 * @param {Object} file - The file object containing the source code.
 * @param {Object} api - The jscodeshift API object.
 */
export default function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  // Find all relevant JSX elements in a single pass
  root
    .find(j.JSXElement)
    .filter(path => {
      const { openingElement } = path.node;
      // Combine conditions for more efficient filtering
      return openingElement.name.type === "JSXIdentifier";
    })
    .forEach(path => {
      const { attributes, name } = path.node.openingElement;

      if (!Array.isArray(attributes)) {
        // Handle malformed JSX
        return;
      }

      // Handle Stepper and StepperStateless components
      if (name.name === "Stepper" || name.name === "StepperStateless") {
        attributes.forEach(attr => {
          if (attr.type === "JSXAttribute" && attr.name.name === "ariaLabelledBy") {
            // eslint-disable-next-line no-param-reassign
            attr.name.name = "ariaLabelledby";
          }
        });
      }

      // Handle Skeleton components
      else if (name.name === "Skeleton") {
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
      }

      // Handle InputFile components
      else if (name.name === "InputFile") {
        // Add labelRemove prop with intl.formatMessage
        attributes.push(
          j.jsxAttribute(
            j.jsxIdentifier("labelRemove"),
            createIntlMessageContainer(j, "common.screenreader.remove_file.button", "Remove file"),
          ),
        );
      }

      // Handle InputSelect components
      else if (name.name === "InputSelect") {
        // Add labelClear prop with intl.formatMessage
        attributes.push(
          j.jsxAttribute(
            j.jsxIdentifier("labelClear"),
            createIntlMessageContainer(j, "common.screenreader.clear_value.button", "Clear value"),
          ),
        );
      }
    });

  return root.toSource();
}
