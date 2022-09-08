import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../defaultTheme";
import FormLabel from "../../FormLabel";
import { FakeInput, Input, InputContainer } from "../InputField";
import { SelectContainer } from "../Select";
import FormFeedback from "../FormFeedback";
import { SIZE_OPTIONS, TOKENS } from "./consts";
import { right, rtlSpacing } from "../../utils/rtl";
import getSpacingToken from "../../common/getSpacingToken";
import randomID from "../../utils/randomID";
import formElementFocus from "../InputField/helpers/formElementFocus";
import mq from "../../utils/mediaQuery";
import { Props } from "./types";

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

const FakeGroup = styled(({ children, className }) => (
  <span className={className}>{children}</span>
))`
  ${({ theme, error, disabled, active }) => css`
    width: 100%;
    display: block;
    position: absolute;
    top: 0px;
    left: 0;
    z-index: 1;
    box-sizing: border-box;
    height: ${getToken(TOKENS.height)};
    box-shadow: ${`inset 0 0 0 ${theme.orbit.borderWidthInput} ${theme.orbit.borderColorInput}`}; // Normal state
    box-shadow: ${error &&
    `inset 0 0 0 ${theme.orbit.borderWidthInput} ${theme.orbit.borderColorInputError}`}; // Error state
    ${active && formElementFocus}; // Active state
    background-color: ${disabled
      ? theme.orbit.backgroundInputDisabled
      : theme.orbit.backgroundInput};
    font-size: ${theme.orbit.fontSizeInputNormal};
    transition: box-shadow ${theme.orbit.durationFast} ease-in-out;

    border-radius: 6px;
    ${mq.tablet(css`
      border-radius: ${theme.orbit.borderRadiusNormal};
    `)};

    &:hover {
      box-shadow: inset 0 0 0
        ${`${theme.orbit.borderWidthInput} ${
          error ? theme.orbit.borderColorInputErrorHover : theme.orbit.borderColorInputHover
        }`};
    }
  `}
`;

FakeGroup.defaultProps = {
  theme: defaultTheme,
};

const StyledChildren = styled.div`
  display: flex;
  position: relative;
`;

const StyledChild = styled.div<{ flex?: Props["flex"] }>`
  flex: ${({ flex }) => flex};
  padding: ${({ theme }) => rtlSpacing(`0 ${theme.orbit.spaceXSmall} 0 0`)};
  :last-child {
    padding: 0;
  }
`;

StyledChild.defaultProps = {
  theme: defaultTheme,
};

const StyledInputGroup = styled(
  ({ children, className, dataTest, role, ariaLabelledby, forwardRef, dataState }) => (
    <div
      data-state={dataState}
      ref={forwardRef}
      className={className}
      data-test={dataTest}
      role={role}
      aria-labelledby={ariaLabelledby}
    >
      {children}
    </div>
  ),
)`
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;
  margin-bottom: ${getSpacingToken};

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
      top: 50%;
      transform: translateY(-50%);
      ${right}: 0;
      height: ${getToken(TOKENS.heightLine)};
      width: 1px;
      background-color: ${({ theme, error, active }) =>
        error && !active ? theme.orbit.borderColorInputError : theme.orbit.borderColorInput};
      transition: background-color ${({ theme }) => theme.orbit.durationFast} ease-in-out;
      display: block;
      z-index: 2;
    }

    &:last-of-type {
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
  theme: defaultTheme,
};

const findPropInChild = (propToFind, children) => {
  return React.Children.toArray(children)
    .map(el => {
      // @ts-expect-error ts-migrate will be removed after deprecation
      if (el.props && typeof el.props[propToFind] !== "undefined") return el.props[propToFind];
      return null;
    })
    .filter(el => el !== null && el !== "");
};

const InputGroup = ({
  children,
  label,
  flex = "0 1 auto",
  size = SIZE_OPTIONS.NORMAL,
  help,
  error,
  dataTest,
  spaceAfter = "medium",
  onFocus,
  onBlur,
  onChange,
}: Props) => {
  const [active, setActive] = React.useState(false);
  const [filled, setFilled] = React.useState(false);
  const inputID = React.useMemo(() => randomID("inputGroupID"), []);

  const isFilled = React.useCallback(
    () =>
      setFilled(
        findPropInChild("value", children).length === React.Children.toArray(children).length,
      ),
    [children],
  );

  React.useEffect(() => {
    isFilled();
  }, [isFilled]);

  const handleFocus = (ev: React.SyntheticEvent<HTMLInputElement>) => {
    setActive(true);
    if (onFocus) {
      onFocus(ev);
    }
  };

  const handleBlur = (ev: React.SyntheticEvent<HTMLInputElement>) => {
    isFilled();
    setActive(false);
    if (onBlur) {
      onBlur(ev);
    }
  };

  const handleChange = (ev: React.SyntheticEvent<HTMLInputElement>) => {
    isFilled();

    if (onChange) {
      onChange(ev);
    }
  };

  return (
    <StyledInputGroup
      label={label}
      error={error}
      active={active}
      size={size}
      dataTest={dataTest}
      spaceAfter={spaceAfter}
      role="group"
      ariaLabelledby={label && inputID}
    >
      {label && (
        <FormLabel filled={filled} id={inputID}>
          {label}
        </FormLabel>
      )}
      <StyledChildren>
        {React.Children.map(children, (item, key) => {
          // either array, array with one length or string
          // if it's not defined, use the first or string
          const childFlex = Array.isArray(flex) && flex.length !== 1 ? flex[key] || flex[0] : flex;
          return (
            <StyledChild flex={childFlex}>
              {/* @ts-expect-error suppressed until removed */}
              {React.cloneElement(item, {
                size,
                label: undefined,
                help: undefined,
                error: undefined,
                /* @ts-expect-error suppressed until removed */
                onChange: item.props.onChange != null ? item.props.onChange : handleChange,
                /* @ts-expect-error suppressed until removed */
                onBlur: item.props.onBlur != null ? item.props.onChange : handleBlur,
                /* @ts-expect-error suppressed until removed */
                onFocus: item.props.onFocus != null ? item.props.onFocus : handleFocus,
              })}
            </StyledChild>
          );
        })}
        <FakeGroup label={label} error={error} active={active} size={size} />
      </StyledChildren>
      <FormFeedback error={error} help={help} />
    </StyledInputGroup>
  );
};

export default InputGroup;
