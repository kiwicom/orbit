import React from "react";
import { Badge, Stack } from "@kiwicom/orbit-components";

const Badges = () => {
  const message = "Badge";
  return (
    <Stack direction="column">
      <Stack wrap>
        <Badge type="info">{message}</Badge>
        <Badge type="warning">{message}</Badge>
        <Badge type="success">{message}</Badge>
        <Badge type="critical">{message}</Badge>
        <Badge type="neutral">{message}</Badge>
        <Badge type="infoInverted">{message}</Badge>
        <Badge type="warningInverted">{message}</Badge>
        <Badge type="successInverted">{message}</Badge>
        <Badge type="criticalInverted">{message}</Badge>
        <Badge type="dark">{message}</Badge>
      </Stack>
    </Stack>
  );
};

export default Badges;
