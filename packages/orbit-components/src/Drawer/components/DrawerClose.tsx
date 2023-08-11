import * as React from "react";

import ButtonLink from "../../ButtonLink";
import Close from "../../icons/Close";
import type { Props } from "./types";

const DrawerClose = React.forwardRef<HTMLButtonElement, Props>(({ onClick, title }, ref) => {
  return (
    <div className="ms-md">
      <ButtonLink onClick={onClick} iconLeft={<Close />} ref={ref} type="secondary" title={title} />
    </div>
  );
});

export default DrawerClose;
