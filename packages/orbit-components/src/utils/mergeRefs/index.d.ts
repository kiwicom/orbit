import * as React from "react";

declare const mergeRefs: <T>(
  refs: (React.MutableRefObject<T> | React.LegacyRef<T>)[],
) => React.RefCallback<T>;

export default mergeRefs;
