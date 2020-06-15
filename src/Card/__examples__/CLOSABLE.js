// @flow
import * as React from "react";

import Button from "../../Button";
import ButtonLink from "../../ButtonLink";
import Card from "../index";
import CardSection from "../CardSection/index";
import Dialog from "../../Dialog";

export default {
  Example: () => {
    const [showCard, setShowCard] = React.useState(true);
    return (
      <>
        {showCard && (
          <Card
            title="Passenger info"
            onClose={() => {
              setShowCard(false);
            }}
          >
            <CardSection>Yasmin Karenth</CardSection>
          </Card>
        )}
        {!showCard && (
          <Button
            onClick={() => {
              setShowCard(true);
            }}
          >
            Show card
          </Button>
        )}
      </>
    );
  },
  info: {
    title: "Closable card",
    description:
      "Passing onClose to the card makes the close button appear, which you can use to control whether the card is visable.",
  },
};
