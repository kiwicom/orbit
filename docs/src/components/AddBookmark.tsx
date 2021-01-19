import React from "react";
import styled from "styled-components";
import StarEmpty from "@kiwicom/orbit-components/lib/icons/StarEmpty";
import StarFull from "@kiwicom/orbit-components/lib/icons/StarFull";
import { useBookmarks } from "../services/bookmarks";

const Button = styled.button.attrs(({ onClick }) => ({
  "aria-label": "bookmark",
  type: "button",
  onClick,
}))`
  border-radius: 3px;
  &:focus {
    outline: none;
    box-shadow: rgba(95, 115, 140, 0.3) 0px 0px 0px 3px;
  }
`;

const AddBookmark = () => {
  const { toggleBookmark } = useBookmarks();
  const [added, setAdded] = React.useState(false);

  const handleToggle = () => {
    toggleBookmark();
    setAdded(prev => !prev);
  };

  return (
    <Button onClick={handleToggle}>
      {added ? <StarFull ariaHidden /> : <StarEmpty ariaHidden />}
    </Button>
  );
};

export default AddBookmark;
