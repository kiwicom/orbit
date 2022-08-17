import { isDefined } from "../../utils/layout";

const getDisplay = (inline: boolean): "inline-flex" | "flex" | false =>
  isDefined(inline) && (inline ? "inline-flex" : "flex");

export default getDisplay;
