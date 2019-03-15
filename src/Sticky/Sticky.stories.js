// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, select, number } from "@storybook/addon-knobs/react";

import * as Icons from "../icons";
import Card from "../Card";
import CardHeader from "../Card/CardHeader";
import CardSection from "../Card/CardSection";

import FloatingCard from "./index";

setAddon(chaptersAddon);

const getIcons = defaultIcon => select("Icon", Object.keys(Icons), defaultIcon);
const getIcon = source => Icons[source];

storiesOf("Sticky", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )

  .addWithChapters("Playground", () => {
    const Icon = getIcon(getIcons("Airplane"));
    const offset = number("offset", 0);
    return {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <div style={{ height: "800px" }}>
                  <FloatingCard offset={offset}>
                    <Card>
                      <CardHeader
                        icon={<Icon />}
                        title="FloatingCard title"
                        subTitle="This is a floating card"
                      />
                      <CardSection>Card</CardSection>
                      <CardSection>Card</CardSection>
                      <CardSection>CardHeader</CardSection>
                    </Card>
                  </FloatingCard>
                </div>
              ),
            },
          ],
        },
      ],
    };
  });
