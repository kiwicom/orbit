// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Wizard, { WizardStep } from "..";

jest.mock("../../hooks/useMediaQuery", () => () => ({ isLargeMobile: true }));

describe("Wizard", () => {
  describe("loose", () => {
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
      const customizeYourTripStep = screen.getByRole("button", { name: /Customize your trip/ });
      expect(customizeYourTripStep).toHaveAttribute("aria-current", "step");
      const ticketFareStep = screen.getByRole("button", { name: /Ticket fare/ });
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
      userEvent.click(screen.getByText("Overview & payment"));
      expect(onClick).not.toHaveBeenCalled();
    });
  });
});
