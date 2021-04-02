// @flow
import * as React from "react";

import InputField from "../../InputField";
import ListChoice from "../index";
import Popover from "../../Popover";
import * as Icons from "../../icons";

export default {
  Example: (): React.Node => {
    const [choice, setChoice] = React.useState("");
    return (
      <Popover
        content={
          <>
            <ListChoice
              icon={<Icons.AirplaneUp ariaLabel="Airport" />}
              title="London City"
              onClick={event => setChoice(event.currentTarget.innerText)}
            />
            <ListChoice
              icon={<Icons.Bus ariaLabel="Bus station" />}
              title="Victoria Coach Station"
              onClick={event => setChoice(event.currentTarget.innerText)}
            />
            <ListChoice
              icon={<Icons.Bus ariaLabel="Bus station" />}
              title="Golders Green"
              onClick={event => setChoice(event.currentTarget.innerText)}
            />
            <ListChoice
              icon={<Icons.Train ariaLabel="Train station" />}
              title="Paddington"
              onClick={event => setChoice(event.currentTarget.innerText)}
            />
            <ListChoice
              icon={<Icons.Train ariaLabel="Train station" />}
              title="Victoria"
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
    title: "Icons",
    description: "List choices require only titles to display options for users to choose.",
  },
};
