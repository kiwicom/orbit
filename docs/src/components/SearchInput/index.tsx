import * as React from "react";
import { Search as SearchIcon } from "@kiwicom/orbit-components/icons";
import { Button, useMediaQuery } from "@kiwicom/orbit-components";

import StyledWrapper from "./primitives/StyledWrapper";
import SearchModal from "./SearchModal";

interface Props extends Pick<React.ComponentProps<typeof Button>, "size"> {}

function SearchInput({ size }: Props) {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const { isTablet } = useMediaQuery();
  const placeholder = "Search for components, foundation...";

  return (
    <>
      <StyledWrapper size={size}>
        <Button
          size={size}
          circled
          iconLeft={<SearchIcon />}
          title={placeholder}
          type="secondary"
          onClick={() => setModalOpen(true)}
        />
      </StyledWrapper>
      {modalOpen && (
        <SearchModal
          // so it doesn't cause horizontal overflow
          placeholder={isTablet ? placeholder : "Search..."}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}

export default SearchInput;
