// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import * as Common from "../common/types";

type Sizes = "extraSmall" | "small" | "medium" | "large" | "display";

export interface Props extends Common.Globals {
  readonly size?: Sizes;
  readonly title?: string;
  readonly description?: string;
  readonly primary?: string;
  readonly secondary?: string;
  readonly ariaLabelledby?: string;
}
