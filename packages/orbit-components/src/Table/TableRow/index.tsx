import * as React from "react";

import type * as Common from "../../common/types";

const TableRow = ({ dataTest, children }: React.PropsWithChildren<Common.Globals>) => (
  <tr className="box-border w-full whitespace-nowrap" data-test={dataTest}>
    {children}
  </tr>
);

export default TableRow;
