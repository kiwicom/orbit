import * as React from "react";
import { ListChoice, Popover, InputField } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [choice, setChoice] = React.useState("");
    return (
      <Popover
        renderInPortal={false}
        content={
          <>
            <ListChoice
              title="Oslo, Norway"
              onClick={event => setChoice(event.currentTarget.innerText)}
            />
            <ListChoice
              title="Prague, Czechia"
              onClick={event => setChoice(event.currentTarget.innerText)}
            />
            <ListChoice
              title="Milan, Italy"
              onClick={event => setChoice(event.currentTarget.innerText)}
            />
          </>
        }
        noPadding
      >
        <InputField label="To" inlineLabel value={choice} />
      </Popover>
    );
  },
  info: {
    title: "Default list choice",
    description: "List choices require only titles to display options for users to choose.",
  },
};
