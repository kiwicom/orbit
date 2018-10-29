// @flow
import * as React from "react";
import styled from "styled-components";

import FormLabel from "../FormLabel";
import defaultTokens from "../defaultTokens";

import type { Props, State } from "./index";

const StyledRadioGroup = styled.div`
  width: 100%;
`;

const Label = styled(FormLabel)`
  margin-bottom: ${({ theme }) => theme.orbit.spaceXSmall};
`;

Label.defaultProps = {
  theme: defaultTokens,
};

const StyledRadioGroupChild = styled.div`
  margin-bottom: ${({ info, theme }) =>
    info ? theme.orbit.spaceXXSmall : theme.orbit.spaceXSmall};

  :last-child {
    margin: 0;
  }
`;

StyledRadioGroupChild.defaultProps = {
  theme: defaultTokens,
};

class RadioGroup extends React.PureComponent<Props, State> {
  state = {
    value: this.props.defaultValue || false,
  };

  handleChange = (ev: SyntheticInputEvent<HTMLInputElement>) => {
    const { value } = ev.target;
    const { onChange } = this.props;
    if (value) {
      this.setState({ value });
      if (onChange && value) {
        onChange(value);
      }
    }
  };

  render() {
    const { dataTest, label, children, disabled, hasError } = this.props;
    const { value } = this.state;
    return (
      <StyledRadioGroup data-test={dataTest}>
        {label && (
          <Label filled={!!value} disabled={disabled}>
            {label}
          </Label>
        )}
        {React.Children.map(children, item => (
          <StyledRadioGroupChild info={!!item.props.info}>
            {React.cloneElement(item, {
              checked: value === item.props.value,
              disabled,
              hasError: !value && hasError,
              onChange: this.handleChange,
            })}
          </StyledRadioGroupChild>
        ))}
      </StyledRadioGroup>
    );
  }
}

export default RadioGroup;
