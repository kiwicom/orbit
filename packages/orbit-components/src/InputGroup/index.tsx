import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../defaultTheme";
import FormLabel from "../FormLabel";
import { FakeInput, Input, InputContainer } from "../InputField";
import { SelectContainer } from "../Select";
import ErrorFormTooltip from "../ErrorFormTooltip";
import { SIZE_OPTIONS, TOKENS } from "./consts";
import { right, rtlSpacing } from "../utils/rtl";
import getSpacingToken from "../common/getSpacingToken";
import useRandomId, { useRandomIdSeed } from "../hooks/useRandomId";
import formElementFocus from "../InputField/helpers/formElementFocus";
import getFieldDataState from "../common/getFieldDataState";
import mq from "../utils/mediaQuery";
import type { Props } from "./types";

const getToken = (name: string) => ({
  theme,
  size,
}: {
  theme: typeof defaultTheme;
  size?: Props["size"];
}): string | null => {
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

  if (!size) return null;

  return tokens[name][size];
};

const getFakeGroupMarginTop = ({
  label,
  theme,
}: {
  label?: string;
  theme: typeof defaultTheme;
}) => {
  if (!label) return false;
  return `calc(${theme.orbit.lineHeightTextSmall} + ${theme.orbit.spaceXXSmall})`;
};

const FakeGroup = styled.span<{
  error?: Props["error"];
  label?: Props["label"];
  disabled?: Props["disabled"];
  size?: Props["size"];
  active: boolean;
}>`
  ${({ theme, error, disabled, active }) => css`
    width: 100%;
    display: block;
    position: absolute;
    top: 0px;
    left: 0;
    z-index: 1;
    box-sizing: border-box;
    height: ${getToken(TOKENS.height)};
    box-shadow: ${`inset 0 0 0 ${theme.orbit.borderWidthInput} ${theme.orbit.borderColorInput}`};
    box-shadow: ${error &&
    `inset 0 0 0 ${theme.orbit.borderWidthInput} ${theme.orbit.borderColorInputError}`};
    ${active && formElementFocus};
    background-color: ${disabled
      ? theme.orbit.backgroundInputDisabled
      : theme.orbit.backgroundInput};
    font-size: ${theme.orbit.fontSizeInputNormal};
    transition: box-shadow ${theme.orbit.durationFast} ease-in-out;
    margin-top: ${getFakeGroupMarginTop};

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

const StyledChild = styled.div<{ flex: Props["flex"] }>`
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
  ({ children, className, dataTest, id, role, ariaLabelledby, forwardRef, dataState }) => (
    <div
      data-state={dataState}
      ref={forwardRef}
      id={id}
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
          outline: none;
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

const findPropInChild = (propToFind, children) =>
  React.Children.map(children, el => {
    if (el.props && el.props[propToFind]) return el.props[propToFind];
    return null;
  }).filter(el => el != null);

const InputGroup = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      children,
      label,
      flex,
      size = SIZE_OPTIONS.NORMAL,
      help,
      id,
      error,
      disabled,
      dataTest,
      spaceAfter,
      helpClosable = true,
      onFocus,
      onBlur,
      onChange,
      onBlurGroup,
    },
    ref,
  ) => {
    const [active, setActive] = React.useState(false);
    const [filled, setFilled] = React.useState(false);
    const inputID = useRandomId();
    const [tooltipShown, setTooltipShown] = React.useState(false);
    const [tooltipShownHover, setTooltipShownHover] = React.useState(false);
    const labelRef = React.useRef(null);
    const iconRef = React.useRef(null);

    const foundErrors = React.useMemo(() => findPropInChild("error", children), [children]);
    const foundHelp = React.useMemo(() => findPropInChild("help", children), [children]);

    const errorReal = error || (foundErrors.length > 0 && foundErrors[0]);
    const helpReal = help || (foundHelp.length > 0 && foundHelp[0]);
    const randomId = useRandomIdSeed();

    const isFilled = React.useCallback(
      () => setFilled(findPropInChild("value", children).length > 0),
      [children],
    );

    React.useEffect(() => {
      isFilled();
    }, [isFilled, label]);

    const handleFocus = callBack => (
      ev: React.SyntheticEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    ) => {
      setActive(true);
      setTooltipShown(true);
      if (onFocus) onFocus(ev);
      if (callBack) callBack(ev);
    };

    const handleBlur = callBack => (
      ev: React.SyntheticEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    ) => {
      isFilled();
      setActive(false);
      if (onBlur) onBlur(ev);
      if (callBack) callBack(ev);
    };

    const handleChange = callBack => (
      ev: React.SyntheticEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    ) => {
      isFilled();
      if (onChange) onChange(ev);
      if (callBack) callBack(ev);
    };

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
        forwardRef={ref}
        dataTest={dataTest}
        id={id}
        dataState={getFieldDataState(!!errorReal)}
        spaceAfter={spaceAfter}
        role="group"
        ariaLabelledby={label && inputID}
      >
        {label && (
          <FormLabel
            filled={filled}
            id={inputID}
            labelRef={labelRef}
            error={!!errorReal}
            help={!!helpReal}
            iconRef={iconRef}
            onMouseEnter={() => setTooltipShownHover(true)}
            onMouseLeave={() => setTooltipShownHover(false)}
          >
            {label}
          </FormLabel>
        )}

        <StyledChildren onBlur={handleBlurGroup}>
          {React.Children.toArray(children).map((child, key) => {
            const childFlex =
              Array.isArray(flex) && flex.length !== 1 ? flex[key] || flex[0] : flex;
            const item = child as React.ReactElement<Props>;
            return (
              <StyledChild flex={childFlex || "0 1 auto"} key={randomId(String(key))}>
                {React.cloneElement(item, {
                  disabled: item.props.disabled || disabled,
                  size,
                  label: undefined,
                  onChange: handleChange(item.props.onChange),
                  onBlur: handleBlur(item.props.onBlur),
                  onFocus: handleFocus(item.props.onFocus),
                  // @ts-expect-error custom prop
                  insideInputGroup: true,
                })}
              </StyledChild>
            );
          })}
        </StyledChildren>
        <FakeGroup label={label} error={errorReal} active={active} size={size} />
        <ErrorFormTooltip
          help={helpReal}
          error={errorReal}
          helpClosable={helpClosable}
          inputSize={size}
          onShown={setTooltipShown}
          shown={tooltipShown || tooltipShownHover}
          referenceElement={labelRef}
        />
      </StyledInputGroup>
    );
  },
);

export default InputGroup;
export { Props };
