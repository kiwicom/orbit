import React from "react";

import Hide from "../Hide";
import { Props } from "./types";

const Desktop = ({ children }: Props) => <Hide on={["desktop", "largeDesktop"]}>{children}</Hide>;

export default Desktop;
export { Props };
