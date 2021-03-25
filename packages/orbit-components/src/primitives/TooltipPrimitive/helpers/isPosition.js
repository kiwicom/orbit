// @flow
import { POSITIONS } from "../consts";

export const isPositionLeft = (p: string): boolean => p === POSITIONS.LEFT;

export const isPositionRight = (p: string): boolean => p === POSITIONS.RIGHT;

export const isPositionBottom = (p: string): boolean => p === POSITIONS.BOTTOM;

export const isPositionTop = (p: string): boolean => p === POSITIONS.TOP;

export const isVertical = (p: string): boolean => isPositionTop(p) || isPositionBottom(p);

export const isHorizontal = (p: string): boolean => isPositionLeft(p) || isPositionRight(p);
