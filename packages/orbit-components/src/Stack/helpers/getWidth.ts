import { isDefined } from "../../utils/layout";

const getWidth = (inline: boolean): string | boolean => isDefined(inline) && !inline && "100%";

export default getWidth;
