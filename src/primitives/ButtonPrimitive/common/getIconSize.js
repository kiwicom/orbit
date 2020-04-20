// @flow
import { ICON_SIZES } from "../../../Icon/consts";
import type { GetIconSize } from "./getIconSize";

const getIconSize: GetIconSize = size =>
  size === ICON_SIZES.SMALL ? ICON_SIZES.SMALL : ICON_SIZES.MEDIUM;

export default getIconSize;
