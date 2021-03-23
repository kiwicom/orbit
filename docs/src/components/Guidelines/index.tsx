import React from "react";
import styled, { css } from "styled-components";
import { CheckCircle, CloseCircle } from "@kiwicom/orbit-components/icons";
import { Stack, Text } from "@kiwicom/orbit-components";
import useMediaQuery from "@kiwicom/orbit-components/lib/hooks/useMediaQuery";
import { imageWrapperClass } from "gatsby-remark-images/constants.js";

import HeadingWithLink from "../HeadingWithLink";
import { slugify } from "../../utils/common";

export interface GuidelineType {
  type: "do" | "dont";
}

interface GuidelineProps extends GuidelineType {
  title: string;
  children: React.ReactNode;
}

const StyledComponent = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.orbit.paletteCloudLight};
    border-radius: ${theme.orbit.spaceMedium};
    padding: ${theme.orbit.spaceMedium} 0;
  `}
`;

interface WrapperProps extends GuidelineType {
  border: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  ${({ border, theme, type }) => css`
    ${border &&
    `border-left: 4px solid ${
      type === "do" ? theme.orbit.paletteGreenNormal : theme.orbit.paletteRedNormal
    }`};
    padding: ${theme.orbit.spaceXSmall} ${theme.orbit.spaceLarge} ${theme.orbit.spaceXSmall}
      ${theme.orbit.spaceMedium};
    display: flex;
  `}
`;

const ContentContainer = styled.div`
  ${({ theme }) => css`
    padding-left: ${theme.orbit.spaceXSmall};
  `}
`;

interface ImageContainerProps {
  noLeftPadding?: boolean;
  middleAlign?: boolean;
  isMediumMobile?: boolean | null;
}

const ImageContainer = styled.div<ImageContainerProps>`
  ${({ isMediumMobile, noLeftPadding, theme }) => css`
    padding: ${noLeftPadding ? theme.orbit.spaceMedium : theme.orbit.spaceXLarge};
    ${noLeftPadding && "padding-left: 0;"}
    width: ${isMediumMobile ? "346px" : "100%"};
    background-color: ${theme.orbit.paletteWhite};
    border-radius: ${theme.orbit.spaceMedium};
  `}
`;

const ImageBorder = styled.div<GuidelineType>`
  ${({ theme, type }) => css`
    border-left: 4px solid
      ${type === "do" ? theme.orbit.paletteGreenNormal : theme.orbit.paletteRedNormal};
    padding: ${theme.orbit.spaceMedium};
    padding-left: ${theme.orbit.spaceXLarge};
    height: 100%;
  `}
`;

const DoDontHeaderWrapper = styled.div`
  padding-left: ${({ theme }) => theme.orbit.spaceLarge};
`;

export const DoDontHeader = ({ type }: GuidelineType) => (
  <Text weight="bold" uppercase type={type === "do" ? "success" : "critical"}>
    {type === "do" ? "Do" : "Don't"}
  </Text>
);

export default function Guideline({ type = "do", title, children }: GuidelineProps) {
  const { isDesktop, isMediumMobile, isTablet } = useMediaQuery();

  const isImage = object => {
    if (object.props?.children?.props?.className === imageWrapperClass) return true;
    return false;
  };

  interface Content {
    images: React.ReactNode[];
    content: React.ReactNode;
  }

  const extractContent = data => {
    return React.Children.toArray(data).reduce(
      (acc: Content, cur) => {
        if (isImage(cur)) acc.images.push(cur);
        else acc.content = cur;

        return acc;
      },
      { images: [], content: null },
    );
  };

  const { images, content } = extractContent(children);

  const typeOpposite = type === "do" ? "dont" : "do";

  return (
    <StyledComponent id={slugify(title)}>
      <Wrapper type={type} border={!(images.length > 1)}>
        {images.length < 2 &&
          (type === "do" ? (
            <CheckCircle color="success" ariaLabel="Do" />
          ) : (
            <CloseCircle color="critical" ariaLabel="Don't" />
          ))}
        <Stack justify="between" shrink direction={isDesktop ? "row" : "column"}>
          <ContentContainer>
            <HeadingWithLink headingLevel={4} headingText={title} noId />
            {content}
          </ContentContainer>
          {images.length === 1 && (
            <ImageContainer middleAlign isMediumMobile={isMediumMobile}>
              {images}
            </ImageContainer>
          )}
          {images.length > 1 && (
            <Stack
              shrink
              direction={isTablet ? "row" : "column"}
              justify={isDesktop ? "end" : "start"}
              basis="content"
            >
              <Stack shrink direction="column" spacing="XXXSmall">
                <DoDontHeaderWrapper>
                  <DoDontHeader type={type} />
                </DoDontHeaderWrapper>
                <ImageContainer isMediumMobile={isMediumMobile} noLeftPadding>
                  <ImageBorder type={type}>{images[0]}</ImageBorder>
                </ImageContainer>
              </Stack>
              <Stack shrink direction="column" spacing="XXXSmall">
                <DoDontHeaderWrapper>
                  <DoDontHeader type={typeOpposite} />
                </DoDontHeaderWrapper>
                <ImageContainer isMediumMobile={isMediumMobile} noLeftPadding>
                  <ImageBorder type={typeOpposite}>{images[1]}</ImageBorder>
                </ImageContainer>
              </Stack>
            </Stack>
          )}
        </Stack>
      </Wrapper>
    </StyledComponent>
  );
}
