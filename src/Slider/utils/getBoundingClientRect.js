// @flow
const getBoundingClientRect = ref => {
  if (ref && ref.current) {
    return ref.current.getBoundingClientRect();
  }
  return null;
};

export default getBoundingClientRect;
