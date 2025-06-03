// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import type {
  ButtonCommonProps,
  Size,
  DownloadWithHrefConditionalProps,
  FullWidthConditionalProps,
} from "../primitives/ButtonPrimitive/types";

export type Type = "primary" | "secondary" | "critical";

export type Props = {
  readonly compact?: boolean;
  readonly type?: Type;
  readonly size?: Size;
} & ButtonCommonProps &
  FullWidthConditionalProps &
  DownloadWithHrefConditionalProps;
