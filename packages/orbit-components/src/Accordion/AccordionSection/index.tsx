"use client";

import React from "react";

import { useAccordion } from "../AccordionContext";
import useRandomId from "../../hooks/useRandomId";
import useBoundingRect from "../../hooks/useBoundingRect";
import Slide from "../../utils/Slide";
import Loading from "../../Loading";
import SectionHeader from "./components/SectionHeader";
import SectionFooter from "./components/SectionFooter";
import SectionContent from "./components/SectionContent";
import type { Props } from "./types";

const AccordionSection = ({
  children,
  header,
  footer,
  actions,
  dataTest,
  expandable = true,
  expandOnTileClick = false,
}: Props) => {
  const { expanded, onExpand, loading } = useAccordion();

  const slideId = useRandomId();
  const isExpanded = expandable && expanded;

  const [{ height }, ref] = useBoundingRect<HTMLDivElement>({ height: isExpanded ? null : 0 });

  return (
    <div
      // Note: update SectionFooter's border-radius in case border-width or border-radius of this component changes
      className="border-elevation-flat-border-color rounded-100 my-200 bg-elevation-flat relative w-full border border-solid"
      data-test={dataTest}
    >
      <Loading loading={loading} type="boxLoader" dataTest={dataTest && `${dataTest}Loading`}>
        {header && (
          <SectionHeader
            actions={actions}
            expanded={Boolean(isExpanded)}
            onExpand={onExpand}
            expandable={expandable}
            expandOnTileClick={expandOnTileClick}
            dataTest={dataTest}
            ariaControls={slideId}
          >
            {header}
          </SectionHeader>
        )}

        <Slide maxHeight={height} expanded={isExpanded} id={slideId}>
          <div ref={ref}>
            {children && <SectionContent dataTest={dataTest}>{children}</SectionContent>}
            {footer && <SectionFooter dataTest={dataTest}>{footer}</SectionFooter>}
          </div>
        </Slide>
      </Loading>
    </div>
  );
};

export default AccordionSection;
