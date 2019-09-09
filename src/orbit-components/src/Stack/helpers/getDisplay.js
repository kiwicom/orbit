// @flow
import isDefined from "./isDefined";
import type { GetDisplay } from "./getDisplay";

const getDisplay: GetDisplay = inline => isDefined(inline) && (inline ? "inline-flex" : "flex");

export default getDisplay;
