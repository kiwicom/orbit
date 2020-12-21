import React from "react";
import styled from "styled-components";
import StarEmpty from "@kiwicom/orbit-components/lib/icons/StarEmpty";
import StarFull from "@kiwicom/orbit-components/lib/icons/StarFull";
import { load, save } from "../utils/storage";

const Button = styled.button`
  border-radius: 3px;
  &:focus {
    outline: none;
    box-shadow: rgba(95, 115, 140, 0.3) 0px 0px 0px 3px;
  }
`;

interface Props {
  page: string;
}

const AddBookmark = ({ page }: Props) => {
  const [added, setAdded] = React.useState(false);

  const handleToggle = () => setAdded(prev => !prev);

  React.useEffect(() => {
    const pg = { [page]: window.location.pathname };
    const bookmarks = load("bookmarks");

    // TODO: mb rewrite better
    if (bookmarks) {
      const exists = Object.values(JSON.parse(bookmarks)).includes(window.location.pathname);
      if (exists) setAdded(true);
      if (!exists && added) {
        save("bookmarks", JSON.stringify(Object.assign(JSON.parse(bookmarks), pg)));
      }
      if (exists && added) {
        save("bookmarks", JSON.stringify(Object.assign(JSON.parse(bookmarks), { [page]: null })));
        setAdded(false);
      }
    } else {
      if (added) save("bookmarks", JSON.stringify(pg));
    }
  }, [save, load, added, setAdded]);

  return (
    <Button type="button" aria-label="bookmark" onClick={handleToggle}>
      {added ? <StarFull ariaHidden /> : <StarEmpty ariaHidden />}
    </Button>
  );
};

export default AddBookmark;
