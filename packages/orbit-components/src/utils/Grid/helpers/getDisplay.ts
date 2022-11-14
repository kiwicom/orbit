import type { FlattenSimpleInterpolation } from "styled-components";
import { css } from "styled-components";

import { isDefined } from "../../layout";

const getDisplay = (inline: boolean, force: boolean): FlattenSimpleInterpolation =>
  css`
    display: ${(isDefined(inline) || force) && (inline ? "inline-grid" : "grid")};
  `;

export default getDisplay;
