// @flow
import type { MergeRefs } from ".";

const mergeRefs: MergeRefs<any> = refs => {
  return (value: any): any => {
    refs.forEach(ref => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        // eslint-disable-next-line no-param-reassign
        ref.current = value;
      }
    });
  };
};

export default mergeRefs;
