// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../defaultTokens";
import FormLabel from "../FormLabel";
import { FakeInput, Input, InputContainer } from "../InputField";
import { SelectContainer } from "../Select";
import FormFeedback from "../FormFeedback";
import { SIZE_OPTIONS, TOKENS } from "./consts";

import type { Props, State } from "./index";

const getToken = name => ({ theme, size }) => {
  const tokens = {
    [TOKENS.height]: {
      [SIZE_OPTIONS.SMALL]: theme.orbit.heightInputSmall,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.heightInputNormal,
    },
    [TOKENS.heightLine]: {
      [SIZE_OPTIONS.SMALL]: "16px",
      [SIZE_OPTIONS.NORMAL]: "24px",
    },
  };

  return tokens[name][size];
};

const FakeGroup = styled(({ children, className }) => <div className={className}>{children}</div>)`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  box-sizing: border-box;
  height: ${getToken(TOKENS.height)};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  box-shadow: ${({ theme }) =>
    `inset 0 0 0 ${theme.orbit.borderWidthInput} ${theme.orbit.borderColorInput}`}; // Normal state
  box-shadow: ${({ theme, error }) =>
    error &&
    `inset 0 0 0 ${theme.orbit.borderWidthInput} ${
      theme.orbit.borderColorInputError
    }`}; // Error state
  box-shadow: ${({ theme, active }) =>
    active &&
    `inset 0 0 0 ${theme.orbit.borderWidthInputFocus} ${
      theme.orbit.borderColorInputFocus
    }`}; // Active state
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.orbit.backgroundInputDisabled : theme.orbit.backgroundInput};
  font-size: ${({ theme }) => theme.orbit.fontSizeInputNormal};
  transition: box-shadow ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  margin-top: 23px;

  &:hover {
    box-shadow: inset 0 0 0
      ${({ theme, error }) =>
        `${theme.orbit.borderWidthInput} ${
          error ? theme.orbit.borderColorInputErrorHover : theme.orbit.borderColorInputHover
        }`};
  }
`;

FakeGroup.defaultProps = {
  theme: defaultTokens,
};

const StyledChildren = styled.div`
  display: flex;
  position: relative;
`;

const StyledChild = styled.div`
  flex: ${({ flex }) => flex};
  padding-right: ${({ theme }) => theme.orbit.spaceXSmall};
  :last-child {
    padding-right: 0;
  }
`;
StyledChild.defaultProps = {
  theme: defaultTokens,
};

const StyledInputGroup = styled(({ children, className, dataTest }) => (
  <div className={className} data-test={dataTest}>
    {children}
  </div>
))`
  display: flex;
  flex-direction: column;
  position: relative;

  ${StyledChild} {
    ${FakeInput} {
      box-shadow: none;
      background-color: transparent;
      display: none;
      align-items: center;
      justify-content: flex-end;
    }

    ${SelectContainer} {
      background-color: transparent;
      > select {
        box-shadow: none;
        background-color: transparent;
        &:focus {
          box-shadow: none;
        }
      }
    }

    ${InputContainer}:after, ${SelectContainer}:after {
      content: " ";
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      height: ${getToken(TOKENS.heightLine)};
      width: 1px;
      background-color: ${({ theme, error, active }) =>
        error && !active ? theme.orbit.borderColorInputError : theme.orbit.borderColorInput};
      transition: background-color ${({ theme }) => theme.orbit.durationFast} ease-in-out;
      display: block;
      z-index: 2;
    }

    &:last-child {
      ${InputContainer}:after, ${SelectContainer}:after {
        content: none;
      }
    }
  }

  ${StyledChild} ${FormLabel} {
    display: ${({ label }) => label && "none"};
  }

  ${Input}:focus ~ ${FakeInput} {
    box-shadow: none;
  }
`;

StyledInputGroup.defaultProps = {
  theme: defaultTokens,
};

class InputGroup extends React.PureComponent<Props, State> {
  state = {
    active: false,
    filled: false,
  };

  componentDidMount() {
    this.isFilled();
  }

  componentDidUpdate() {
    this.isFilled();
  }

  isFilled = () =>
    this.setState({
      filled: !React.Children.map(
        this.props.children,
        child => child.props.value !== undefined && child.props.value !== "",
      ).includes(false),
    });

  handleFocus = (ev: SyntheticInputEvent<HTMLInputElement>) => {
    const { onFocus } = this.props;

    this.setState({ active: true });
    if (onFocus) {
      onFocus(ev);
    }
  };

  handleBlur = (ev: SyntheticInputEvent<HTMLInputElement>) => {
    const { onBlur } = this.props;
    this.isFilled();

    this.setState({ active: false });
    if (onBlur) {
      onBlur(ev);
    }
  };

  handleChange = (ev: SyntheticInputEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    this.isFilled();

    if (onChange) {
      onChange(ev);
    }
  };

  render() {
    const {
      children,
      label,
      flex = "0 1 auto",
      size = SIZE_OPTIONS.NORMAL,
      help,
      error,
      dataTest,
    } = this.props;
    const { active, filled } = this.state;

    return (
      <StyledInputGroup label={label} error={error} active={active} size={size} dataTest={dataTest}>
        {label && <FormLabel filled={filled}>{label}</FormLabel>}
        <StyledChildren>
          {React.Children.map(children, (item, key) => {
            // either array, array with one length or string
            // if it's not defined, use the first or string
            const childFlex =
              Array.isArray(flex) && flex.length !== 1 ? flex[key] || flex[0] : flex;
            return (
              <StyledChild flex={childFlex}>
                {
                  <item.type
                    {...item.props}
                    size={size}
                    label={undefined}
                    help={undefined}
                    error={undefined}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                  />
                }
              </StyledChild>
            );
          })}
        </StyledChildren>
        <FakeGroup label={label} error={error} active={active} size={size} />
        {!error && help && <FormFeedback type="help">{help}</FormFeedback>}
        {error && <FormFeedback type="error">{error}</FormFeedback>}
      </StyledInputGroup>
    );
  }
}

export default InputGroup;
