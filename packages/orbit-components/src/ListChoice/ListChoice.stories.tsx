import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import { action } from "@storybook/addon-actions";

import Button from "../Button";
import * as Icons from "../icons";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import ListChoice from ".";

Button.displayName = "Button";
ListChoice.displayName = "ListChoice";

const getIcon = (source: string | null) => source && Icons[source];

const meta: Meta<typeof ListChoice> = {
  title: "ListChoice",
  component: ListChoice,

  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },

  args: {
    title: "Choice Title",
  },
};

export default meta;

type Story = StoryObj<typeof ListChoice>;

export const Default: Story = {
  parameters: {
    info: "Minimal setup with title, uncontrolled, not selectable. Check Orbit.Kiwi for more detailed design guidelines.",
    controls: {
      exclude: ["tabIndex"],
    },
  },
};

export const MultipleChoices: Story = {
  render: ({ icon, ...args }) => {
    const Icon = typeof icon === "string" && getIcon(icon);

    return (
      <>
        {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          Array(...Array(3)).map((_, idx) => (
            // eslint-disable-next-line react/no-array-index-key
            <ListChoice key={idx} {...args} icon={<Icon />} />
          ))
        }
      </>
    );
  },

  args: {
    description: "Further description",
    icon: "Accommodation",
    selectable: true,
    selected: false,
    disabled: false,
    tabIndex: 0,
    role: "list",
    onClick: action("onClick"),
  },

  argTypes: {
    icon: {
      options: Object.keys(Icons),
      control: {
        type: "select",
      },
    },
  },

  parameters: {
    controls: {
      exclude: ["onClick"],
    },
  },
};

export const WithAction: Story = {
  render: ({ icon, ...args }) => {
    const Icon = typeof icon === "string" && getIcon(icon);
    const IconButton = getIcon("Plus");

    return (
      <ListChoice
        {...args}
        icon={<Icon />}
        action={
          <Button
            onClick={action("onClick")}
            iconLeft={<IconButton />}
            size="small"
            type="primarySubtle"
          />
        }
      />
    );
  },

  args: {
    ...MultipleChoices.args,
    selectable: false,
  },

  argTypes: {
    ...MultipleChoices.argTypes,
  },

  parameters: {
    controls: {
      exclude: ["onClick"],
    },
  },
};

export const Playground: Story = {
  render: function Render({ icon, ...args }) {
    const [{ selected }, updateArgs] = useArgs();

    function onClick() {
      updateArgs({ selected: !selected });
    }

    const Icon = typeof icon === "string" && getIcon(icon);

    return <ListChoice {...args} onClick={() => onClick()} icon={<Icon />} />;
  },

  args: {
    ...MultipleChoices.args,
    id: "listchoice-id",
  },

  argTypes: {
    ...MultipleChoices.argTypes,
  },

  parameters: {
    controls: {
      exclude: ["onClick"],
    },
  },
};

export const Rtl: Story = {
  render: ({ icon, ...args }) => {
    const Icon = typeof icon === "string" && getIcon(icon);

    return (
      <RenderInRtl>
        <>
          <ListChoice {...args} icon={<Icon />} />
          <ListChoice {...args} icon={<Icon />} selected disabled />
          <ListChoice {...args} icon={<Icon />} />
        </>
      </RenderInRtl>
    );
  },

  args: {
    ...MultipleChoices.args,
  },

  argTypes: {
    ...MultipleChoices.argTypes,
  },

  parameters: {
    controls: {
      disable: true,
    },
  },
};
