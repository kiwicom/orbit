// @flow
import type { IsDefined } from "./isDefined";

const isDefined: IsDefined = prop => typeof prop !== "undefined";

export default isDefined;
