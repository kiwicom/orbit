import React from "react";
import styled, { css } from "styled-components";

import { Provider as SectionProvider } from "./AccordionContext";
import getSpacingToken from "../common/getSpacingToken";
import type { Props } from "./types";
import * as Common from "../common/types";
import defaultTheme from "../defaultTheme";

interface StyledProps extends Common.SpaceAfter {}

export const StyledAccordion = styled.div<StyledProps>`
  ${({ theme }) => css`
    width: 100%;
    box-sizing: border-box;
    position: relative;
    font-family: ${theme.orbit.fontFamily};
    margin-bottom: ${getSpacingToken};
  `};
`;

StyledAccordion.defaultProps = {
  theme: defaultTheme,
};

const Accordion = ({
  children,
  dataTest,
  id,
  spaceAfter,
  expandedSection,
  loading,
  onExpand,
}: Props) => (
  <StyledAccordion spaceAfter={spaceAfter} id={id} data-test={dataTest}>
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
  </StyledAccordion>
);

export default Accordion;
export { default as AccordionSection } from "./AccordionSection";
