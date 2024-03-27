import type { ThemeProps } from "../../defaultTheme";

export type LeftToRight = (left: string, right: string) => (theme: ThemeProps) => string;

export type RtlSpacing = (value: string) => (theme: ThemeProps) => string;
