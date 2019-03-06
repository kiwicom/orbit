// @flow
import * as React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

import Hide from "../Hide";
import Card, { CardSection } from "../Card";

import Layout from "./index";

const CustomDiv = styled.div`
  height: 400px;
  background: rgba(0, 169, 145, 0.2);
`;

storiesOf("Layout", module)
  .add(
    "SearchLayout",
    () => (
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
    {
      info: "Some description about this type of InputStepper in general.",
    },
  )
  .add(
    "BookingLayout",
    () => {
      return (
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
      );
    },
    {
      info: "Here you can try InputStepper component with additional functionality.",
    },
  )
  .add(
    "MMBLayout",
    () => {
      return (
        <Layout type="MMBLayout">
          <Card>
            <CardSection>
              <CustomDiv />
            </CardSection>
          </Card>
        </Layout>
      );
    },
    {
      info: "Here you can try InputStepper component with additional functionality.",
    },
  );
