// @flow
import { TYPES } from "../consts";
import type { IsBox, IsNavigation } from "./isType";

export const isBox: IsBox = type => type === TYPES.BOX;

export const isNavigation: IsNavigation = type => type === TYPES.NAVIGATION;
