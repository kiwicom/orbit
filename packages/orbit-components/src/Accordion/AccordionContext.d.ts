import React from "react";

import * as Common from "../common/common";

export interface Context {
  readonly onExpand?: Common.Callback;
  readonly expanded: boolean;
  readonly loading?: boolean;
}

declare const accordionDefault: Context;

export declare const Provider: React.Provider<Context>;
export declare const Consumer: React.Consumer<Context>;

declare function useAccordion(): Context;
