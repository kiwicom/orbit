// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../../common/common";

declare module "@kiwicom/orbit-components/lib/PricingTableItem";

export interface Props extends Common.Global {
  readonly name?: Common.Translation;
  readonly price?: Common.Translation;
  readonly mobileDescription?: Common.Translation;
  readonly priceBadge?: React.ReactNode;
  readonly featureIcon?: React.ReactNode;
  readonly badge?: string | React.ReactNode;
  readonly children?: React.ReactNode;
  readonly active?: boolean;
  readonly compact?: boolean;
  readonly action?: React.ReactNode;
  readonly basis?: string;
  readonly hasError?: boolean;
  readonly onClick?: Common.Callback;
  readonly desktopRadio?: boolean;
}

declare const PricingTableItem: React.FunctionComponent<Props>;
export { PricingTableItem, PricingTableItem as default };
