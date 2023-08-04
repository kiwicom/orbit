export interface TokenSchema {
  namespace: string;
  object: string;
  variant: string;
  subVariant: string;
}

export enum GlobalCategories {
  "z-index" = "Z-index tokens",
  "deprecated" = "Deprecated tokens",
  "border-radius" = "Border radius tokens",
  "breakpoint" = "Breakpoint tokens",
  "duration" = "Duration tokens",
  "elevation" = "Elevation tokens",
  "palette" = "Palette tokens",
  "space" = "Spacing tokens",
  "typography" = "Typography tokens",
}

export enum Platforms {
  foundation = "foundation",
  javascript = "javascript",
}

export enum TypographyCategories {
  "font-family",
  "font-size",
  "line-height",
  "font-weight",
}

type TokenExactValue = string | number;

type PlatformValue = {
  name: string;
  value: TokenExactValue;
};

export type TokenValue = {
  type: string;
  category: string;
  replacement: string | null;
  deprecated: boolean;
  javascript: PlatformValue;
  foundation: PlatformValue;
  schema: TokenSchema;
};

export interface Token {
  name: string;
  value: TokenValue;
}
