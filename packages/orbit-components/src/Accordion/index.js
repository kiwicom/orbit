// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";
import getSpacingToken from "../common/getSpacingToken";

import type { Props } from "./index";

export const StyledCard = styled.div`
  width: 100%;
  box-sizing: border-box;
  position: relative;
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  margin-bottom: ${getSpacingToken};
`;

StyledCard.defaultProps = {
  theme: defaultTheme,
};

const Accordion = ({ children, dataTest, spaceAfter, expanded }: Props) => {
  // Make first section expanded by default (index 0)
  const [expandedSection, setExpandedSection] = React.useState(0);

  React.useEffect(() => {
    if (typeof expanded !== "undefined") {
      setExpandedSection(expanded);
    }
  }, [expanded]);

  const onDefaultExpand = React.useCallback(segmentId => setExpandedSection(segmentId), [
    setExpandedSection,
  ]);

  const renderSection = (item, index) => {
    if (React.isValidElement(item)) {
      const { id, onExpand } = item.props;

      // Either use provided id or item index
      const sectionId = (typeof id !== "undefined" && id) || index;
      // Determine if section is expanded
      const isExpanded = expandedSection === sectionId;
      const handleDefaultExpand = () => onDefaultExpand(sectionId);

      return React.cloneElement(item, {
        ...item.props,
        expanded: isExpanded,
        onExpand: onExpand || handleDefaultExpand,
      });
    }

    return null;
  };

  // console.log("Accordion: expanded", expanded);

  return (
    <StyledCard spaceAfter={spaceAfter} data-test={dataTest}>
      {children
        ? React.Children.map(children, (item, key) => {
            if (!item) return null;

            // This is used for the case when user wants to map sections and change their order
            // related issue: #1005
            const index = Number(item.key) || key;

            return renderSection(item, index);
          })
        : null}
    </StyledCard>
  );
};

export default Accordion;
