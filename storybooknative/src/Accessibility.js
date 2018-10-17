// @flow strict

type AccessibilityRoleValues =
  | "none"
  | "button"
  | "link"
  | "search"
  | "image"
  | "keyboardkey"
  | "text"
  | "adjustable"
  | "imagebutton"
  | "header"
  | "summary";

// See: https://facebook.github.io/react-native/docs/accessibility.html
export type AccessibilityProps = {|
  accessible?: boolean,
  accessibilityLabel?: string,
  accessibilityHint?: string,
  accessibilityRole?: AccessibilityRoleValues,
  accessibilityState?: "selected" | "disabled",
  accessibilityViewIsModal?: boolean, // iOS only
  accessibilityIgnoresInvertColors?: boolean, // iOS only
  accessibilityElementsHidden?: boolean, // iOS only
  onAccessibilityTap?: () => void, // iOS only
  onMagicTap?: () => void, // iOS only
  accessibilityLiveRegion?: "none" | "polite" | "assertive", // Android only
  importantForAccessibility?: "auto" | "yes" | "no" | "no-hide-descendants", // Android only
|};
