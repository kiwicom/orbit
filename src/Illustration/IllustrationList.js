// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';

import { NAMES } from './consts';
import defaultTheme from '../defaultTheme';
import mq from '../utils/mediaQuery';

import Illustration from './index';

const List = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  border-radius: ${({ theme }) => theme.orbit.borderRadiusLarge};
`;

List.defaultProps = {
  theme: defaultTheme,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  width: 100%;
  min-height: 80px;
  background-color: white;
  margin-bottom: ${({ theme }) => theme.orbit.spaceLarge};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusLarge};
  border: ${({ theme }) => theme.orbit.borderWidthCard}
    ${({ theme }) => theme.orbit.borderStyleCard} ${({ theme }) => theme.orbit.paletteCloudNormal};
  padding: ${({ theme }) => theme.orbit.spaceLarge};
  ${mq.largeMobile(css`
    flex-direction: row;
  `)};
`;

Container.defaultProps = {
  theme: defaultTheme,
};

const IllustrationJSX = styled.div`
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
  font-size: 12px;
  line-height: ${({ theme }) => theme.orbit.lineHeightText};
  color: ${({ theme }) => theme.orbit.paletteInkDark};
  background-color: ${({ theme }) => theme.orbit.paletteCloudLight};
  border: ${({ theme }) => theme.orbit.borderWidthCard}
    ${({ theme }) => theme.orbit.borderStyleCard} ${({ theme }) => theme.orbit.paletteCloudNormal};
  margin-top: ${({ theme }) => theme.orbit.spaceMedium};
  padding: ${({ theme }) => theme.orbit.spaceXXSmall} ${({ theme }) => theme.orbit.spaceXSmall};
  ${mq.largeMobile(css`
    margin: 0;
  `)};
`;

IllustrationJSX.defaultProps = {
  theme: defaultTheme,
};

const IllustrationList = () => (
  <List>
    {NAMES.map(illustration => {
      return (
        <Container key={illustration}>
          <Illustration name={illustration} />
          <IllustrationJSX>{`<Illustration name="${illustration}" />`}</IllustrationJSX>
        </Container>
      );
    })}
  </List>
);

export default IllustrationList;
