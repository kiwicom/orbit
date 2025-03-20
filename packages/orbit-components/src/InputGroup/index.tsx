"use client";

import * as React from "react";
import cx from "clsx";

import type { Props } from "./types";
import type { Props as InputFieldProps } from "../InputField/types";
import type { Props as SelectProps } from "../Select/types";
import FormLabel from "../FormLabel";
import ErrorFormTooltip from "../ErrorFormTooltip";
import useRandomId, { useRandomIdSeed } from "../hooks/useRandomId";
import getFieldDataState from "../common/getFieldDataState";
import { getSpaceAfterClasses } from "../common/tailwind";

const findPropInChild = (propToFind, children) =>
  React.Children.map(children, el => {
    if (el.props && el.props[propToFind]) return el.props[propToFind];
    return null;
  }).filter(el => el != null);

const InputGroup = React.forwardRef<HTMLFieldSetElement, Props>(
  (
    {
      children,
      label,
      flex,
      help,
      id,
      error,
      disabled,
      dataTest,
      spaceAfter,
      onFocus,
      onBlur,
      onChange,
      onBlurGroup,
    },
    ref,
  ) => {
    const [active, setActive] = React.useState(false);
    const inputID = useRandomId();
    const [tooltipShown, setTooltipShown] = React.useState(false);
    const [tooltipShownHover, setTooltipShownHover] = React.useState(false);
    const labelRef = React.useRef(null);
    const iconRef = React.useRef(null);

    const foundErrors = findPropInChild("error", children);
    const foundHelp = findPropInChild("help", children);

    const errorReal = error || (foundErrors.length > 0 && foundErrors[0]);
    const helpReal = help || (foundHelp.length > 0 && foundHelp[0]);
    const randomId = useRandomIdSeed();

    const hasTooltip = errorReal || helpReal;

    const handleFocus =
      callBack =>
      (ev: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setActive(true);
        setTooltipShown(true);
        if (onFocus) onFocus(ev);
        if (callBack) callBack(ev);
      };

    const handleBlur =
      callBack =>
      (ev: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setActive(false);
        if (onBlur) onBlur(ev);
        if (callBack) callBack(ev);
      };

    const handleChange =
      callBack =>
      (ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        if (onChange) onChange(ev);
        if (callBack) callBack(ev);
      };

    const handleBlurGroup = (ev: React.FocusEvent<HTMLDivElement>) => {
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
      <div
        className={cx(
          "relative flex w-full flex-col",
          spaceAfter != null && getSpaceAfterClasses(spaceAfter),
        )}
      >
        <fieldset
          ref={ref}
          id={id}
          data-test={dataTest}
          data-state={getFieldDataState(!!errorReal)}
        >
          {label && (
            <legend>
              <FormLabel
                id={inputID}
                labelRef={labelRef}
                error={!!errorReal}
                help={!!helpReal}
                iconRef={iconRef}
                onMouseEnter={() => (hasTooltip ? setTooltipShownHover(true) : undefined)}
                onMouseLeave={() => (hasTooltip ? setTooltipShownHover(false) : undefined)}
              >
                {label}
              </FormLabel>
            </legend>
          )}

          <div
            className={cx(
              "text-normal h-form-box-normal duration-fast rounded-150 tb:rounded-100 z-default w-full transition-shadow ease-in-out",
              active && "outline-blue-normal outline outline-2",
              disabled ? "bg-form-element-disabled-background" : "bg-form-element-background",
              !errorReal && "shadow-form-element",
              !errorReal && !disabled && "hover:shadow-form-element-hover",
              Boolean(errorReal) && "shadow-form-element-error",
              Boolean(errorReal) && !disabled && "hover:shadow-form-element-error-hover",
            )}
          >
            <div className="relative flex" onBlur={handleBlurGroup}>
              {React.Children.toArray(children).map((child, key) => {
                // TODO: next cleanup iteration just remove this whole `flex` prop thing
                // and cloning elements, and make children take care of their sizing themselves

                const childFlex = (
                  Array.isArray(flex) && flex.length !== 1 ? flex[key] ?? flex[0] : flex
                ) as string | undefined;

                const item = child as React.ReactElement<InputFieldProps | SelectProps>;

                return (
                  <div
                    key={randomId(String(key))}
                    className={cx(
                      "orbit-input-group-child pe-200 last:p-0 [&_.orbit-input-field-fake-input]:hidden [&_.orbit-input-field-fake-input]:bg-transparent [&_.orbit-input-field-input~.orbit-input-field-fake-input]:shadow-none [&_.orbit-select-container_select]:bg-transparent [&_.orbit-select-container_select]:shadow-none [&_.orbit-select-container_select]:focus:outline-none",
                      // InputField:after
                      "[&_.orbit-input-field-input-container]:after:duration-fast [&_.orbit-input-field-input-container]:after:z-default [&_.orbit-input-field-input-container]:after:h-600 [&_.orbit-input-field-input-container]:after:absolute [&_.orbit-input-field-input-container]:after:end-0 [&_.orbit-input-field-input-container]:after:top-1/2 [&_.orbit-input-field-input-container]:after:block [&_.orbit-input-field-input-container]:after:-translate-y-1/2 [&_.orbit-input-field-input-container]:after:border-r [&_.orbit-input-field-input-container]:after:transition-colors [&_.orbit-input-field-input-container]:after:ease-in-out [&_.orbit-input-field-input-container]:last-of-type:after:content-none",
                      // Select:after
                      "[&_.orbit-select-container]:after:duration-fast [&_.orbit-select-container]:after:h-600 [&_.orbit-select-container]:bg-transparent [&_.orbit-select-container]:after:absolute [&_.orbit-select-container]:after:end-0 [&_.orbit-select-container]:after:top-1/2 [&_.orbit-select-container]:after:z-[2] [&_.orbit-select-container]:after:block [&_.orbit-select-container]:after:-translate-y-1/2 [&_.orbit-select-container]:after:border-r [&_.orbit-select-container]:after:transition-colors [&_.orbit-select-container]:after:ease-in-out [&_.orbit-select-container]:last-of-type:after:content-none",
                      Boolean(errorReal) && !active
                        ? "[&_.orbit-select-container]:after:border-form-element-error [&_.orbit-input-field-input-container]:after:border-form-element-error"
                        : "[&_.orbit-select-container]:after:border-form-element [&_.orbit-input-field-input-container]:after:border-form-element",
                      label != null && "[&_.orbit-form-label]:hidden",
                    )}
                    style={{ flex: childFlex }}
                  >
                    {React.cloneElement(item, {
                      disabled: item.props.disabled || disabled,
                      label: undefined,
                      onChange: handleChange(item.props.onChange),
                      onBlur: handleBlur(item.props.onBlur),
                      onFocus: handleFocus(item.props.onFocus),
                      ariaLabel: item.props.label as string,
                      insideInputGroup: true,
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </fieldset>
        <ErrorFormTooltip
          help={helpReal}
          error={errorReal}
          onShown={setTooltipShown}
          shown={tooltipShown || tooltipShownHover}
          referenceElement={labelRef}
        />
      </div>
    );
  },
);

InputGroup.displayName = "InputGroup";

export default InputGroup;
