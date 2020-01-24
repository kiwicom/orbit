// @flow
import * as React from "react";

import BadgePrimitive from "../primitives/BadgePrimitive";

import type { Props } from "./index";

const Badge = (props: Props) => {
  const { type, icon, children, ariaLabel, dataTest } = props;

  return (
    <BadgePrimitive type={type} icon={icon} ariaLabel={ariaLabel} dataTest={dataTest}>
      {children}
    </BadgePrimitive>
  );
};

export default Badge;
