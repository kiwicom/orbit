// @flow
import * as React from "react";

import BadgePrimitive from "../../../primitives/BadgePrimitive";
import useTheme from "../../../hooks/useTheme";

type Props = {|
  children: React.Node,
|};

const Badge = ({ children }: Props): React.Node => {
  const theme = useTheme();

  return (
    <BadgePrimitive
      background={theme.orbit.paletteCloudLight}
      foregroundColor={theme.orbit.paletteInkNormal}
      borderColor={theme.orbit.paletteCloudNormal}
    >
      {children}
    </BadgePrimitive>
  );
};

export default Badge;
