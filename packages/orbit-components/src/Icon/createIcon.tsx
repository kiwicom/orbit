import * as React from "react";

import whiteListProps from "./helpers/whiteListProps";

import OrbitIcon from ".";

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
