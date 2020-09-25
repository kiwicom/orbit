// @flow
import * as React from "react";
import styled from "styled-components";

import randomID from "../../utils/randomID";
import useBoundingRect from "../../hooks/useBoundingRect";
import Slide from "../../utils/Slide";
import CardWrapper from "../components/CardWrapper";
import SectionHeader from "./components/SectionHeader";
import SectionFooter from "./components/SectionFooter";
import SectionContent from "./components/SectionContent";

// import type { Props } from "./index";

const ExpandableContent = styled.div`
  dispaly: flex;
  flex-direction: column;
  /* transform: ${({ expanded }) => (expanded ? "scaleY(1)" : "scaleY(0)")}; */
  /* transition: all 0.3s ease-in-out; */
`;

const AccordionSection = props => {
  const { children, header, footer, expanded, onExpand, actions } = props;

  // console.log("===+> props: ", props);

  const slideID = React.useMemo(() => randomID("slideID"), []);
  const labelID = React.useMemo(() => randomID("labelID"), []);

  const [{ height }, ref] = useBoundingRect({ height: expanded ? null : 0 });

  return (
    <CardWrapper>
      {header && (
        <SectionHeader actions={actions} expanded={expanded} onExpand={onExpand}>
          {header}
        </SectionHeader>
      )}

      <Slide maxHeight={height} expanded={expanded} id={slideID} ariaLabelledBy={labelID}>
        <ExpandableContent expanded={expanded} ref={ref}>
          <SectionContent hasFooter={Boolean(footer)}>{children}</SectionContent>
          {footer && <SectionFooter>{footer}</SectionFooter>}
        </ExpandableContent>
      </Slide>
    </CardWrapper>
  );
};

export default AccordionSection;
