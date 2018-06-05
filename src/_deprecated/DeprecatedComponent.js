// @flow
import React from "react";

const DeprecatedComponent = <Props>(Component: React$ComponentType<any>, text: string) => {
  let warned = false;
  return (props: Props) => {
    if (!warned) {
      warned = true;
      if (process.env.NODE_ENV !== "production") console.warn(`[Deprecation] ${text}`);
    }
    return <Component {...props} />;
  };
};

export default DeprecatedComponent;
