import * as React from "react";
import { Button, Dialog, Illustration } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [showDialog, setShowDialog] = React.useState(false);
    return (
      <>
        {showDialog && (
          <Dialog
            title="Add meal?"
            description="Enjoy a tasty meal on your journey."
            illustration={<Illustration name="Meal" alt="" />}
            renderInPortal={false}
            primaryAction={
              <Button
                onClick={() => {
                  setShowDialog(false);
                }}
              >
                Add for $5
              </Button>
            }
            secondaryAction={
              <Button
                type="secondary"
                onClick={() => {
                  setShowDialog(false);
                }}
              >
                Cancel
              </Button>
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
      </>
    );
  },
  info: {
    title: "Illustrations",
    description:
      "Dialogs can include illustrations to add visual context to their choices. Just make sure all information is present also non-visually.",
  },
};
