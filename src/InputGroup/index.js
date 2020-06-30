// @flow
import React, { useState, useMemo, useRef, useCallback, useEffect } from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../defaultTheme";
import FormLabel from "../FormLabel";
import { FakeInput, Input, InputContainer } from "../InputField";
import { SelectContainer } from "../Select";
import FormFeedback from "../FormFeedback";
import { SIZE_OPTIONS, TOKENS } from "./consts";
import { right, rtlSpacing } from "../utils/rtl";
import getSpacingToken from "../common/getSpacingToken";
import randomID from "../utils/randomID";
import formElementFocus from "../InputField/helpers/formElementFocus";
import getFieldDataState from "../common/getFieldDataState";
import mq from "../utils/mediaQuery";

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

const FakeGroup = styled(({ children, className }) => (
  <span className={className}>{children}</span>
))`
  width: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  box-sizing: border-box;
  height: ${getToken(TOKENS.height)};
  box-shadow: ${({ theme }) =>
    `inset 0 0 0 ${theme.orbit.borderWidthInput} ${theme.orbit.borderColorInput}`}; // Normal state
  box-shadow: ${({ theme, error }) =>
    error &&
    `inset 0 0 0 ${theme.orbit.borderWidthInput} ${theme.orbit.borderColorInputError}`}; // Error state
  ${({ active }) => active && formElementFocus}; // Active state
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.orbit.backgroundInputDisabled : theme.orbit.backgroundInput};
  font-size: ${({ theme }) => theme.orbit.fontSizeInputNormal};
  transition: box-shadow ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  margin-top: ${getFakeGroupMarginTop};

  border-radius: 6px;
  ${mq.tablet(css`
    border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  `)};

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
  ({ children, className, dataTest, role, ariaLabelledby, labelRef, dataState }) => (
    <div
      data-state={dataState}
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
  return React.Children.map(children, el => {
    if (el.props && el.props[propToFind]) return el.props[propToFind];
    return null;
  }).filter(el => el != null);
};

const InputGroup = ({
  children,
  label,
  flex,
  size = SIZE_OPTIONS.NORMAL,
  dataTest,
  spaceAfter,
  onFocus,
  onBlur,
  onChange,
  onBlurGroup,
  error,
  help,
}: Props) => {
  const [active, setActive] = useState(false);
  const [filled, setFilled] = useState(false);
  const [tooltipShown, setTooltipShown] = useState(false);
  const [tooltipShownHover, setTooltipShownHover] = useState(false);
  const labelRef = useRef(null);
  const iconRef = useRef(null);
  const inputID: string = useMemo(() => randomID("inputFieldID"), []);
  const foundErrors = useMemo(() => findPropInChild("error", children), [children]);
  const foundHelp = useMemo(() => findPropInChild("help", children), [children]);

  const errorReal = error || (foundErrors.length > 0 && foundErrors[0]);
  const helpReal = help || (foundHelp.length > 0 && foundHelp[0]);

  const isFilled = useCallback(() => setFilled(findPropInChild("value", children).length > 0), [
    children,
  ]);

  useEffect(() => {
    isFilled();
  }, [isFilled, children]);

  const handleFocus = useCallback(
    (ev: SyntheticInputEvent<HTMLInputElement>, callBack) => {
      setActive(true);
      setTooltipShown(true);
      if (onFocus) onFocus(ev);
      if (callBack) callBack(ev);
    },
    [onFocus],
  );

  const handleBlur = useCallback(
    (ev: SyntheticInputEvent<HTMLInputElement>, callBack) => {
      isFilled();
      setActive(false);
      setTooltipShown(false);
      if (onBlur) onBlur(ev);
      if (callBack) callBack(ev);
    },
    [onBlur, isFilled],
  );

  const handleChange = useCallback(
    (ev: SyntheticInputEvent<HTMLInputElement>, callBack) => {
      isFilled();
      if (onChange) {
        onChange(ev);
      }
      if (callBack) callBack(ev);
    },
    [onChange, isFilled],
  );

  const handleBlurGroup = ev => {
    ev.persist();
    if (onBlurGroup) {
      setTimeout(() => {
        setActive(isActive => {
          if (!isActive) {
            onBlurGroup(ev);
          }
          return isActive;
        });
      }, 50);
    }
  };

  return (
    <StyledInputGroup
      label={label}
      error={errorReal}
      active={active}
      size={size}
      dataTest={dataTest}
      dataState={getFieldDataState(!!errorReal)}
      spaceAfter={spaceAfter}
      role="group"
      ariaLabelledby={label && inputID}
      labelRef={label ? null : labelRef}
    >
      {label && (
        <FormLabel
          filled={filled}
          id={inputID}
          error={!!errorReal}
          help={!!helpReal}
          labelRef={labelRef}
          iconRef={iconRef}
          onMouseEnter={() => setTooltipShownHover(true)}
          onMouseLeave={() => setTooltipShownHover(false)}
        >
          {label}
        </FormLabel>
      )}

      <StyledChildren onBlur={handleBlurGroup}>
        {React.Children.map(children, (item, key) => {
          // either array, array with one length or string
          // if it's not defined, use the first or string
          const childFlex = Array.isArray(flex) && flex.length !== 1 ? flex[key] || flex[0] : flex;
          return (
            /* Until flow-bin@0.104.0 it's impossible to assign default values to
            union types therefore, it's bypassed via declaring it here */
            <StyledChild flex={childFlex || "0 1 auto"}>
              {React.cloneElement(item, {
                ref: item.ref
                  ? node => {
                      // Call the original ref, if any
                      const { ref } = item;
                      if (typeof ref === "function") {
                        ref(node);
                      } else if (ref !== null) {
                        ref.current = node;
                      }
                    }
                  : null,
                size,
                label: undefined,
                help: item.props.help,
                error: item.props.error,
                onChange: ev => {
                  handleChange(ev, item.props.onChange);
                },
                onBlur: ev => {
                  handleBlur(ev, item.props.onBlur);
                },
                onFocus: ev => {
                  handleFocus(ev, item.props.onFocus);
                },
                insideInputGroup: true,
              })}
            </StyledChild>
          );
        })}
      </StyledChildren>
      <FakeGroup label={label} error={errorReal} active={active} size={size} />
      <FormFeedback
        help={helpReal}
        error={errorReal}
        iconRef={iconRef}
        labelRef={labelRef}
        tooltipShown={tooltipShown}
        tooltipShownHover={tooltipShownHover}
      />
    </StyledInputGroup>
  );
};

export default InputGroup;
