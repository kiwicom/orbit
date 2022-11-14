import type {
  Params as CommonParams,
  Output as CommonOutput,
} from "../../primitives/ButtonPrimitive/common/getCommonProps";
import getCommonProps from "../../primitives/ButtonPrimitive/common/getCommonProps";

interface Props extends CommonParams {
  readonly compact?: boolean;
}

interface Output extends CommonOutput {
  padding: string;
}

const getButtonLinkCommonProps = (props: Props): Output => {
  if (!props.compact) return getCommonProps(props);
  return { ...getCommonProps(props), padding: "0" };
};

export default getButtonLinkCommonProps;
