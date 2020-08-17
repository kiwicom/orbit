// @flow
import * as React from "react";

import InputField from "../../InputField";
import ListChoice from "../index";
import Stack from "../../Stack";
import Popover from "../../Popover";

export default {
  Example: () => {
    const [choice, setChoice] = React.useState("");
    return (
      <Popover
        content={
          <Stack>
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
          </Stack>
        }
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
