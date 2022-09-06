import * as React from "react";

import { UseToggle } from "./index.d";

const useToggle: typeof UseToggle = (initial = false) => {
  const [open, setOpen] = React.useState(initial);

  const toggle = React.useCallback(() => setOpen(state => !state), []);

  return [open, toggle];
};

export default useToggle;
