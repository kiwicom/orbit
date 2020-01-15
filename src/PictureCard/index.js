// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import Text from "../Text";
import Heading from "../Heading";
import Stack from "../Stack";
import defaultTheme from "../defaultTheme";
import { BASE_URL, SMALLEST_HEIGHT } from "./consts";
import LazyImage, { StyledLazyImage } from "../LazyImage";
import { left } from "../utils/rtl";
import randomID from "../utils/randomID";
import KEY_CODE_MAP from "../common/keyMaps";

import type { Props } from "./index";

const Shown = styled.div`
  position: absolute;
  opacity: 0;
  z-index: 5;
  padding: ${({ theme }) => `0 0 ${theme.orbit.spaceMedium} ${theme.orbit.spaceMedium}`};
  ${({ contentHeight }) => (contentHeight > 0 ? `bottom: -${contentHeight}px` : `top: 100%`)};
  transition: all ${({ theme }) => theme.orbit.durationFast} ease-in-out;
`;

Shown.defaultProps = {
  theme: defaultTheme,
};

const overlayCss = css`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  transition: opacity ${({ theme }) => theme.orbit.durationNormal} ease-in-out;
`;

const StyledLabel = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  padding: ${({ theme }) => theme.orbit.spaceMedium};
`;

StyledLabel.defaultProps = {
  theme: defaultTheme,
};

const StyledOverlay = styled.div`
  ${overlayCss};
  opacity: 1;
  background: linear-gradient(
    to bottom ${left},
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.1) 16%,
    rgba(0, 0, 0, 0.3) 55%,
    rgba(0, 0, 0, 0.7) 100%
  );
`;

StyledOverlay.defaultProps = {
  theme: defaultTheme,
};

const StyledOverlayHover = styled.div`
  ${overlayCss};
  opacity: 0;
  background: linear-gradient(
    to bottom ${left},
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.1) 10%,
    rgba(0, 0, 0, 0.4) 36%,
    rgb(0, 0, 0) 100%
  );
`;

StyledOverlayHover.defaultProps = {
  theme: defaultTheme,
};

type Content = {|
  title?: React.Node,
  subTitle?: React.Node,
  children?: React.Node,
  cardID: string,
|};

const PictureCardContent = ({ title, subTitle, children, cardID }: Content) => {
  return (
    <StyledPictureCardContent aria-labelledby={cardID}>
      <Stack flex direction="column" justify="end" spacing="none">
        <Stack spaceAfter="small" spacing="none">
          {subTitle && (
            <Heading type="title3" element="div" inverted>
              {subTitle}
            </Heading>
          )}

          {title && (
            <Heading type="title1" element="div" inverted>
              {title}
            </Heading>
          )}
        </Stack>

        {children && (
          <>
            <Heading type="title3" element="div" inverted>
              {children}
            </Heading>
          </>
        )}
      </Stack>
    </StyledPictureCardContent>
  );
};

const StyledPictureCardContent = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  flex-grow: 1;
  padding: ${({ theme }) => theme.orbit.spaceMedium};
  transition: all ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  bottom: 0;
`;

StyledPictureCardContent.defaultProps = {
  theme: defaultTheme,
};

const StyledPictureCard = styled(({ height, href, theme, external, shadows, ...props }) => {
  const Component = href ? "a" : "div";
  return <Component {...props}>{props.children}</Component>;
})`
  height: ${({ height }) => (height ? `${height}` : "100%")};
  width: ${({ width }) => (width ? `${width}` : `100%`)};
  display: flex;
  position: relative;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  overflow: hidden;
  cursor: pointer;
  box-shadow: ${({ theme, shadows }) => shadows && theme.orbit.boxShadowAction};
  transition: box-shadow ${({ theme }) => theme.orbit.durationNormal} ease-in-out;

  ${StyledLazyImage} {
    transition: transform ${({ theme }) => theme.orbit.durationNormal} ease-in-out;
  }

  ${({ isPlain, theme, shadows }) =>
    !isPlain &&
    css`
      &:hover,
      &:focus {
        outline: none;
        box-shadow: ${shadows && theme.orbit.boxShadowActionActive};

        ${StyledOverlayHover} {
          opacity: 1;
        }

        ${StyledLazyImage} {
          transform: scale(1.05);
        }

        ${StyledPictureCardContent} {
          bottom: ${({ contentHeight }) => contentHeight && `${contentHeight}px`};
        }

        ${Shown} {
          opacity: 1;
          bottom: 0;
        }
      }
    `}
`;

StyledPictureCard.defaultProps = {
  theme: defaultTheme,
};

const PictureCard = ({
  onClick,
  image,
  title,
  tabIndex,
  subTitle,
  href,
  children,
  external,
  actions,
  label,
  height = "300px",
  width,
  dataTest,
}: Props) => {
  const ref: { current: any | HTMLDivElement } = React.useRef(null);
  const [contentHeight, setContentHeight] = React.useState(0);

  React.useEffect(() => {
    if (ref.current) {
      setContentHeight(ref.current.clientHeight);
    }
  }, []);

  const cardID = React.useMemo(() => randomID("pictureCardID"), []);

  const handleKeyDown = (ev: SyntheticKeyboardEvent<HTMLElement>) => {
    if (onClick) {
      if (ev.keyCode === KEY_CODE_MAP.ENTER) {
        onClick();
      } else if (ev.keyCode === KEY_CODE_MAP.SPACE) {
        ev.preventDefault();
        onClick();
      }
    }
  };

  const { name, original, placeholder, code } = image;
  const isPlain = !(title || subTitle || children || actions);

  return (
    <StyledPictureCard
      data-test={dataTest}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      height={parseInt(height, 10) >= SMALLEST_HEIGHT ? height : SMALLEST_HEIGHT}
      width={width}
      href={href}
      external={external}
      shadows={onClick || href}
      tabIndex={href ? tabIndex : 0}
      role="link"
      contentHeight={contentHeight}
      isPlain={isPlain}
      aria-labelledby={cardID}
    >
      <LazyImage
        original={{
          webp: ` ${BASE_URL}/photos/${original}/${code}.webp`,
          jpg: `${BASE_URL}/photos/${original}/${code}.jpg`,
        }}
        placeholder={{
          webp: ` ${BASE_URL}/photos/${placeholder}/${code}.webp`,
          jpg: `${BASE_URL}/photos/${placeholder}/${code}.jpg`,
        }}
        name={name}
      />

      {!isPlain && <StyledOverlay />}
      {!isPlain && <StyledOverlayHover />}

      {label && (
        <StyledLabel>
          <Text size="small" type="white" weight="bold">
            {label}
          </Text>
        </StyledLabel>
      )}
      <PictureCardContent cardID={cardID} title={title} subTitle={subTitle}>
        {children}
      </PictureCardContent>

      {actions && (
        <Shown ref={ref} contentHeight={contentHeight}>
          {actions}
        </Shown>
      )}
    </StyledPictureCard>
  );
};

export default PictureCard;
