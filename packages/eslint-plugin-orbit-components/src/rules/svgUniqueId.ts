import { Rule } from "eslint";
import { types as t } from "@babel/core";

export default {
  create: (context: Rule.RuleContext) => {
    const JSXElements: t.JSXElement[] = [];
    const IDS: string[] = [];

    const SVGS = [
      "altGlyph",
      "altGlyphDef",
      "altGlyphItem",
      "animate",
      "animateColor",
      "animateMotion",
      "animateMotion",
      "animateTransform",
      "circle",
      "clipPath",
      "cursor",
      "defs",
      "desc",
      "ellipse",
      "g",
      "glyph",
      "glyphRef",
      "line",
      "linearGradient",
      "marker",
      "marker",
      "mask",
      "mpath",
      "path",
      "pattern",
      "pattern",
      "polygon",
      "polyline",
      "radialGradient",
      "rect",
      "svg",
      "symbol",
      "text",
      "textPath",
      "title",
      "tref",
      "tspan",
      "use",
      "view",
    ];

    return {
      JSXElement(node: t.JSXElement) {
        if (t.isJSXOpeningElement(node.openingElement)) {
          if (t.isJSXIdentifier(node.openingElement.name)) {
            if (SVGS.includes(node.openingElement.name.name)) {
              JSXElements.push(node);
            }
          }
        }
      },

      JSXAttribute(node: t.JSXAttribute) {
        if (t.isLiteral(node.value)) {
          IDS.push(node.value.value);
        }
      },

      "Program:exit": () => {
        JSXElements.forEach(n => {
          if (!n.openingElement) return;
          n.openingElement.attributes.forEach(attr => {
            if (t.isJSXAttribute(attr) && t.isLiteral(attr.value)) {
              const { value } = attr.value;
              const count = IDS.filter(id => id === value).length;
              if (count >= 2) {
                context.report({
                  // @ts-expect-error node
                  node: n,
                  message: `${attr.name.name}="${value}", should have unique id`,
                });
              }
            }
          });
        });
      },
    };
  },
};
