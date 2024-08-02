import * as React from "react";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import Badge from "../Badge";
import ChoiceGroup from "../ChoiceGroup";
import Checkbox from "../Checkbox";
import Slider from "../Slider";
import Stack from "../Stack";
import TextLink from "../TextLink";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import Collapse from ".";

type CollapsePropsAndCustomArgs = React.ComponentProps<typeof Collapse> & {
  label?: string;
  expanded?: boolean;
};

const meta: Meta<CollapsePropsAndCustomArgs> = {
  title: "Collapse",
  component: Collapse,

  args: {
    label: "Duration",
    expanded: false,
    initialExpanded: false,
  },

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export default meta;
type Story = StoryObj<CollapsePropsAndCustomArgs>;

export const Default: Story = {
  render: args => (
    <Collapse {...args}>
      <Slider
        label="Max travel time"
        valueDescription="00:00 - 24:00"
        defaultValue={[1, 12]}
        histogramData={[
          11, 25, 37, 5, 21, 27, 24, 33, 16, 21, 22, 2, 11, 25, 37, 5, 21, 27, 24, 33, 16, 21, 22,
          2,
        ]}
        minValue={1}
        maxValue={24}
      />
    </Collapse>
  ),
};

export const WithCustomLabel: Story = {
  render: () => (
    <Collapse
      customLabel={
        <Stack inline spacing="large" align="center">
          <Badge>Custom label </Badge>
          <Badge>Custom label </Badge>
          <Badge>Custom label </Badge>
          <Badge>Custom label </Badge>
        </Stack>
      }
    >
      <Slider
        label="Max travel time"
        valueDescription="00:00 - 24:00"
        defaultValue={[1, 12]}
        histogramData={[
          11, 25, 37, 5, 21, 27, 24, 33, 16, 21, 22, 2, 11, 25, 37, 5, 21, 27, 24, 33, 16, 21, 22,
          2,
        ]}
        minValue={1}
        maxValue={24}
      />
    </Collapse>
  ),

  parameters: {
    controls: {
      disable: true,
    },
  },
};

export const OpenedByDefault: Story = {
  render: args => (
    <Collapse {...args}>
      <Slider
        label="Max travel time"
        valueDescription="00:00 - 24:00"
        defaultValue={[1, 12]}
        histogramData={[
          11, 25, 37, 5, 21, 27, 24, 33, 16, 21, 22, 2, 11, 25, 37, 5, 21, 27, 24, 33, 16, 21, 22,
          2,
        ]}
        minValue={1}
        maxValue={24}
      />
    </Collapse>
  ),

  args: {
    expanded: true,
    initialExpanded: true,
  },
};

export const WithActions: Story = {
  render: args => (
    <Collapse
      {...args}
      actions={
        <TextLink type="secondary" size="small" onClick={action("clear")}>
          Clear
        </TextLink>
      }
    >
      <ChoiceGroup filter onChange={action("onChange")} onOnlySelection={action("onOnlySelection")}>
        <Checkbox label="Flight" value="one" />
        <Checkbox label="Bus" value="two" />
        <Checkbox label="Train" value="three" />
      </ChoiceGroup>
    </Collapse>
  ),

  args: {
    label: "Transportation",
  },
};

export const MultipleCollapses: Story = {
  render: args => (
    <Stack spacing="none">
      <Collapse {...args}>
        <ChoiceGroup
          filter
          onChange={action("onChange")}
          onOnlySelection={action("onOnlySelection")}
        >
          <Checkbox label="Flight" value="one" />
          <Checkbox label="Bus" value="two" />
          <Checkbox label="Train" value="three" />
        </ChoiceGroup>
      </Collapse>
      <Collapse {...args}>
        <ChoiceGroup
          filter
          onChange={action("onChange")}
          onOnlySelection={action("onOnlySelection")}
        >
          <Checkbox label="Flight" value="one" />
          <Checkbox label="Bus" value="two" />
          <Checkbox label="Train" value="three" />
        </ChoiceGroup>
      </Collapse>
      <Collapse {...args}>
        <ChoiceGroup
          filter
          onChange={action("onChange")}
          onOnlySelection={action("onOnlySelection")}
        >
          <Checkbox label="Flight" value="one" />
          <Checkbox label="Bus" value="two" />
          <Checkbox label="Train" value="three" />
        </ChoiceGroup>
      </Collapse>
    </Stack>
  ),

  args: {
    ...WithActions.args,
  },
};

export const Uncontrolled: Story = {
  render: args => (
    <Collapse {...args} onClick={action("onClick")}>
      <Slider
        label="Max travel time"
        valueDescription="00:00 - 24:00"
        defaultValue={[1, 12]}
        minValue={1}
        maxValue={24}
      />
    </Collapse>
  ),

  args: {
    expanded: true,
  },
};

export const Rtl: Story = {
  render: args => (
    <RenderInRtl>
      <Collapse
        {...args}
        actions={
          <TextLink type="secondary" size="small" onClick={action("clear")}>
            Clear
          </TextLink>
        }
      >
        <ChoiceGroup
          filter
          onChange={action("onChange")}
          onOnlySelection={action("onOnlySelection")}
        >
          <Checkbox label="Flight" value="one" />
          <Checkbox label="Bus" value="two" />
          <Checkbox label="Train" value="three" />
        </ChoiceGroup>
      </Collapse>
    </RenderInRtl>
  ),

  args: {
    ...WithActions.args,
  },
};

export const Playground: Story = {
  render: args => (
    <Collapse {...args}>
      <Slider
        label="Max travel time"
        valueDescription="00:00 - 24:00"
        defaultValue={[1, 12]}
        histogramData={[
          11, 25, 37, 5, 21, 27, 24, 33, 16, 21, 22, 2, 11, 25, 37, 5, 21, 27, 24, 33, 16, 21, 22,
          2,
        ]}
        minValue={1}
        maxValue={24}
      />
    </Collapse>
  ),
};
