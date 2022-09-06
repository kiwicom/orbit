import React from "react";

import { useAccordion } from "../AccordionContext";
import useRandomId from "../../hooks/useRandomId";
import useBoundingRect from "../../hooks/useBoundingRect";
import Slide from "../../utils/Slide";
import Loading from "../../Loading";
import AccordionWrapper from "../components/AccordionWrapper";
import SectionHeader from "./components/SectionHeader";
import SectionFooter from "./components/SectionFooter";
import SectionContent from "./components/SectionContent";
import { Props } from "./index.d";

const AccordionSection = ({
  children,
  header,
  footer,
  actions,
  dataTest,
  expandable = true,
}: Props) => {
  const { expanded, onExpand, loading } = useAccordion();

  const slideId = useRandomId();
  const isExpanded = expandable && expanded;

  const [{ height }, ref] = useBoundingRect<HTMLDivElement>({ height: isExpanded ? null : 0 });

  return (
    <AccordionWrapper dataTest={dataTest}>
      <Loading loading={loading} type="boxLoader" dataTest={dataTest && `${dataTest}Loading`}>
        {header && (
          <SectionHeader
            actions={actions}
            expanded={Boolean(isExpanded)}
            onExpand={onExpand}
            expandable={expandable}
            dataTest={dataTest}
          >
            {header}
          </SectionHeader>
        )}

        <Slide maxHeight={height} expanded={isExpanded} id={slideId} ariaLabelledBy={slideId}>
          <div ref={ref}>
            {children && <SectionContent dataTest={dataTest}>{children}</SectionContent>}
            {footer && <SectionFooter dataTest={dataTest}>{footer}</SectionFooter>}
          </div>
        </Slide>
      </Loading>
    </AccordionWrapper>
  );
};

export default AccordionSection;
