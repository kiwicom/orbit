// @flow
import type { ThemeProps } from "../../defaultTheme";

export const getBorder = ({ theme }: ThemeProps): string =>
  `${theme.orbit.borderWidthCard} ${theme.orbit.borderStyleCard} ${theme.orbit.borderColorCard}`;

export const getBorderRadius = ({ theme }: ThemeProps): string => `${theme.orbit.borderRadiusNormal}`;

export const getBorderRadiusMobile = ({ theme }: ThemeProps): string => `${theme.orbit.borderRadiusLarge}`;
