// @flow
import { DIRECTIONS } from "../consts";
import type { GetDirection } from "./getDirection";

const getDirection: GetDirection = direction => {
  if (!direction) {
    return false;
  }
  return Object.values(DIRECTIONS).indexOf(direction) !== -1 ? direction : DIRECTIONS.ROW;
};
export default getDirection;
