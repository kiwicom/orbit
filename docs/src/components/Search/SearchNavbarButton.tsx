import React from "react";
import { Search as SearchIcon } from "@kiwicom/orbit-components/icons";
import { Stack, useMediaQuery } from "@kiwicom/orbit-components";

import KeyboardShortcuts from "./primitives/KeyboardShortcuts";

interface Props {
  onClick: () => void;
}

const SearchNavbarButton = ({ onClick }: Props) => {
  const { isTablet } = useMediaQuery();

  return (
    <button
      type="button"
      onClick={onClick}
      className="tablet:bg-cloud-light tablet:px-6 tablet:overflow-hidden tablet:mr-2 tablet:transition-colors tablet:duration-fast tablet:[&>svg]:mr-2 hover:tablet:bg-cloud-light-hover focus:tablet:bg-cloud-light-active active:tablet:bg-cloud-light-active flex items-center rounded-full p-[10px]"
    >
      <SearchIcon />
      <Stack align="center" spacing="200">
        {isTablet ? (
          <>
            <p>Hit</p>
            <KeyboardShortcuts type="secondary" />
            <p>for the quick search</p>
          </>
        ) : null}
      </Stack>
    </button>
  );
};

export default SearchNavbarButton;
