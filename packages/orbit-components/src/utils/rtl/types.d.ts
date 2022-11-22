import type { ThemeProps } from "../../defaultTheme";

export type LeftToRight = (left: string, right: string) => (theme: ThemeProps) => string;

export type RtlSpacing = (value: string) => (theme: ThemeProps) => string;

export type BorderRadius = (value: string) => (theme: ThemeProps) => string;

export type TextAlign = (value: "left" | "right" | "center") => (theme: ThemeProps) => string;

export type Translate3d = (value: string) => (themeProps: ThemeProps) => string;
