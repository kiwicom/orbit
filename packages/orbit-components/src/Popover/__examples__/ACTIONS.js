// @flow
import * as React from "react";

import Button from "../../Button";
import ListChoice from "../../ListChoice";
import Popover from "../index";
import Stack from "../../Stack";
import * as Icons from "../../icons";

export default {
  Example: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [is2star, setIs2star] = React.useState(true);
    const [is3star, setIs3star] = React.useState(true);
    const [is4star, setIs4star] = React.useState(true);
    return (
      <Popover
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
              icon={<Icons.Accommodation />}
            />
            <ListChoice
              title="3 star hotels"
              selectable
              selected={is3star}
              onClick={() => setIs3star(!is3star)}
              icon={<Icons.Accommodation />}
            />
            <ListChoice
              title="4 star hotels"
              selectable
              selected={is4star}
              onClick={() => setIs4star(!is4star)}
              icon={<Icons.Accommodation />}
            />
          </Stack>
        }
      >
        <Button
          circled
          title="Hotel types"
          iconLeft={<Icons.Accommodation />}
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
