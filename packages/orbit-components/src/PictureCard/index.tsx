import * as React from "react";
import styled, { css } from "styled-components";

import Text from "../Text";
import Heading from "../Heading";
import Stack from "../Stack";
import defaultTheme from "../defaultTheme";
import { BASE_URL, SMALLEST_HEIGHT } from "./consts";
import LazyImage, { StyledLazyImage } from "../LazyImage";
import { left } from "../utils/rtl";
import useRandomId from "../hooks/useRandomId";
import handleKeyDown from "../utils/handleKeyDown";
import { Props } from "./index.d";

const Shown = styled.div<{ contentHeight: number }>`
  ${({ theme, contentHeight }) => css`
    position: absolute;
    opacity: 0;
    z-index: 5;
    padding: ${`0 0 ${theme.orbit.spaceMedium} ${theme.orbit.spaceMedium}`};
    ${contentHeight > 0 ? `bottom: -${contentHeight}px` : `top: 100%`};
    transition: all ${theme.orbit.durationFast} ease-in-out;
  `};
`;

Shown.defaultProps = {
  theme: defaultTheme,
};

const overlayCss = css`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    border-radius: ${theme.orbit.borderRadiusNormal};
    transition: opacity ${theme.orbit.durationNormal} ease-in-out;
  `}
`;

const StyledLabel = styled.div`
  ${({ theme }) => css`
    z-index: 2;
    position: absolute;
    top: 0;
    padding: ${theme.orbit.spaceMedium};
  `}
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

interface Content {
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  children?: React.ReactNode;
  cardID: string;
}

const StyledPictureCardContent = styled.div`
  ${({ theme }) => css`
    position: absolute;
    z-index: 2;
    display: flex;
    flex-grow: 1;
    padding: ${theme.orbit.spaceMedium};
    transition: all ${theme.orbit.durationFast} ease-in-out;
    bottom: 0;
  `};
`;

StyledPictureCardContent.defaultProps = {
  theme: defaultTheme,
};

const PictureCardContent = ({ title, subTitle, children, cardID }: Content) => {
  return (
    <StyledPictureCardContent aria-labelledby={cardID}>
      <Stack flex direction="column" justify="end" spacing="none">
        <Stack spaceAfter="small" spacing="none">
          {subTitle && (
            <Heading type="title3" as="div" inverted>
              {subTitle}
            </Heading>
          )}

          {title && (
            <Heading type="title1" as="div" inverted>
              {title}
            </Heading>
          )}
        </Stack>

        {children && (
          <>
            <Heading type="title3" as="div" inverted>
              {children}
            </Heading>
          </>
        )}
      </Stack>
    </StyledPictureCardContent>
  );
};

const StyledPictureCard = styled(
  ({ height, href, theme, shadows, contentHeight, isPlain, width, isClickable, ...props }) => {
    const Component = href ? "a" : "div";
    return (
      <Component {...props} href={href}>
        {props.children}
      </Component>
    );
  },
)`
  ${({ theme, shadows, height, width, isClickable, contentHeight, isPlain }) => css`
    height: ${height ? `${height}` : "100%"};
    width: ${width ? `${width}` : `100%`};
    max-width: 100%;
    display: flex;
    position: relative;
    box-sizing: border-box;
    border-radius: ${theme.orbit.borderRadiusNormal};
    overflow: hidden;

    box-shadow: ${shadows && theme.orbit.boxShadowAction};
    transition: box-shadow ${theme.orbit.durationNormal} ease-in-out;

    ${StyledLazyImage} {
      transition: transform ${theme.orbit.durationNormal} ease-in-out;
    }
    cursor: ${isClickable && "pointer"};

    ${css`
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
          bottom: ${contentHeight && `${contentHeight}px`};
        }

        ${Shown} {
          opacity: 1;
          bottom: 0;
        }
      }
    `}

    ${isPlain &&
    css`
      &:focus {
        outline: none;
      }
    `}
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
  id,
  height = "300px",
  width,
  dataTest,
}: Props) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [contentHeight, setContentHeight] = React.useState(0);

  React.useEffect(() => {
    if (ref.current) {
      setContentHeight(ref.current.clientHeight);
    }
  }, []);

  const cardID = useRandomId();

  const {
    name,
    original = undefined,
    placeholder = undefined,
    code = undefined,
    src = undefined,
  } = image;

  const isPlain = !(title || subTitle || children || actions);
  const isClickable = href || onClick;
  const isFocus = isPlain ? undefined : 0;

  return (
    <StyledPictureCard
      data-test={dataTest}
      id={id}
      onClick={onClick}
      onKeyDown={handleKeyDown(onClick)}
      height={
        (isPlain && height) || parseInt(height, 10) >= SMALLEST_HEIGHT
          ? height
          : `${SMALLEST_HEIGHT}px`
      }
      width={width}
      href={href}
      target={href && external ? "_blank" : undefined}
      rel={href && external ? "noopener" : undefined}
      shadows={onClick || href}
      tabIndex={href ? tabIndex : isFocus}
      role={isPlain ? undefined : "link"}
      contentHeight={contentHeight}
      isPlain={isPlain}
      isClickable={isClickable}
      aria-labelledby={isPlain ? undefined : cardID}
    >
      <LazyImage
        original={
          code && original
            ? {
                webp: ` ${BASE_URL}/photos/${original}/${code}.webp`,
                jpg: `${BASE_URL}/photos/${original}/${code}.jpg`,
              }
            : { "*": src }
        }
        placeholder={
          placeholder && code
            ? {
                webp: ` ${BASE_URL}/photos/${placeholder}/${code}.webp`,
                jpg: `${BASE_URL}/photos/${placeholder}/${code}.jpg`,
              }
            : undefined
        }
        name={name}
      />

      {!isPlain && <StyledOverlay />}
      {!isPlain && <StyledOverlayHover />}

      {label && (
        <StyledLabel>
          <Text as="div" size="small" type="white" weight="bold">
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
