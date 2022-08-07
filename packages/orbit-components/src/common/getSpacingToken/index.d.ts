import defaultTheme from "../../defaultTheme";

export interface spaceAfter {
  readonly spaceAfter?: "none" | "smallest" | "small" | "normal" | "medium" | "large" | "largest";
}

export interface Props extends spaceAfter {
  readonly theme: typeof defaultTheme;
}
