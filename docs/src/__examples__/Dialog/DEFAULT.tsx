import * as React from "react";
import { Button, Dialog } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [showDialog, setShowDialog] = React.useState(false);
    return (
      <>
        {showDialog && (
          <Dialog
            title="Accept notifications?"
            description="Stay up to date with all travel possibilities."
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
    title: "Default dialog",
    description:
      "Dialogs present a simple choice for users. They're displayed after users take action.",
  },
};
