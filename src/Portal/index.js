// @flow
import * as React from "react";
import ReactDOM from "react-dom";

import type { Props } from "./index";

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

  if (typeof window !== "undefined") {
    return ReactDOM.createPortal(children, el);
  }
  return null;
};

export default Portal;
