"use client";

import * as React from "react";
import cx from "clsx";

import useRandomId from "../../hooks/useRandomId";
import { ELEMENT_OPTIONS } from "../../Heading/consts";
import type { Props } from "./types";
import Header from "../components/Header";
import Expandable from "./components/Expandable";
import handleKeyDown from "../../utils/handleKeyDown";

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
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={cx(
        "duration-fast lm:border-x border-b transition-all ease-in-out",
        opened && "my-200 rounded-100 shadow-level2 [&+*]:border-t",
        onClick != null && "hover:bg-white-normal-hover cursor-pointer",
      )}
      data-test={dataTest}
      role={onClick == null ? undefined : "button"}
      // See comment above
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={onClick == null ? undefined : 0}
      onClick={onClick}
      // Not needed once we can use <button> or <a> like we should
      onKeyDown={onClick == null ? undefined : handleKeyDown(onClick)}
    >
      {(title != null || header != null) && expandable && (
        <button
          type="button"
          className="p-400 lm:p-600 hover:bg-white-normal-hover w-full"
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
            actions={actions}
            isSection
          />
        </button>
      )}

      {(title != null || header != null) && !expandable && (
        <div className="p-400 lm:p-600 w-full">
          <Header
            title={title}
            titleAs={titleAs}
            description={description}
            expandable={expandable}
            header={header}
            expanded={opened}
            actions={actions}
            isSection
          />
        </div>
      )}

      {children && expandable && (
        <Expandable expanded={opened} slideID={slideID} labelID={slideID}>
          <div className="font-base text-normal text-primary-foreground px-400 lm:px-600 w-full leading-normal">
            <div className="py-400 lm:py-600 border-elevation-flat-border-color border-t">
              {children}
            </div>
          </div>
        </Expandable>
      )}

      {children && !expandable && (
        <div
          className={cx(
            "font-base text-normal text-primary-foreground px-400 lm:px-600 pb-400 lm:pb-600 w-full leading-normal",
            title == null && header == null && "pt-400 lm:pt-600",
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}
