import * as React from "react";
import { PageRendererProps } from "gatsby";

import { load, save } from "../utils/storage";

interface BookmarksCtx {
  bookmarks: Record<string, string>;
  toggleBookmark: () => void;
  setAdded: React.Dispatch<React.SetStateAction<boolean>>;
  isAdded: boolean;
}

interface Props extends PageRendererProps {
  children: React.ReactNode;
  page: string;
}

const defaultBookmarks = {
  bookmarks: {},
  toggleBookmark: () => {},
  setAdded: () => {},
  isAdded: false,
};

export const BookmarksContext = React.createContext<BookmarksCtx>(defaultBookmarks);

export const BookmarkProvider = ({ children, page, location }: Props) => {
  const [bookmarks, setBookmarks] = React.useState({});
  const [isAdded, setAdded] = React.useState(false);

  React.useEffect(() => {
    const loadedBookmarks = load("bookmarks");
    if (loadedBookmarks) setBookmarks(JSON.parse(loadedBookmarks));
  }, [setBookmarks]);

  React.useEffect(() => {
    if (Object.values(bookmarks).includes(location.pathname)) setAdded(true);
  }, [setAdded, bookmarks, location.pathname]);

  const toggleBookmark = () => {
    const pg = { [page]: location.pathname };

    if (!isAdded) {
      setBookmarks({ ...bookmarks, ...pg });
      save("bookmarks", JSON.stringify({ ...bookmarks, ...pg }));
    } else {
      setBookmarks({ ...bookmarks, ...{ [page]: "" } });
      save("bookmarks", JSON.stringify({ ...bookmarks, ...{ [page]: "" } }));
    }
  };

  return (
    <BookmarksContext.Provider value={{ bookmarks, toggleBookmark, isAdded, setAdded }}>
      {children}
    </BookmarksContext.Provider>
  );
};

export const useBookmarks = () => React.useContext(BookmarksContext);
