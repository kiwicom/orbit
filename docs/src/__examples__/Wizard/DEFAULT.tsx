import React from "react";
import { Button, Heading, Stack, WizardStep, Wizard, Box, Text } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [activeStep, setActiveStep] = React.useState(2);
    const [headingAndText, setHeadingAndText] = React.useState({
      heading: "Ticket fare",
      text: "Select your ticket fare.",
    });
    const handleStepChange = step => {
      setActiveStep(step);
      switch (step) {
        case 0:
          setHeadingAndText({
            heading: "Search",
            text: "Find a connection.",
          });
          break;
        case 1:
          setHeadingAndText({
            heading: "Passenger details",
            text: "Enter details for all passengers.",
          });
          break;
        case 2:
          setHeadingAndText({
            heading: "Ticket fare",
            text: "Select your ticket fare.",
          });
          break;
        case 3:
          setHeadingAndText({
            heading: "Customize your trip",
            text: "Select seating.",
          });
          break;
        default:
          setHeadingAndText({
            heading: "Overview and payment",
            text: "Enter payment details.",
          });
      }
    };
    return (
      <>
        <Wizard
          id="wizard"
          completedSteps={activeStep}
          activeStep={activeStep}
          onChangeStep={step => handleStepChange(step)}
        >
          <WizardStep title="Search" />
          <WizardStep title="Passenger details" />
          <WizardStep title="Ticket fare" />
          <WizardStep title="Customize your trip" />
          <WizardStep title="Overview and payment" />
        </Wizard>
        <Box padding={{ top: "XLarge" }}>
          <Stack>
            <Heading>{headingAndText.heading}</Heading>
            <Text>{headingAndText.text}</Text>
            {activeStep < 4 && (
              <Button onClick={() => handleStepChange(activeStep + 1)}>Next step</Button>
            )}
          </Stack>
        </Box>
      </>
    );
  },
  info: {
    title: "Default wizard",
    description:
      "Wizards show where users are in a specific process and allow them to navigate back to previous steps.",
  },
};
