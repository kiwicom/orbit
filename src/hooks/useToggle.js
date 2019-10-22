// @flow strict
import * as React from "react";

import type { UseToggle } from "./useToggle";

const useToggle: UseToggle = (initial = false) => {
  const [open, setOpen] = React.useState(initial);

  const toggle = React.useCallback(() => setOpen(state => !state), []);

  return [open, toggle];
};

export default useToggle;
