// @flow
import * as React from "react";

import Button from "../../Button";
import Dialog from "../index";

export default {
  Example: (): React.Node => {
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
            onClose={() => {
              setShowDialog(false);
            }}
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
    title: "Closing dialogs",
    description:
      "Dialogs usually have a secondary action to close them. To let users close them by clicking the overlay, use the onClose prop.",
  },
};
