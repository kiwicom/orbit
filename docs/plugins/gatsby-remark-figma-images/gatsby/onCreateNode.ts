import remarkTransform from "./remark-transform";

export default async function onCreateNode(props, options) {
  return remarkTransform(props, options);
}
