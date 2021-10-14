// @flow
import * as React from "react";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Wizard, { WizardStep } from "..";

jest.mock("../../hooks/useMediaQuery", () => () => ({ isLargeMobile: false }));

describe("Wizard", () => {
  describe("compact", () => {
    it("shows the current position", () => {
      render(
        <Wizard id="wizard" completedSteps={3} activeStep={3}>
          <WizardStep title="Search" />
          <WizardStep title="Passenger details" />
          <WizardStep title="Ticket fare" />
          <WizardStep title="Customize your trip" />
          <WizardStep title="Overview & payment" />
        </Wizard>,
      );
      expect(
        screen.queryByRole("button", { name: "4 of 5 Customize your trip" }),
        // $FlowFixMe: install libdef for @testing-library/jest-dom
      ).toBeInTheDocument();
    });

    it("shows steps when expanded", () => {
      render(
        <Wizard id="wizard" completedSteps={3} activeStep={3}>
          <WizardStep title="Search" />
          <WizardStep title="Passenger details" />
          <WizardStep title="Ticket fare" />
          <WizardStep title="Customize your trip" />
          <WizardStep title="Overview & payment" />
        </Wizard>,
      );
      userEvent.click(screen.getByRole("button"));
      const customizeYourTripStep = within(screen.getByRole("dialog")).getByRole("button", {
        name: /Customize your trip/,
      });
      expect(customizeYourTripStep).toHaveAttribute("aria-current", "step");
    });

    it("can navigate through steps", () => {
      const MyApp = () => {
        const [activeStep, setActiveStep] = React.useState(3);
        return (
          <Wizard
            id="wizard"
            completedSteps={3}
            activeStep={activeStep}
            onChangeStep={setActiveStep}
          >
            <WizardStep title="Search" />
            <WizardStep title="Passenger details" />
            <WizardStep title="Ticket fare" />
            <WizardStep title="Customize your trip" />
            <WizardStep title="Overview & payment" />
          </Wizard>
        );
      };
      render(<MyApp />);
      userEvent.click(screen.getByRole("button"));
      const ticketFareStep = within(screen.getByRole("dialog")).getByRole("button", {
        name: /Ticket fare/,
      });
      userEvent.click(ticketFareStep);
      expect(ticketFareStep).toHaveAttribute("aria-current", "step");
    });

    it("cannot select disabled steps", () => {
      const onClick = jest.fn();
      render(
        <Wizard id="wizard" completedSteps={3} activeStep={3}>
          <WizardStep title="Search" />
          <WizardStep title="Passenger details" />
          <WizardStep title="Ticket fare" />
          <WizardStep title="Customize your trip" />
          <WizardStep title="Overview & payment" onClick={onClick} />
        </Wizard>,
      );
      userEvent.click(screen.getByRole("button"));
      userEvent.click(screen.getByText("Overview & payment"));
      expect(onClick).not.toHaveBeenCalled();
    });

    it("clicking the close button closes the modal", () => {
      render(
        <Wizard id="wizard" completedSteps={3} activeStep={4}>
          <WizardStep title="Search" />
          <WizardStep title="Passenger details" />
          <WizardStep title="Ticket fare" />
          <WizardStep title="Customize your trip" />
          <WizardStep title="Overview & payment" />
        </Wizard>,
      );
      userEvent.click(screen.getByRole("button"));
      userEvent.click(screen.getByRole("button", { name: "Close" }));
      // $FlowFixMe: install libdef for @testing-library/jest-dom
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });
});
