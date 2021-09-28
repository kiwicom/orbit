import React from "react";
import styled, { css } from "styled-components";
import { CheckCircle, CloseCircle } from "@kiwicom/orbit-components/icons";
import { Stack, Text, Grid, useMediaQuery, mediaQueries as mq } from "@kiwicom/orbit-components";
import useTheme from "@kiwicom/orbit-components/lib/hooks/useTheme";

import { h3 as H3 } from "../../mdx-components";
import { slugify } from "../../utils/common";
import { extractContent, resolveBorders } from "./helpers";

export interface GuidelineType {
  type: "do" | "dont";
}
export interface Content {
  images: React.ReactNode[];
  content: React.ReactNode;
}
interface GuidelineProps extends GuidelineType {
  title: string;
  children: React.ReactNode;
}

interface GuidelineComponent extends GuidelineType {
  id: string;
  coloredBorder: boolean;
}

interface ImageContainerProps extends GuidelineType {
  middleAlign?: boolean;
}

const StyledComponent = styled.div<GuidelineComponent>`
  ${({ theme }) => css`
    background: ${theme.orbit.paletteCloudLight};
    border-radius: ${theme.orbit.borderRadiusNormal};
    padding: ${theme.orbit.spaceMedium};
    ${resolveBorders};
  `}
`;

const StyledImageContainer = styled.div<ImageContainerProps>`
  ${({ theme, type }) => css`
    background: ${theme.orbit.paletteWhite};
    border-radius: ${theme.orbit.borderRadiusNormal};
    border-top: 3px solid
      ${type === "do" ? theme.orbit.paletteGreenNormal : theme.orbit.paletteRedNormal};
    padding: 30px 20%;
    ${mq.desktop(css`
      padding: ${theme.orbit.spaceMedium};
    `)};
  `}
`;

const StyledImage = styled.div`
  height: 100%;
`;

export const DoDontHeader = ({ type }: GuidelineType) => (
  <Stack
    flex
    spacing="XSmall"
    justify="between"
    direction="row-reverse"
    tablet={{ direction: "row", justify: "start" }}
  >
    {type === "do" ? <CheckCircle color="success" /> : <CloseCircle color="critical" />}
    <Text weight="bold" type={type === "do" ? "success" : "critical"}>
      {type === "do" ? "Do" : "Don't"}
    </Text>
  </Stack>
);

export default function Guideline({ type = "do", title, children }: GuidelineProps) {
  const { images, content } = extractContent(children);
  const typeOpposite = type === "do" ? "dont" : "do";
  const theme = useTheme();

  return (
    <StyledComponent id={slugify(title)} type={type} coloredBorder={!(images.length > 1)}>
      <Grid
        columns="1fr"
        desktop={{ columns: `repeat(${images.length + 1}, 1fr)` }}
        gap={theme.orbit.spaceXLarge}
      >
        <Stack flex shrink direction="column">
          <Stack
            justify="between"
            direction="row-reverse"
            spacing="XSmall"
            tablet={{ direction: "row", justify: "start" }}
          >
            {images.length < 2 &&
              (type === "do" ? (
                <CheckCircle color="success" ariaLabel="Do" />
              ) : (
                <CloseCircle color="critical" ariaLabel="Don't" />
              ))}
            <Stack>
              <H3 noId>{title}</H3>
              {content}
            </Stack>
          </Stack>
        </Stack>
        {images.length === 1 && (
          <StyledImageContainer type={type} middleAlign>
            {images}
          </StyledImageContainer>
        )}
        {images.length > 1 && (
          <>
            <Stack shrink direction="column" spacing="XSmall">
              <DoDontHeader type={type} />
              <StyledImageContainer type={type}>
                <StyledImage>{images[0]}</StyledImage>
              </StyledImageContainer>
            </Stack>
            <Stack shrink direction="column" spacing="XSmall">
              <DoDontHeader type={typeOpposite} />
              <StyledImageContainer type={typeOpposite}>
                <StyledImage>{images[1]}</StyledImage>
              </StyledImageContainer>
            </Stack>
          </>
        )}
      </Grid>
    </StyledComponent>
  );
}
