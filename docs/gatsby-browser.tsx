import "tailwindcss/lib/css/preflight.css";
import type { GatsbyBrowser } from "gatsby";

import wrapWithProviders from "./wrapWithProviders";

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = wrapWithProviders;
