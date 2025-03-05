"use client";

import * as React from "react";
import cx from "clsx";

import Heading from "../Heading";
import type { Type } from "../Heading/types";
import Stack from "../Stack";
import { LABEL_SIZES } from "./consts";
import Feedback from "./components/Feedback";
import FilterWrapper from "./components/FilterWrapper";
import useRandomId from "../hooks/useRandomId";
import useTheme from "../hooks/useTheme";
import type { Props, Size } from "./types";

const getHeadingSize = (size: Size): Type => {
  const SIZES: Record<Size, Type> = {
    [LABEL_SIZES.NORMAL]: "title3",
    [LABEL_SIZES.LARGE]: "title2",
  };

  return SIZES[size];
};

const ItemContainer =
  ({ filter, itemProps, onOnlySelection, onlySelectionText }) =>
  ({ children }) => {
    return !filter ? (
      React.cloneElement(React.Children.only(children), itemProps)
    ) : (
      <FilterWrapper
        child={React.Children.only(children)}
        onOnlySelection={onOnlySelection}
        onlySelectionText={onlySelectionText}
      >
        {React.cloneElement(React.Children.only(children), itemProps)}
      </FilterWrapper>
    );
  };

const ChoiceGroup = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      dataTest,
      id,
      label,
      labelSize = LABEL_SIZES.NORMAL,
      labelAs = "div",
      error,
      children,
      filter,
      onOnlySelection,
      onlySelectionText,
      onChange,
    },
    ref,
  ) => {
    const groupID = useRandomId();
    const theme = useTheme();

    const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(ev);
      }
    };

    const itemProps = {
      onChange: handleChange,
      hasError: Boolean(error),
    };

    return (
      <div
        ref={ref}
        data-test={dataTest}
        role="group"
        aria-labelledby={label ? groupID : undefined}
        id={id}
        className={cx(
          "flex w-full flex-col",
          "[&_.orbit-choice-group-feedback]:mt-200 [&_.orbit-choice-group-feedback]:relative [&_.orbit-choice-group-feedback]:top-[initial]",
        )}
      >
        {label && (
          <Heading
            id={groupID}
            type={getHeadingSize(labelSize)}
            as={labelAs}
            role={undefined}
            spaceAfter="medium"
          >
            {label}
          </Heading>
        )}
        {typeof children === "function" ? (
          children({
            Container: "div",
            Item: ItemContainer({ filter, onOnlySelection, onlySelectionText, itemProps }),
            spacing: filter ? "0px" : theme.orbit.space200,
          })
        ) : (
          <Stack direction="column" spacing={filter ? "none" : "200"}>
            {React.Children.map(children, child => {
              return !filter ? (
                // @ts-expect-error TODO
                React.cloneElement(child, itemProps)
              ) : (
                <FilterWrapper
                  // @ts-expect-error TODO
                  child={child}
                  onOnlySelection={onOnlySelection}
                  onlySelectionText={onlySelectionText}
                >
                  {/* @ts-expect-error TODO */}
                  {React.cloneElement(child, itemProps)}
                </FilterWrapper>
              );
            })}
          </Stack>
        )}
        {error && <Feedback>{error}</Feedback>}
      </div>
    );
  },
);

export default ChoiceGroup;
