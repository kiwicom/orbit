import * as React from "react";

import type * as Common from "../../common/types";

const TableHead = ({ children, dataTest }: React.PropsWithChildren<Common.Globals>) => (
  <thead
    className="border-b-cloud-dark w-full whitespace-nowrap border-b font-bold"
    data-test={dataTest}
  >
    {children}
  </thead>
);

export default TableHead;
