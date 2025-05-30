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
      return openingElement.name.type === "JSXIdentifier";
    })
    .forEach(path => {
      const { attributes, name } = path.node.openingElement;

      if (!Array.isArray(attributes)) {
        // Handle malformed JSX
        return;
      }

      if (name.name === "Alert") {
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
      } else if (name.name === "Collapse") {
        const hasExpandButtonLabel = hasAttribute(attributes, "expandButtonLabel");
        if (!hasExpandButtonLabel) {
          attributes.push(
            j.jsxAttribute(
              j.jsxIdentifier("expandButtonLabel"),
              createIntlMessageContainer(j, "orbit.collapse_expand", "Expand"),
            ),
          );
        }
        const hasCollapseButtonLabel = hasAttribute(attributes, "collapseButtonLabel");
        if (!hasCollapseButtonLabel) {
          attributes.push(
            j.jsxAttribute(
              j.jsxIdentifier("collapseButtonLabel"),
              createIntlMessageContainer(j, "orbit.collapse_collapse", "Collapse"),
            ),
          );
        }
      } else if (name.name === "ButtonMobileStore") {
        const hasAlt = hasAttribute(attributes, "alt");

        if (!hasAlt) {
          const typeAttr = attributes.find(
            attr => attr.type === "JSXAttribute" && attr.name.name === "type",
          );
          const altText =
            typeAttr.value.value === "googlePlay"
              ? createIntlMessageContainer(
                  j,
                  "common.screenreader.google_play_button",
                  "Get it on Google Play",
                )
              : createIntlMessageContainer(
                  j,
                  "common.screenreader.app_store_button",
                  "Download on the App Store",
                );

          attributes.push(j.jsxAttribute(j.jsxIdentifier("alt"), altText));
        }
      }
    });

  return root.toSource();
}
