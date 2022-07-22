import { Globals } from "../../common/types";
import { Size, Color } from "../types";

const ALLOWED_PROPS = [
  "size",
  "color",
  "customColor",
  "className",
  "dataTest",
  "ariaHidden",
  "reverseOnRtl",
  "ariaLabel",
  "dataTest",
];

interface Props extends Globals {
  size?: Size;
  color?: Color;
  className?: string;
  customColor?: string;
  ariaHidden?: boolean;
  reverseOnRtl?: boolean;
  ariaLabel?: string;
}

const whiteListProps = (props: Props) =>
  Object.assign({}, ...ALLOWED_PROPS.map(k => (k in props ? { [k]: props[k] } : {})));

export default whiteListProps;
