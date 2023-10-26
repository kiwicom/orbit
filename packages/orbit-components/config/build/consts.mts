export const OUTPUT_PATTERNS = [
  "lib",
  "es",
  "umd",
  ".out",
  "src/icons/*.{ts?(x),d.ts}",
  "orbit-icons-font",
  "orbit-icons-font.zip",
  "orbit-svgs.zip",
];

export const COMPILE_IGNORE_PATTERNS = [
  "**/RenderInRtl.tsx",
  "**/*.d.ts",
  "**/*.stories.*",
  "**/*.ct.*",
  "**/*.ct-story.*",
  "**/*.test.*",
  "**/__tests__/**/*",
  "**/__typetests__/**/*",
  "**/test-utils.tsx",
];

export const DECLARATIONS_IGNORE_PATTERN = [
  "**/RenderInRtl.{tsx,d.ts}",
  "**/test-utils.d.ts",
  "**/*.ct.d.ts",
  "**/*.ct-story.d.ts",
];
