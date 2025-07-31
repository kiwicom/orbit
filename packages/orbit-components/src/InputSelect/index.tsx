"use client";

import React from "react";
import cx from "clsx";

import type { Props, Option } from "./types";
import { groupOptions } from "./helpers";
import InputSelectOption from "./InputSelectOption";
import CloseCircle from "../icons/CloseCircle";
import InputField from "../InputField";
import { useRandomIdSeed } from "../hooks/useRandomId";
import useClickOutside from "../hooks/useClickOutside";
import Box from "../Box";
import Text from "../Text";
import Stack from "../Stack";
import useMediaQuery from "../hooks/useMediaQuery";
import Modal, { ModalFooter } from "../Modal";
import ModalCloseButton from "../Modal/ModalCloseButton";
import Button from "../Button";
import Heading from "../Heading";
import { ModalSectionWrapper as ModalSection } from "../Modal/ModalSection";
import { ModalHeaderWrapper as ModalHeader } from "../Modal/ModalHeader";
import { spaceAfterClasses } from "../common/tailwind";

/**
 * @orbit-doc-start
 * README
 * ----------
 * # InputSelect
 *
 * To implement the InputSelect component into your project you'll need to add the import:
 *
 * ```jsx
 * import InputSelect from "@kiwicom/orbit-components/lib/InputSelect";
 * ```
 *
 * After adding import to your project you can use it simply like:
 *
 * ```jsx
 * const options = [
 *   {
 *     title: "Option 1",
 *     value: 1,
 *     description: "Description for option 1",
 *   },
 *   {
 *     title: "Option 2",
 *     value: 2,
 *     description: "Description for option 2",
 *   },
 *   ...
 * ];
 *
 * <InputSelect options={options} labelClear="Clear value" />;
 * ```
 *
 * By using the `onOptionSelect` prop you can have access to the selected option to update your app state based on that. This is called with `null` when the input value is cleared or there is no selected option.
 * Do not rely on the input's `value` attribute to get the selected value.
 *
 * ## Groups
 *
 * Optionally, each option can have a `group` property. If defined, options are displayed grouped with the name of the group as a label separator.
 * All groups are displayed first by default. After that, if `showAll` is set to `true` (default), all options are displayed (the ones with a group and the ones without a group, following the order of the array of options). If `showAll` is set to `false`, only the options without a defined group are displayed on that bottom list.
 * The `showAllLabel` allows to customize the label displayed before the bottom part. If `showAll` is set to `true`, the default value is `"All options"`. If it's set to `false`, the default value is `Other options`.
 *
 * ```jsx
 * const options = [
 *   {
 *     title: "Option 1",
 *     value: 1,
 *     description: "Description for option 1",
 *   },
 *   {
 *     title: "Option 2",
 *     value: 2,
 *     description: "Description for option 2",
 *     group: "Group name",
 *   },
 *   ...
 * ];
 * ```
 *
 * If `prevSelected` is defined, a special group is displayed on top of every options, with the options passed to that prop. This prop is optional and its state is **not** controlled by the component.
 *
 * ### Props
 *
 * The table below contains all types of props available in the InputSelect component.
 *
 * | Name              | Type                                                                              | Default                            | Description                                                                                                                                                                       |
 * | :---------------- | :-------------------------------------------------------------------------------- | :--------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 * | **options**       | [`Option[]`](#option)                                                             |                                    | **Required.** The content of the InputSelect, passed as array of objects.                                                                                                         |
 * | defaultSelected   | `Option`                                                                          |                                    | Default selected option. Must be one of the options passed on the `options` prop.                                                                                                 |
 * | prevSelected      | `Option`                                                                          |                                    | This displays the previously selected option on top of every other options.                                                                                                       |
 * | prevSelectedLabel | `string`                                                                          | `"Previously selected"`            | The label to be displayed before the previously selected option.                                                                                                                  |
 * | dataAttrs         | `Object`                                                                          |                                    | Optional prop for passing `data-*` attributes to the `input` DOM element.                                                                                                         |
 * | dataTest          | `string`                                                                          |                                    | Optional prop for testing purposes.                                                                                                                                               |
 * | disabled          | `boolean`                                                                         | `false`                            | If `true`, the InputSelect will be disabled.                                                                                                                                      |
 * | error             | `React.Node`                                                                      |                                    | The error message for the InputSelect.                                                                                                                                            |
 * | help              | `React.Node`                                                                      |                                    | The help message for the InputSelect.                                                                                                                                             |
 * | id                | `string`                                                                          |                                    | Adds `id` HTML attribute to an element.                                                                                                                                           |
 * | label             | `string`                                                                          |                                    | The label for the InputSelect.                                                                                                                                                    |
 * | name              | `string`                                                                          |                                    | The name for the InputSelect.                                                                                                                                                     |
 * | onBlur            | `event => void \| Promise`                                                        |                                    | Function for handling onBlur event.                                                                                                                                               |
 * | onChange          | `event => void \| Promise`                                                        |                                    | Function for handling onChange event on the text input. For option selection change, use `onOptionSelect`.                                                                        |
 * | onFocus           | `event => void \| Promise`                                                        |                                    | Function for handling onFocus event.                                                                                                                                              |
 * | onKeyDown         | `event => void \| Promise`                                                        |                                    | Function for handling onKeyDown event.                                                                                                                                            |
 * | onKeyUp           | `event => void \| Promise`                                                        |                                    | Function for handling onKeyUp event.                                                                                                                                              |
 * | onMouseUp         | `event => void \| Promise`                                                        |                                    | Function for handling onMouseUp event.                                                                                                                                            |
 * | onMouseDown       | `event => void \| Promise`                                                        |                                    | Function for handling onMouseDown event.                                                                                                                                          |
 * | placeholder       | `TranslationString`                                                               |                                    | The placeholder for the InputSelect.                                                                                                                                              |
 * | ref               | `func`                                                                            |                                    | Prop for forwarded ref of the InputSelect.                                                                                                                                        |
 * | required          | `boolean`                                                                         | `false`                            | If true, the label is displayed as required.                                                                                                                                      |
 * | readOnly          | `boolean`                                                                         |                                    | If true, InputSelect will be readonly.                                                                                                                                            |
 * | tabIndex          | `string \| number`                                                                |                                    | Specifies the tab order of an element.                                                                                                                                            |
 * | width             | `string`                                                                          | `100%`                             | Specifies width of the InputSelect.                                                                                                                                               |
 * | maxWidth          | `string`                                                                          |                                    | Specifies max-width of the InputSelect.                                                                                                                                           |
 * | maxHeight         | `string`                                                                          | `400px`                            | Specifies max height of the dropdown with results for InputSelect.                                                                                                                |
 * | onOptionSelect    | `(opt: Option \| null) => void`                                                   |                                    | Callback that fires when an option is selected.                                                                                                                                   |
 * | onClose           | `(opt: Option \| null) => void`                                                   |                                    | Callback that fires when the list of options is closed by other means than selecting an option. It is called with the value of the selected or null, if nothing is selected.      |
 * | emptyState        | `React.Node`                                                                      | `"No results found."`              | Message to display when no options are available. If a string is passed, paddings are automatically applied.                                                                      |
 * | labelClose        | `string`                                                                          | `Close`                            | The label for the close button in the dropdown.                                                                                                                                   |
 * | showAll           | `boolean`                                                                         | `true`                             | If set to true, it will display all options at the end of the list. If set to false, it will display only the options without a group at the end of the list.                     |
 * | showAllLabel      | `string`                                                                          | `"All options" \| "Other options"` | The label displayed before showing the last group of options. If `showAll` is true, the default value is `"All options"`. If it is false, the default value is `"Other options"`. |
 * | insideInputGroup  | `boolean`                                                                         | `false`                            | If true, the InputSelect will be rendered inside InputGroup.                                                                                                                      |
 * | spaceAfter        | `"none" \| "smallest" \| "small" \| "normal" \| "medium" \| "large" \| "largest"` |                                    | Additional `margin-bottom` after component.                                                                                                                                       |
 * | labelClear        | `string`                                                                          |                                    | Required label for the clear value button.                                                                                                                                        |
 *
 * ### enum
 *
 * | spaceAfter   |
 * | :----------- |
 * | `"none"`     |
 * | `"smallest"` |
 * | `"small"`    |
 * | `"normal"`   |
 * | `"medium"`   |
 * | `"large"`    |
 * | `"largest"`  |
 *
 * ## Option
 *
 * The table below contains all types of props available for the object in the `Option` array.
 *
 * | Name        | Type                 | Description                                                                                                             |
 * | :---------- | :------------------- | :---------------------------------------------------------------------------------------------------------------------- |
 * | **title**   | `string`             | **Required.** The title of the Option.                                                                                  |
 * | **value**   | `string   \| number` | **Required.** The value of the Option. Should be unique in each option on the array of options passed to `InputSelect`. |
 * | description | `string`             | The description of the Option.                                                                                          |
 * | group       | `string`             | The group of the Option.                                                                                                |
 * | prefix      | `React.Node`         | A prefix to the title. Can be an icon, flag, etc.                                                                       |
 *
 *
 * @orbit-doc-end
 */
