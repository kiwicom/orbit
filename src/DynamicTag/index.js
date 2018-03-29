/* @flow */
import * as React from "react";

type Props = {
  className?: string,
  tag: "span" | "div" | "label",
  children: any,
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
      <style jsx>{`
         {
          border: 1px solid #808080;
        }
      `}</style>
    </scope>,
  );

  return (
    <React.Fragment>
      {React.createElement(
        props.tag,
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
  tag: "span", // eslint-disable-line react/default-props-match-prop-types
};

export default Text;
