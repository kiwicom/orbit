// @flow
import * as React from "react";
import ReactDOM from "react-dom";

import type { Props } from "./index";

const Portal = ({ renderInto, children }: Props) => {
  const [el] = React.useState(() => document.createElement("div"));
  const [node] = React.useState(() =>
    renderInto && document.getElementById(renderInto)
      ? document.getElementById(renderInto)
      : document.body,
  );
  React.useLayoutEffect(() => {
    if (node) {
      node.appendChild(el);
    }
    return () => {
      if (node) {
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
