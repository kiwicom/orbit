// @flow
import React, { useState, useMemo, useRef, useCallback, useEffect } from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";
import FormLabel from "../FormLabel";
import { FakeInput, Input, InputContainer } from "../InputField";
import { SelectContainer } from "../Select";
import FormFeedback from "../FormFeedback";
import { SIZE_OPTIONS, TOKENS } from "./consts";
import { right, rtlSpacing } from "../utils/rtl";
import getSpacingToken from "../common/getSpacingToken";
import randomID from "../utils/randomID";

import type { Props } from "./index";

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

const getFakeGroupMarginTop = ({ label, theme }) => {
  if (!label) return false;
  return `calc(${theme.orbit.lineHeightTextSmall} + ${theme.orbit.spaceXXSmall})`;
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
  margin-top: ${getFakeGroupMarginTop};

  &:hover {
    box-shadow: inset 0 0 0
      ${({ theme, error }) =>
        `${theme.orbit.borderWidthInput} ${
          error ? theme.orbit.borderColorInputErrorHover : theme.orbit.borderColorInputHover
        }`};
  }
`;

FakeGroup.defaultProps = {
  theme: defaultTheme,
};

const StyledChildren = styled.div`
  display: flex;
  position: relative;
`;

const StyledChild = styled.div`
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
  ({ children, className, dataTest, role, ariaLabelledby, labelRef }) => (
    <div
      ref={labelRef}
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
  theme: defaultTheme,
};

const InputGroup = ({
  children,
  label,
  flex = "0 1 auto",
  size = SIZE_OPTIONS.NORMAL,
  help,
  error,
  dataTest,
  spaceAfter,
  onFocus,
  onBlur,
  onChange,
}: Props) => {
  const [active, setActive] = useState(false);
  const [filled, setFilled] = useState(false);
  const [tooltipShown, setTooltipShown] = useState(false);
  const [tooltipShownHover, setTooltipShownHover] = useState(false);
  const labelRef = useRef(null);
  const iconRef = useRef(null);
  const inputID: string = useMemo(() => randomID("inputFieldID"), []);

  const isFilled = useCallback(() => {
    return () => {
      setFilled(
        !React.Children.map(
          children,
          child => child.props.value !== undefined && child.props.value !== "",
        ).includes(false),
      );
    };
  }, [children]);

  useEffect(() => {
    isFilled();
  }, [isFilled, children]);

  const handleFocus = (ev: SyntheticInputEvent<HTMLInputElement>) => {
    setActive(true);
    setTooltipShown(true);
    if (onFocus) {
      onFocus(ev);
    }
  };

  const handleBlur = (ev: SyntheticInputEvent<HTMLInputElement>) => {
    isFilled();
    setActive(false);
    setTooltipShown(false);
    if (onBlur) {
      onBlur(ev);
    }
  };

  const handleChange = (ev: SyntheticInputEvent<HTMLInputElement>) => {
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
      labelRef={label ? null : labelRef}
    >
      {label && (
        <FormLabel
          filled={filled}
          id={inputID}
          error={!!error}
          help={!!help}
          labelRef={labelRef}
          iconRef={iconRef}
          onMouseEnter={() => setTooltipShownHover(true)}
          onMouseLeave={() => setTooltipShownHover(false)}
        >
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
              {React.cloneElement(item, {
                ref: node => {
                  // Call the original ref, if any
                  const { ref } = item;
                  if (typeof ref === "function") {
                    ref(node);
                  } else if (ref !== null) {
                    ref.current = node;
                  }
                },
                size,
                label: undefined,
                help: undefined,
                error: undefined,
                onChange: handleChange,
                onBlur: handleBlur,
                onFocus: handleFocus,
              })}
            </StyledChild>
          );
        })}
      </StyledChildren>
      <FakeGroup label={label} error={error} active={active} size={size} />
      <FormFeedback
        help={help}
        error={error}
        iconRef={iconRef}
        labelRef={labelRef}
        tooltipShown={tooltipShown}
        tooltipShownHover={tooltipShownHover}
      />
    </StyledInputGroup>
  );
};

export default InputGroup;
