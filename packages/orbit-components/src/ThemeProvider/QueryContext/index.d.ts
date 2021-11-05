// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import type { QueryMap } from "../../hooks/useMediaQuery";

export declare const initialValue: QueryMap<null>;

declare const QueryContext: React.Context<QueryMap<null | boolean>>;

export default QueryContext;
