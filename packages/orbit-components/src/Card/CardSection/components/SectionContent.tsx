import * as React from "react";
import styled, { css } from "styled-components";

import transition from "../../../utils/transition";
import defaultTheme from "../../../defaultTheme";
import Slide from "../../../utils/Slide";
import mq from "../../../utils/mediaQuery";
import useBoundingRect from "../../../hooks/useBoundingRect";

interface Props {
  expandable: boolean;
  expanded?: boolean;
  children?: React.ReactNode;
  noSeparator?: boolean;
  hasPaddingTop: boolean;
  slideID: string;
  labelID: string;
}

const StyledCardSectionContent = styled.div<Partial<Props>>`
  ${({ theme, expanded, noSeparator, hasPaddingTop }) => css`
    font-family: ${theme.orbit.fontFamily};
    font-size: ${theme.orbit.fontSizeTextNormal};
    line-height: ${theme.orbit.lineHeightTextNormal};
    color: ${theme.orbit.colorTextPrimary};
    width: 100%;
    border-top: ${expanded && !noSeparator
      ? `1px solid ${theme.orbit.paletteCloudNormal}`
      : `0px solid ${theme.orbit.paletteCloudNormal}`};
    padding-top: ${hasPaddingTop && theme.orbit.spaceMedium};
    transition: ${transition(["padding", "border-top"], "fast", "linear")};

    ${mq.largeMobile(css`
      padding-top: ${theme.orbit.spaceLarge};
    `)}
  `}
`;

StyledCardSectionContent.defaultProps = {
  theme: defaultTheme,
};

const SectionContent = ({
  expandable,
  expanded,
  children,
  noSeparator,
  hasPaddingTop,
  slideID,
  labelID,
}: Props) => {
  const [{ height }, ref] = useBoundingRect<HTMLDivElement>({ height: expanded ? null : 0 });

  return (
    <>
      {expandable ? (
        <Slide maxHeight={height} expanded={expanded} id={slideID} ariaLabelledBy={labelID}>
          <StyledCardSectionContent
            noSeparator={noSeparator}
            ref={ref}
            expanded={expanded}
            hasPaddingTop={hasPaddingTop}
            expandable={expandable}
          >
            {children}
          </StyledCardSectionContent>
        </Slide>
      ) : (
        <StyledCardSectionContent ref={ref} hasPaddingTop={hasPaddingTop}>
          {children}
        </StyledCardSectionContent>
      )}
    </>
  );
};

export default SectionContent;
