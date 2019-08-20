// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, select } from '@storybook/addon-knobs';

import ALIGN_OPTIONS from './TableCell/consts';
import RenderInRtl from '../utils/rtl/RenderInRtl';

import Table, { TableHead, TableBody, TableRow, TableCell } from './index';

storiesOf('Table', module)
  .add(
    'Default Table',
    () => (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    ),
    {
      info:
        'This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.',
    },
  )
  .add(
    'Compact Table',
    () => (
      <Table compact>
        <TableHead>
          <TableRow>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
            <TableCell>Lorem ipsum dolor sit amet</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    ),
    {
      info:
        'This is the compact configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.',
    },
  )
  .add(
    'Playground',
    () => {
      const compact = boolean('compact', false);
      const children = text('children', 'Lorem ipsum dolor sit amet');
      const dataTest = text('dataTest', 'test');
      const align = select('align', Object.values(ALIGN_OPTIONS), ALIGN_OPTIONS.CENTER);
      return (
        <Table compact={compact} dataTest={dataTest}>
          <TableHead>
            <TableRow>
              <TableCell align={align}>{children}</TableCell>
              <TableCell align={align}>{children}</TableCell>
              <TableCell align={align}>{children}</TableCell>
              <TableCell align={align}>{children}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align={align}>{children}</TableCell>
              <TableCell align={align}>{children}</TableCell>
              <TableCell align={align}>{children}</TableCell>
              <TableCell align={align}>{children}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align={align}>{children}</TableCell>
              <TableCell align={align}>{children}</TableCell>
              <TableCell align={align}>{children}</TableCell>
              <TableCell align={align}>{children}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );
    },
    {
      info:
        'You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'RTL',
    () => (
      <RenderInRtl>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First column</TableCell>
              <TableCell>Second column</TableCell>
              <TableCell>Third column</TableCell>
              <TableCell>Fourth column</TableCell>
              <TableCell>Fifth column</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>First column</TableCell>
              <TableCell>Second column</TableCell>
              <TableCell>Third column</TableCell>
              <TableCell>Fourth column</TableCell>
              <TableCell>Fifth column</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>First column</TableCell>
              <TableCell>Second column</TableCell>
              <TableCell>Third column</TableCell>
              <TableCell>Fourth column</TableCell>
              <TableCell>Fifth column</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>First column</TableCell>
              <TableCell>Second column</TableCell>
              <TableCell>Third column</TableCell>
              <TableCell>Fourth column</TableCell>
              <TableCell>Fifth column</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>First column</TableCell>
              <TableCell>Second column</TableCell>
              <TableCell>Third column</TableCell>
              <TableCell>Fourth column</TableCell>
              <TableCell>Fifth column</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </RenderInRtl>
    ),
    {
      info: 'This is a preview of this component in RTL setup.',
    },
  );
