import * as React from "react";
import { Heading, Stack, Switch } from "@kiwicom/orbit-components";
import { NotificationOn, NotificationOff } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => {
    const [notifications, setNotifications] = React.useState(false);

    const handleChange = () => {
      setNotifications(!notifications);
    };
    return (
      <Stack>
        <Heading id="label" as="h4" type="title4">
          Push notifications
        </Heading>
        <Switch
          ariaLabelledby="label"
          checked={notifications}
          onChange={handleChange}
          icon={notifications ? <NotificationOn /> : <NotificationOff />}
        />
      </Stack>
    );
  },
  info: {
    title: "Default Switch",
  },
};
