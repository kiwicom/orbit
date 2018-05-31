// @flow
import React from "react";

const DeprecatedComponent = (Component: React.Component, text: string) => {
  let warned = false;
  return props => {
    if (!warned) {
      warned = true;
      if (process.env.NODE_ENV !== "production") console.warn(`[Deprecation] ${text}`);
    }
    return <Component {...props} />;
  };
};

module.exports = DeprecatedComponent;
