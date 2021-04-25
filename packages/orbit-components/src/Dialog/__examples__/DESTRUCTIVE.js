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
            title="Remove traveler?"
            description="You can't undo this."
            primaryAction={
              <Button
                onClick={() => {
                  setShowDialog(false);
                }}
                type="critical"
              >
                Remove
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
    title: "Destructive dialog",
    description: "Make sure to warn users about destructive actions.",
  },
};
