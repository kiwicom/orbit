// @flow
import * as React from "react";
import * as tokens from "@kiwicom/orbit-design-tokens";

const weightHeading = {
  display: tokens.fontWeightHeadingDisplay,
  title1: tokens.fontWeightHeadingLevel1,
  title2: tokens.fontWeightHeadingLevel2,
  title3: tokens.fontWeightHeadingLevel3,
};

const sizeHeading = {
  display: tokens.fontSizeHeadingDisplay,
  title1: tokens.fontSizeHeadingTitle1,
  title2: tokens.fontSizeHeadingTitle2,
  title3: tokens.fontSizeHeadingTitle3,
};

type Props = {
  element: "h1" | "h2" | "h3" | "h4" | "h5",
  type: $Keys<typeof weightHeading>,
  children: React.Node,
};

function resolveScopedStyles(scope) {
  return {
    className: scope.props.className,
    styles: scope.props.children,
  };
}

const Heading = (props: Props) => {
  const { type, element, children } = props;

  const scoped = resolveScopedStyles(
    <scope>
      <style jsx>
        {`
           {
            font-family: ${tokens.fontFamily};
            font-size: ${sizeHeading[type]};
            font-weight: ${weightHeading[type]};
            color: ${tokens.colorHeading};
            line-height: ${tokens.lineHeightHeading};
            margin: 0;
          }
        `}
      </style>
    </scope>,
  );

  return (
    <React.Fragment>
      {React.createElement(
        element,
        {
          className: [scoped.className].join(" "),
        },
        children,
      )}
      {scoped.styles}
    </React.Fragment>
  );
};

Heading.defaultProps = {
  element: "h1",
  type: "title2",
};

export default Heading;
