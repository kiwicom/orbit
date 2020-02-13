// @flow
import React, { useState } from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";

import type { Props, PictureProps } from ".";

const FORMATS = {
  WEBP: "webp",
  JPEG: "jpg",
};

export const StyledLazyImage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Image = styled.img`
  z-index: ${({ visible }) => (visible ? "1" : "0")};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  transition: opacity ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  filter: ${({ lowRes }) => lowRes && "blur(3px)"};
`;

Image.defaultProps = {
  theme: defaultTheme,
};

const getPictureType = picture => {
  const TYPES = {
    [FORMATS.WEBP]: "image/webp",
    [FORMATS.JPEG]: "image/jpg",
  };
  return TYPES[picture];
};

const Picture = ({ pictures, name, loaded, onLoad, lowRes }: PictureProps) => (
  <picture>
    {Object.keys(pictures).map(picture => (
      <React.Fragment key={picture}>
        <source srcSet={pictures[picture]} type={getPictureType(picture)} />
        {picture === "jpg" && (
          <Image
            onLoad={onLoad}
            src={pictures[picture]}
            alt={name}
            visible={loaded}
            lowRes={lowRes}
          />
        )}
      </React.Fragment>
    ))}
  </picture>
);

const LazyImage = ({ placeholder, original, name }: Props) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <StyledLazyImage>
      {/*
        Placeholder made optional to prevent lazyloading due to SSR issue in react,
        where onload is not fired on the hydration of a client.
        https://github.com/facebook/react/issues/15446
      */}
      {placeholder ? (
        <>
          <Picture pictures={original} name={name} loaded={loaded} onLoad={() => setLoaded(true)} />
          <Picture pictures={placeholder} lowRes name={name} loaded={!loaded} />
        </>
      ) : (
        <Picture pictures={original} name={name} loaded />
      )}
    </StyledLazyImage>
  );
};

export default LazyImage;
