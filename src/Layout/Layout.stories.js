// @flow

import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs } from "@storybook/addon-knobs";
import styled from "styled-components";

import Card, { CardSection } from "../Card";
import Hide from "../Hide";

import Layout from "./index";

setAddon(chaptersAddon);

const CustomDiv = styled.div`
  height: 400px;
`;

storiesOf("Layout", module)
  .addDecorator(withKnobs)
  .addWithChapters("Default", () => ({
    info: "List groups related information together and make content more scalable and organized.",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <Layout>
                <Hide on={["smallMobile", "mediumMobile", "largeMobile"]}>
                  <Card>
                    <CardSection>
                      <CustomDiv />
                    </CardSection>
                  </Card>
                </Hide>
                <Card>
                  <CardSection>
                    <CustomDiv />
                  </CardSection>
                </Card>
                <Hide on={["smallMobile", "mediumMobile", "largeMobile", "tablet", "desktop"]}>
                  <Card>
                    <CardSection>
                      <CustomDiv />
                    </CardSection>
                  </Card>
                </Hide>
              </Layout>
            ),
          },
        ],
      },
    ],
  }));
