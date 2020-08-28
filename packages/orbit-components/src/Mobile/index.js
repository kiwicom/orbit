// @flow
import * as React from "react";

import Hide from "../Hide";

import type { Props } from "./index";

const Desktop = ({ children }: Props) => <Hide on={["desktop", "largeDesktop"]}>{children}</Hide>;

export default Desktop;
