// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import { CODES } from './consts';

import CountryFlag from './index';

storiesOf('CountryFlag', module)
  .add(
    'Default',
    () => {
      const code = text('Code', CODES.ANYWHERE);

      return <CountryFlag code={code} />;
    },
    {
      info:
        'Country flag displays one flag of selected country. Visit Orbit.Kiwi for more detailed guidelines.',
    },
  )
  .add(
    'Playground',
    () => {
      const code = text('Code', CODES.ANYWHERE);
      const name = text('Name', 'Country');
      const dataTest = text('dataTest', 'test');
      return <CountryFlag code={code} name={name} dataTest={dataTest} />;
    },
    {
      info:
        'Country flag displays one flag of selected country. Visit Orbit.Kiwi for more detailed guidelines.',
    },
  );
