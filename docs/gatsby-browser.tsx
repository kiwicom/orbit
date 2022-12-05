import "tailwindcss/dist/base.min.css";
import type { GatsbyBrowser } from "gatsby";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/700.css";

import wrapWithProviders from "./wrapWithProviders";

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = wrapWithProviders;
