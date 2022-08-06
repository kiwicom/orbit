import * as React from "react";

import * as Common from "../../common/common";

type inexactString = string | null | undefined;
type functionReturningString = () => string;

export type Size = "small" | "normal" | "large";

export interface ButtonCommonProps extends Common.Globals, Common.Ref, Common.SpaceAfter {
  readonly asComponent?: Common.Component;
  readonly ariaControls?: string;
  readonly ariaCurrent?: string;
  readonly ariaExpanded?: boolean;
  readonly ariaLabelledby?: string;
  readonly children?: React.ReactNode;
  readonly circled?: boolean;
  readonly disabled?: boolean;
  readonly external?: boolean;
  readonly fullWidth?: boolean;
  readonly href?: string;
  readonly iconLeft?: React.ReactNode;
  readonly iconRight?: React.ReactNode;
  readonly loading?: boolean;
  readonly onClick?: Common.Event<React.SyntheticEvent<HTMLButtonElement>>;
  readonly rel?: string;
  readonly role?: string;
  readonly submit?: boolean;
  readonly contentAlign?: string | null;
  readonly contentWidth?: string | null;
  readonly title?: string | functionReturningString;
  readonly tabIndex?: string | number;
  readonly width?: string;
}
/*
  Icon properties used on other getter functions.
 */
export type IconForeground = {
  readonly foreground?: inexactString;
  readonly foregroundHover?: inexactString;
  readonly foregroundActive?: inexactString;
};

export type IconProps = IconForeground & {
  readonly width?: inexactString;
  readonly height?: inexactString;
  readonly leftMargin?: inexactString;
  readonly rightMargin?: inexactString;
};

/*
  Primitive - style props used only on ButtonPrimitive itself or it's common functions.
 */
export type HeightProps = {
  readonly height?: string;
  readonly fontSize?: inexactString;
};

export type Foreground = {
  readonly foreground?: inexactString;
  readonly foregroundHover?: inexactString;
  readonly foregroundActive?: inexactString;
  readonly foregroundFocus?: inexactString;
};

export type Background = {
  readonly background?: inexactString;
  readonly backgroundHover?: inexactString;
  readonly backgroundActive?: inexactString;
  readonly backgroundFocus?: inexactString;
};

export type BoxShadow = {
  readonly boxShadow?: inexactString;
  readonly boxShadowHover?: inexactString;
  readonly boxShadowActive?: inexactString;
  readonly boxShadowFocus?: inexactString;
};

export interface PrimitiveTypes extends HeightProps, Foreground, Background, BoxShadow {
  readonly padding?: string;
  readonly fontWeight?: inexactString;
  readonly icons?: IconProps;
}

export type Props = ButtonCommonProps & PrimitiveTypes;

declare const StyledButtonPrimitive: React.ComponentType<Props>;
declare const Button: React.RefForwardingComponent<HTMLButtonElement, Props>;
export { Button, Button as default, StyledButtonPrimitive };
