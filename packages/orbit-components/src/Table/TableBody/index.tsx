import * as React from "react";

import type * as Common from "../../common/types";

const TableBody = ({ children, dataTest }: React.PropsWithChildren<Common.Globals>) => (
  <tbody className="border-b-cloud-normal w-full whitespace-nowrap border-b" data-test={dataTest}>
    {children}
  </tbody>
);

export default TableBody;
