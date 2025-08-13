"use client";

import cx from "clsx";
import React from "react";

import getFieldDataState from "../common/getFieldDataState";
import type { Props } from "./types";

/**
 * @orbit-doc-start
 * README
 * ----------
 * # Radio
 *
 * To implement Radio component into your project you'll need to add the import:
 *
 * ```jsx
 * import Radio from "@kiwicom/orbit-components/lib/Radio";
 * ```
 *
 * After adding import into your project you can use it simply like:
 *
 * ```jsx
 * <Radio label="Radio" />
 * ```
 *
 * ## Props
 *
 * Table below contains all types of the props available in Radio component.
 *
 * | Name           | Type                       | Default | Description                                                                                 |
 * | :------------- | :------------------------- | :------ | :------------------------------------------------------------------------------------------ |
 * | checked        | `boolean`                  | `false` | If `true`, the Radio will be checked.                                                       |
 * | defaultChecked | `boolean`                  |         | If `true`, the Radio will be checked by default. Only to be used in uncontrolled.           |
 * | dataTest       | `string`                   |         | Optional prop for testing purposes.                                                         |
 * | id             | `string`                   |         | Set `id` for `Radio` input                                                                  |
 * | disabled       | `boolean`                  | `false` | If `true`, the Radio will be set up as disabled.                                            |
 * | hasError       | `boolean`                  | `false` | If `true`, the border of the Radio will turn red. [See Functional specs](#functional-specs) |
 * | info           | `React.Node`               |         | The additional info about the Radio.                                                        |
 * | label          | `string`                   |         | The label of the Radio.                                                                     |
 * | name           | `string`                   |         | The name for the Radio.                                                                     |
 * | onChange       | `event => void \| Promise` |         | Function for handling onChange event.                                                       |
 * | ref            | `func`                     |         | Prop for forwarded ref of the Radio. [See Functional specs](#functional-specs)              |
 * | tabIndex       | `string \| number`         |         | Specifies the tab order of an element                                                       |
 * | value          | `string`                   |         | The value of the Radio.                                                                     |
 * | ariaLabelledby | `string`                   |         | Id of the element that labels the Radio button.                                             |
 *
 * ## Functional specs
 *
 * - The`hasError` prop will be visible only when the Radio is not checked nor disabled.
 *
 * - `ref` can be used, for example, to control focus or to get the status (checked) of the element.
 *
 * ## FakeRadio
 *
 * The FakeRadio component was created for accessibility reasons and offers only a visual presentation of the Radio component. It does not have any functionality and accepts only state props.
 *
 * ## Props
 *
 * Table below contains all types of the props available in FakeRadio component.
 *
 * | Name     | Type      | Default | Description                                                                                                   |
 * | :------- | :-------- | :------ | :------------------------------------------------------------------------------------------------------------ | --- |
 * | checked  | `boolean` | `false` | If `true`, the FakeRadio will be checked.                                                                     |
 * | disabled | `boolean` | `false` | If `true`, the FakeRadio will be set up as disabled.                                                          |
 * | hasError | `boolean` | `false` | If `true`, the border of the FakeRadio will turn red. [See Functional specs](#functional-specs-for-fakeradio) |     |
 *
 * ## Functional specs for FakeRadio
 *
 * - The `hasError` prop will be visible only when the FakeRadio is not checked nor disabled.
 *
 * ## Example
 *
 * ```jsx
 * import * as React from "react";
 *
 * <div role="radio" onChange={() => {}}>
 *   <Text>Item title</Text>
 *   <FakeRadio checked={selected} disabled={disabled} />
 * </div>;
 * ```
 *
 *
 * @orbit-doc-end
 */
const Radio = (props: Props) => {
  const {
    label,
    value,
    hasError = false,
    disabled = false,
    checked,
    defaultChecked,
    onChange,
    name,
    info,
    id,
    tabIndex = 0,
    dataTest,
    ariaLabelledby,
    ref,
  } = props;

  const Component = label ? "label" : "div";

  return (
    <Component
      htmlFor={label ? id : undefined}
      className={cx(
        "font-base text-form-element-label-foreground relative flex w-full [align-items:self-start]",
        "[&_.orbit-radio-icon-container]:has-[:checked]:border-2 [&_.orbit-radio-icon-container_span]:has-[:checked]:visible",
        "[&_.orbit-radio-icon-container]:has-[:focus]:outline-blue-normal [&_.orbit-radio-icon-container]:has-[:focus]:outline [&_.orbit-radio-icon-container]:has-[:focus]:outline-2",
        disabled
          ? [
              "cursor-not-allowed",
              "[&_.orbit-radio-icon-container]:bg-cloud-light [&_.orbit-radio-icon-container]:border-cloud-dark",
            ]
          : [
              "cursor-pointer",
              "[&_.orbit-radio-icon-container]:has-[:checked]:border-form-element-focus [&_.orbit-radio-icon-container]:has-[:checked]:active:border-form-element-focus [&_.orbit-radio-icon-container]:has-[:checked]:bg-white-normal [&_.orbit-radio-icon-container]:bg-form-element-background",
              !checked &&
                hasError &&
                "[&_.orbit-radio-icon-container]:border-form-element-error [&_.orbit-radio-icon-container]:hover:border-form-element-error-hover [&_.orbit-radio-icon-container]:active:border-form-element-error",
              !hasError &&
                "[&_.orbit-radio-icon-container]:border-form-element [&_.orbit-radio-icon-container]:hover:border-form-element-hover [&_.orbit-radio-icon-container]:active:border-form-element-active",
              checked &&
                !hasError &&
                "[&_.orbit-radio-icon-container]:border-form-element-focus active:border-form-element-focus [&_.orbit-radio-icon-container]:bg-white-normal",
            ],
      )}
    >
      <input
        data-test={dataTest}
        data-state={getFieldDataState(hasError)}
        className="absolute opacity-0"
        value={value}
        type="radio"
        disabled={disabled}
        checked={checked}
        defaultChecked={defaultChecked}
        id={id}
        onChange={onChange}
        name={name}
        tabIndex={Number(tabIndex)}
        ref={ref}
        aria-labelledby={ariaLabelledby}
      />
      <div
        className={cx(
          "orbit-radio-icon-container",
          "relative box-border",
          "flex flex-none items-center justify-center",
          "size-icon-medium rounded-full",
          "duration-fast scale-100 transition-all ease-in-out",
          "border-solid",
          checked ? "border-2" : "border",
          !disabled && "active:scale-95",
        )}
      >
        <span
          className={cx(
            "size-[10px] rounded-full",
            disabled ? "bg-cloud-dark" : "bg-blue-normal",
            checked ? "visible" : "invisible",
          )}
        />
      </div>
      {(label || info) && (
        <div
          className={cx(
            "ms-200 flex flex-1 flex-col font-medium",
            disabled ? "opacity-50" : "opacity-100",
          )}
        >
          {label && (
            <span className="text-normal text-primary-foreground [&_.orbit-text]:text-normal font-medium leading-normal [&_.orbit-text]:font-medium [&_.orbit-text]:leading-normal">
              {label}
            </span>
          )}
          {info && (
            <span className="text-small leading-small text-form-element-label-filled-foreground">
              {info}
            </span>
          )}
        </div>
      )}
    </Component>
  );
};

export default Radio;

export { default as FakeRadio } from "./FakeRadio";
