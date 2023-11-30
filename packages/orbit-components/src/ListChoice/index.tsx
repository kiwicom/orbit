"use client";

import * as React from "react";
import cx from "clsx";

import Heading from "../Heading";
import Checkbox from "../Checkbox";
import Text from "../Text";
import handleKeyDown from "../utils/handleKeyDown";
import type { Props } from "./types";

const ListChoice = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      dataTest,
      id,
      icon,
      action,
      title,
      description,
      selectable,
      role,
      onClick,
      tabIndex = 0,
      selected,
      disabled,
    },
    ref,
  ) => {
    const conditionalProps = {
      ...(selectable ? { "aria-checked": selected } : null),
    };

    return (
      <div
        className={cx(
          "orbit-list-choice",
          "py-sm px-md box-border flex w-full items-center",
          "border-b-cloud-normal bg-white-normal border-b border-solid",
          "duration-fast transition-[background-color] ease-in-out",
          disabled ? "cursor-not-allowed" : "hover:bg-cloud-light cursor-pointer",
          "hover:outline-none [&_button]:hover:bg-transparent",
          "[&_.orbit-checkbox-label]:w-auto",
        )}
        onClick={!disabled ? onClick : undefined}
        data-test={dataTest}
        id={id}
        ref={ref}
        onKeyDown={!disabled ? handleKeyDown<HTMLDivElement>(onClick) : undefined}
        tabIndex={tabIndex || disabled ? -1 : 0}
        data-title={title}
        aria-disabled={disabled}
        aria-selected={selected}
        role={role || (selectable ? "checkbox" : "button")}
        {...conditionalProps}
      >
        {icon && (
          <div
            className={cx(
              "me-xs h-icon-medium flex flex-none items-center self-start",
              "[&_svg]:w-icon-medium [&_svg]:h-icon-medium [&_svg]:text-icon-primary-foreground [&_svg]:self-center",
              "[&_svg]:duration-fast [&_svg]:transition-[color] [&_svg]:ease-in-out",
            )}
          >
            {icon}
          </div>
        )}
        <div className="pe-sm flex w-full flex-col justify-center">
          <Heading type="title4">{title}</Heading>
          {description && (
            <Text type="secondary" size="small">
              {description}
            </Text>
          )}
        </div>
        {selectable && <Checkbox checked={selected} readOnly disabled={disabled} tabIndex={-1} />}
        {!selectable && action}
      </div>
    );
  },
);

ListChoice.displayName = "ListChoice";

export default ListChoice;
