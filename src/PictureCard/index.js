// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import Text from "../Text";
import Heading from "../Heading";
import Stack from "../Stack";
import defaultTheme from "../defaultTheme";
import { BASE_URL, SMALLEST_HEIGHT } from "./consts";
import LazyImage from "../LazyImage";
import { left } from "../utils/rtl";
import randomID from "../utils/randomID";
import KEY_CODE_MAP from "../common/keyMaps";

import type { Props } from "./index";

const Shown = styled.div`
  transition: all ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  opacity: 0;
  position: relative;
  margin-bottom: ${({ theme }) => theme.orbit.spaceXXSmall};
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
    rgba(0, 0, 0, 0.4) 44%,
    rgba(0, 0, 0, 0.8) 100%
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

const StyledPictureCardContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-grow: 1;
  padding: ${({ theme }) => theme.orbit.spaceMedium};
  transition: all ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  bottom: ${({ contentHeight, theme }) =>
    contentHeight && `-${contentHeight + parseInt(theme.orbit.spaceMedium, 10)}px`};
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
  justify-content: space-between;
  align-content: flex-end;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  overflow: hidden;
  cursor: pointer;
  box-shadow: ${({ theme, shadows }) => shadows && theme.orbit.boxShadowAction};

  &:hover {
    box-shadow: ${({ theme, shadows }) => shadows && theme.orbit.boxShadowActionActive};
    ${StyledOverlayHover} {
      opacity: 1;
    }

    ${StyledPictureCardContent} {
      bottom: 0;
    }

    ${Shown} {
      opacity: 1;
    }
  }

  &:focus {
    outline: none;
    box-shadow: ${({ theme }) => theme.orbit.boxShadowActionActive};
  }
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
      aria-labelledby={cardID}
    >
      <LazyImage
        original={{
          webp: ` ${BASE_URL}/photos/${original}/${code}.webp`,
          jpg: `${BASE_URL}/photos/${original}/${code}.jpg`,
        }}
        placeholder={{
          webp: ` ${BASE_URL}/photos/${placeholder}/${code}.webp`,
          jpg: `${BASE_URL}/photos/${placeholder}${code}.jpg`,
        }}
        name={name}
      />

      <StyledOverlay />
      <StyledOverlayHover />

      {label && (
        <StyledLabel>
          <Text size="small" type="white" weight="bold">
            {label}
          </Text>
        </StyledLabel>
      )}

      <StyledPictureCardContent contentHeight={actions ? contentHeight : undefined}>
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
              <Heading
                type="title3"
                element="div"
                inverted
                spaceAfter={actions ? "normal" : undefined}
              >
                {children}
              </Heading>
              {actions && (
                <Shown ref={ref} tabIndex={onClick || href ? undefined : "-1"}>
                  {actions}
                </Shown>
              )}
            </>
          )}
        </Stack>
      </StyledPictureCardContent>
    </StyledPictureCard>
  );
};

export default PictureCard;
