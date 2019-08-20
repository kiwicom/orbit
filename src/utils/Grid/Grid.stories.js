// @flow

import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { text, boolean, number, object } from '@storybook/addon-knobs';

import Grid from './index';

const CustomDiv = styled.div`
  background: rgba(0, 169, 145, 0.2);
`;

storiesOf('Grid', module).add('Playground', () => {
  const inline = boolean('inline', false);
  const maxWidth = text('maxWidth', '1440px');
  const columns = text('columns', undefined);
  const rows = text('rows', 'repeat(8, 40px)');
  const gap = text('gap', null);
  const columnGap = text('columnGap', null);
  const rowGap = text('rowGap', '10px');
  const element = text('element', 'div');
  const dataTest = text('dataTest', 'test');
  const DivsCount = number('DivsCount', 8);
  const mediumMobile = object('mediumMobile', {
    rowGap: '0',
  });
  const largeMobile = object('largeMobile', {
    columns: 'repeat(4, 1fr)',
    rows: 'repeat(2, 40px)',
    gap: '20px',
  });
  const tablet = object('tablet', {
    columnGap: '40px',
  });
  const desktop = object('desktop', {
    columns: 'repeat(2, minmax(100px, 1fr))',
    rows: 'repeat(4, 40px)',
    gap: '40px',
  });
  const largeDesktop = object('largeDesktop', {
    columns: 'repeat(8, minmax(10px, 1fr))',
    rows: '40px',
  });
  return (
    <Grid
      inline={inline}
      maxWidth={maxWidth}
      columns={columns}
      rows={rows}
      gap={gap}
      columnGap={columnGap}
      rowGap={rowGap}
      element={element}
      dataTest={dataTest}
      mediumMobile={mediumMobile}
      largeMobile={largeMobile}
      tablet={tablet}
      desktop={desktop}
      largeDesktop={largeDesktop}
    >
      {Array(...Array(DivsCount)).map((_, key) => (
        // eslint-disable-next-line
        <CustomDiv key={key} />
      ))}
    </Grid>
  );
});
