// @flow
import * as React from "react";
import styled, { keyframes } from "styled-components";

import defaultTokens from "../defaultTokens";
import TYPE_OPTIONS from "./consts";
import type { Props } from "../Loading/index";

// Animations
const SpinnerAnimation = keyframes`
  100% { transform: rotate(360deg); }
`;

const LoaderAnimation = keyframes`
  0% {opacity: .3; transform:translateY(0px);}
  20% {opacity: 1; transform: translateY(-3px);}
  40%  {opacity: .3; transform:translateY(0px);}
  100%  {opacity: .3; transform:translateY(0px);}
`;

const StyledLoading = styled(({ children, className }) => (
  <div className={className}>{children}</div>
))`
  position: ${({ type }) => type === TYPE_OPTIONS.BUTTON_LOADER && "absolute"};
  left: ${({ type }) => type === TYPE_OPTIONS.BUTTON_LOADER && "0"};
  width: ${({ type }) => type === TYPE_OPTIONS.BUTTON_LOADER && "100%"};
  height: ${({ tokens, type }) => tokens.heightLoadingContainer[type]};
  padding: 0 ${({ theme }) => theme.orbit.spaceSmall}; // TODO: create token paddingLoading
  display: flex;
  flex-direction: ${({ type }) => (type === TYPE_OPTIONS.PAGE_LOADER ? "column" : "row")};
  justify-content: ${({ tokens, type }) => tokens.alignLoadingContainer[type]};
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;
`;

StyledLoading.defaultProps = {
  theme: defaultTokens,
};

const StyledLoadingText = styled.div`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
  color: ${({ theme }) => theme.orbit.paletteInkLighter}; // TODO: create token colorTextLoading
  line-height: ${({ theme }) => theme.orbit.lineHeightText};
  margin-top: ${({ theme, type }) => type === TYPE_OPTIONS.PAGE_LOADER && theme.orbit.spaceMedium};
  margin-left: ${({ theme, type }) => type !== TYPE_OPTIONS.PAGE_LOADER && theme.orbit.spaceSmall};
`;

StyledLoadingText.defaultProps = {
  theme: defaultTokens,
};

export const StyledSpinner = styled.svg`
  width: 40px;
  height: 40px;
  animation: ${SpinnerAnimation} 0.75s linear infinite;
`;

const StyledSpinnerCircle = styled.circle`
  fill: transparent;
  stroke: ${({ theme, type }) =>
    type === TYPE_OPTIONS.BUTTON_LOADER ? "currentColor" : theme.orbit.paletteInkLighter};
  stroke-width: 3px;
  stroke-linecap: round;
  stroke-dasharray: 128px;
  stroke-dashoffset: 64px;
`;

StyledSpinnerCircle.defaultProps = {
  theme: defaultTokens,
};

const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLoaderCircle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 6px;
  background: ${({ theme }) => theme.orbit.paletteInkLighter};
  animation: ${LoaderAnimation} 1.25s infinite ease-in-out;
  &:nth-child(2) {
    animation-delay: 0.1s;
  }
  &:nth-child(3) {
    animation-delay: 0.2s;
    margin: 0;
  }
`;

StyledLoaderCircle.defaultProps = {
  theme: defaultTokens,
};

const Loading = (props: Props) => {
  const { loading = false, type = TYPE_OPTIONS.PAGE_LOADER, text, children } = props;
  const tokens = {
    alignLoadingContainer: {
      [TYPE_OPTIONS.BUTTON_LOADER]: "center",
      [TYPE_OPTIONS.SEARCH_LOADER]: "start",
      [TYPE_OPTIONS.BOX_LOADER]: "center",
      [TYPE_OPTIONS.PAGE_LOADER]: "center",
    },
    heightLoadingContainer: {
      [TYPE_OPTIONS.BUTTON_LOADER]: "100%",
      [TYPE_OPTIONS.SEARCH_LOADER]: "40px",
      [TYPE_OPTIONS.BOX_LOADER]: "80px",
      [TYPE_OPTIONS.PAGE_LOADER]: "120px",
    },
  };

  return children && !loading ? (
    children
  ) : (
    <StyledLoading tokens={tokens} type={type}>
      {type === TYPE_OPTIONS.BOX_LOADER || type === TYPE_OPTIONS.SEARCH_LOADER ? (
        <StyledLoader>
          <StyledLoaderCircle />
          <StyledLoaderCircle />
          <StyledLoaderCircle />
        </StyledLoader>
      ) : (
        <StyledSpinner viewBox="0 0 40 40">
          <StyledSpinnerCircle cx="50%" cy="50%" r="18" type={type} />
        </StyledSpinner>
      )}
      {type !== TYPE_OPTIONS.BUTTON_LOADER && (
        <StyledLoadingText type={type}>{text}</StyledLoadingText>
      )}
    </StyledLoading>
  );
};

export default Loading;
