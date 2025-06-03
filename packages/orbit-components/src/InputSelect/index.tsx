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
