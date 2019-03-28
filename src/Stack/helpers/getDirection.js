// @flow
import { DIRECTIONS } from "../consts";
import type { GetDirection } from "./getDirection";

const getDirection: GetDirection = direction =>
  Object.values(DIRECTIONS).indexOf(direction) !== -1 ? direction : DIRECTIONS.ROW;

export default getDirection;
