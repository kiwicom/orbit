// @flow

const ALLOWED_PROPS = [
  "size",
  "color",
  "customColor",
  "className",
  "dataTest",
  "ariaHidden",
  "reverseOnRtl",
  "ariaLabel",
  "viewBox",
  "dataTest",
];

const whiteListProps = props =>
  Object.assign({}, ...ALLOWED_PROPS.map(k => (k in props ? { [k]: props[k] } : {})));

export default whiteListProps;
