// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import mediaQueries from "../utils/mediaQuery";
import defaultTheme from "../defaultTheme";
import * as rtl from "../utils/rtl";

const domElements = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",

  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "marker",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan",
];
const defaultBlockList = ["css", "rtl", "theme", ...Object.keys(mediaQueries)];

const filterProps = (props, blockList = []) => {
  const componentBlockList = [...blockList, ...defaultBlockList];
  return Object.assign(
    {},
    ...Object.keys(props).map(v => (componentBlockList.indexOf(v) !== -1 ? {} : { [v]: props[v] })),
  );
};

const createMediaQueries = Object.assign(
  {},
  ...Object.keys(mediaQueries).map(mq => ({
    /* $FlowFixMe(>=0.115.0) This comment suppresses an error found when upgrading Flow to
     * v0.115.0. To view the error, delete this comment and run Flow. */
    [mq]: (...styles) => mediaQueries[mq](css(...styles)),
  })),
);

const orbitConstructor = (styles, options = () => ({}), tag = "div") => {
  const componentTemplate = styled(props => {
    const { attrs, as = tag, blockList } = options(props);
    // type check for as if validElementType (string) (react-is, isValidElementType);
    const { as: Component = as } = props;
    return <Component {...filterProps(props, blockList)} {...attrs} />;
  })(props => styles(props));
  componentTemplate.defaultProps = {
    theme: defaultTheme,
    ...createMediaQueries,
    css,
    rtl,
  };
  return componentTemplate;
};

const orbit = (styles, options) => orbitConstructor(styles, options);

domElements.forEach(domElement => {
  orbit[domElement] = (styles, options) => orbitConstructor(styles, options, domElement);
});

export default orbit;
