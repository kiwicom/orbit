import React from "react";

import * as Common from "../../../common/types";

export interface Props {
  readonly children: React.ReactNode;
  readonly onClick?: Common.Event<React.SyntheticEvent<HTMLDivElement>>;
}
