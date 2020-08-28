// @flow
import * as React from "react";

import Hide from "../Hide";

import type { Props } from "./index";

const Desktop = ({ children }: Props) => (
  <Hide on={["smallMobile", "mediumMobile", "largeMobile", "tablet"]}>{children}</Hide>
);

export default Desktop;
