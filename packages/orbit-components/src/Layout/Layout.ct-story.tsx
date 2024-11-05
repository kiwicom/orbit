import * as React from "react";

import Wizard, { WizardStep } from "../Wizard";
import Card, { CardSection } from "../Card";

import Layout, { LayoutColumn } from ".";

const Fill = ({ children }) => <div style={{ backgroundColor: "honeydew" }}>{children}</div>;

export function LayoutStorySearch() {
  return (
    <Layout type="Search">
      <LayoutColumn>
        <Fill>Filters</Fill>
      </LayoutColumn>
      <LayoutColumn>
        <Fill>Results</Fill>
      </LayoutColumn>
      <LayoutColumn>
        <Fill>Sidebar</Fill>
      </LayoutColumn>
    </Layout>
  );
}

export function LayoutStoryBooking() {
  return (
    <Layout type="Booking">
      <LayoutColumn>
        <Fill>Wizard</Fill>
      </LayoutColumn>
      <LayoutColumn>
        <Fill>Form</Fill>
      </LayoutColumn>
      <LayoutColumn>
        <Fill>Summary</Fill>
      </LayoutColumn>
    </Layout>
  );
}

export function LayoutStoryMMB() {
  return (
    <Layout type="MMB">
      <LayoutColumn>
        <Fill>Main</Fill>
      </LayoutColumn>
    </Layout>
  );
}

export function LayoutStoryWizard() {
  return (
    <Layout type="Booking">
      <LayoutColumn>
        <Fill>
          <Wizard activeStep={3} completedSteps={3} id="wizard">
            <WizardStep title="Search" />
            <WizardStep title="Passenger details" />
            <WizardStep title="Ticket fare" />
            <WizardStep title="Customize your trip" />
            <WizardStep title="Overview & Payment" />
          </Wizard>
        </Fill>
      </LayoutColumn>
      <LayoutColumn>
        <Fill>Form</Fill>
      </LayoutColumn>
      <LayoutColumn>
        <Fill>Summary</Fill>
      </LayoutColumn>
    </Layout>
  );
}

export function LayoutStoryCard() {
  return (
    <Layout type="Booking">
      <LayoutColumn>
        <Card>
          <CardSection>
            <Fill>Wizard</Fill>
          </CardSection>
        </Card>
      </LayoutColumn>
      <LayoutColumn>
        <Card>
          <CardSection>
            <Fill>Form</Fill>
          </CardSection>
        </Card>
      </LayoutColumn>
      <LayoutColumn>
        <Card>
          <CardSection>
            <Fill>Summary</Fill>
          </CardSection>
        </Card>
      </LayoutColumn>
    </Layout>
  );
}
