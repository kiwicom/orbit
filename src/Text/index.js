// @flow
import * as React from "react";
import * as tokens from "@kiwicom/orbit-design-tokens";

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
  italic: boolean,
  uppercase: boolean,
  element: "p" | "span" | "div",
  children: React.Node,
  className?: string,
};

function resolveScopedStyles(scope) {
  return {
    className: scope.props.className,
    styles: scope.props.children,
  };
}

const Text = (props: Props) => {
  const { type, size, weight, align, italic, uppercase, element, children, className } = props;

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