const InputSelect = ({
  onChange,
  options,
  defaultSelected,
  prevSelected,
  prevSelectedLabel = "Previously selected",
  id,
  onFocus,
  label,
  showAll = true,
  showAllLabel = showAll ? "All options" : "Other options",
  help,
  error,
  onBlur,
  placeholder,
  labelClose = "Close",
  emptyState = "No results found.",
  onOptionSelect,
  onClose,
  disabled,
  maxHeight = "400px",
  maxWidth,
  onKeyDown,
  spaceAfter,
  readOnly,
  labelClear,
  ref,
  ...props
}: Props) => {
  const randomId = useRandomIdSeed();
  const labelRef = React.useRef<HTMLDivElement | null>(null);
  const inputId = id || randomId("input");
  const dropdownId = randomId("dropdown");
  const dropdownRef = React.useRef<HTMLDivElement | null>(null);

  const [isOpened, setIsOpened] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(
    defaultSelected
      ? options.find(opt => opt.value === defaultSelected.value)?.title ||
          String(defaultSelected.title)
      : "",
  );
  const [selectedOption, setSelectedOption] = React.useState<null | Option>(
    defaultSelected || null,
  );

  const [activeIdx, setActiveIdx] = React.useState(0);
  const [activeDescendant, setActiveDescendant] = React.useState<string | undefined>(undefined);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [topOffset, setTopOffset] = React.useState(0);

  const refs = React.useMemo(() => {
    return {};
  }, []);

  const { isLargeMobile } = useMediaQuery();

  const groupedOptions = React.useMemo(
    () => groupOptions(options, showAll, prevSelected),
    [options, prevSelected, showAll],
  );

  const [results, setResults] = React.useState<{
    groups: Option[][];
    all: Option[];
    flattened: Option[];
  }>(groupedOptions);

  React.useEffect(() => {
    if (inputValue.length === 0) {
      setResults(groupedOptions);
    } else {
      const filtered = options.filter(({ title }) => {
        return title.toLowerCase().includes(inputValue.toLowerCase());
      });
      setResults({
        groups: [],
        all: filtered,
        flattened: filtered,
      });
    }
  }, [inputValue, options, groupedOptions]);

  React.useEffect(() => {
    setActiveDescendant((refs[activeIdx]?.current?.id as string) || undefined);
  }, [activeIdx, refs]);

  const handleClose = (selection?: Option | null) => {
    if (!selection) {
      if (inputValue === "") {
        if (onOptionSelect) onOptionSelect(null);
        setSelectedOption(null);
      } else if (inputValue !== selectedOption?.title) {
        setInputValue(selectedOption?.title || "");
      }
      setResults(groupedOptions);
      setActiveIdx(0);
    }

    if (onClose && isOpened) onClose(selection || (inputValue === "" ? null : selectedOption));
    setIsOpened(false);
  };

  const handleCloseClick = () => {
    handleClose();
  };

  useClickOutside(labelRef, handleCloseClick);

  const handleFocus = (ev: React.FocusEvent<HTMLInputElement>) => {
    if (onFocus) onFocus(ev);
    if (!readOnly) {
      setIsOpened(true);
      setResults(results || groupedOptions);
    }
  };

  const handleBlur = (ev: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) onBlur(ev);
  };

  const handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = ev.currentTarget;
    if (onChange) onChange(ev);

    if (!isOpened) setIsOpened(true);
    setInputValue(value);
    setActiveIdx(0);
  };

  const handleDropdownKey = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpened && (ev.code === "Enter" || ev.code === "ArrowDown" || ev.code === "ArrowUp")) {
      setIsOpened(true);
      return;
    }

    if (isOpened && ev.code === "Escape") handleClose();

    if (isOpened && ev.code === "Enter") {
      ev.preventDefault();

      if (results.all.length !== 0) {
        const option = results.flattened[activeIdx];

        setSelectedOption(option);
        setInputValue(option.title);
        if (onOptionSelect) onOptionSelect(option);
        handleClose(option);
      }
    }

    if (ev.code === "ArrowDown") {
      if (results.flattened.length - 1 > activeIdx) {
        const nextIdx = activeIdx + 1;
        setActiveIdx(nextIdx);

        if (dropdownRef && dropdownRef.current) {
          dropdownRef.current.scrollTop = refs[nextIdx].current?.offsetTop;
        }
      }
    }

    if (ev.code === "ArrowUp") {
      if (activeIdx > 0) {
        const prevIdx = activeIdx - 1;

        setActiveIdx(prevIdx);

        if (dropdownRef && dropdownRef.current) {
          dropdownRef.current.scrollTop = refs[prevIdx].current?.offsetTop;
        }
      }
    }
  };

  const input = (
    <InputField
      help={isLargeMobile && help}
      error={isLargeMobile && error}
      label={isLargeMobile && label}
      disabled={disabled}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={handleInputChange}
      id={inputId}
      placeholder={placeholder}
      autoFocus={!isLargeMobile}
      role="combobox"
      value={inputValue}
      onKeyDown={
        !readOnly
          ? ev => {
              if (onKeyDown) onKeyDown(ev);
              handleDropdownKey(ev);
            }
          : undefined
      }
      ariaHasPopup={isOpened}
      ariaExpanded={isOpened}
      ariaAutocomplete="list"
      ariaActiveDescendant={activeDescendant}
      ariaControls={isOpened ? dropdownId : undefined}
      autoComplete="off"
      ref={ref}
      readOnly={readOnly}
      prefix={selectedOption && selectedOption.prefix}
      suffix={
        !readOnly &&
        String(inputValue).length > 1 && (
          <button
            className={cx(
              "me-200 appearance-none border-0 bg-transparent p-0",
              disabled && "pointer-events-none cursor-not-allowed",
            )}
            type="button"
            onClick={ev => {
              ev.preventDefault();
              if (onOptionSelect) onOptionSelect(null);
              setInputValue("");
              setResults(groupedOptions);
              setSelectedOption(null);
              setActiveIdx(0);
            }}
          >
            <CloseCircle color="primary" ariaLabel={labelClear} />
          </button>
        )
      }
      {...props}
    />
  );

  const renderOptions = () => {
    if (results.groups.length === 0) {
      return results.all.map((option, idx) => {
        const { title, description, prefix, value: optValue } = option;
        const optionId = randomId(`${title}_${optValue}`);
        const isSelected = optValue === selectedOption?.value;
        const optionRef = React.createRef() as React.RefObject<HTMLDivElement | null>;
        refs[idx] = optionRef;

        return (
          <InputSelectOption
            key={optionId}
            id={optionId}
            active={activeIdx === idx}
            isSelected={isSelected}
            ref={optionRef as React.RefObject<HTMLDivElement | null>}
            title={title}
            description={description}
            prefix={prefix}
            onClick={ev => {
              ev.preventDefault();
              setActiveIdx(idx);
              setResults(groupedOptions);
              if (onOptionSelect) onOptionSelect(option);
              if (isLargeMobile) setIsOpened(false);
              if (!isSelected) {
                setInputValue(title);
                setSelectedOption(option);
                handleClose(option);
              }
            }}
          />
        );
      });
    }

    let idx = -1;
    return (
      <>
        {results.groups.map((group, groupIdx) => {
          const prevSelectedOption = prevSelected && groupIdx === 0;

          const { group: groupTitle } = group[0];
          const groupId = randomId(prevSelectedOption ? "prevSelected" : `${groupTitle}`);

          return (
            <React.Fragment key={groupId}>
              <Box padding="300">
                <Text type="secondary">{prevSelectedOption ? prevSelectedLabel : groupTitle}</Text>
              </Box>
              {group.map(option => {
                idx += 1;
                const optionIdx = idx;
                const optionRef = React.createRef() as React.RefObject<HTMLDivElement | null>;
                refs[optionIdx] = optionRef;

                const { title, description, prefix, value: optValue } = option;
                const optionId = randomId(`${title}_${optValue}`);
                const isSelected = optValue === selectedOption?.value;

                return (
                  <InputSelectOption
                    key={optionId}
                    id={optionId}
                    active={!!isLargeMobile && activeIdx === optionIdx}
                    isSelected={isSelected}
                    ref={optionRef as React.RefObject<HTMLDivElement | null>}
                    title={title}
                    description={description}
                    prefix={prefix}
                    onClick={ev => {
                      ev.preventDefault();
                      if (onOptionSelect) onOptionSelect(option);
                      setActiveIdx(optionIdx);
                      setResults(groupedOptions);
                      if (isLargeMobile) setIsOpened(false);
                      if (!isSelected) {
                        setInputValue(title);
                        setSelectedOption(option);
                        handleClose(option);
                      }
                    }}
                  />
                );
              })}
            </React.Fragment>
          );
        })}
        <Box padding="300">
          <Text type="secondary">{showAllLabel}</Text>
        </Box>
        {results.all.map(option => {
          const { title, description, prefix, value: optValue, group } = option;
          if (group && !showAll) return null;
          idx += 1;
          const optionRef = React.createRef() as React.RefObject<HTMLDivElement | null>;
          const optionIdx = idx;
          refs[optionIdx] = optionRef;

          const optionId = randomId(`all_${title}_${optValue}`);
          const isSelected = optValue === selectedOption?.value;

          return (
            <InputSelectOption
              key={optionId}
              id={optionId}
              active={activeIdx === optionIdx}
              isSelected={isSelected}
              ref={optionRef as React.RefObject<HTMLDivElement | null>}
              title={title}
              description={description}
              prefix={prefix}
              onClick={ev => {
                ev.preventDefault();
                if (onOptionSelect) onOptionSelect(option);
                setActiveIdx(optionIdx);
                setResults(groupedOptions);
                if (isLargeMobile) setIsOpened(false);
                if (!isSelected) {
                  setInputValue(title);
                  setSelectedOption(option);
                  handleClose(option);
                }
              }}
            />
          );
        })}
      </>
    );
  };

  const noResults =
    typeof emptyState === "string" ? (
      <Box padding="400">
        <Text>{emptyState}</Text>
      </Box>
    ) : (
      emptyState
    );

  const dropdown = isOpened && (
    <div
      className={cx(
        "font-base bg-white-normal lm:absolute lm:inset-x-0 lm:overflow-y-scroll lm:shadow-level1 lm:rounded-100 z-[3] flex w-full flex-col",
        label
          ? "lm:top-[calc(theme(height.form-box-normal)+theme(spacing.800))]"
          : "lm:top-[calc(theme(height.form-box-normal)+theme(spacing.200))]",
      )}
      style={
        isLargeMobile
          ? {
              maxHeight,
              maxWidth,
            }
          : undefined
      }
      role="listbox"
      id={dropdownId}
      aria-labelledby={inputId}
      ref={dropdownRef}
    >
      {results.all.length === 0 ? noResults : renderOptions()}
    </div>
  );

  return (
    <div
      className={cx(
        "orbit-input-select relative block",
        spaceAfter && spaceAfterClasses[spaceAfter],
      )}
      ref={labelRef}
    >
      {isLargeMobile ? (
        <>
          {input}
          {dropdown}
        </>
      ) : (
        <>
          <InputField
            label={label}
            help={help}
            error={error}
            onFocus={
              !readOnly ? () => setIsOpened(true) : ev => (onFocus ? onFocus(ev) : undefined)
            }
            readOnly
            role="textbox"
            placeholder={placeholder}
            value={inputValue}
            prefix={selectedOption && selectedOption.prefix}
            dataTest={props.dataTest}
          />
          {isOpened && (
            <div
              className={cx(
                "[&_.orbit-input-field-field]:mt-200 [&_.orbit-modal-footer]:shadow-none [&_.orbit-modal-header-container]:sticky [&_.orbit-modal-header-container]:top-0 [&_.orbit-modal-wrapper-content]:h-full",
                isScrolled &&
                  topOffset > 50 &&
                  "[&_.orbit-modal-header-container]:pb-400 [&_.orbit-modal-header-container]:shadow-fixed",
              )}
            >
              <Modal
                labelClose={labelClose}
                onClose={handleCloseClick}
                fixedFooter
                onScroll={ev => {
                  if (!isLargeMobile) {
                    ev.preventDefault();
                    setIsScrolled(true);
                    setTopOffset(ev.currentTarget.scrollTop);
                  }
                }}
                mobileHeader={false}
                ariaLabel={label}
              >
                <ModalHeader className="!p-400 !mb-0">
                  {label && (
                    <Stack align="center" justify="between">
                      <Box>
                        <Heading type="title2">{label}</Heading>
                      </Box>
                      <ModalCloseButton onClick={handleCloseClick} title={labelClose} />
                    </Stack>
                  )}
                  {input}
                </ModalHeader>
                <ModalSection className="!p-0">{dropdown}</ModalSection>
                <ModalFooter flex="100%">
                  <Button type="secondary" fullWidth onClick={handleCloseClick}>
                    {labelClose}
                  </Button>
                </ModalFooter>
              </Modal>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default InputSelect;
