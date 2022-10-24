import React from "react";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink";

const ButtonLinks = () => {
  return (
    <Stack>
      <ButtonLink type="primary">Primary ButtonLink</ButtonLink>
      <ButtonLink type="secondary">Secondary ButtonLink</ButtonLink>
    </Stack>
  );
};

export default ButtonLinks;
