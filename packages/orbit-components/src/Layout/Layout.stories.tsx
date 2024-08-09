import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Card, { CardSection } from "../Card";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import Wizard, { WizardStep } from "../Wizard";

import Layout, { LayoutColumn } from ".";

const CustomDiv = ({ children }: { children?: React.ReactNode }) => (
  <div style={{ height: "400px", backgroundColor: "rgba(0, 169, 145, 0.2)" }}>{children}</div>
);

const meta: Meta<typeof Layout> = {
  title: "Layout",
  component: Layout,

  parameters: {
    controls: {
      disable: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Layout>;

export const Search: Story = {
  render: () => (
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
};

export const Booking: Story = {
  render: () => (
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
  ),
};

export const Mmb: Story = {
  render: () => (
    <Layout type="MMB">
      <LayoutColumn>
        <Card>
          <CardSection>
            <CustomDiv />
          </CardSection>
        </Card>
      </LayoutColumn>
    </Layout>
  ),
};

export const Customized: Story = {
  render: () => (
    <Layout type="Search">
      <LayoutColumn dataTest="test" as="span">
        <Card>
          <CardSection>
            <CustomDiv />
          </CardSection>
        </Card>
      </LayoutColumn>
      <LayoutColumn as="span">
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
};

export const Rtl: Story = {
  render: () => (
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
  ),
};
