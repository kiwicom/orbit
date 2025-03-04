import React from "react";
import cx from "clsx";

import type * as Common from "../../../common/types";

interface Props extends Common.Globals {
  readonly children: React.ReactNode;
  readonly expanded: boolean;
  readonly expandable: boolean;
  readonly expandOnTileClick?: boolean;
  readonly onExpand?: Common.Callback;
  readonly actions?: React.ReactNode;
  readonly ariaControls?: string;
}

const AccordionSectionHeader = ({
  children,
  actions,
  expanded,
  expandOnTileClick,
  onExpand,
  expandable,
  dataTest,
  ariaControls,
}: Props) => {
  const isInteractive = expandOnTileClick && !expanded && expandable;

  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      onExpand?.();
    },
    [onExpand],
  );

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onExpand?.();
      }
    },
    [onExpand],
  );

  const content = (
    <>
      <div className="flex grow items-center">{children}</div>
      {!expanded && expandable && actions && <div className="ms-600 flex">{actions}</div>}
    </>
  );

  return (
    <div
      className={cx(
        "p-600 bg-white-normal flex w-full items-center rounded-[inherit]",
        expanded ? "min-h-[19px]" : "min-h-form-box-normal",
        isInteractive && "hover:bg-cloud-light cursor-pointer border-0 bg-transparent text-left",
      )}
      data-test={dataTest && `${dataTest}Header`}
      {...(isInteractive && {
        role: "button",
        onClick: handleClick,
        onKeyDown: handleKeyDown,
        tabIndex: 0,
        "aria-controls": ariaControls,
        "aria-expanded": expanded || undefined,
      })}
    >
      {content}
    </div>
  );
};

export default AccordionSectionHeader;
