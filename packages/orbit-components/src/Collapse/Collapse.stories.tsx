import * as React from "react";
import { action } from "@storybook/addon-actions";
import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";

import Badge from "../Badge";
import ChoiceGroup from "../ChoiceGroup";
import Checkbox from "../Checkbox";
import Slider from "../Slider";
import Stack from "../Stack";
import TextLink from "../TextLink";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import Collapse from ".";

const meta: Meta<typeof Collapse> = {
  title: "Collapse",
  component: Collapse,

  args: {
    label: "Duration",
    customLabel: "",
    expanded: false,
    initialExpanded: false,
    expandButtonLabel: "Expand",
    collapseButtonLabel: "Collapse",
    onClick: action("onClick"),
  },

  parameters: {
    info: "You can try various configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    controls: {
      exclude: ["children", "actions", "onClick", "customLabel"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Collapse>;

const SliderHistogramData = () => (
  <Slider
    label="Max travel time"
    ariaLabel={["Adjust min", "Adjust max"]}
    valueDescription="00:00 - 24:00"
    defaultValue={[1, 12]}
    histogramData={[
      11, 25, 37, 5, 21, 27, 24, 33, 16, 21, 22, 2, 11, 25, 37, 5, 21, 27, 24, 33, 16, 21, 22, 2,
    ]}
    minValue={1}
    maxValue={24}
  />
);

export const Default: Story = {
  render: function Render(args) {
    const [{ expanded }, updateArgs] = useArgs();
    const onClick = () => {
      updateArgs({ expanded: !expanded });
    };

    return (
      <Collapse
        {...args}
        onClick={onClick}
        expandButtonLabel="Expand"
        collapseButtonLabel="Collapse"
      >
        <SliderHistogramData />
      </Collapse>
    );
  },

  parameters: {
    controls: {
      exclude: [
        "customLabel",
        "expandButtonLabel",
        "collapseButtonLabel",
        "children",
        "actions",
        "onClick",
      ],
    },
  },
};

export const WithCustomLabel: Story = {
  render: () => (
    <Collapse
      customLabel={
        <Stack inline spacing="600" align="center">
          <Badge>Custom label </Badge>
          <Badge>Custom label </Badge>
          <Badge>Custom label </Badge>
          <Badge>Custom label </Badge>
        </Stack>
      }
      expandButtonLabel="Expand"
      collapseButtonLabel="Collapse"
    >
      <SliderHistogramData />
    </Collapse>
  ),

  parameters: {
    controls: {
      disable: true,
    },
  },
};

export const OpenedByDefault: Story = {
  render: function Render(args) {
    const [{ expanded }, updateArgs] = useArgs();
    const onClick = () => {
      updateArgs({ expanded: !expanded });
    };

    return (
      <Collapse
        {...args}
        onClick={onClick}
        expandButtonLabel="Expand"
        collapseButtonLabel="Collapse"
      >
        <SliderHistogramData />
      </Collapse>
    );
  },

  args: {
    expanded: true,
    initialExpanded: true,
  },
};

export const WithActions: Story = {
  render: function Render(args) {
    const [{ expanded }, updateArgs] = useArgs();
    const onClick = () => {
      updateArgs({ expanded: !expanded });
    };

    return (
      <Collapse
        {...args}
        onClick={onClick}
        actions={
          <TextLink type="secondary" size="small" onClick={action("clear")}>
            Clear
          </TextLink>
        }
        expandButtonLabel="Expand"
        collapseButtonLabel="Collapse"
      >
        <ChoiceGroup onChange={action("onChange")} onOnlySelection={action("onOnlySelection")}>
          <Checkbox label="Flight" value="one" />
          <Checkbox label="Bus" value="two" />
          <Checkbox label="Train" value="three" />
        </ChoiceGroup>
      </Collapse>
    );
  },

  args: {
    label: "Transportation",
  },
};

export const MultipleCollapses: Story = {
  render: args => {
    return (
      <Stack spacing="none">
        <Collapse {...args} expandButtonLabel="Expand" collapseButtonLabel="Collapse">
          <ChoiceGroup onChange={action("onChange")} onOnlySelection={action("onOnlySelection")}>
            <Checkbox label="Flight" value="one" />
            <Checkbox label="Bus" value="two" />
            <Checkbox label="Train" value="three" />
          </ChoiceGroup>
        </Collapse>
        <Collapse {...args} expandButtonLabel="Expand" collapseButtonLabel="Collapse">
          <ChoiceGroup onChange={action("onChange")} onOnlySelection={action("onOnlySelection")}>
            <Checkbox label="Flight" value="one" />
            <Checkbox label="Bus" value="two" />
            <Checkbox label="Train" value="three" />
          </ChoiceGroup>
        </Collapse>
        <Collapse {...args} expandButtonLabel="Expand" collapseButtonLabel="Collapse">
          <ChoiceGroup onChange={action("onChange")} onOnlySelection={action("onOnlySelection")}>
            <Checkbox label="Flight" value="one" />
            <Checkbox label="Bus" value="two" />
            <Checkbox label="Train" value="three" />
          </ChoiceGroup>
        </Collapse>
      </Stack>
    );
  },

  parameters: {
    controls: {
      exclude: [
        "expanded",
        "initialExpanded",
        "expandButtonLabel",
        "collapseButtonLabel",
        "children",
        "actions",
        "onClick",
        "customLabel",
      ],
    },
  },

  args: {
    ...WithActions.args,
    expanded: undefined,
  },
};

export const Uncontrolled: Story = {
  render: args => (
    <Collapse
      {...args}
      onClick={action("onClick")}
      expandButtonLabel="Expand"
      collapseButtonLabel="Collapse"
    >
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
    expanded: undefined,
  },

  parameters: {
    controls: {
      exclude: [
        "expanded",
        "expandButtonLabel",
        "collapseButtonLabel",
        "children",
        "actions",
        "onClick",
        "customLabel",
      ],
    },
  },
};

export const Rtl: Story = {
  render: function Render(args) {
    const [{ expanded }, updateArgs] = useArgs();
    const onClick = () => {
      updateArgs({ expanded: !expanded });
    };

    return (
      <RenderInRtl>
        <Collapse
          {...args}
          onClick={onClick}
          actions={
            <TextLink type="secondary" size="small" onClick={action("clear")}>
              Clear
            </TextLink>
          }
          expandButtonLabel="Expand"
          collapseButtonLabel="Collapse"
        >
          <ChoiceGroup onChange={action("onChange")} onOnlySelection={action("onOnlySelection")}>
            <Checkbox label="Flight" value="one" />
            <Checkbox label="Bus" value="two" />
            <Checkbox label="Train" value="three" />
          </ChoiceGroup>
        </Collapse>
      </RenderInRtl>
    );
  },

  args: {
    ...WithActions.args,
  },
};

export const Playground: Story = {
  render: function Render(args) {
    const [{ expanded }, updateArgs] = useArgs();
    const onClick = () => {
      updateArgs({ expanded: !expanded });
    };

    return (
      <Collapse
        {...args}
        onClick={onClick}
        expandButtonLabel="Expand"
        collapseButtonLabel="Collapse"
      >
        <SliderHistogramData />
      </Collapse>
    );
  },

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};
