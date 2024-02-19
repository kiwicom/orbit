"use client";

import React from "react";
import cx from "clsx";

import { Provider as SectionProvider } from "./AccordionContext";
import type { Props } from "./types";
import { spaceAfterClasses } from "../common/tailwind";

const Accordion = ({
  children,
  dataTest,
  id,
  spaceAfter,
  expandedSection,
  loading,
  onExpand,
}: Props) => (
  <div
    className={cx(
      "orbit-accordion font-base relative w-full",
      spaceAfter && spaceAfterClasses[spaceAfter],
    )}
    id={id}
    data-test={dataTest}
  >
    {children
      ? React.Children.map(children, item => {
          if (!item) return null;

          // @ts-expect-error TODO
          const { id: innerId } = item.props;
          // Determine if section is expanded
          const isExpanded = expandedSection === innerId;
          // Callback with section id
          // onExpand is not required prop to have easier loading use case
          const handleExpand = () => onExpand && onExpand(innerId);

          return (
            <SectionProvider value={{ expanded: isExpanded, onExpand: handleExpand, loading }}>
              {item}
            </SectionProvider>
          );
        })
      : null}
  </div>
);

export default Accordion;
export { default as AccordionSection } from "./AccordionSection";
