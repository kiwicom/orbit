// @flow
import { css } from "styled-components";

import { TYPES } from "../consts";
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
  return css`
    height: 100%;
    width: 3px;
    top: 0;
    left: 0;
  `;
};

export default getLineStyles;
