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
  background: rgba(0, 169, 145, 0.2);
`;

storiesOf("Layout", module)
  .addDecorator(withKnobs)
  .addWithChapters("SearchLayout", () => ({
    info: "List groups related information together and make content more scalable and organized.",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <Layout type="SearchLayout">
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
  }))
  .addWithChapters("BookingLayout", () => ({
    info: "List groups related information together and make content more scalable and organized.",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <Layout type="BookingLayout">
                <Card>
                  <CardSection>
                    <CustomDiv />
                  </CardSection>
                </Card>
                <Hide on={["smallMobile", "mediumMobile", "largeMobile"]}>
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
  }))
  .addWithChapters("MMBLayout", () => ({
    info: "List groups related information together and make content more scalable and organized.",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <Layout type="MMBLayout">
                <Card>
                  <CardSection>
                    <CustomDiv />
                  </CardSection>
                </Card>
              </Layout>
            ),
          },
        ],
      },
    ],
  }));
