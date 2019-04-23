// @flow
import * as React from "react";

import Badge from "../Badge";
import { TYPE_OPTIONS } from "../Badge/consts";

import type { Props } from "./index";

const NotificationBadge = (props: Props) => {
  const { type = TYPE_OPTIONS.NEUTRAL, children, dataTest } = props;

  return (
    <Badge type={type} dataTest={dataTest} circled>
      {children}
    </Badge>
  );
};

export default NotificationBadge;
