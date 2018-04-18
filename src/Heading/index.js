// @flow
import * as React from "react";
import * as tokens from "orbit-design-token";

const weightHeading = {
  medium: tokens.fontWeightMedium,
  bold: tokens.fontWeightBold,
};

const sizeHeading = {
  display: tokens.fontSizeHeadingDisplay,
  large: tokens.fontSizeHeadingLarge,
  medium: tokens.fontSizeHeadingMedium,
  small: tokens.fontSizeHeadingSmall,
};

type Props = {
  element: "h1" | "h2" | "h3" | "h4" | "h5",
  size: $Keys<typeof sizeHeading>,
  weight: $Keys<typeof weightHeading>,
  className?: string,
  children: React.Node,
};

function resolveScopedStyles(scope) {
  return {
    className: scope.props.className,
    styles: scope.props.children,
  };
}

const Heading = (props: Props) => {
  const scoped = resolveScopedStyles(
    <scope>
      <style jsx>
        {`
           {
            font-family: ${tokens.fontFamily};
            font-size: ${sizeHeading[props.size]};
            font-weight: ${weightHeading[props.weight]};
            color: ${tokens.colorHeading};
            line-height: ${tokens.lineHeightHeading};
          }
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

Heading.defaultProps = {
  element: "h1",
  size: "large",
  weight: "bold",
};

export default Heading;
