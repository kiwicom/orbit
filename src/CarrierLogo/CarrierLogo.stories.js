// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { object, select, text } from '@storybook/addon-knobs';

import { SIZE_OPTIONS, CARRIER_TYPE_OPTIONS } from './consts';
import RenderInRtl from '../utils/rtl/RenderInRtl';

import CarrierLogo from './index';

const carriersLabel = 'Carriers';

storiesOf('CarrierLogo', module)
  .add(
    'One carrier',
    () => {
      const size = select('Size', Object.values(SIZE_OPTIONS), 'large');
      const dataTest = text('dataTest', 'test');

      const carrier = [{ code: 'FR', name: 'Ryanair' }];

      const carriersObject = object(carriersLabel, carrier);

      return <CarrierLogo size={size} carriers={carriersObject} dataTest={dataTest} />;
    },
    {
      info:
        'Carrier logo displays one or more logos of transport carriers. It is usually together with the travel itinerary. Visit Orbit.Kiwi for more detailed guidelines.',
    },
  )
  .add(
    'Two carriers',
    () => {
      const carrier = [{ code: 'FR', name: 'Ryanair' }, { code: 'TO', name: 'Transavia France' }];

      const carriersObject = object(carriersLabel, carrier);

      return <CarrierLogo carriers={carriersObject} />;
    },
    {
      info:
        'Carrier logo displays one or more logos of transport carriers. It is usually together with the travel itinerary. Visit Orbit.Kiwi for more detailed guidelines.',
    },
  )
  .add(
    'Four carriers',
    () => {
      const carrier = [
        { code: 'FR', name: 'Ryanair' },
        { code: 'TO', name: 'Transavia France' },
        { code: 'VY', name: 'Vueling' },
        { code: 'OK', name: 'Czech Airlines' },
      ];

      const carriersObject = object(carriersLabel, carrier);

      return <CarrierLogo carriers={carriersObject} />;
    },
    {
      info:
        'Carrier logo displays one or more logos of transport carriers. It is usually together with the travel itinerary. Visit Orbit.Kiwi for more detailed guidelines.',
    },
  )
  .add(
    'Non-existing carriers',
    () => {
      const carrier = [
        { code: 'LOL', name: 'Lorem ipsum', type: 'airline' },
        { code: 'KEK', name: 'Lorem ipsum', type: 'bus' },
        { code: 'BUR', name: 'Lorem ipsum', type: 'train' },
      ];

      const carriersObject = object(carriersLabel, carrier);

      return <CarrierLogo carriers={carriersObject} />;
    },
    {
      info:
        'Carrier logo displays one or more logos of transport carriers. It is usually together with the travel itinerary. Visit Orbit.Kiwi for more detailed guidelines.',
    },
  )
  .add(
    'Non-existing carrier',
    () => {
      const size = select('Size', Object.values(SIZE_OPTIONS), 'large');
      const carrierType = select('Type', Object.values(CARRIER_TYPE_OPTIONS), 'airline');
      const carrier = [{ code: 'LAL', name: 'Lorem ipsum', type: carrierType }];
      const carriersObject = object(carriersLabel, carrier);

      return <CarrierLogo size={size} carriers={carriersObject} />;
    },
    {
      info:
        'CarrierLogo can display proper placeholder for non-existing carriers by its type. If not you specify the type of carrier, airline placeholder will be displayed.',
    },
  )
  .add(
    'RTL',
    () => (
      <RenderInRtl>
        <CarrierLogo
          size="large"
          carriers={[
            { code: 'FR', name: 'Lorem ipsum', type: 'airline' },
            { code: 'TO', name: 'Lorem ipsum', type: 'train' },
          ]}
        />
      </RenderInRtl>
    ),
    {
      info: 'This is a preview of this component in RTL setup.',
    },
  );
