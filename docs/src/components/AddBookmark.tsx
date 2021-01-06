import React from "react";
import styled from "styled-components";
import StarEmpty from "@kiwicom/orbit-components/lib/icons/StarEmpty";
import StarFull from "@kiwicom/orbit-components/lib/icons/StarFull";
import { load, save } from "../utils/storage";
import { PageRendererProps } from "gatsby";

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

interface Props extends PageRendererProps {
  page: string;
}

const AddBookmark = ({ page, location }: Props) => {
  const [added, setAdded] = React.useState(false);
  const [bookmarks, setBookmarks] = React.useState({});
  const handleToggle = () => setAdded(prev => !prev);

  const exists = Object.values(bookmarks).includes(location.pathname);

  React.useEffect(() => {
    const data = load("bookmarks");
    if (data) setBookmarks(JSON.parse(data));
  }, []);

  React.useEffect(() => {
    if (exists) setAdded(true);
    if (!exists && added) {
      save("bookmarks", JSON.stringify(Object.assign(bookmarks, { [page]: location.pathname })));
    }
  }, [added, bookmarks]);

  React.useEffect(() => {
    if (exists && !added) {
      save("bookmarks", JSON.stringify(Object.assign(bookmarks, { [page]: null })));
      setAdded(false);
    }
  }, [added]);

  return (
    <Button onClick={handleToggle}>
      {added ? <StarFull ariaHidden /> : <StarEmpty ariaHidden />}
    </Button>
  );
};

export default AddBookmark;
