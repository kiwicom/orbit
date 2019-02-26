// @flow
import { DIRECTIONS } from "../consts";
import type { GetDirection } from "./getDirection";

const getDirection: GetDirection = direction =>
  direction && (direction === DIRECTIONS.ROW ? DIRECTIONS.ROW : DIRECTIONS.COLUMN);

export default getDirection;
