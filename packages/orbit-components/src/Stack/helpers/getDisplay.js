// @flow
import { isDefined } from "../../utils/layout";
import type { GetDisplay } from "./getDisplay";

const getDisplay: GetDisplay = inline => isDefined(inline) && (inline ? "inline-flex" : "flex");

export default getDisplay;
