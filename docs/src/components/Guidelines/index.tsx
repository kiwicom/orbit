import React from "react";
import styled, { css } from "styled-components";
import { CheckCircle, CloseCircle } from "@kiwicom/orbit-components/icons";
import { Stack, Text, Grid, mediaQueries as mq } from "@kiwicom/orbit-components";
import useTheme from "@kiwicom/orbit-components/lib/hooks/useTheme";

import { StyledAnchor } from "../HeadingWithLink";
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
interface Props extends GuidelineType {
  title: string;
  svgs: React.ComponentType<unknown>[];
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
    p + & {
      margin-top: ${theme.orbit.spaceLarge};
    }
    & + ${StyledAnchor} {
      margin-top: ${theme.orbit.spaceXLarge};
    }
  `}
`;

const StyledImageContainer = styled.div<ImageContainerProps>`
  ${({ theme, type }) => css`
    background: ${theme.orbit.paletteWhite};
    border-radius: ${theme.orbit.borderRadiusNormal};
    border-top: 3px solid
      ${type === "do" ? theme.orbit.paletteGreenNormal : theme.orbit.paletteRedNormal};
    display: flex;
    justify-content: center;
    padding: 20px;
    ${mq.desktop(css`
      padding: ${theme.orbit.spaceMedium};
    `)};
  `}
`;

const StyledImage = styled.div`
  height: 100%;
  svg {
    max-width: 100%;
  }
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

export default function Guideline({ type = "do", title, svgs = [], children }: Props) {
  const { images, content } = extractContent(children);
  const typeOpposite = type === "do" ? "dont" : "do";
  const theme = useTheme();

  const vectors =
    svgs.length > 0 ? svgs.map((Component: React.ComponentType<unknown>) => <Component />) : [];
  const allImages = [...vectors, ...images];

  return (
    <StyledComponent id={slugify(title)} type={type} coloredBorder={!(images.length > 1)}>
      <Grid
        columns="1fr"
        desktop={{ columns: `repeat(${allImages.length + 1}, 1fr)` }}
        gap={theme.orbit.spaceXLarge}
      >
        <Stack flex shrink direction="column">
          <Stack
            justify="between"
            direction="row-reverse"
            spacing="XSmall"
            tablet={{ direction: "row", justify: "start" }}
          >
            {allImages.length < 2 &&
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
        {allImages.length === 1 && (
          <StyledImageContainer type={type} middleAlign>
            {allImages[0]}
          </StyledImageContainer>
        )}
        {allImages.length > 1 && (
          <>
            <Stack shrink direction="column" spacing="XSmall">
              <DoDontHeader type={type} />
              <StyledImageContainer type={type}>
                <StyledImage>{allImages[0]}</StyledImage>
              </StyledImageContainer>
            </Stack>
            <Stack shrink direction="column" spacing="XSmall">
              <DoDontHeader type={typeOpposite} />
              <StyledImageContainer type={typeOpposite}>
                <StyledImage>{allImages[1]}</StyledImage>
              </StyledImageContainer>
            </Stack>
          </>
        )}
      </Grid>
    </StyledComponent>
  );
}
