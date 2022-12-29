import * as React from "react";
import { render, screen, within, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Wizard, { WizardStep } from "..";

jest.mock("../../hooks/useMediaQuery", () => () => ({ isLargeMobile: false }));

describe("Wizard", () => {
  const user = userEvent.setup();

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
      ).toBeInTheDocument();
    });

    it("shows steps when expanded", async () => {
      render(
        <Wizard id="wizard" completedSteps={3} activeStep={3}>
          <WizardStep title="Search" />
          <WizardStep title="Passenger details" />
          <WizardStep title="Ticket fare" />
          <WizardStep title="Customize your trip" />
          <WizardStep title="Overview & payment" />
        </Wizard>,
      );
      await act(() => user.click(screen.getByRole("button")));
      const customizeYourTripStep = within(screen.getByRole("dialog")).getByRole("button", {
        name: /Customize your trip/,
      });
      expect(customizeYourTripStep).toHaveAttribute("aria-current", "step");
    });

    it("can navigate through steps", async () => {
      const onClickStep = jest.fn();
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
            <WizardStep title="Ticket fare" onClick={onClickStep} />
            <WizardStep title="Customize your trip" />
            <WizardStep title="Overview & payment" />
          </Wizard>
        );
      };
      render(<MyApp />);
      await act(() => user.click(screen.getByRole("button")));
      const ticketFareStep = within(screen.getByRole("dialog")).getByRole("button", {
        name: /Ticket fare/,
      });
      await act(() => user.click(ticketFareStep));
      expect(onClickStep).toHaveBeenCalled();
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
      await act(() => user.click(screen.getByRole("button")));
      await act(() => user.click(screen.getByText("Overview & payment")));
      expect(onClick).not.toHaveBeenCalled();
    });

    it("clicking the close button closes the modal", async () => {
      render(
        <Wizard id="wizard" completedSteps={3} activeStep={4}>
          <WizardStep title="Search" />
          <WizardStep title="Passenger details" />
          <WizardStep title="Ticket fare" />
          <WizardStep title="Customize your trip" />
          <WizardStep title="Overview & payment" />
        </Wizard>,
      );
      await act(() => user.click(screen.getByRole("button")));
      await act(() => user.click(screen.getByRole("button", { name: "Close" })));
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });
});
