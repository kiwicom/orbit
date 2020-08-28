// @flow
import type { ThemeProps } from "../../defaultTheme";

export const getBorder = ({ theme }: ThemeProps) =>
  `${theme.orbit.borderWidthCard} ${theme.orbit.borderStyleCard} ${theme.orbit.borderColorCard}`;

export const getBorderRadius = ({ theme }: ThemeProps) => `${theme.orbit.borderRadiusNormal}`;

export const getBorderRadiusMobile = ({ theme }: ThemeProps) => `${theme.orbit.borderRadiusLarge}`;
