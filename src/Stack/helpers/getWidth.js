// @flow
import isDefined from "./isDefined";
import type { GetWidth } from "./getWidth";

const getWidth: GetWidth = inline => isDefined(inline) && (!inline && "100%");

export default getWidth;
