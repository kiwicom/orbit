// @flow
import getCommonProps from "../../primitives/ButtonPrimitive/common/getCommonProps";
import type { GetButtonLinkCommonProps } from "./getButtonLinkCommonProps";

const getButtonLinkCommonProps: GetButtonLinkCommonProps = props => {
  if (!props.compact) return getCommonProps(props);
  return { ...getCommonProps(props), padding: "0" };
};

export default getButtonLinkCommonProps;
