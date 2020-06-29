// @flow
import type { WhiteListProps } from "./whiteListProps";

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

const whiteListProps: WhiteListProps = props =>
  // $FlowExpectedError
  Object.assign({}, ...ALLOWED_PROPS.map(k => (k in props ? { [k]: props[k] } : {})));

export default whiteListProps;
