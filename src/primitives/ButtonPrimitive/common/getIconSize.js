// @flow
import { ICON_SIZES } from "../../../Icon/consts";

const getIconSize = size => (size === ICON_SIZES.SMALL ? ICON_SIZES.SMALL : ICON_SIZES.MEDIUM);

export default getIconSize;
