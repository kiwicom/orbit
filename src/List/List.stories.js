// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs";

import * as Icons from "../icons";
import { SIZES, TYPES } from "./consts";
import { ICON_COLORS } from "../Icon/consts";
import CarrierLogo from "../CarrierLogo";
import SPACINGS_AFTER from "../common/getSpacingToken/consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import TextLink from "../TextLink";

import List, { ListItem } from "./index";

const getIcons = defaultIcon => select("Icon", [null, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

storiesOf("List", module)
  .add(
    "Default",
    () => (
      <List>
        <ListItem>
          24,000 locations <TextLink href="#">around</TextLink> the globe
        </ListItem>
        <ListItem>
          Lowest price car rental in <strong>&nbsp;Warsaw</strong>
        </ListItem>
        <ListItem>From 3 star budget to 5 star luxury</ListItem>
      </List>
    ),
    {
      info:
        "List groups related information together and make content more scalable and organized.",
    },
  )
  .add(
    "Different type and size",
    () => {
      const size = select("Size", Object.values(SIZES), SIZES.SMALL);
      const type = select("Type", Object.values(TYPES), TYPES.SECONDARY);

      return (
        <List size={size} type={type}>
          <ListItem>
            Gain peace of mind before you travel. No stress about what could go wrong.
          </ListItem>
          <ListItem>Customise your coverage to suit your needs and your budget.</ListItem>
          <ListItem>
            Feel safe in the hands of AXA Assistance, the travel insurance experts.
          </ListItem>
        </List>
      );
    },
    {
      info:
        "List groups related information together and make content more scalable and organized.",
    },
  )
  .add(
    "With carrier",
    () => {
      const size = select("Size", Object.values(SIZES), SIZES.SMALL);
      const type = select("Type", Object.values(TYPES), TYPES.SECONDARY);

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
    },
    {
      info:
        "List groups related information together and make content more scalable and organized.",
    },
  )
  .add(
    "Playground",
    () => {
      const size = select("Size", Object.values(SIZES), SIZES.NORMAL);
      const type = select("Type", Object.values(TYPES), TYPES.PRIMARY);
      const Icon = getIcon(getIcons("Check"));
      const iconColor = select("iconColor", Object.values(ICON_COLORS), ICON_COLORS.SUCCESS);
      const content = text("Content", "24,000 locations around the globe");
      const spaceAfter = select("spaceAfter", [null, ...Object.values(SPACINGS_AFTER)]);
      const dataTest = text("dataTest", "test");

      return (
        <List size={size} type={type} dataTest={dataTest} spaceAfter={spaceAfter}>
          <ListItem icon={Icon && <Icon color={iconColor} />}>{content}</ListItem>
          <ListItem icon={Icon && <Icon color={iconColor} />}>{content}</ListItem>
          <ListItem icon={Icon && <Icon color={iconColor} />}>{content}</ListItem>
        </List>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "RTL",
    () => (
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
    {
      info: "This is a preview of this component in RTL setup.",
    },
  );
