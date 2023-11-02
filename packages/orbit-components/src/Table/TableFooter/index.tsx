import * as React from "react";

import type * as Common from "../../common/types";

const TableFooter = ({ children, dataTest }: React.PropsWithChildren<Common.Globals>) => (
  <tfoot className="bg-cloud-normal w-full whitespace-nowrap font-bold" data-test={dataTest}>
    {children}
  </tfoot>
);

export default TableFooter;
