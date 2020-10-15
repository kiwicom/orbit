// @flow
import { POSITIONS } from "../consts";

export const isPositionLeft = (p: string) => p === POSITIONS.LEFT;

export const isPositionRight = (p: string) => p === POSITIONS.RIGHT;

export const isPositionBottom = (p: string) => p === POSITIONS.BOTTOM;

export const isPositionTop = (p: string) => p === POSITIONS.TOP;

export const isVertical = (p: string) => isPositionTop(p) || isPositionBottom(p);

export const isHorizontal = (p: string) => isPositionLeft(p) || isPositionRight(p);
