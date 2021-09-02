import React from "react";
import { InputField, Stack } from "@kiwicom/orbit-components";
import { Search } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <Stack direction="column">
      <InputField label="Maximum price" type="number" prefix="$" />
      <InputField
        label="Search"
        placeholder="Search by keyword"
        type="text"
        inputMode="search"
        prefix={<Search />}
      />
    </Stack>
  ),
  info: {
    title: "Prefixes",
    description: "If you need additional context, you can add it as a prefix.",
  },
};
