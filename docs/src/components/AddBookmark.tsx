import React from "react";
import styled from "styled-components";
import { StarEmpty, StarFull } from "@kiwicom/orbit-components/icons";

import { useBookmarks } from "../services/bookmarks";

const Button = styled.button.attrs(() => ({
  "aria-label": "bookmark",
  type: "button",
}))`
  border-radius: 3px;
  &:focus {
    outline: none;
    box-shadow: rgba(95, 115, 140, 0.3) 0px 0px 0px 3px;
  }
`;

const AddBookmark = () => {
  const { toggleBookmark, isAdded, setAdded } = useBookmarks();

  const handleToggle = () => {
    toggleBookmark();
    setAdded(prev => !prev);
  };

  return (
    <Button onClick={handleToggle}>
      {isAdded ? <StarFull ariaHidden /> : <StarEmpty ariaHidden />}
    </Button>
  );
};

export default AddBookmark;
