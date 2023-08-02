import type { GatsbyBrowser } from "gatsby";
import "./src/styles/global.css";

import wrapWithProviders from "./wrapWithProviders";

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = wrapWithProviders;
