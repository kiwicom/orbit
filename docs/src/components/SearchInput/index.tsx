import * as React from "react";
import { Search as SearchIcon } from "@kiwicom/orbit-components/icons";
import { useMediaQuery } from "@kiwicom/orbit-components";
import styled from "styled-components";

import StyledWrapper, { Size } from "./primitives/StyledWrapper";
import StyledInputContainer from "./primitives/StyledInputContainer";
import StyledPrefix from "./primitives/StyledPrefix";
import SearchModal from "./SearchModal";

interface Props {
  size?: Size;
}

const StyledToggleContainer = styled(StyledInputContainer)`
  cursor: auto; /* the interactive element should change the cursor, not container */
  padding: 0; /* to increase the clickable area */
`;
const StyledTogglePrefix = styled(StyledPrefix)`
  pointer-events: none;
  position: absolute;
  left: 1.5em;
  top: 50%;
  transform: translateY(-50%);
`;
const StyledSearchToggle = styled.button.attrs({ type: "button" })<{ size: Size }>`
  ${({ theme, size }) => `
    display: block;
    width: 100%;
    height: ${size === Size.Large ? "100%" : "44px"};
    border-radius: 44px;
    padding: 10px 1.5em; /* copied from StyledInputContainer */
    padding-left: 4em; /* compensate for the icon */
    text-align: left;
    color: ${theme.orbit.paletteInkLight};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
`;

function SearchInput({ size = Size.Regular }: Props) {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);

  const { isTablet } = useMediaQuery();
  const placeholder = isTablet ? "Search for components, foundation..." : "Search...";

  return (
    <>
      <StyledWrapper size={size}>
        <StyledToggleContainer>
          <StyledTogglePrefix>
            <SearchIcon />
          </StyledTogglePrefix>
          <StyledSearchToggle size={size} onClick={() => setModalOpen(true)}>
            {placeholder}
          </StyledSearchToggle>
        </StyledToggleContainer>
      </StyledWrapper>
      {modalOpen && <SearchModal placeholder={placeholder} onClose={() => setModalOpen(false)} />}
    </>
  );
}

export default SearchInput;
export { Size };
