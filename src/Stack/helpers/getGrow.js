// @flow
import isDefined from "./isDefined";
import type { GetGrow } from "./getGrow";

const getGrow: GetGrow = grow => isDefined(grow) && (grow ? "1" : "0");

export default getGrow;
