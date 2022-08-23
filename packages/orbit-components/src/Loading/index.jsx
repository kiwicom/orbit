// @flow
import * as React from "react";
import styled, { keyframes, css } from "styled-components";

import defaultTheme from "../defaultTheme";
import TYPE_OPTIONS from "./consts";
import { left, right } from "../utils/rtl";

import type { Props } from ".";

const getHeight = ({ type, customSize }) => {
  const tokens = {
    [TYPE_OPTIONS.BUTTON_LOADER]: "100%",
    [TYPE_OPTIONS.SEARCH_LOADER]: "40px",
    [TYPE_OPTIONS.BOX_LOADER]: "80px",
    [TYPE_OPTIONS.PAGE_LOADER]: "120px",
    [TYPE_OPTIONS.INLINE_LOADER]: "19px",
  };

  if (customSize) return `height: ${customSize}px`;

  return css`
    ${type === TYPE_OPTIONS.INLINE_LOADER ? "min-height" : "height"}: ${tokens[type]}
  `;
};

const getAlign = ({ type }) => {
  const tokens = {
    [TYPE_OPTIONS.BUTTON_LOADER]: "center",
    [TYPE_OPTIONS.SEARCH_LOADER]: "start",
    [TYPE_OPTIONS.BOX_LOADER]: "center",
    [TYPE_OPTIONS.PAGE_LOADER]: "center",
    [TYPE_OPTIONS.INLINE_LOADER]: "center",
  };

  return tokens[type];
};

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

export const StyledLoading: any = styled(({ children, className, dataTest }) => (
  <div className={className} data-test={dataTest}>
    {children}
  </div>
))`
  ${({ type, theme, customSize }) => css`
    position: ${type === TYPE_OPTIONS.BUTTON_LOADER && "absolute"};
    top: ${type === TYPE_OPTIONS.BUTTON_LOADER && "0"};
    ${left}: ${type === TYPE_OPTIONS.BUTTON_LOADER && "0"};
    width: ${type === TYPE_OPTIONS.BUTTON_LOADER && "100%"};
    ${getHeight};
    padding: ${type !== TYPE_OPTIONS.INLINE_LOADER && !customSize && theme.orbit.paddingLoading};
    display: ${type === TYPE_OPTIONS.INLINE_LOADER ? "inline-flex" : "flex"};
    flex-direction: ${type === TYPE_OPTIONS.PAGE_LOADER ? "column" : "row"};
    justify-content: ${getAlign};
    align-items: center;
    overflow: hidden;
    box-sizing: border-box;
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledLoading.defaultProps = {
  theme: defaultTheme,
};

const StyledLoadingText = styled.div`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
  color: ${({ theme }) => theme.orbit.colorTextLoading};
  line-height: ${({ theme }) => theme.orbit.lineHeightTextNormal};
  margin-top: ${({ theme, type }) => type === TYPE_OPTIONS.PAGE_LOADER && theme.orbit.spaceMedium};
  margin-${left}: ${({ theme, type }) =>
  type !== TYPE_OPTIONS.PAGE_LOADER && theme.orbit.spaceSmall};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledLoadingText.defaultProps = {
  theme: defaultTheme,
};

export const StyledSpinner: any = styled.svg`
  ${({ customSize }) => css`
    width: ${customSize ? `${customSize}px` : "40px"};
    height: ${customSize ? `${customSize}px` : "40px"};
    animation: ${SpinnerAnimation} 0.75s linear infinite;
  `};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledSpinner.defaultProps = {
  theme: defaultTheme,
};

const StyledSpinnerCircle = styled.circle`
  ${({ type, theme, customSize }) => css`
    fill: transparent;
    stroke: ${type === TYPE_OPTIONS.BUTTON_LOADER
      ? "currentColor"
      : theme.orbit.paletteCloudDarker};
    stroke-width: 3px;
    stroke-linecap: round;
    stroke-dasharray: ${customSize ? `${customSize * 3 + 8}px` : "128px"};
    stroke-dashoffset: ${customSize ? `${customSize + 24}px` : "64px"};
  `};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledSpinnerCircle.defaultProps = {
  theme: defaultTheme,
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
  margin-${right}: 6px;
  background: ${({ theme }) => theme.orbit.paletteCloudDarker};
  animation: ${LoaderAnimation} 1.25s infinite ease-in-out;
  &:nth-child(2) {
    animation-delay: 0.1s;
  }
  &:nth-child(3) {
    animation-delay: 0.2s;
    margin: 0;
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledLoaderCircle.defaultProps = {
  theme: defaultTheme,
};

const Loader = ({ type, customSize }) => {
  const isCircledIcon =
    type === TYPE_OPTIONS.BOX_LOADER ||
    type === TYPE_OPTIONS.SEARCH_LOADER ||
    type === TYPE_OPTIONS.INLINE_LOADER;

  if (customSize) {
    return (
      <StyledSpinner viewBox={`0 0 ${customSize} ${customSize}`} customSize={customSize}>
        <StyledSpinnerCircle
          cx="50%"
          cy="50%"
          r={customSize ? customSize / 2 - 2 : 18}
          customSize={customSize}
        />
      </StyledSpinner>
    );
  }

  if (isCircledIcon)
    return (
      <StyledLoader>
        <StyledLoaderCircle />
        <StyledLoaderCircle />
        <StyledLoaderCircle />
      </StyledLoader>
    );

  return (
    <StyledSpinner viewBox="0 0 40 40">
      <StyledSpinnerCircle cx="50%" cy="50%" r="18" type={type} />
    </StyledSpinner>
  );
};

const Loading = ({
  loading = false,
  customSize,
  type = TYPE_OPTIONS.PAGE_LOADER,
  text,
  children,
  dataTest,
  id,
}: Props): React.Node => {
  return children && !loading ? (
    children
  ) : (
    <StyledLoading type={type} dataTest={dataTest} id={id} customSize={customSize}>
      <Loader type={type} customSize={customSize} />
      {type !== TYPE_OPTIONS.BUTTON_LOADER && text && (
        <StyledLoadingText type={type}>{text}</StyledLoadingText>
      )}
    </StyledLoading>
  );
};

Loading.displayName = "Loading";

export default Loading;
