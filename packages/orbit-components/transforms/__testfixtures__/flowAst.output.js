import * as React from "react";
import type { Type } from "./types";
import type { Theme } from "./defaultTheme";

export type Props = {|
  onClick?: (ev: SyntheticEvent<HTMLButtonElement>) => void,
  labelRef: React.Ref<HTMLElement>,
  children: React.Node,
|};

declare export var Kek: React.ComponentType<Props>;
declare export default React.ComponentType<Props>;
declare export var Component: React.AbstractComponent<Props, HTMLInputElement>;
declare export var ComponentFC: React.StatelessFunctionalComponent<Props>;

declare var Button: React.AbstractComponent<Props, HTMLButtonElement>;
