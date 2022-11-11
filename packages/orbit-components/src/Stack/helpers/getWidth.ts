import { isDefined } from "../../utils/layout";

const getWidth = (inline: boolean): string => (isDefined(inline) && !inline ? "100%" : "");

export default getWidth;
