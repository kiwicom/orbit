// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, select, boolean } from '@storybook/addon-knobs';

import { LABEL_ELEMENTS, LABEL_SIZES } from './consts';
import Radio from '../Radio';
import Checkbox from '../Checkbox';

import ChoiceGroup from './index';

storiesOf('ChoiceGroup', module)
  .add(
    'Default',
    () => {
      const label = text('Label', 'What was the reason for your cancellation?');
      return (
        <ChoiceGroup label={label} onChange={action('onChange')}>
          <Radio label="Reason one" value="one" />
          <Radio label="Reason two" value="two" />
          <Radio label="Reason three" value="three" />
        </ChoiceGroup>
      );
    },
    {
      info: 'Playground of ChoiceGroup',
    },
  )
  .add(
    'Multiple',
    () => {
      const label = text('Label', 'What was the reason for your cancellation?');
      return (
        <ChoiceGroup label={label} onChange={action('onChange')}>
          <Checkbox label="Reason one" value="one" />
          <Checkbox label="Reason two" value="two" />
          <Checkbox label="Reason three" value="three" />
        </ChoiceGroup>
      );
    },
    {
      info: 'Playground of ChoiceGroup',
    },
  )
  .add(
    'Filter',
    () => {
      const label = text('Label', 'What was the reason for your cancellation?');
      return (
        <ChoiceGroup
          label={label}
          filter
          onChange={action('onChange')}
          onOnlySelection={action('onOnlySelection')}
        >
          <Checkbox label="Reason one" value="one" />
          <Checkbox label="Reason two" value="two" />
          <Checkbox label="Reason three" value="three" />
        </ChoiceGroup>
      );
    },
    {
      info: 'Playground of ChoiceGroup',
    },
  )
  .add(
    'Playground',
    () => {
      const dataTest = text('dataTest', 'test');
      const label = text('Label', 'What was the reason for your cancellation?');
      const labelSize = select('labelSize', Object.values(LABEL_SIZES), LABEL_SIZES.NORMAL);
      const labelElement = select('labelElement', Object.values(LABEL_ELEMENTS), LABEL_ELEMENTS.H4);
      const error = text('error', 'Something is wrong');
      const filter = boolean('Filter', false);
      return (
        <ChoiceGroup
          dataTest={dataTest}
          label={label}
          labelSize={labelSize}
          labelElement={labelElement}
          error={error}
          filter={filter}
          onOnlySelection={action('onOnlySelection')}
          onChange={action('onChange')}
        >
          <Radio label="Reason one" value="one" />
          <Radio label="Reason two" value="two" />
          <Radio label="Reason three" value="three" />
        </ChoiceGroup>
      );
    },
    {
      info: 'Playground of ChoiceGroup',
    },
  );
