import * as React from "react";

import * as Icons from "../icons";
import { SIZES, TYPES } from "./consts";
import { ICON_COLORS } from "../Icon/consts";
import CarrierLogo from "../CarrierLogo";
import { SPACINGS_AFTER } from "../common/consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import TextLink from "../TextLink";

import List, { ListItem } from ".";

const getIcon = (source: string | null) => source && Icons[source];

export default {
  title: "List",
};

export const Default = () => (
  <List>
    <ListItem>
      24,000 locations <TextLink href="#">around</TextLink> the globe
    </ListItem>
    <ListItem>
      Lowest price car rental in <strong>Warsaw</strong>
    </ListItem>
    <ListItem>From 3 star budget to 5 star luxury</ListItem>
  </List>
);

Default.story = {
  parameters: {
    info: "List groups related information together and make content more scalable and organized.",
  },
};

export const DifferentTypeAndSize = ({ size, type }) => {
  return (
    <List size={size} type={type}>
      <ListItem>
        Gain peace of mind before you travel. No stress about what could go wrong.
      </ListItem>
      <ListItem>Customise your coverage to suit your needs and your budget.</ListItem>
      <ListItem>Feel safe in the hands of AXA Assistance, the travel insurance experts.</ListItem>
    </List>
  );
};

DifferentTypeAndSize.story = {
  name: "Different type and size",

  parameters: {
    info: "List groups related information together and make content more scalable and organized.",
  },
};

DifferentTypeAndSize.args = {
  size: SIZES.SMALL,
  type: TYPES.SECONDARY,
};

DifferentTypeAndSize.argTypes = {
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
};
export const WithLabels = ({ type, size, icon, iconColor, content, spaceAfter, dataTest }) => {
  const Icon = getIcon(icon);

  return (
    <List size={size} type={type} dataTest={dataTest} spaceAfter={spaceAfter}>
      <ListItem label="Kiwi.com services" icon={Icon && <Icon size="small" color={iconColor} />}>
        {content}
      </ListItem>
      <ListItem label="Kiwi.com services" icon={Icon && <Icon size="small" color={iconColor} />}>
        {content}
      </ListItem>
      <ListItem icon={Icon && <Icon size="small" color={iconColor} />}>{content}</ListItem>
    </List>
  );
};

WithLabels.story = {
  name: "With labels",

  parameters: {
    info: "List groups related information together and make content more scalable and organized.",
  },
};

WithLabels.args = {
  type: TYPES.PRIMARY,
  size: SIZES.NORMAL,
  icon: "Check",
  iconColor: ICON_COLORS.SUCCESS,
  content: "24,000 locations around the globe",
  spaceAfter: SPACINGS_AFTER.MEDIUM,
  dataTest: "test",
};

WithLabels.argTypes = {
  type: {
    options: Object.values(TYPES),
    control: {
      type: "select",
    },
  },
  size: {
    options: Object.values(SIZES),
    control: {
      type: "select",
    },
  },
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
  spaceAfter: {
    options: Object.values(SPACINGS_AFTER),
    control: {
      type: "select",
    },
  },
};

export const WithCarrier = ({ size, type }) => {
  return (
    <List size={size} type={type}>
      <ListItem icon={<CarrierLogo carriers={[{ code: "FR", name: "Ryanair" }]} />}>
        Airline: Ryanair
      </ListItem>
      <ListItem icon={<Icons.InformationCircle />}>Flight no: FR 1337</ListItem>
      <ListItem icon={<Icons.Trip />}>PNR: TEST0X0</ListItem>
      <ListItem icon={<Icons.Airplane />}>Airbus A320 (320)</ListItem>
    </List>
  );
};

WithCarrier.story = {
  name: "With carrier",

  parameters: {
    info: "List groups related information together and make content more scalable and organized.",
  },
};

WithCarrier.args = {
  size: SIZES.SMALL,
  type: TYPES.SECONDARY,
};

WithCarrier.argTypes = {
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
};

export const Playground = ({ size, type, icon, iconColor, content, spaceAfter, dataTest }) => {
  const Icon = getIcon(icon);

  return (
    <List size={size} type={type} dataTest={dataTest} spaceAfter={spaceAfter}>
      <ListItem icon={Icon && <Icon color={iconColor} />}>{content}</ListItem>
      <ListItem icon={Icon && <Icon color={iconColor} />}>{content}</ListItem>
      <ListItem icon={Icon && <Icon color={iconColor} />}>{content}</ListItem>
    </List>
  );
};

Playground.story = {
  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

Playground.args = {
  size: SIZES.NORMAL,
  type: TYPES.PRIMARY,
  icon: "Check",
  iconColor: ICON_COLORS.SUCCESS,
  content: "24,000 locations around the globe",
  spaceAfter: SPACINGS_AFTER.SMALL,
  dataTest: "test",
};

Playground.argTypes = {
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
  spaceAfter: {
    options: Object.values(SPACINGS_AFTER),
    control: {
      type: "select",
    },
  },
};

export const Rtl = () => (
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
);

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
