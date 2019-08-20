// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';

import defaultTheme from '../defaultTheme';
import type { Props, State, PictureProps } from './index.js.flow';

const FORMATS = {
  WEBP: 'webp',
  JPEG: 'jpg',
};

export const StyledLazyImage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Image = styled.img`
  z-index: ${({ visible }) => (visible ? '1' : '0')};
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  transition: opacity ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  ${({ lowRes }) =>
    lowRes &&
    css`
      filter: blur(3px);
    `};
`;

Image.defaultProps = {
  theme: defaultTheme,
};

const getPictureType = picture => {
  const TYPES = {
    [FORMATS.WEBP]: 'image/webp',
    [FORMATS.JPEG]: 'image/jpg',
  };
  return TYPES[picture];
};

const Picture = ({ pictures, name, loaded, onLoad, lowRes }: PictureProps) => (
  <picture>
    {Object.keys(pictures).map(picture => (
      <React.Fragment key={picture}>
        <source srcSet={pictures[picture]} type={getPictureType(picture)} />
        {picture === 'jpg' && (
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

class LazyImage extends React.PureComponent<Props, State> {
  state = {
    loaded: false,
  };

  fullResLoaded = () => {
    this.setState({ loaded: true });
  };

  render() {
    const { placeholder, original, name } = this.props;
    const { loaded } = this.state;

    return (
      <StyledLazyImage>
        <Picture pictures={original} name={name} loaded={loaded} onLoad={this.fullResLoaded} />
        {placeholder && <Picture pictures={placeholder} lowRes name={name} loaded={!loaded} />}
      </StyledLazyImage>
    );
  }
}

export default LazyImage;
