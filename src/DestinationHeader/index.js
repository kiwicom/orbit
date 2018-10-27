// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import ChevronLeft from "../icons/ChevronLeft";
import Heading, { StyledHeading, getHeadingToken } from "../Heading";
import { TYPE_OPTIONS, TOKENS } from "../Heading/consts";
import ButtonLink, { StyledButton } from "../Button";
import BASE_URL from "./consts";
import defaultTokens from "../defaultTokens";
import LazyImage, { StyledLazyImage } from "../LazyImage";
import mq from "../utils/mediaQuery";

import type { Props } from "./index";

const StyledDestinationHeader = styled.div`
  width: 100%;
  height: 80px; // TODO: create token default heightDestinationHeader
  position: relative;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  overflow: hidden;

  ${StyledLazyImage} {
    z-index: 1;
  }

  ${mq.largeMobile(css`
    height: 120px; // TODO: create token largeMobile heightDestinationHeader
  `)};
`;

StyledDestinationHeader.defaultProps = {
  theme: defaultTokens,
};

const StyledOverlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  background-image: linear-gradient(to top, rgba(16, 19, 21, 0.75), rgba(0, 0, 0, 0));
  z-index: 2;
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
`;

StyledOverlay.defaultProps = {
  theme: defaultTokens,
};

const StyledContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;

  ${StyledButton} {
    align-self: flex-start;
    background: none;
  }

  ${mq.largeMobile(css`
    ${StyledButton} {
      width: ${({ theme }) => theme.orbit.heightButtonNormal};
      height: ${({ theme }) => theme.orbit.heightButtonNormal};

      svg {
        width: ${({ theme }) => theme.orbit.widthIconMedium};
        height: ${({ theme }) => theme.orbit.heightIconMedium};
      }
    }
  `)};
`;

StyledContent.defaultProps = {
  theme: defaultTokens,
};

const StyledHeader = styled.div`
  box-sizing: border-box;
  padding: ${({ theme }) => `${theme.orbit.spaceXSmall} ${theme.orbit.spaceSmall}`};

  ${mq.largeMobile(css`
    padding: ${({ theme }) => `${theme.orbit.spaceSmall} ${theme.orbit.spaceMedium}`};
    ${StyledHeading} {
      font-size: ${({ theme }) =>
        getHeadingToken(TOKENS.sizeHeading)({ theme, type: TYPE_OPTIONS.TITLE1 })};
      font-weight: ${({ theme }) =>
        getHeadingToken(TOKENS.weightHeading)({ theme, type: TYPE_OPTIONS.TITLE1 })};
    }
  `)};
`;

StyledHeader.defaultProps = {
  theme: defaultTokens,
};

const DestinationHeader = ({ destination, destinationName, goBack, dataTest }: Props) => {
  return (
    <StyledDestinationHeader data-test={dataTest}>
      <StyledOverlay />
      <LazyImage
        original={{
          webp: `${BASE_URL}/photos/900x120/${destination}.webp`,
          jpg: `${BASE_URL}/photos/900x120/${destination}.jpg`,
        }}
        name={destinationName}
        // TODO: placeholder images, not on S3
      />
      <StyledContent>
        <ButtonLink size="small" iconLeft={<ChevronLeft />} onClick={goBack} />
        <StyledHeader>
          <Heading inverted type="title2">
            {destinationName}
          </Heading>
        </StyledHeader>
      </StyledContent>
    </StyledDestinationHeader>
  );
};

export default DestinationHeader;
