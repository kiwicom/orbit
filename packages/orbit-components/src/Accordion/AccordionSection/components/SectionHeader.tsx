import React from "react";
import cx from "clsx";

import Button from "../../../Button";
import type * as Common from "../../../common/types";

interface Props extends Common.Globals {
  readonly children: React.ReactNode;
  readonly expanded: boolean;
  readonly expandable: boolean;
  readonly expandOnTileClick?: boolean;
  readonly onExpand?: Common.Callback;
  readonly actions?: React.ReactNode;
}

const AccordionSectionHeader = ({
  children,
  actions,
  expanded,
  expandOnTileClick,
  onExpand,
  expandable,
  dataTest,
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

  const handleButtonClick = React.useCallback(
    (e: React.SyntheticEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      e.stopPropagation();
      onExpand?.();
    },
    [onExpand],
  );

  const content = (
    <>
      <div className="flex grow items-center">{children}</div>
      {!expanded && expandable && (
        <div className="ms-600 flex">
          {actions || (
            <Button onClick={handleButtonClick} type="secondary">
              Open
            </Button>
          )}
        </div>
      )}
    </>
  );

  return (
    <div
      // the border-radius is calculated based on the border-radius and border-width of the AccordionSection component
      // outer border-radius is 4px, border-width is 1px so inner border-radius is 4px - 1px = 3px
      className={cx(
        "p-600 bg-white-normal flex w-full items-center rounded-[3px]",
        expanded ? "min-h-[19px]" : "min-h-form-box-normal",
        isInteractive && "hover:bg-cloud-light cursor-pointer border-0 bg-transparent text-left",
      )}
      data-test={dataTest && `${dataTest}Header`}
      aria-expanded={expanded}
      {...(isInteractive && {
        role: "button",
        onClick: handleClick,
        onKeyDown: handleKeyDown,
        tabIndex: 0,
      })}
    >
      {content}
    </div>
  );
};

export default AccordionSectionHeader;
