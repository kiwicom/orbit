import * as React from "react";
import cx from "clsx";

import ButtonLink from "../../ButtonLink";

interface Props {
  readonly child: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  readonly children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  readonly onlySelectionText: React.ReactNode;
  readonly onOnlySelection?: (
    ev: React.SyntheticEvent<HTMLButtonElement | HTMLAnchorElement>,
    obj: Record<"label" | "value", string>,
  ) => void | Promise<void>;
}

const FilterWrapper = ({ child, children, onOnlySelection, onlySelectionText }: Props) => {
  const { value, label, disabled } = child.props;

  return (
    <div
      className={cx(
        "h-form-box-small pl-xxs box-border flex w-full items-center rounded-[4px]",
        !disabled &&
          "hover:[@media(hover)_and_(pointer:fine)]:bg-blue-light focus-within:[@media(hover)_and_(pointer:fine)]:bg-blue-light group",
      )}
    >
      {children}
      {onOnlySelection && !disabled && (
        <div
          className={cx(
            "orbit-choice-group-filter-wrapper",
            "[@media(hover)_and_(pointer:fine)]:invisible [@media(hover)_and_(pointer:fine)]:opacity-0",
            "[@media(hover:none)]:visible [@media(hover:none)]:opacity-30 hover:[@media(hover:none)]:opacity-100",
            "group-hover:[@media(hover)_and_(pointer:fine)]:visible group-hover:[@media(hover)_and_(pointer:fine)]:opacity-100",
            "group-focus-within:[@media(hover)_and_(pointer:fine)]:visible group-focus-within:[@media(hover)_and_(pointer:fine)]:opacity-100",
          )}
        >
          <ButtonLink
            type="secondary"
            size="small"
            onClick={ev => {
              onOnlySelection(ev, { value, label });
            }}
          >
            {onlySelectionText}
          </ButtonLink>
        </div>
      )}
    </div>
  );
};

export default FilterWrapper;
