// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, select } from "@storybook/addon-knobs/react";

import * as Icons from "../icons";
import CardExpandableHeader from "./CardExpandableHeader";
import CardExpandableSection from "./CardExpandableSection";
import CardExpandableSectionHeader from "./CardExpandableSection/CardExpandableSectionHeader";
import CardExpandableSectionContent from "./CardExpandableSection/CardExpandableSectionContent";
import Button from "../Button";
import Passengers from "../icons/Passengers";

import CardExpandable from "./index";

setAddon(chaptersAddon);

const getIcons = defaultIcon => select("Icon", [undefined, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

storiesOf("CardExpandable", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
      background: "#f5f7f9",
    }),
  )
  .addWithChapters("Default", () => {
    const title = text("Title", "Card Title");
    const subTitle = text(
      "Subtitle",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    );
    return {
      info: "This is the default configuration of this component.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <CardExpandable>
                  <CardExpandableHeader
                    icon={<Passengers />}
                    title={title}
                    subTitle={subTitle}
                    suffix={<Button size="small">Action</Button>}
                  />
                  <CardExpandableSection>
                    <CardExpandableSectionHeader title={title}>
                      Some test content.
                    </CardExpandableSectionHeader>
                    <CardExpandableSectionContent>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </CardExpandableSectionContent>
                  </CardExpandableSection>
                  <CardExpandableSection>
                    <CardExpandableSectionHeader title={title} />
                    <CardExpandableSectionContent>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </CardExpandableSectionContent>
                  </CardExpandableSection>
                  <CardExpandableSection>
                    <CardExpandableSectionHeader title={title} />
                    <CardExpandableSectionContent>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </CardExpandableSectionContent>
                  </CardExpandableSection>
                  <CardExpandableSection>
                    <CardExpandableSectionHeader title={title} />
                    <CardExpandableSectionContent>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </CardExpandableSectionContent>
                  </CardExpandableSection>
                </CardExpandable>
              ),
            },
          ],
        },
      ],
    };
  });
