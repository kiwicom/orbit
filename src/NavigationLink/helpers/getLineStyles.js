// @flow
import { css } from "styled-components";

import TYPES from "../consts";
import type { GetLineStyles } from "./getLineStyles";

const getLineStyles: GetLineStyles = ({ type }) => {
  if (type === TYPES.HORIZONTAL) {
    return css`
      width: 100%;
      height: 3px;
      left: 0;
      right: 0;
      bottom: 0;
    `;
  }
  if (type === TYPES.VERTICAL) {
    return css`
      top: 0;
      left: 0;
      width: 3px;
      height: 100%;
    `;
  }
  return null;
};

export default getLineStyles;
