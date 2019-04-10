// @flow
import * as React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

import Card, { CardSection } from "../Card";

import Layout, { LayoutColumn } from "./index";

const CustomDiv = styled.div`
  height: 400px;
  background: rgba(0, 169, 145, 0.2);
`;

storiesOf("Layout", module)
  .add(
    "Search",
    () => (
      <Layout type="Search">
        <LayoutColumn>
          <Card>
            <CardSection>
              <CustomDiv />
            </CardSection>
          </Card>
        </LayoutColumn>
        <LayoutColumn>
          <Card>
            <CardSection>
              <CustomDiv />
            </CardSection>
          </Card>
        </LayoutColumn>
        <LayoutColumn>
          <Card>
            <CardSection>
              <CustomDiv />
            </CardSection>
          </Card>
        </LayoutColumn>
      </Layout>
    ),
    {
      info: "Some description about this type of InputStepper in general.",
    },
  )
  .add(
    "Booking",
    () => {
      return (
        <Layout type="Booking">
          <LayoutColumn>
            <Card>
              <CardSection>
                <CustomDiv />
              </CardSection>
            </Card>
          </LayoutColumn>
          <LayoutColumn>
            <Card>
              <CardSection>
                <CustomDiv />
              </CardSection>
            </Card>
          </LayoutColumn>
        </Layout>
      );
    },
    {
      info: "Here you can try InputStepper component with additional functionality.",
    },
  )
  .add(
    "MMB",
    () => {
      return (
        <Layout type="MMB">
          <LayoutColumn>
            <Card>
              <CardSection>
                <CustomDiv />
              </CardSection>
            </Card>
          </LayoutColumn>
        </Layout>
      );
    },
    {
      info: "Here you can try InputStepper component with additional functionality.",
    },
  );
