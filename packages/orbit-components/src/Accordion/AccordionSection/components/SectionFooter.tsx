import React from "react";

import type * as Common from "../../../common/types";

interface Props extends Common.Globals {
  children: React.ReactNode;
}

const AccordionSectionFooter = ({ children, dataTest }: Props) => (
  <div
    // the border-radius is calculated based on the border-radius and border-width of the AccordionSection component
    // outer border-radius is 4px, border-width is 1px so inner border-radius is 4px - 1px = 3px
    className="p-600 rounded-b-100 shadow-level2 sticky bottom-0 flex"
    data-test={dataTest && `${dataTest}Footer`}
  >
    {children}
  </div>
);

export default AccordionSectionFooter;
