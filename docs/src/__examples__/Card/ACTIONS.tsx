import React from "react";
import { Button, Dialog, ButtonLink, Card, CardSection } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [showDialog, setShowDialog] = React.useState(false);
    return (
      <>
        <Card
          title="Passenger info"
          actions={
            <ButtonLink
              size="small"
              onClick={() => {
                setShowDialog(true);
              }}
            >
              Edit list
            </ButtonLink>
          }
        >
          <CardSection>Yasmin Karenth</CardSection>
        </Card>
        {showDialog && (
          <Dialog
            title="Here you could edit this list"
            primaryAction={
              <Button
                onClick={() => {
                  setShowDialog(false);
                }}
              >
                Close
              </Button>
            }
          />
        )}
      </>
    );
  },
  info: {
    title: "Card actions",
    description:
      "Cards and card sections can have actions associated with the card or section. Note that a title is required to display the actions.",
  },
};
