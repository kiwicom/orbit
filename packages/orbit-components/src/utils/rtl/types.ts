import type { ThemeProps } from "../../defaultTheme";

export type LeftToRight = <T1, T2>(left: T1, right: T2) => (theme: ThemeProps) => T1 | T2;

export type RtlSpacing = (value: string) => (theme: ThemeProps) => string;

export type BorderRadius = (value: string) => (theme: ThemeProps) => string;

export type TextAlign = (value: "left" | "right") => (theme: ThemeProps) => string | LeftToRight;

export type Translate3d = (value: string) => (themeProps: ThemeProps) => string;
