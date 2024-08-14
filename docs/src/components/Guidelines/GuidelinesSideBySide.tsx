import React from "react";
import styled, { css } from "styled-components";
import { CheckCircle, CloseCircle, Check, Close } from "@kiwicom/orbit-components/icons";
import { Stack, Grid, Text } from "@kiwicom/orbit-components";

import { resolveBorders } from "./helpers";

import { GuidelineType } from ".";

interface GuidelineItemProps extends GuidelineType {
  children: React.ReactNode;
  type: "do" | "dont";
}

const StyledWrapper = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.orbit.space600};
  `};
`;

// Guidelines don't inherit spacing from Prose
// So otherwise adjacent p elements are right next to each other
const StyledContainer = styled.div<{ type: "do" | "dont"; coloredBorder: boolean }>`
  ${({ theme }) => css`
    padding: ${theme.orbit.space400} ${theme.orbit.space600};
    background: ${theme.orbit.paletteCloudLight};
    border-radius: ${theme.orbit.borderRadius100};
    width: 100%;
    ${resolveBorders};

    p + p {
      margin-top: ${theme.orbit.space300};
    }
  `}
`;

const GuidelineIcons = ({ type }) =>
  type === "do" ? (
    <CheckCircle color="success" ariaLabel="Do" size="large" />
  ) : (
    <CloseCircle color="critical" ariaLabel="Don't" size="large" />
  );

const GuidelineItemIcons = ({ type }) =>
  type === "do" ? (
    <Check color="success" ariaLabel="Do" size="large" />
  ) : (
    <Close color="critical" ariaLabel="Don't" size="large" />
  );

const GuidelineItem = ({ children, type }: GuidelineItemProps) => (
  <Stack flex spacing="200" spaceAfter="small">
    <GuidelineItemIcons type={type} />
    <div>{children}</div>
  </Stack>
);

const GuidelineContainer = ({ children, type }) => {
  return (
    <StyledContainer type={type} coloredBorder>
      <Stack
        flex
        direction="row-reverse"
        tablet={{ direction: "row", justify: "start" }}
        spacing="200"
        justify="between"
        align="center"
      >
        <GuidelineIcons type={type} />
        {type === "do" ? (
          <Text type="success" weight="bold">
            Do
          </Text>
        ) : (
          <Text type="critical" weight="bold">
            Don’t
          </Text>
        )}
      </Stack>
      <StyledWrapper>
        {React.Children.map(children.props?.children, child => (
          <GuidelineItem type={type}>{child.props.children}</GuidelineItem>
        )) || <GuidelineItem type={type}>{children.props?.children.props?.children}</GuidelineItem>}
      </StyledWrapper>
    </StyledContainer>
  );
};

export const Do = ({ children }) => <GuidelineContainer type="do">{children}</GuidelineContainer>;

export const Dont = ({ children }) => (
  <GuidelineContainer type="dont">{children}</GuidelineContainer>
);

export default function GuidelinesSideBySide({ children }) {
  return (
    <Grid columns="1fr" gap="1rem" tablet={{ columns: "repeat(2, 1fr)" }}>
      {children}
    </Grid>
  );
}
