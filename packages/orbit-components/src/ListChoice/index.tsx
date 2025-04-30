"use client";

import * as React from "react";
import cx from "clsx";

import Heading from "../Heading";
import { FakeCheckbox } from "../Checkbox";
import Text from "../Text";
import handleKeyDown from "../utils/handleKeyDown";
import type { Props } from "./types";

const ListChoice = ({
  ref,
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
  selected = false,
  disabled,
}: Props) => {
  return (
    <div
      className={cx(
        "orbit-list-choice",
        "py-300 px-400 box-border flex w-full items-center",
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
      aria-checked={selectable ? selected : undefined}
      role={role || (selectable && "checkbox") || (!action && "button") || undefined}
    >
      {icon && (
        <div
          className={cx(
            "me-200 h-icon-medium flex flex-none items-center self-start",
            "[&_svg]:size-icon-medium [&_svg]:text-icon-primary-foreground [&_svg]:self-center",
            "[&_svg]:duration-fast [&_svg]:transition-[color] [&_svg]:ease-in-out",
          )}
        >
          {icon}
        </div>
      )}
      <div className="pe-300 flex w-full flex-col justify-center">
        <Heading type="title4">{title}</Heading>
        {description && (
          <Text type="secondary" size="small">
            {description}
          </Text>
        )}
      </div>
      {selectable && <FakeCheckbox checked={selected} disabled={disabled} />}
      {!selectable && action}
    </div>
  );
};

export default ListChoice;
