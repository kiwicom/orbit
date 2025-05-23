import React from "react";
import styled, { css } from "styled-components";
import { Stack, Grid } from "@kiwicom/orbit-components";

import { resolveBorders } from "./helpers";

import { DoDontHeader, GuidelineType } from ".";

const GuidelineContainer = styled.div<
  { type: "do" | "dont"; coloredBorder: boolean } & React.HTMLAttributes<HTMLDivElement>
>`
  ${({ theme }) => css`
    padding: ${theme.orbit.space400} ${theme.orbit.space800};
    width: 100%;
    ${resolveBorders};
    background: ${theme.orbit.paletteCloudLight};
    border-radius: ${theme.orbit.borderRadius100};
  `}
`;

interface ImageContainerProps {
  leftPadding?: boolean;
}

const ImageContainer = styled.div<ImageContainerProps & React.HTMLAttributes<HTMLDivElement>>`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.orbit.paletteWhite};
    border-radius: ${theme.orbit.borderRadius100};
    padding: ${theme.orbit.space800};
  `}
`;

interface GuidelineWithImageProps extends GuidelineType, ImageProps {}

const GuidelineWithImage = ({ children, type }: GuidelineWithImageProps) => {
  const image = children[0];
  const content = children.slice(1, children.length);
  return (
    <GuidelineContainer type={type} coloredBorder>
      <Stack>
        <Stack spacing="300">
          <DoDontHeader type={type} />
          {content}
        </Stack>
        <ImageContainer>{image}</ImageContainer>
      </Stack>
    </GuidelineContainer>
  );
};

interface ImageProps {
  children: [React.ReactNode];
}

export const DoImage = ({ children }: ImageProps) => (
  <GuidelineWithImage type="do">{children}</GuidelineWithImage>
);

export const DontImage = ({ children }: ImageProps) => (
  <GuidelineWithImage type="dont">{children}</GuidelineWithImage>
);

interface GuidelineImagesProps {
  children: ImageProps["children"];
}

export default function GuidelineImages({ children }: GuidelineImagesProps) {
  return (
    <Grid columns="1fr" gap="1rem" tablet={{ columns: "repeat(2, 1fr)" }}>
      {children}
    </Grid>
  );
}
