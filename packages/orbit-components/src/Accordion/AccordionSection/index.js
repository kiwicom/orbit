// @flow
import * as React from "react";

import { useAccordion } from "../AccordionContext";
import randomID from "../../utils/randomID";
import useBoundingRect from "../../hooks/useBoundingRect";
import Slide from "../../utils/Slide";
import AccordionWrapper from "../components/AccordionWrapper";
import SectionHeader from "./components/SectionHeader";
import SectionFooter from "./components/SectionFooter";
import SectionContent from "./components/SectionContent";

import type { Props } from "./index";

const AccordionSection = ({
  children,
  header,
  footer,
  actions,
  dataTest,
  expandable = true,
}: Props) => {
  const { expanded, onExpand } = useAccordion();

  const slideID = React.useMemo(() => randomID("slideID"), []);
  const labelID = React.useMemo(() => randomID("labelID"), []);

  const [{ height }, ref] = useBoundingRect({ height: expanded ? null : 0 });

  return (
    <AccordionWrapper dataTest={dataTest}>
      {header && (
        <SectionHeader
          actions={actions}
          expanded={Boolean(expanded)}
          onExpand={onExpand}
          expandable={expandable}
        >
          {header}
        </SectionHeader>
      )}

      <Slide maxHeight={height} expanded={expanded} id={slideID} ariaLabelledBy={labelID}>
        <div expanded={expanded} ref={ref}>
          {children && <SectionContent>{children}</SectionContent>}
          {footer && <SectionFooter>{footer}</SectionFooter>}
        </div>
      </Slide>
    </AccordionWrapper>
  );
};

export default AccordionSection;
