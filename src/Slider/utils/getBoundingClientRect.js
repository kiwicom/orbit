// @flow
import type { GetBoundingClientRect } from "./getBoundingClientRect";

const getBoundingClientRect: GetBoundingClientRect = ref => {
  if (ref && ref.current) {
    return ref.current.getBoundingClientRect();
  }
  return null;
};

export default getBoundingClientRect;
