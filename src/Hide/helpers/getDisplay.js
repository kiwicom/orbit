// @flow
import type { GetDisplay } from "./getDisplay";

const getDisplay: GetDisplay = () => ({ block }) => (block ? "block" : "inline-block");

export default getDisplay;
