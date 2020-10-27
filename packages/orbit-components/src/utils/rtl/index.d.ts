import { ThemeType } from "../../defaultTheme";

export type LeftToRight = <T1, T2>(left: T1, right: T2) => (theme: ThemeType) => T1 | T2;

export type RtlSpacing = (value: string) => (theme: ThemeType) => string;

export type BorderRadius = (value: string) => (theme: ThemeType) => string;

export type TextAlign = (value: "left" | "right") => (theme: ThemeType) => string | LeftToRight;

export type Translate3d = (value: string) => (themeProps: ThemeType) => string;

export declare const rtlSpacing: RtlSpacing;

export declare const left;

export declare const right;

export declare const borderRadius: BorderRadius;

export declare const textAlign: TextAlign;

export declare const translate3d: Translate3d;
