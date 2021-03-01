import * as React from "react";
import { InputField, Stack } from "@kiwicom/orbit-components";
import * as Icons from "@kiwicom/orbit-components/lib/icons";

export default {
  Example: () => (
    <Stack direction="column">
      <InputField label="Maximum price" type="number" prefix="$" />
      <InputField
        label="Search"
        placeholder="Search by keyword"
        type="text"
        inputMode="search"
        prefix={<Icons.Search />}
      />
    </Stack>
  ),
  info: {
    title: "Prefixes",
    description: "If you need additional context, you can add it as a prefix.",
  },
};
