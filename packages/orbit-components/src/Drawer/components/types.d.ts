// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import type { Ref } from "react";

import type * as Common from "../../common/types";

export interface Props {
  readonly onClick?: Common.Callback;
  readonly title?: string;
  readonly ref?: Ref<HTMLButtonElement>;
}
