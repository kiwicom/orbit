import * as React from "react";

import RandomIdProvider from "../../OrbitProvider/RandomId/Provider";

import CardSection from ".";

export function CardSectionInput() {
  return (
    <RandomIdProvider useId={React.useId}>
      <CardSection>
        <input type="text" data-test="input" />
      </CardSection>
    </RandomIdProvider>
  );
}
