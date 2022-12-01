import * as React from "react";

import whiteListProps from "./helpers/whiteListProps";

import OrbitIcon from ".";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const createIcon = (def: React.ReactNode, viewBox: string, displayName: string) => {
  const icon = props => (
    <OrbitIcon viewBox={viewBox} {...whiteListProps(props)}>
      {def}
    </OrbitIcon>
  );

  icon.displayName = displayName;
  return icon;
};

export default createIcon;
