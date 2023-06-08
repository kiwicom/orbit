import "tailwindcss/base.css";
import type { GatsbyBrowser } from "gatsby";

import wrapWithProviders from "./wrapWithProviders";

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = wrapWithProviders;
