"use client";

import * as React from "react";
import ReactDOM from "react-dom";

import type { Props } from "./types";

/**
 * @orbit-doc-start
 * README
 * ----------
 * # Portal
 *
 * To implement Portal component into your project you'll need to add the import:
 *
 * ```jsx
 * import Portal from "@kiwicom/orbit-components/lib/Portal";
 * ```
 *
 * After adding import into your project you can use it simply like:
 *
 * ```jsx
 * <Portal>
 *   // probably Modal
 *   <Modal />
 * </Portal>
 * ```
 *
 * ## Props
 *
 * Table below contains all types of the props available in the Portal component.
 *
 * | Name       | Type         | Default | Description                                                                    |
 * | :--------- | :----------- | :------ | :----------------------------------------------------------------------------- |
 * | children   | `React.Node` |         | The content of the Portal to render. [See Functional specs](#functional-specs) |
 * | renderInto | `string`     |         | The string name of element to be used for the render.                          |
 *
 * ## Functional specs
 *
 * - `<Portal />` component with property `renderInto="modal"` will render its children into a DOM node that exists outside the DOM hierarchy of the parent component. It means that you have to create `div` element with id `modal` (or whatever you want) in root `html` file. For more info, see [React Portal docs](https://reactjs.org/docs/portals.html).
 *
 *
 * @orbit-doc-end
 */
const Portal = ({ renderInto, children }: Props) => {
  const [el] = React.useState(() => {
    if (typeof window !== "undefined") {
      return document.createElement("div");
    }
    return null;
  });

  const [node] = React.useState(() => {
    if (typeof window !== "undefined") {
      return renderInto && document.getElementById(renderInto)
        ? document.getElementById(renderInto)
        : document.body;
    }
    return null;
  });

  React.useLayoutEffect(() => {
    if (node && el) {
      node.appendChild(el);
    }
    return () => {
      if (node && el) {
        node.removeChild(el);
      }
    };
  }, [el, node]);

  if (typeof window !== "undefined" && el !== null) {
    return ReactDOM.createPortal(children, el);
  }

  return null;
};

export default Portal;
