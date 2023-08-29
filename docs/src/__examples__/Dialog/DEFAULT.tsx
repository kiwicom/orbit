import React from "react";
import { Button, Dialog, ButtonLink, OrbitProvider, defaultTheme } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [showDialog, setShowDialog] = React.useState(false);

    return (
      <OrbitProvider theme={defaultTheme} useId={React.useId}>
        {showDialog && (
          <Dialog
            title="Accept notifications?"
            description="Stay up to date with all travel possibilities."
            renderInPortal={false}
            primaryAction={
              <Button
                onClick={() => {
                  setShowDialog(false);
                }}
              >
                Accept
              </Button>
            }
            secondaryAction={
              <ButtonLink
                type="secondary"
                onClick={() => {
                  setShowDialog(false);
                }}
              >
                Cancel
              </ButtonLink>
            }
          />
        )}
        {!showDialog && (
          <Button
            onClick={() => {
              setShowDialog(true);
            }}
          >
            Show dialog
          </Button>
        )}
      </OrbitProvider>
    );
  },
  exampleKnobs: [
    {
      component: "Dialog",
      knobs: [
        {
          name: "maxWidth",
          type: "number",
          defaultValue: "",
        },
        {
          name: "description",
          type: "text",
          defaultValue: "Stay up to date with all travel possibilities",
        },
        {
          name: "title",
          type: "text",
          defaultValue: "Accept notifications?",
        },
      ],
    },
  ],
};
