// @flow
import * as React from "react";
import styled from "styled-components";

import Card, { CardSection } from "../Card";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import Wizard, { WizardStep } from "../Wizard";

import Layout, { LayoutColumn } from ".";

const CustomDiv = styled.div`
  height: 400px;
  background: rgba(0, 169, 145, 0.2);
`;

export default {
  title: "Layout",
};

export const Search = (): React.Node => (
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
);

export const Booking = (): React.Node => {
  return (
    <Layout type="Booking">
      <LayoutColumn>
        <Wizard id="wizard" completedSteps={3} activeStep={3} onChangeStep={() => {}}>
          <WizardStep title="Search" />
          <WizardStep title="Passenger details" />
          <WizardStep title="Ticket fare" />
          <WizardStep title="Customize your trip" />
          <WizardStep title="Overview & Payment" />
        </Wizard>
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
  );
};

export const Mmb = (): React.Node => {
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
};

Mmb.story = {
  name: "MMB",
};

export const Customized = (): React.Node => (
  <Layout type="Search">
    <LayoutColumn dataTest="test" as="span">
      <Card>
        <CardSection>
          <CustomDiv />
        </CardSection>
      </Card>
    </LayoutColumn>
    <LayoutColumn hideOn={["largeMobile"]} as="span">
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

export const Rtl = (): React.Node => (
  <RenderInRtl>
    <Layout type="Search">
      <LayoutColumn>
        <Card>
          <CardSection>
            <CustomDiv>First</CustomDiv>
          </CardSection>
        </Card>
      </LayoutColumn>
      <LayoutColumn>
        <Card>
          <CardSection>
            <CustomDiv>Second</CustomDiv>
          </CardSection>
        </Card>
      </LayoutColumn>
      <LayoutColumn>
        <Card>
          <CardSection>
            <CustomDiv>Third</CustomDiv>
          </CardSection>
        </Card>
      </LayoutColumn>
    </Layout>
  </RenderInRtl>
);

Rtl.story = {
  name: "RTL",
};
