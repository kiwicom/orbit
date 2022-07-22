import * as React from "react";

type UseToggle = (initial?: boolean) => [boolean, () => void];

const useToggle: UseToggle = (initial = false) => {
  const [open, setOpen] = React.useState(initial);

  const toggle = React.useCallback(() => setOpen(state => !state), []);

  return [open, toggle];
};

export default useToggle;
