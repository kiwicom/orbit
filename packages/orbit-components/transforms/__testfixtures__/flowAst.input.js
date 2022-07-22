import React from "react";
import { Type } from "./types";
import { Theme } from "./defaultTheme";

export type Props = {|
  onClick?: (ev: React.SyntheticEvent<HTMLButtonElement>) => void,
  labelRef: React.MutableRefObject<HTMLElement>,
  children: React.ReactNode,
|};

declare export var Kek: React.FunctionComponent<Props>;
declare export default React.FunctionComponent<Props>;
declare export var Component: React.ForwardRefExoticComponent<Props, HTMLInputElement>;
declare export var ComponentFC: React.FC<Props>;

declare var Button: React.AbstractComponent<{
  ...Props,
  ...React.RefAttributes<HTMLButtonElement>,
}>;
