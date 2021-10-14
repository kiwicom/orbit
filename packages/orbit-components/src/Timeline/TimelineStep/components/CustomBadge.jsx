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
      foregroundColor={theme.orbit.paletteInkLight}
      borderColor={theme.orbit.paletteCloudDark}
    >
      {children}
    </BadgePrimitive>
  );
};

export default Badge;
