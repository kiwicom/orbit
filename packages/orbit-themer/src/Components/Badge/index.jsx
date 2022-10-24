import React from "react";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import Badge from "@kiwicom/orbit-components/lib/Badge";

const Badges = () => {
  const message = "Badge";
  return (
    <Stack spaceAfter="medium">
      <Stack direction="row">
        <Badge type="info">{message}</Badge>
        <Badge type="success">{message}</Badge>
        <Badge type="warning">{message}</Badge>
        <Badge type="critical">{message}</Badge>
        <Badge type="neutral">{message}</Badge>
      </Stack>
      <Stack direction="row">
        <Badge type="infoInverted">{message}</Badge>
        <Badge type="successInverted">{message}</Badge>
        <Badge type="warningInverted">{message}</Badge>
        <Badge type="criticalInverted">{message}</Badge>
        <Badge type="dark">{message}</Badge>
      </Stack>
    </Stack>
  );
};

export default Badges;
