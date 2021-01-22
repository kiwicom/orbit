import * as React from "react";
import { load, save } from "../utils/storage";
import { PageRendererProps } from "gatsby";

interface BookmarksCtx {
  bookmarks: Record<string, string>;
  toggleBookmark: () => void;
}

interface Props extends PageRendererProps {
  children: React.ReactNode;
  page: string;
}

const defaultBookmarks = {
  bookmarks: {},
  toggleBookmark: () => void,
};

export const BookmarksContext = React.createContext<BookmarksCtx>(defaultBookmarks);

export const BookmarkProvider = ({ children, page, location }: Props) => {
  const [bookmarks, setBookmarks] = React.useState({});

  React.useEffect(() => {
    if (load("bookmarks")) setBookmarks(JSON.parse(load("bookmarks") as string));
  }, [setBookmarks]);

  const toggleBookmark = () => {
    const pg = { [page]: location.pathname };
    const exists = Object.values(bookmarks).includes(location.pathname);

    if (!exists) {
      setBookmarks({ ...bookmarks, ...pg });
      save("bookmarks", JSON.stringify({ ...bookmarks, ...pg }));
    } else {
      setBookmarks({ ...bookmarks, ...{ [page]: "" } });
      save("bookmarks", JSON.stringify({ ...bookmarks, ...{ [page]: "" } }));
    }
  };


  return (
    <BookmarksContext.Provider value={{ bookmarks, toggleBookmark }}>
      {children}
    </BookmarksContext.Provider>
  );
};

export const useBookmarks = () => React.useContext(BookmarksContext);
