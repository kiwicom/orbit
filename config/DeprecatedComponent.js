// @flow
import React from "react";

const DeprecatedComponent = (Component: React$ComponentType<any>, text: string) => {
  let warned = false;
  return (props: Object) => {
    if (!warned) {
      warned = true;
      if (process.env.NODE_ENV !== "production") console.warn(`[Deprecation] ${text}`);
    }
    return <Component {...props} />;
  };
};

module.exports = DeprecatedComponent;
