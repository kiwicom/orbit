import React from "react";

import type * as Common from "../../../common/types";

interface Props extends Common.Globals {
  children: React.ReactNode;
}

const AccordionSectionFooter = ({ children, dataTest }: Props) => (
  <div
    className="p-lg bg-white-normal shadow-action-active sticky bottom-0 flex"
    data-test={dataTest && `${dataTest}Footer`}
  >
    {children}
  </div>
);

export default AccordionSectionFooter;
