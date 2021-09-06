import React from "react";
import { Button, Stack, Popover, ListChoice } from "@kiwicom/orbit-components";
import { Accommodation } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [is2star, setIs2star] = React.useState(true);
    const [is3star, setIs3star] = React.useState(true);
    const [is4star, setIs4star] = React.useState(true);
    return (
      <Popover
        renderInPortal={false}
        actions={
          <Stack direction="row" justify="end">
            <Button type="primarySubtle" onClick={() => setIsOpen(false)}>
              Done
            </Button>
          </Stack>
        }
        opened={isOpen}
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
        <Button
          circled
          title="Hotel types"
          iconLeft={<Accommodation />}
          onClick={() => setIsOpen(true)}
        />
      </Popover>
    );
  },
  info: {
    title: "Actions",
    description:
      "The actions prop adds a space for actions to popovers. Keep in mind that this overrides the close action on smaller screens, so at least one of the actions you include needs to close the popover.",
  },
};
