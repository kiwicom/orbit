import * as React from "react";

import ButtonLink from "../../ButtonLink";
import Close from "../../icons/Close";
import type { Props } from "./types";

const DrawerClose = ({ onClick, title, ref }: Props) => {
  return (
    <div className="ms-400">
      <ButtonLink onClick={onClick} iconLeft={<Close />} ref={ref} type="secondary" title={title} />
    </div>
  );
};

export default DrawerClose;
