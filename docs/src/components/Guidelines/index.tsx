import React from "react";
import styled, { css } from "styled-components";
import { CheckCircle, CloseCircle } from "@kiwicom/orbit-components/icons";
import { Stack, Text, Grid } from "@kiwicom/orbit-components";
import useTheme from "@kiwicom/orbit-components/lib/hooks/useTheme";

import mq from "../MediaQueries";
import { StyledAnchor } from "../HeadingWithLink";
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
    border-radius: ${theme.orbit.borderRadius100};
    padding: ${theme.orbit.space400};
    ${resolveBorders};
    p + & {
      margin-top: ${theme.orbit.space600};
    }
    & + ${StyledAnchor} {
      margin-top: ${theme.orbit.space800};
    }
    li {
      list-style: inside none disc;
    }
  `}
`;

const StyledImageContainer = styled.div<ImageContainerProps>`
  ${({ theme, type }) => css`
    background: ${theme.orbit.paletteWhite};
    border-radius: ${theme.orbit.borderRadius100};
    border-top: 3px solid
      ${type === "do" ? theme.orbit.paletteGreenNormal : theme.orbit.paletteRedNormal};
    display: flex;
    justify-content: center;
    padding: 20px;
    height: 100%;
    ${mq.desktop(css`
      padding: ${theme.orbit.space400};
    `)};
  `}
`;

const StyledImage = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;

  svg {
    max-width: 100%;
  }

  p {
    width: 100%;
  }
`;

export const DoDontHeader = ({ type }: GuidelineType) => (
  <Stack
    flex
    spacing="200"
    justify="between"
    direction="row-reverse"
    tablet={{ direction: "row", justify: "start" }}
  >
    {type === "do" ? (
      <CheckCircle color="success" size="large" />
    ) : (
      <CloseCircle color="critical" size="large" />
    )}
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
        gap={theme.orbit.space800}
      >
        <Stack flex shrink direction="column">
          <Stack
            justify="between"
            direction="row-reverse"
            spacing="200"
            tablet={{ direction: "row", justify: "start" }}
          >
            {allImages.length < 2 &&
              (type === "do" ? (
                <CheckCircle color="success" ariaLabel="Do" size="large" />
              ) : (
                <CloseCircle color="critical" ariaLabel="Don't" size="large" />
              ))}
            <Stack>
              <Text weight="bold">{title}</Text>
              {content}
            </Stack>
          </Stack>
        </Stack>
        {allImages.length === 1 && (
          <StyledImageContainer type={type} middleAlign>
            <StyledImage>{allImages[0]}</StyledImage>
          </StyledImageContainer>
        )}
        {allImages.length > 1 && (
          <>
            <Stack shrink align="stretch" direction="column" spacing="200">
              <DoDontHeader type={type} />
              <StyledImageContainer type={type}>
                <StyledImage>{allImages[0]}</StyledImage>
              </StyledImageContainer>
            </Stack>
            <Stack shrink align="stretch" direction="column" spacing="200">
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
