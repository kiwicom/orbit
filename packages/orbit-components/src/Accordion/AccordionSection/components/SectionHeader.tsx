import React from "react";
import cx from "clsx";

import Button from "../../../Button";
import type * as Common from "../../../common/types";

interface Props extends Common.Globals {
  readonly children: React.ReactNode;
  readonly expanded: boolean;
  readonly expandable: boolean;
  readonly onExpand?: Common.Callback;
  readonly actions?: React.ReactNode;
}

const AccordionSectionHeader = ({
  children,
  actions,
  expanded,
  onExpand,
  expandable,
  dataTest,
}: Props) => (
  <div
    className={cx(
      "p-lg bg-white-normal flex items-center",
      expanded ? "min-h-[19px]" : "min-h-[44px]",
    )}
    data-test={dataTest && `${dataTest}Header`}
  >
    <div className="flex grow items-center">{children}</div>
    {!expanded && (
      <div className="ms-lg flex">
        {expandable &&
          (actions || (
            <Button onClick={onExpand} type="secondary">
              Open
            </Button>
          ))}
      </div>
    )}
  </div>
);

export default AccordionSectionHeader;
