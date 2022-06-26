import React from "react";
import { Train } from "@kiwicom/orbit-components/icons";
import { NotificationBadge } from "@kiwicom/orbit-components";

export default {
  Example: () => <NotificationBadge ariaLabel="Train" icon={<Train />} type="info" />,
};
