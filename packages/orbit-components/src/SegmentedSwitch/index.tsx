"use client";

import * as React from "react";
import cx from "clsx";

import FormLabel from "../FormLabel";
import Stack from "../Stack";
import SwitchSegment from "./SwitchSegment";
import ErrorFormTooltip from "../ErrorFormTooltip";
import useErrorTooltip from "../ErrorFormTooltip/hooks/useErrorTooltip";
import { spaceAfterClasses } from "../common/tailwind/spaceAfter";
import type { Props } from "./types";

/**
 * @orbit-doc-start
 * README
 * ----------
 * # SegmentedSwitch
 *
 * To implement SegmentedSwitch component into your project you'll need to add the import:
 *
 * ```jsx
 * import SegmentedSwitch from "@kiwicom/orbit-components/lib/SegmentedSwitch";
 * ```
 *
 * ## Usage
 *
 * ```jsx
 * const Component = () => {
 *   const [value, setValue] = React.useState("");
 *
 *   return (
 *     <SegmentedSwitch
 *       onChange={ev => setValue(ev.currentTarget.value)}
 *       help={helpMessage}
 *       error={errorMessage}
 *       options={[
 *         { label: "First option", value: "1" },
 *         { label: "Second option", value: "2" },
 *       ]}
 *     />
 *   );
 * };
 * ```
 *
 * ## Props
 *
 * _Table below contains all types of the props available in the SegmentedSwitch component._
 *
 * | Name           | Type                                          | Default | Description                                                                                    |
 * | :------------- | :-------------------------------------------- | :------ | :--------------------------------------------------------------------------------------------- |
 * | dataTest       | `string`                                      |         | Optional prop for testing purposes.                                                            |
 * | help           | `React.Node`                                  |         | Optional help message.                                                                         |
 * | error          | `React.Node`                                  |         | Optional error message.                                                                        |
 * | options        | [`Option[]`](#option)                         |         | Array of options.                                                                              |
 * | onChange       | `(ev: ChangeEvent<HTMLInputElement>) => void` |         | Function for handling change event.                                                            |
 * | onFocus        | `(ev: FocusEvent<HTMLInputElement>) => void`  |         | Function for handling focus event.                                                             |
 * | label          | `string`                                      |         | Label of the component.                                                                        |
 * | ariaLabel      | `string`                                      |         | Optional `aria-label` attribute.                                                               |
 * | ariaLabelledby | `string`                                      |         | Optional `aria-labelledby` attribute. Receives an id of the element that labels the component. |
 * | showTooltip    | `boolean`                                     | `false` | Show tooltip.                                                                                  |
 *
 * ## Option
 *
 * Table below contains all types of the props available for object in Option array.
 *
 * | Name           | Type               | Description                                                    |
 * | :------------- | :----------------- | :------------------------------------------------------------- |
 * | **value**      | `string \| number` | The value of the Option.                                       |
 * | label          | `string`           | The label for the Option.                                      |
 * | defaultChecked | `boolean`          | Set option checked by default.                                 |
 * | disabled       | `boolean`          | If `true`, the Option will be disabled.                        |
 * | name           | `string`           | Name of the Option. See [functional specs](#functional-specs). |
 *
 * ## Functional specs
 *
 * - The `error` prop overwrites the `help` prop, due to higher priority.
 * - The `name` prop in the `Option` object is needed when having more that one SegmentedSwitch in the same form.
 *
 *
 * @orbit-doc-end
 */
const SegmentedSwitch = ({
  options,
  dataTest,
  onChange,
  showTooltip,
  spaceAfter,
  onFocus,
  maxWidth,
  help,
  error,
  label,
  ariaLabel,
  ariaLabelledby,
}: Props) => {
  const hasTooltip = Boolean(error || help);

  const { tooltipShown, tooltipShownHover, setTooltipShown, setTooltipShownHover, labelRef } =
    useErrorTooltip({ onFocus, hasTooltip });

  React.useEffect(() => {
    if (hasTooltip) {
      if (showTooltip) setTooltipShown(true);
      else setTooltipShown(false);
    }
  }, [showTooltip, hasTooltip, setTooltipShown]);

  return (
    <div
      data-test={dataTest}
      ref={labelRef}
      className={cx(
        "gap-50 relative flex w-full flex-col",
        spaceAfter && spaceAfterClasses[spaceAfter],
        "[&_.orbit-switch-segment-label:first-child_.orbit-switch-segment-text]:rounded-s-[5px]",
        "[&_.orbit-switch-segment-label:last-child_.orbit-switch-segment-text]:rounded-e-[5px]",
      )}
      style={{ maxWidth }}
      role="group"
      aria-label={ariaLabel || label}
      aria-labelledby={ariaLabelledby}
    >
      {label && (
        <FormLabel
          help={!!help}
          error={!!error}
          onMouseEnter={() => setTooltipShownHover(true)}
          onMouseLeave={() => setTooltipShownHover(false)}
        >
          {label}
        </FormLabel>
      )}
      <Stack flex spacing="none">
        {options.map(({ value, label: optionLabel, ...props }) => (
          <SwitchSegment
            key={value}
            value={value}
            label={optionLabel}
            setTooltipShown={setTooltipShown}
            onChange={onChange}
            onFocus={onFocus}
            {...props}
          />
        ))}
      </Stack>
      {hasTooltip && (
        <ErrorFormTooltip
          help={help}
          error={error}
          shown={tooltipShown || tooltipShownHover}
          onShown={prev => setTooltipShown(!prev)}
          referenceElement={labelRef}
        />
      )}
    </div>
  );
};

export default SegmentedSwitch;
