import React from "react";
import styled, { css } from "styled-components";
import { StarEmpty, StarFull } from "@kiwicom/orbit-components/icons";
import { useTheme } from "@kiwicom/orbit-components";

import { useBookmarks } from "../../services/bookmarks";

const StyledButton = styled.button.attrs(() => ({
  "aria-label": "bookmark",
  type: "button",
}))<{ $filled: boolean }>`
  ${({ theme, $filled }) => css`
    display: flex;
    align-items: center;
    border-radius: 30px;
    padding: 4px;
    background: ${$filled ? theme.orbit.paletteOrangeLight : "none"};
    &:focus,
    &:hover {
      background: ${$filled ? theme.orbit.paletteOrangeLightHover : "none"};
      svg {
        fill: ${theme.orbit.paletteOrangeNormal};
      }
    }
  `}
`;

interface Props {
  title?: string;
  description?: string;
}

const AddBookmark = ({ title, description }: Props) => {
  const { toggleBookmark, isAdded, setAdded } = useBookmarks();
  const theme = useTheme();

  const handleToggle = () => {
    toggleBookmark({ title, description });
    setAdded(prev => !prev);
  };

  return (
    <StyledButton onClick={handleToggle} $filled={isAdded}>
      {isAdded ? (
        <StarFull customColor={theme.orbit.paletteOrangeNormal} ariaHidden />
      ) : (
        <StarEmpty ariaHidden />
      )}
    </StyledButton>
  );
};

export default AddBookmark;
