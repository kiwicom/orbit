// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

import { TYPE_OPTIONS } from '../Badge/consts';
import RenderInRtl from '../utils/rtl/RenderInRtl';
import * as Icons from '../icons/index';

import NotificationBadge from './index';

const getIcons = defaultIcon => select('Icon', [null, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

storiesOf('NotificationBadge', module)
  .add(
    'Default',
    () => {
      const content = text('Content', '10');
      const Icon = getIcon(getIcons(null));
      return <NotificationBadge icon={Icon && <Icon />}>{content}</NotificationBadge>;
    },
    {
      info: 'Check Orbit.Kiwi for more detailed design guidelines.',
    },
  )

  .add(
    'Neutral',
    () => {
      const content = text('Content', '10');
      return <NotificationBadge type={TYPE_OPTIONS.NEUTRAL}>{content}</NotificationBadge>;
    },
    {
      info: 'Check Orbit.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'Info',
    () => {
      const content = text('Content', '10');
      return <NotificationBadge type={TYPE_OPTIONS.INFO}>{content}</NotificationBadge>;
    },
    {
      info: 'Check Orbit.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'Info Inverted',
    () => {
      const content = text('Content', '10');
      return <NotificationBadge type={TYPE_OPTIONS.INFO_INVERTED}>{content}</NotificationBadge>;
    },
    {
      info: 'Check Orbit.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'Success',
    () => {
      const content = text('Content', '10');
      return <NotificationBadge type={TYPE_OPTIONS.SUCCESS}>{content}</NotificationBadge>;
    },
    {
      info: 'Check Orbit.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'Warning',
    () => {
      const content = text('Content', '10');
      return <NotificationBadge type={TYPE_OPTIONS.WARNING}>{content}</NotificationBadge>;
    },
    {
      info: 'Check Orbit.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'Critical',
    () => {
      const content = text('Content', '10');
      return <NotificationBadge type={TYPE_OPTIONS.CRITICAL}>{content}</NotificationBadge>;
    },
    {
      info: 'Check Orbit.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'Critical Inverted',
    () => {
      const content = text('Content', '10');
      return <NotificationBadge type={TYPE_OPTIONS.CRITICAL_INVERTED}>{content}</NotificationBadge>;
    },
    {
      info: 'Check Orbit.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'Dark',
    () => {
      const content = text('Content', '10');
      return <NotificationBadge type={TYPE_OPTIONS.DARK}>{content}</NotificationBadge>;
    },
    {
      info: 'Check Orbit.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'White',
    () => {
      const content = text('Content', '10');
      return (
        <div style={{ backgroundColor: '#46515e', padding: '10px' }}>
          <NotificationBadge type={TYPE_OPTIONS.WHITE}>{content}</NotificationBadge>
        </div>
      );
    },
    {
      info: 'Check Orbit.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'Playground',
    () => {
      const content = text('Content', '10');
      const type = select('Type', Object.values(TYPE_OPTIONS), TYPE_OPTIONS.INFO);
      const dataTest = text('dataTest', 'test');
      const ariaLabel = text('ariaLabel', 'additional information for screen readers');
      const Icon = getIcon(getIcons('Airplane'));

      return (
        <NotificationBadge
          type={type}
          dataTest={dataTest}
          ariaLabel={ariaLabel}
          icon={Icon && <Icon />}
        >
          {content}
        </NotificationBadge>
      );
    },
    {
      info:
        'You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'Accessibility',
    () => {
      const content = text('Content', '10');
      const ariaLabel = text('ariaLabel', 'additional information for screen readers');

      return (
        <NotificationBadge type="info" ariaLabel={ariaLabel}>
          {content}
        </NotificationBadge>
      );
    },
    {
      info: 'This is a preview of component accessibility props',
    },
  )
  .add(
    'RTL',
    () => (
      <RenderInRtl>
        <NotificationBadge type="info">10</NotificationBadge>
      </RenderInRtl>
    ),
    {
      info: 'This is a preview of this component in RTL setup.',
    },
  );
