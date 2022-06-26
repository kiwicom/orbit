import React from "react";
import { InputField, ListChoice, Popover } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [choice, setChoice] = React.useState("");
    return (
      <Popover
        renderInPortal={false}
        content={
          <>
            <ListChoice
              title="London Heathrow"
              description="23 km from city center"
              // @ts-expect-error todo
              onClick={event => setChoice(event.currentTarget.children[0].children[0].innerText)}
            />
            <ListChoice
              title="London Gatwick"
              description="48 km from city center"
              // @ts-expect-error todo
              onClick={event => setChoice(event.currentTarget.children[0].children[0].innerText)}
            />
            <ListChoice
              title="London Stansted"
              description="68 km from city center"
              // @ts-expect-error todo
              onClick={event => setChoice(event.currentTarget.children[0].children[0].innerText)}
            />
          </>
        }
        noPadding
      >
        <InputField label="To" inlineLabel value={choice} />
      </Popover>
    );
  },
};
