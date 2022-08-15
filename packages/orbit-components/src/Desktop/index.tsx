import * as React from "react";

import Hide from "../Hide";
import { Props } from "./index.d";

const Desktop = ({ children }: Props) => (
  <Hide on={["smallMobile", "mediumMobile", "largeMobile", "tablet"]}>{children}</Hide>
);

export default Desktop;
