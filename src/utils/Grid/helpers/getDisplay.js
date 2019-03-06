// @flow
import { css } from "styled-components";

import isDefined from "./isDefined";

const getDisplay = inline =>
  isDefined(inline) &&
  css`
    display: ${inline ? "inline-grid" : "grid"};
    display: ${inline ? "-ms-inline-grid" : "-ms-grid"};
  `;

export default getDisplay;
