// @flow
import * as React from "react";
import styled from "styled-components";

import { useAccordion } from "../AccordionContext";
import randomID from "../../utils/randomID";
import useBoundingRect from "../../hooks/useBoundingRect";
import Slide from "../../utils/Slide";
import AccordionWrapper from "../components/AccordionWrapper";
import SectionHeader from "./components/SectionHeader";
import SectionFooter from "./components/SectionFooter";
import SectionContent from "./components/SectionContent";

import type { Props } from "./index";

const ExpandableContent = styled.div`
  dispaly: flex;
  flex-direction: column;
`;

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
        <ExpandableContent expanded={expanded} ref={ref}>
          {children && (
            <SectionContent hasFooter={Boolean(footer)} expanded={Boolean(expanded)}>
              {children}
            </SectionContent>
          )}
          {footer && <SectionFooter>{footer}</SectionFooter>}
        </ExpandableContent>
      </Slide>
    </AccordionWrapper>
  );
};

export default AccordionSection;
