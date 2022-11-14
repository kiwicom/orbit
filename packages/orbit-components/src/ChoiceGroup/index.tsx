import * as React from "react";
import styled from "styled-components";

import Heading from "../Heading";
import { Type } from "../Heading/types";
import Stack from "../Stack";
import { LABEL_SIZES, LABEL_ELEMENTS } from "./consts";
import Feedback, { StyledFormFeedback } from "./components/Feedback";
import defaultTheme from "../defaultTheme";
import FilterWrapper from "./components/FilterWrapper";
import useRandomId from "../hooks/useRandomId";
import useTheme from "../hooks/useTheme";
import { Props, Size } from "./types";

const getHeadingSize = (size: Size): Type => {
  const SIZES: Record<Size, Type> = {
    [LABEL_SIZES.NORMAL]: "title3",
    [LABEL_SIZES.LARGE]: "title2",
  };

  return SIZES[size];
};

const StyledChoiceGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${StyledFormFeedback} {
    position: relative;
    margin-top: ${({ theme }) => theme.orbit.spaceXSmall};
    top: initial;
  }
`;

StyledChoiceGroup.defaultProps = {
  theme: defaultTheme,
};

const ChoiceGroup = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      dataTest,
      id,
      label,
      labelSize = LABEL_SIZES.NORMAL,
      labelAs = LABEL_ELEMENTS.H4,
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

    const handleChange = (ev: React.SyntheticEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(ev);
      }
    };

    const itemProps = {
      onChange: handleChange,
      hasError: Boolean(error),
    };

    return (
      <StyledChoiceGroup
        ref={ref}
        data-test={dataTest}
        role="group"
        aria-labelledby={groupID}
        id={id}
      >
        {label && (
          <Heading id={groupID} type={getHeadingSize(labelSize)} as={labelAs} spaceAfter="medium">
            {label}
          </Heading>
        )}
        {typeof children === "function" ? (
          children({
            // for now a plain <div> is all we need, but we're reserving this space in the API
            // in case we'll need something more in the future
            Container: "div",
            Item: ({ children: itemChildren }) => {
              return !filter ? (
                // @ts-expect-error TODO
                React.cloneElement(React.Children.only(itemChildren), itemProps)
              ) : (
                <FilterWrapper
                  // @ts-expect-error TODO
                  child={React.Children.only(itemChildren)}
                  onOnlySelection={onOnlySelection}
                  onlySelectionText={onlySelectionText}
                >
                  {/* @ts-expect-error TODO */}
                  {React.cloneElement(React.Children.only(itemChildren), itemProps)}
                </FilterWrapper>
              );
            },
            spacing: filter ? "0px" : theme.orbit.spaceXSmall,
          })
        ) : (
          <Stack direction="column" spacing={filter ? "none" : "XSmall"}>
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
      </StyledChoiceGroup>
    );
  },
);

export default ChoiceGroup;
export { Props, Size };
