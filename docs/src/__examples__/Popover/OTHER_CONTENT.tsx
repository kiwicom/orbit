import * as React from "react";
import { Popover, Button, Stack, ListChoice } from "@kiwicom/orbit-components";
import { Accommodation } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => {
    const [is2star, setIs2star] = React.useState(true);
    const [is3star, setIs3star] = React.useState(true);
    const [is4star, setIs4star] = React.useState(true);
    return (
      <Popover
        content={
          <Stack spacing="small">
            <ListChoice
              title="2 star hotels"
              selectable
              selected={is2star}
              onClick={() => setIs2star(!is2star)}
              icon={<Accommodation />}
            />
            <ListChoice
              title="3 star hotels"
              selectable
              selected={is3star}
              onClick={() => setIs3star(!is3star)}
              icon={<Accommodation />}
            />
            <ListChoice
              title="4 star hotels"
              selectable
              selected={is4star}
              onClick={() => setIs4star(!is4star)}
              icon={<Accommodation />}
            />
          </Stack>
        }
      >
        <Button circled title="Accommodation" iconLeft={<Accommodation />} />
      </Popover>
    );
  },
  info: {
    title: "Other content",
    description: "Popovers are very flexible in terms of the content they accept.",
  },
};
