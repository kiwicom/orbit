import type { GatsbySSR } from "gatsby";

import wrapWithProviders from "./wrapWithProviders";

export const wrapRootElement: GatsbySSR["wrapRootElement"] = wrapWithProviders;
