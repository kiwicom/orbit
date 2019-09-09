// @flow
import isDefined from "./isDefined";
import type { GetWrap } from "./getWrap";

const getWrap: GetWrap = wrap => isDefined(wrap) && (wrap ? "wrap" : "nowrap");

export default getWrap;
