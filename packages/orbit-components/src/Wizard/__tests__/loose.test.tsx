import * as React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Wizard, { WizardStep } from "..";

jest.mock("../../hooks/useMediaQuery", () => () => ({ isLargeMobile: true }));

describe("Wizard", () => {
  const user = userEvent.setup();

  describe("loose", () => {
    it("can navigate through steps", async () => {
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
      await act(() => user.click(ticketFareStep));
      expect(ticketFareStep).toHaveAttribute("aria-current", "step");
    });

    it("cannot select disabled steps", async () => {
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
      await act(() => user.click(screen.getByText("Overview & payment")));
      expect(onClick).not.toHaveBeenCalled();
    });
  });
});
