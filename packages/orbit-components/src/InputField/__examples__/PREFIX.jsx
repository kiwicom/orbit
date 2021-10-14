// @flow
import * as React from "react";

import InputField from "../index";
import Stack from "../../Stack";
import * as Icons from "../../icons";

export default {
  Example: (): React.Node => (
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
