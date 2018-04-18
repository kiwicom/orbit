// @flow
import * as React from "react";
import * as tokens from "orbit-design-token";

const colorText = {
  primary: tokens.colorTextPrimary,
  secondary: tokens.colorTextSecondary,
  attention: tokens.colorTextAttention,
};

const weightText = {
  regular: tokens.fontWeightNormal,
  bold: tokens.fontWeightBold,
};

const sizeText = {
  large: tokens.fontSizeTextLarge,
  normal: tokens.fontSizeTextNormal,
  small: tokens.fontSizeTextSmall,
};

type Props = {
  type: $Keys<typeof colorText>,
  size: $Keys<typeof sizeText>,
  weight: $Keys<typeof weightText>,
  align: "left" | "center" | "right",
  italic?: boolean,
  uppercase?: boolean,
  element: "p" | "span" | "div",
  className?: string,
  children: React.Node,
};

function resolveScopedStyles(scope) {
  return {
    className: scope.props.className,
    styles: scope.props.children,
  };
}

const Text = (props: Props) => {
  const scoped = resolveScopedStyles(
    <scope>
      <style jsx>
        {`
          font-family: ${tokens.fontFamily};
          font-size: ${sizeText[props.size]};
          font-weight: ${weightText[props.weight]};
          color: ${colorText[props.type]};
          line-height: ${tokens.lineHeightText};
          text-align: ${props.align};
          ${props.uppercase ? `text-transform: uppercase` : ""};
          ${props.italic ? `font-style: italic` : ""};
        `}
      </style>
    </scope>,
  );

  return (
    <React.Fragment>
      {React.createElement(
        props.element,
        {
          className: [scoped.className, props.className].join(" "),
        },
        props.children,
      )}
      {scoped.styles}
    </React.Fragment>
  );
};

Text.defaultProps = {
  type: "primary",
  size: "normal",
  weight: "regular",
  align: "left",
  element: "p",
  uppercase: false,
  italic: false,
};

export default Text;
