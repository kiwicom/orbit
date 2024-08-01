import React from "react";

import type * as Common from "../../../common/types";

interface Props extends Common.Globals {
  children: React.ReactNode;
}

const AccordionSectionContent = ({ children, dataTest }: Props) => (
  <div className="px-600 pb-600" data-test={dataTest && `${dataTest}Content`}>
    {children}
  </div>
);

export default AccordionSectionContent;
