// @flow
import TYPES from "../consts";
import type { IsType } from "./isType";

export const isNavigation: IsType = type => type === TYPES.NAVIGATION;

export const isInline: IsType = type => type === TYPES.INLINE;
