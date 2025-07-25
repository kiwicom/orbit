import type * as React from "react";

import type * as Common from "../../common/types";

export type Size = "small" | "normal" | "large";

export type FullWidthConditionalProps =
  | {
      readonly fullWidth: boolean;
      readonly centered?: boolean;
    }
  | {
      readonly fullWidth?: false;
      readonly centered?: never;
    };

export type DownloadWithHrefConditionalProps =
  | {
      readonly href: string;
      readonly download?: boolean | string;
    }
  | { readonly href?: undefined; readonly download?: never };

export interface ButtonCommonProps
  extends Common.Globals<HTMLButtonElement | HTMLAnchorElement | HTMLDivElement>,
    Common.SpaceAfter {
  readonly asComponent?: Common.Component;
  readonly ariaControls?: string;
  readonly ariaCurrent?: string;
  readonly ariaExpanded?: boolean;
  readonly ariaLabelledby?: string;
  readonly centered?: boolean;
  readonly children?: React.ReactNode;
  readonly circled?: boolean;
  readonly className?: string;
  readonly underlined?: boolean;
  readonly disabled?: boolean;
  readonly download?: boolean | string;
  readonly external?: boolean;
  readonly fullWidth?: boolean;
  readonly href?: string;
  readonly iconLeft?: React.ReactNode;
  readonly iconRight?: React.ReactNode;
  readonly loading?: boolean;
  readonly onClick?: Common.Event<React.SyntheticEvent<HTMLButtonElement | HTMLAnchorElement>>;
  readonly rel?: string;
  readonly role?: string;
  readonly submit?: boolean;
  readonly contentAlign?: string | null;
  readonly contentWidth?: string | null;
  readonly title?: string;
  readonly tabIndex?: string | number;
  readonly width?: string;
}
/*
  Icon properties used on other getter functions.
 */
export interface IconForeground {
  readonly foreground?: string | null;
  readonly foregroundHover?: string | null;
  readonly foregroundActive?: string | null;
}

export interface IconProps extends Foreground {
  readonly width?: string | null;
  readonly height?: string | null;
  readonly leftMargin?: string | null;
  readonly rightMargin?: string | null;
}

/*
  Primitive - style props used only on ButtonPrimitive itself or it's common functions.
 */
export interface HeightProps {
  readonly height?: string;
  readonly fontSize?: string | null;
}

export interface Foreground {
  readonly foreground?: string | null;
  readonly foregroundHover?: string | null;
  readonly foregroundActive?: string | null;
  readonly foregroundFocus?: string | null;
}

export interface Background {
  readonly background?: string | null;
  readonly backgroundHover?: string | null;
  readonly backgroundActive?: string | null;
  readonly backgroundFocus?: string | null;
}

export interface BoxShadow {
  readonly boxShadow?: string | null;
  readonly boxShadowHover?: string | null;
  readonly boxShadowActive?: string | null;
  readonly boxShadowFocus?: string | null;
}

export interface PrimitiveTypes extends HeightProps, Foreground, Background, BoxShadow {
  readonly padding?: string;
  readonly fontWeight?: string | null;
  readonly icons?: IconProps;
}

export type Props = ButtonCommonProps & PrimitiveTypes;
