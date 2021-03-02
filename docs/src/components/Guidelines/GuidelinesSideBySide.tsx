import React from "react";
import styled, { css } from "styled-components";
import { CheckCircle, CloseCircle } from "@kiwicom/orbit-components/icons";
import { Stack } from "@kiwicom/orbit-components";
import useMediaQuery from "@kiwicom/orbit-components/lib/hooks/useMediaQuery";

import { GuidelineType } from ".";

interface GuidelineItemProps extends GuidelineType {
  children: React.ReactNode;
  type: "do" | "dont";
}

const Wrapper = styled.div<GuidelineType>`
  ${({ theme, type }) => css`
    border-top: 4px solid
      ${type === "do" ? theme.orbit.paletteGreenNormal : theme.orbit.paletteRedNormal};
    padding: ${theme.orbit.spaceLarge} ${theme.orbit.spaceMedium};
  `}
`;

interface StyledContainerProps {
  isTablet?: boolean | null;
}

const StyledContainer = styled.div<StyledContainerProps>`
  ${({ isTablet, theme }) => css`
    padding: 0 ${theme.orbit.spaceLarge};
    background-color: ${theme.orbit.paletteCloudLight};
    border-radius: 16px;
    width: ${isTablet ? "50%" : "100%"};
  `}
`;

const GuidelineItem = ({ children, type }: GuidelineItemProps) => (
  <Stack direction="row" spacing="small" spaceAfter="small">
    {type === "do" ? (
      <CheckCircle color="success" ariaLabel="Do" />
    ) : (
      <CloseCircle color="critical" ariaLabel="Don't" />
    )}
    <div>{children}</div>
  </Stack>
);

const GuidelineContainer = ({ children, type }) => {
  const { isTablet } = useMediaQuery();
  return (
    <StyledContainer isTablet={isTablet}>
      <Wrapper type={type}>
        {React.Children.map(children.props?.children, child => (
          <GuidelineItem type={type}>{child.props.children}</GuidelineItem>
        )) || <GuidelineItem type={type}>{children.props?.children.props?.children}</GuidelineItem>}
      </Wrapper>
    </StyledContainer>
  );
};

export const Do = ({ children }) => <GuidelineContainer type="do">{children}</GuidelineContainer>;

export const Dont = ({ children }) => (
  <GuidelineContainer type="dont">{children}</GuidelineContainer>
);

export default function GuidelinesSideBySide({ children }) {
  const { isTablet } = useMediaQuery();

  return <Stack direction={isTablet ? "row" : "column"}>{children}</Stack>;
}
