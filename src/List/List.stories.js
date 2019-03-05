// @flow

import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";

import * as Icons from "../icons";
import { SIZES, TYPES } from "./consts";
import { ICON_COLORS } from "../Icon/consts";
import CarrierLogo from "../CarrierLogo";
import SPACINGS_AFTER from "../common/getSpacingToken/consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import List, { ListItem } from "./index";

setAddon(chaptersAddon);

const getIcons = defaultIcon => select("Icon", [undefined, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

storiesOf("List", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Default", () => ({
    info: "List groups related information together and make content more scalable and organized.",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <List>
                <ListItem>24,000 locations around the globe</ListItem>
                <ListItem>
                  Lowest price car rental in <strong>&nbsp;Warsaw</strong>
                </ListItem>
                <ListItem>From 3 star budget to 5 star luxury</ListItem>
              </List>
            ),
          },
        ],
      },
    ],
  }))
  .addWithChapters("Different type and size", () => {
    const size = select("Size", Object.values(SIZES), SIZES.SMALL);
    const type = select("Type", Object.values(TYPES), TYPES.SECONDARY);

    return {
      info:
        "List groups related information together and make content more scalable and organized.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <List size={size} type={type}>
                  <ListItem>
                    Gain peace of mind before you travel. No stress about what could go wrong.
                  </ListItem>
                  <ListItem>Customise your coverage to suit your needs and your budget.</ListItem>
                  <ListItem>
                    Feel safe in the hands of AXA Assistance, the travel insurance experts.
                  </ListItem>
                </List>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("With carrier", () => {
    const size = select("Size", Object.values(SIZES), SIZES.SMALL);
    const type = select("Type", Object.values(TYPES), TYPES.SECONDARY);
    const showMore: ?boolean = boolean("showMore", false);

    return {
      info:
        "List groups related information together and make content more scalable and organized.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <List size={size} type={type}>
                  <ListItem icon={<CarrierLogo carriers={[{ code: "FR", name: "Ryanair" }]} />}>
                    Airline: Ryanair
                  </ListItem>
                  <ListItem icon={<Icons.InformationCircle />}>Flight no: FR 1337</ListItem>
                  <ListItem icon={<Icons.Trip />}>PNR: TEST0X0</ListItem>
                  {showMore && <ListItem icon={<Icons.Airplane />}>Airbus A320 (320)</ListItem>}
                </List>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Playground", () => {
    const size = select("Size", Object.values(SIZES), SIZES.NORMAL);
    const type = select("Type", Object.values(TYPES), TYPES.PRIMARY);
    const Icon = getIcon(getIcons("Check"));
    const iconColor = select("iconColor", Object.values(ICON_COLORS), ICON_COLORS.SUCCESS);
    const content = text("Content", "24,000 locations around the globe");
    const spaceAfter = select("spaceAfter", [undefined, ...Object.values(SPACINGS_AFTER)]);
    const dataTest = text("dataTest", "test");

    return {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <List size={size} type={type} dataTest={dataTest} spaceAfter={spaceAfter}>
                  <ListItem icon={Icon && <Icon color={iconColor} />}>{content}</ListItem>
                  <ListItem icon={Icon && <Icon color={iconColor} />}>{content}</ListItem>
                  <ListItem icon={Icon && <Icon color={iconColor} />}>{content}</ListItem>
                </List>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("RTL", () => ({
    info: "This is a preview of this component in RTL setup.",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
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
          },
        ],
      },
    ],
  }));
