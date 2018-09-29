// @flow

import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";

import * as Icons from "../icons";
import { TYPE_OPTIONS } from "./consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import Badge from "./index";

setAddon(chaptersAddon);

const getIcons = defaultIcon => select("Icon", [undefined, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

storiesOf("Badge", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Default", () => {
    const content = text("Content", "Badge");
    const Icon = getIcon(getIcons("Airplane"));

    return {
      info: "Check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => <Badge icon={Icon && <Icon />}>{content}</Badge>,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Types", () => {
    const content = text("Content", "Badge");

    return {
      info: "Check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Badge type={TYPE_OPTIONS.NEUTRAL} icon={<Icons.Sightseeing />}>
                  {content}
                </Badge>
              ),
            },
            {
              sectionFn: () => (
                <Badge type={TYPE_OPTIONS.INFO} icon={<Icons.InformationCircle />}>
                  {content}
                </Badge>
              ),
            },
            {
              sectionFn: () => (
                <Badge type={TYPE_OPTIONS.SUCCESS} icon={<Icons.CheckCircle />}>
                  {content}
                </Badge>
              ),
            },
            {
              sectionFn: () => (
                <Badge type={TYPE_OPTIONS.WARNING} icon={<Icons.Clock />}>
                  {content}
                </Badge>
              ),
            },
            {
              sectionFn: () => (
                <Badge type={TYPE_OPTIONS.CRITICAL} icon={<Icons.Passport />}>
                  {content}
                </Badge>
              ),
            },
            {
              sectionFn: () => (
                <Badge type={TYPE_OPTIONS.DARK} icon={<Icons.Sightseeing />}>
                  {content}
                </Badge>
              ),
            },
            {
              sectionFn: () => (
                <div style={{ backgroundColor: "#46515e", padding: "10px" }}>
                  <Badge type={TYPE_OPTIONS.WHITE} icon={<Icons.Sightseeing />}>
                    {content}
                  </Badge>
                </div>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Notification badge", () => {
    const content = text("Content", "3");
    const type = select("Type", Object.values(TYPE_OPTIONS), TYPE_OPTIONS.NEUTRAL);

    return {
      info: "Check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Badge type={type} circled>
                  {content}
                </Badge>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Playground", () => {
    const content = text("Content", "Badge");
    const type = select("Type", Object.values(TYPE_OPTIONS), TYPE_OPTIONS.INFO);
    const circled = boolean("Circled", false);
    const dataTest = text("dataTest", "test");
    const Icon = getIcon(getIcons("Airplane"));

    return {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Badge type={type} icon={Icon && <Icon />} dataTest={dataTest} circled={circled}>
                  {content}
                </Badge>
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
                <Badge type="info" icon={<Icons.Airplane />}>
                  Badge
                </Badge>
              </RenderInRtl>
            ),
          },
        ],
      },
    ],
  }));
