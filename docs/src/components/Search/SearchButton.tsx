import React from "react";
import { Stack, Button } from "@kiwicom/orbit-components";
import { Search as SearchIcon } from "@kiwicom/orbit-components/icons";

import KeyboardShortcuts from "./primitives/KeyboardShortcuts";

interface Props {
  onClick: () => void;
}

const SearchButton = ({ onClick }: Props) => {
  return (
    <div className="[&>button]:bg-[rgba(0,169,145,0.1)]">
      <Button size="large" type="primarySubtle" circled iconLeft={<SearchIcon />} onClick={onClick}>
        <Stack inline align="center" spacing="200">
          <p>Search</p>
          <KeyboardShortcuts type="primary" />
        </Stack>
      </Button>
    </div>
  );
};

export default SearchButton;
