// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';

import ChoiceGroup from '../ChoiceGroup';
import Checkbox from '../Checkbox';
import Slider from '../Slider';
import Stack from '../Stack';

import Collapse from './index';

storiesOf('Collapse', module)
  .add(
    'Default',
    () => {
      const label = text('label', 'Duration');
      return (
        <Collapse label={label}>
          <Slider
            label="Max travel time"
            valueDescription="00:00 - 24:00"
            defaultValue={[1, 12]}
            histogramData={[
              11,
              25,
              37,
              5,
              21,
              27,
              24,
              33,
              16,
              21,
              22,
              2,
              11,
              25,
              37,
              5,
              21,
              27,
              24,
              33,
              16,
              21,
              22,
              2,
            ]}
            min={1}
            max={24}
          />
        </Collapse>
      );
    },
    {
      info:
        'You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'Opened by default',
    () => {
      const label = text('label', 'Duration');
      return (
        <Collapse label={label} initialExpanded>
          <Slider
            label="Max travel time"
            valueDescription="00:00 - 24:00"
            defaultValue={[1, 12]}
            histogramData={[
              11,
              25,
              37,
              5,
              21,
              27,
              24,
              33,
              16,
              21,
              22,
              2,
              11,
              25,
              37,
              5,
              21,
              27,
              24,
              33,
              16,
              21,
              22,
              2,
            ]}
            min={1}
            max={24}
          />
        </Collapse>
      );
    },
    {
      info:
        'You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'Multiple Collapses',
    () => {
      const label = text('label', 'Transportation');
      return (
        <Stack spacing="none">
          <Collapse label={label}>
            <ChoiceGroup
              filter
              onChange={action('onChange')}
              onOnlySelection={action('onOnlySelection')}
            >
              <Checkbox label="Flight" value="one" />
              <Checkbox label="Bus" value="two" />
              <Checkbox label="Train" value="three" />
            </ChoiceGroup>
          </Collapse>
          <Collapse label={label} initialExpanded>
            <ChoiceGroup
              filter
              onChange={action('onChange')}
              onOnlySelection={action('onOnlySelection')}
            >
              <Checkbox label="Flight" value="one" />
              <Checkbox label="Bus" value="two" />
              <Checkbox label="Train" value="three" />
            </ChoiceGroup>
          </Collapse>
          <Collapse label={label}>
            <ChoiceGroup
              filter
              onChange={action('onChange')}
              onOnlySelection={action('onOnlySelection')}
            >
              <Checkbox label="Flight" value="one" />
              <Checkbox label="Bus" value="two" />
              <Checkbox label="Train" value="three" />
            </ChoiceGroup>
          </Collapse>
        </Stack>
      );
    },
    {
      info:
        'You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'Uncontrolled',
    () => {
      const label = text('label', 'Duration');
      const expanded = boolean('expanded', true);
      return (
        <Collapse label={label} expanded={expanded} onClick={action('onClick')}>
          <Slider
            label="Max travel time"
            valueDescription="00:00 - 24:00"
            defaultValue={[1, 12]}
            min={1}
            max={24}
          />
        </Collapse>
      );
    },
    {
      info:
        'You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.',
    },
  );
