import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import * as Icons from "../icons";
import { SIZES, TYPES } from "./consts";
import { ICON_COLORS } from "../Icon/consts";
import CarrierLogo from "../CarrierLogo";
import { SPACINGS_AFTER } from "../common/consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import TextLink from "../TextLink";

import List, { ListItem } from ".";

const getIcon = (source: string | null) => source && Icons[source];

type ListPropsAndCustomArgs = React.ComponentProps<typeof List> &
  React.ComponentProps<typeof ListItem> & { iconColor: string };

const meta: Meta<ListPropsAndCustomArgs> = {
  title: "List",
  component: List,

  parameters: {
    info: "List groups related information together and make content more scalable and organized. Check Orbit.Kiwi for more detailed design guidelines.",
  },

  args: {
    type: TYPES.PRIMARY,
    size: SIZES.NORMAL,
    spaceAfter: SPACINGS_AFTER.MEDIUM,
  },

  argTypes: {
    size: {
      options: Object.values(SIZES),
      control: {
        type: "select",
      },
    },
    type: {
      options: Object.values(TYPES),
      control: {
        type: "select",
      },
    },
    spaceAfter: {
      options: Object.values(SPACINGS_AFTER),
      control: {
        type: "select",
      },
    },
  },
};

export default meta;

type Story = StoryObj<ListPropsAndCustomArgs>;

export const Default: Story = {
  render: () => (
    <List>
      <ListItem>
        24,000 locations <TextLink href="#">around</TextLink> the globe
      </ListItem>
      <ListItem>
        Lowest price car rental in <strong>Warsaw</strong>
      </ListItem>
      <ListItem>From 3 star budget to 5 star luxury</ListItem>
    </List>
  ),

  parameters: {
    controls: {
      disable: true,
    },
  },
};

export const DifferentTypeAndSize: Story = {
  render: args => (
    <List {...args}>
      <ListItem>
        Gain peace of mind before you travel. No stress about what could go wrong.
      </ListItem>
      <ListItem>Customise your coverage to suit your needs and your budget.</ListItem>
      <ListItem>Feel safe in the hands of AXA Assistance, the travel insurance experts.</ListItem>
    </List>
  ),

  args: {
    size: SIZES.LARGE,
    type: TYPES.SECONDARY,
  },
};

export const WithLabelAndIcon: Story = {
  render: ({ icon, iconColor, children, ...args }) => {
    const Icon = typeof icon === "string" && getIcon(icon);

    return (
      <List {...args}>
        <ListItem label="Kiwi.com services" icon={<Icon color={iconColor} />}>
          {children}
        </ListItem>
        <ListItem label="Kiwi.com services" icon={<Icon color={iconColor} />}>
          {children}
        </ListItem>
        <ListItem icon={<Icon color={iconColor} />}>{children}</ListItem>
      </List>
    );
  },

  args: {
    icon: "Check",
    iconColor: ICON_COLORS.SUCCESS,
    children: "24,000 locations around the globe",
  },

  argTypes: {
    icon: {
      options: Object.keys(Icons),
      control: {
        type: "select",
      },
    },
    iconColor: {
      options: Object.values(ICON_COLORS),
      control: {
        type: "select",
      },
    },
  },
};

export const WithCarrier: Story = {
  render: args => (
    <List {...args}>
      <ListItem icon={<CarrierLogo carriers={[{ code: "FR", name: "Ryanair" }]} />}>
        Airline: Ryanair
      </ListItem>
      <ListItem icon={<Icons.InformationCircle />}>Flight no: FR 1337</ListItem>
      <ListItem icon={<Icons.Trip />}>PNR: TEST0X0</ListItem>
      <ListItem icon={<Icons.Airplane />}>Airbus A320 (320)</ListItem>
    </List>
  ),

  args: {
    size: SIZES.SMALL,
    type: TYPES.SECONDARY,
  },
};

export const Playground: Story = {
  render: ({ icon, iconColor, children, ...args }) => {
    const Icon = typeof icon === "string" && getIcon(icon);

    return (
      <List {...args}>
        {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          Array(...Array(3)).map((_, idx) => (
            // eslint-disable-next-line react/no-array-index-key
            <ListItem key={idx} icon={<Icon color={iconColor} />}>
              {children}
            </ListItem>
          ))
        }
      </List>
    );
  },

  args: {
    ...WithLabelAndIcon.args,
    id: "list-id",
  },

  argTypes: {
    ...WithLabelAndIcon.argTypes,
  },
};

export const Rtl: Story = {
  render: () => (
    <RenderInRtl>
      <List size="small" type="secondary">
        <ListItem icon={<CarrierLogo carriers={[{ code: "FR", name: "Ryanair" }]} />}>
          Airline: Ryanair
        </ListItem>
        <ListItem icon={<Icons.InformationCircle />}>Flight no: FR 1337</ListItem>
        <ListItem icon={<Icons.Trip />}>PNR: TEST0X0</ListItem>
        <ListItem icon={<Icons.Airplane />}>Airbus A320 (320)</ListItem>
      </List>
    </RenderInRtl>
  ),

  parameters: {
    info: "This is a preview of this component in RTL setup.",
    controls: {
      disable: true,
    },
  },
};
