import React from "react";

import ChoiceGroup from "..";
import Checkbox from "../../Checkbox";

export default function App() {
  return (
    <ChoiceGroup onChange={() => {}}>
      {({ Container, Item, spacing }) => (
        <Container style={{ display: "flex", flexDirection: "column", gap: spacing }}>
          <Item>
            <Checkbox value="option" label="Option" />
          </Item>
        </Container>
      )}
    </ChoiceGroup>
  );
}
