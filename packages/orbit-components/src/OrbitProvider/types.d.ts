// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type { Theme } from "../defaultTheme";

type UseId = () => string;

interface RequiredUseId {
  readonly useId: UseId;
}

interface OptionalUseId {
  readonly useId?: UseId;
}

type IsReact18 = typeof React extends { useId: UseId } ? true : false;

type WithUseId = IsReact18 extends true ? OptionalUseId : RequiredUseId;

export type Props = WithUseId & {
  readonly theme: Theme;
  readonly children: React.ReactNode;
};
