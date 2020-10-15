// @flow
import * as React from "react";

import { useAccordion } from "../AccordionContext";
import randomID from "../../utils/randomID";
import useBoundingRect from "../../hooks/useBoundingRect";
import Slide from "../../utils/Slide";
import Loading from "../../Loading";
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
  const { expanded, onExpand, loading } = useAccordion();

  const slideID = React.useMemo(() => randomID("slideID"), []);

  const [{ height }, ref] = useBoundingRect({ height: expanded ? null : 0 });

  return (
    <AccordionWrapper dataTest={dataTest}>
      <Loading loading={loading} type="boxLoader">
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

        <Slide maxHeight={height} expanded={expanded} id={slideID} ariaLabelledBy={slideID}>
          <div ref={ref}>
            {children && <SectionContent>{children}</SectionContent>}
            {footer && <SectionFooter>{footer}</SectionFooter>}
          </div>
        </Slide>
      </Loading>
    </AccordionWrapper>
  );
};

export default AccordionSection;
