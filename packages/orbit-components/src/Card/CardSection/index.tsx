"use client";

import * as React from "react";
import cx from "clsx";

import useRandomId from "../../hooks/useRandomId";
import { ELEMENT_OPTIONS } from "../../Heading/consts";
import type { Props } from "./types";
import Header from "../components/Header";
import Expandable from "./components/Expandable";
import Stack from "../../Stack";
import handleKeyDown from "../../utils/handleKeyDown";

const ContentWrapper = ({
  onClick,
  className,
  children,
}: Pick<Props, "onClick" | "children"> & { className?: string }) => (
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  <div
    role={onClick ? "button" : undefined}
    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
    tabIndex={onClick ? 0 : undefined}
    onKeyDown={onClick ? handleKeyDown(onClick) : undefined}
    onClick={onClick}
    className={cx(
      "orbit-card-content-wrapper flex-1 focus:outline-none",
      onClick && "before:rounded-100 before:absolute before:inset-0",
      className,
    )}
  >
    {children}
  </div>
);

const Actions = ({ actions }) => (
  <Stack inline grow={false} justify="end">
    {actions}
  </Stack>
);

export default function CardSection({
  title,
  titleAs = ELEMENT_OPTIONS.DIV,
  description,
  onClick,
  children,
  expandable = false,
  expanded,
  initialExpanded = false,
  onClose,
  header,
  onExpand,
  dataTest,
  actions,
}: Props) {
  const [opened, setOpened] = React.useState(initialExpanded);

  const isControlled = expanded != null;

  React.useEffect(() => {
    if (isControlled) {
      setOpened(expanded);
    }
  }, [isControlled, expanded]);

  function handleClick() {
    onClick?.();

    if (!isControlled) {
      setOpened(state => !state);
    }

    if (opened) {
      onClose?.();
    } else {
      onExpand?.();
    }
  }

  const slideID = useRandomId();

  return (
    // Needs to capture bubbled click events from the <button> below
    <div
      className={cx(
        "duration-fast lm:border-x relative border-b transition-all ease-in-out",
        opened && "my-200 rounded-100 shadow-level2 [&+*]:border-t",
        onClick && !expandable && "hover:bg-white-normal-hover",
        onClick &&
          "has-[.orbit-card-content-wrapper:focus]:focus-within:rounded-100 has-[.orbit-card-content-wrapper:focus]:focus-within:outline-blue-normal has-[.orbit-card-content-wrapper:focus]:focus-within:z-10 has-[.orbit-card-content-wrapper:focus]:focus-within:outline has-[.orbit-card-content-wrapper:focus]:focus-within:outline-2 has-[.orbit-card-content-wrapper:focus]:focus-within:transition-none",
      )}
      data-test={dataTest}
    >
      {(title != null || header != null) && expandable && (
        <div
          className={cx(
            "hover:bg-white-normal-hover p-400 lm:p-600 gap-300 flex cursor-pointer items-center",
            "has-[.orbit-card-header-button:focus]:focus-within:rounded-100 has-[.orbit-card-header-button:focus]:focus-within:outline-blue-normal has-[.orbit-card-header-button:focus]:focus-within:relative has-[.orbit-card-header-button:focus]:focus-within:z-20 has-[.orbit-card-header-button:focus]:focus-within:outline has-[.orbit-card-header-button:focus]:focus-within:outline-2",
          )}
        >
          <button
            type="button"
            className={cx(
              "orbit-card-header-button w-full focus:outline-none",
              "before:absolute before:inset-0",
            )}
            aria-expanded={opened}
            aria-controls={slideID}
            onClick={handleClick}
          >
            <Header
              title={title}
              titleAs={titleAs}
              description={description}
              expandable={expandable}
              header={header}
              expanded={opened}
              actions={Boolean(actions)}
              isSection
            />
          </button>
          {actions && <Actions actions={actions} />}
        </div>
      )}
      {(title != null || header != null) && !expandable && (
        <div className="gap-300 p-400 lm:p-600 flex items-center">
          <ContentWrapper onClick={onClick}>
            <Header
              title={title}
              titleAs={titleAs}
              description={description}
              header={header}
              expanded={opened}
              isSection
            />
          </ContentWrapper>
          {actions && <Actions actions={actions} />}
        </div>
      )}

      {children && expandable && (
        <Expandable expanded={opened} slideID={slideID} labelID={slideID}>
          <div
            className={cx(
              "font-base text-normal text-primary-foreground px-400 lm:px-600 w-full leading-normal",
              onClick && "hover:bg-white-normal-hover",
            )}
          >
            <ContentWrapper
              onClick={opened ? onClick : undefined}
              className={cx("py-400 lm:py-600 border-elevation-flat-border-color border-t")}
            >
              {children}
            </ContentWrapper>
          </div>
        </Expandable>
      )}

      {children && !expandable && (
        <ContentWrapper
          className={cx(
            "font-base text-normal text-primary-foreground px-400 lm:px-600 pb-400 lm:pb-600 w-full leading-normal",
            title == null && header == null && "pt-400 lm:pt-600",
          )}
        >
          {children}
        </ContentWrapper>
      )}
    </div>
  );
}
