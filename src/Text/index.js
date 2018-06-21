// @flow
import * as React from "react";
import * as tokens from "@kiwicom/orbit-design-tokens";

import { sizeText, weightText, colorText } from "./consts";

import type { Props } from "./index";

function resolveScopedStyles(scope) {
  return {
    className: scope.props.className,
    styles: scope.props.children,
  };
}

const Text = (props: Props) => {
  const {
    type = "primary",
    size = "normal",
    weight = "regular",
    align = "left",
    italic = false,
    uppercase = false,
    element = "p",
    children,
    className,
  } = props;

  const scoped = resolveScopedStyles(
    <scope>
      <style jsx>
        {`
          font-family: ${tokens.fontFamily};
          font-size: ${sizeText[size]};
          font-weight: ${weightText[weight]};
          color: ${colorText[type]};
          line-height: ${tokens.lineHeightText};
          text-align: ${align};
          ${uppercase ? `text-transform: uppercase` : ""};
          ${italic ? `font-style: italic` : ""};
          margin: 0;
        `}
      </style>
    </scope>,
  );

  return (
    <React.Fragment>
      {React.createElement(
        element,
        {
          className: [scoped.className, className].join(" "),
        },
        children,
      )}
      {scoped.styles}
    </React.Fragment>
  );
};

export default Text;
