import React from "react";
import {
  InputField,
  ListChoice,
  Popover,
  OrbitProvider,
  defaultTheme,
} from "@kiwicom/orbit-components";
import { AirplaneUp, Bus, Train } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => {
    const [choice, setChoice] = React.useState("");
    return (
      <OrbitProvider theme={defaultTheme} useId={React.useId}>
        <Popover
          renderInPortal={false}
          content={
            <>
              <ListChoice
                icon={<AirplaneUp ariaLabel="Airport" />}
                title="London City"
                onClick={event => setChoice(event.currentTarget.innerText)}
              />
              <ListChoice
                icon={<Bus ariaLabel="Bus station" />}
                title="Victoria Coach Station"
                onClick={event => setChoice(event.currentTarget.innerText)}
              />
              <ListChoice
                icon={<Bus ariaLabel="Bus station" />}
                title="Golders Green"
                onClick={event => setChoice(event.currentTarget.innerText)}
              />
              <ListChoice
                icon={<Train ariaLabel="Train station" />}
                title="Paddington"
                onClick={event => setChoice(event.currentTarget.innerText)}
              />
              <ListChoice
                icon={<Train ariaLabel="Train station" />}
                title="Victoria"
                onClick={event => setChoice(event.currentTarget.innerText)}
              />
            </>
          }
          noPadding
        >
          <InputField label="To" inlineLabel value={choice} />
        </Popover>
      </OrbitProvider>
    );
  },
};
