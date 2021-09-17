import React from "react";
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
  exampleKnobs: [
    {
      component: "ListChoice",
      knobs: [
        { name: "title", type: "text", defaultValue: "Oslo, Norway" },
        { name: "description", type: "text", defaultValue: "" },
        { name: "disabled", type: "boolean", defaultValue: false },
        { name: "icon", type: "icon", defaultValue: "" },
        { name: "selectable", type: "boolean", defaultValue: false },
        { name: "selected", type: "boolean", defaultValue: false },
      ],
    },
  ],
};
