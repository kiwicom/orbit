// @flow
import * as React from "react";
import ReactDOM from "react-dom";

import type { Props } from "./index";

const Portal = ({ renderInto, children }: Props) => {
  const el = React.useRef(document.createElement("div"));
  const node = React.useRef(
    renderInto && document.getElementById(renderInto)
      ? document.getElementById(renderInto)
      : document.body,
  );

  React.useEffect(() => {
    if (node.current && el.current) {
      node.current.appendChild(el.current);
    }
    return () => {
      if (node.current && el.current) {
        node.current.removeChild(el.current);
      }
    };
  }, []);

  if (typeof window !== "undefined" && el.current) {
    return ReactDOM.createPortal(children, el.current);
  }
  return null;
};

export default Portal;
