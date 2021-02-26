import React from "react";
import styled, { css } from "styled-components";
import { CheckCircle, CloseCircle } from "@kiwicom/orbit-components/icons";
import { Stack, Text } from "@kiwicom/orbit-components";
import useMediaQuery from "@kiwicom/orbit-components/lib/hooks/useMediaQuery";
import { imageWrapperClass } from "gatsby-remark-images/constants.js";

import HeaderWithLink from "./HeaderWithLink";
import { sluggify } from "../utils/common";

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
  sizeCheck?: boolean | null | undefined;
}

const ImageContainer = styled.div<ImageContainerProps>`
  ${({ noLeftPadding, sizeCheck, theme }) => css`
    padding: ${noLeftPadding ? theme.orbit.spaceMedium : theme.orbit.spaceXLarge};
    ${noLeftPadding && "padding-left: 0;"}
    width: ${sizeCheck ? "346px" : "100%"};
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
  ${({ theme }) => css`
    padding-left: ${theme.orbit.spaceLarge};
  `}
`;

export const DoDontHeader = ({ type }: GuidelineType) => (
  <Text weight="bold" uppercase type={type === "do" ? "success" : "critical"}>
    {type === "do" ? "Do" : "Don't"}
  </Text>
);

export default function Guideline({ type = "do", title, children }: GuidelineProps) {
  const { isDesktop, isMediumMobile, isTablet } = useMediaQuery();

  const images: Array<React.ReactNode> = [];
  let content = children;

  const checkIfImageAndAddToArray = object => {
    if (object.props?.children?.props?.className === imageWrapperClass) {
      images.push(object);
      return true;
    }
    return false;
  };

  if (Array.isArray(children)) {
    content = children.map(child => {
      if (checkIfImageAndAddToArray(child)) {
        return "";
      }
      return child;
    });
  } else if (checkIfImageAndAddToArray(children)) {
    content = ""; // only should apply for guidelines with only an image
  }

  const typeOpposite = type === "do" ? "dont" : "do";

  return (
    <StyledComponent id={sluggify(title) || undefined}>
      <Wrapper type={type} border={!(images.length > 1)}>
        {images.length < 2 &&
          (type === "do" ? (
            <CheckCircle color="success" ariaLabel="Do" />
          ) : (
            <CloseCircle color="critical" ariaLabel="Don't" />
          ))}
        <Stack justify="between" shrink direction={isDesktop ? "row" : "column"}>
          <ContentContainer>
            <HeaderWithLink>{title}</HeaderWithLink>
            {content}
          </ContentContainer>
          {images.length === 1 && (
            <ImageContainer middleAlign sizeCheck={isMediumMobile}>
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
                <ImageContainer sizeCheck={isMediumMobile} noLeftPadding>
                  <ImageBorder type={type}>{images[0]}</ImageBorder>
                </ImageContainer>
              </Stack>
              <Stack shrink direction="column" spacing="XXXSmall">
                <DoDontHeaderWrapper>
                  <DoDontHeader type={typeOpposite} />
                </DoDontHeaderWrapper>
                <ImageContainer sizeCheck={isMediumMobile} noLeftPadding>
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
