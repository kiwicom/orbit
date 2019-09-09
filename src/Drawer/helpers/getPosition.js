// @flow
import { css } from "styled-components";

import { POSITIONS } from "../consts";
import { left, right } from "../../utils/rtl/index";

const getPosition = ({ position }) => {
  if (position === POSITIONS.RIGHT) {
    return css`
      ${right}: 0;
    `;
  }
  return css`
    ${left}: 0;
  `;
};

export default getPosition;
