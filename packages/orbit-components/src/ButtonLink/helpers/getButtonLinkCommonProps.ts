import getCommonProps from "../../primitives/ButtonPrimitive/common/getCommonProps";
import { Props } from "../index.d";

const getButtonLinkCommonProps = (props: Props) => {
  if (!props.compact) return getCommonProps(props);
  return { ...getCommonProps(props), padding: "0" };
};

export default getButtonLinkCommonProps;
