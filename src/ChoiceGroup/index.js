// @flow
import * as React from "react";
import styled from "styled-components";

import Heading from "../Heading";
import Stack from "../Stack";
import { LABEL_SIZES, LABEL_ELEMENTS } from "./consts";

import type { Props } from "./index";

const getHeadingSize = size => {
  const SIZES = {
    [LABEL_SIZES.NORMAL]: "title3",
    [LABEL_SIZES.LARGE]: "title2",
  };
  return SIZES[size];
};

const StyledChoiceGroup = styled.div`
  width: 100%;
`;

class ChoiceGroup extends React.PureComponent<Props> {
  handleChange = (ev: SyntheticInputEvent<HTMLInputElement>) => {
    ev.persist();
    const { onChange } = this.props;
    if (onChange) {
      onChange(ev);
    }
  };

  render() {
    const {
      dataTest,
      label,
      labelSize = LABEL_SIZES.NORMAL,
      labelElement = LABEL_ELEMENTS.H4,
      children,
    } = this.props;
    return (
      <StyledChoiceGroup data-test={dataTest}>
        {label && (
          <Heading type={getHeadingSize(labelSize)} element={labelElement} spaceAfter="small">
            {label}
          </Heading>
        )}
        <Stack direction="column" spacing="condensed">
          {React.Children.map(children, child =>
            React.cloneElement(child, {
              onChange: this.handleChange,
              hasError: this.props.hasError,
            }),
          )}
        </Stack>
      </StyledChoiceGroup>
    );
  }
}

export default ChoiceGroup;
