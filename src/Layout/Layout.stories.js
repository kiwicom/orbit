// @flow

import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import Card, { CardSection } from '../Card';
import RenderInRtl from '../utils/rtl/RenderInRtl';

import Layout, { LayoutColumn } from './index';

const CustomDiv = styled.div`
  height: 400px;
  background: rgba(0, 169, 145, 0.2);
`;

storiesOf('Layout', module)
  .add('Search', () => (
    <Layout type="Search">
      <LayoutColumn>
        <Card>
          <CardSection>
            <CustomDiv />
          </CardSection>
        </Card>
      </LayoutColumn>
      <LayoutColumn>
        <Card>
          <CardSection>
            <CustomDiv />
          </CardSection>
        </Card>
      </LayoutColumn>
      <LayoutColumn>
        <Card>
          <CardSection>
            <CustomDiv />
          </CardSection>
        </Card>
      </LayoutColumn>
    </Layout>
  ))
  .add('Booking', () => {
    return (
      <Layout type="Booking">
        <LayoutColumn>
          <Card>
            <CardSection>
              <CustomDiv />
            </CardSection>
          </Card>
        </LayoutColumn>
        <LayoutColumn>
          <Card>
            <CardSection>
              <CustomDiv />
            </CardSection>
          </Card>
        </LayoutColumn>
      </Layout>
    );
  })
  .add('MMB', () => {
    return (
      <Layout type="MMB">
        <LayoutColumn>
          <Card>
            <CardSection>
              <CustomDiv />
            </CardSection>
          </Card>
        </LayoutColumn>
      </Layout>
    );
  })
  .add('RTL', () => (
    <RenderInRtl>
      <Layout type="Search">
        <LayoutColumn>
          <Card>
            <CardSection>
              <CustomDiv>First</CustomDiv>
            </CardSection>
          </Card>
        </LayoutColumn>
        <LayoutColumn>
          <Card>
            <CardSection>
              <CustomDiv>Second</CustomDiv>
            </CardSection>
          </Card>
        </LayoutColumn>
        <LayoutColumn>
          <Card>
            <CardSection>
              <CustomDiv>Third</CustomDiv>
            </CardSection>
          </Card>
        </LayoutColumn>
      </Layout>
    </RenderInRtl>
  ));
