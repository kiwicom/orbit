import * as React from "react";
import { PageRendererProps } from "gatsby";

import { load, save } from "../utils/storage";

interface BookmarksCtx {
  bookmarks: Record<string, { title: string; description: string; href: string }>;
  toggleBookmark: ({ title, description }) => void;
  removeBookmark: (page: string) => void;
  setAdded: React.Dispatch<React.SetStateAction<boolean>>;
  isAdded: boolean;
}

interface Bookmark {
  title: string;
  description: string;
  href: string;
}

interface Props extends PageRendererProps {
  children: React.ReactNode;
  page: string;
}

const defaultBookmarks = {
  bookmarks: {},
  toggleBookmark: () => {},
  removeBookmark: () => {},
  setAdded: () => {},
  isAdded: false,
};

export const BookmarksContext = React.createContext<BookmarksCtx>(defaultBookmarks);

export const BookmarkProvider = ({ children, page, location }: Props) => {
  const [bookmarks, setBookmarks] = React.useState<Record<string, Bookmark>>({});
  const [isAdded, setAdded] = React.useState(false);

  React.useEffect(() => {
    const loadedBookmarks = load("bookmarks");
    if (loadedBookmarks) setBookmarks(JSON.parse(loadedBookmarks));
  }, [setBookmarks]);

  React.useEffect(() => {
    if (Object.keys(bookmarks).includes(location.pathname)) setAdded(true);
  }, [setAdded, bookmarks, location.pathname]);

  const removeBookmark = React.useCallback(
    (p: string) => {
      delete bookmarks[p];
      setBookmarks({ ...bookmarks });
      save("bookmarks", JSON.stringify({ ...bookmarks }));
    },
    [bookmarks],
  );

  const toggleBookmark = React.useCallback(
    ({ title, description }) => {
      const pg = {
        [page]: {
          title: title || location.pathname,
          description,
          href: page,
        },
      };

      if (!isAdded) {
        setBookmarks({ ...bookmarks, ...pg });
        save("bookmarks", JSON.stringify({ ...bookmarks, ...pg }));
      } else removeBookmark(page);
    },
    [bookmarks, isAdded, page, location.pathname, removeBookmark],
  );

  const value = React.useMemo(
    () => ({
      bookmarks,
      toggleBookmark,
      removeBookmark,
      setAdded,
      isAdded,
    }),
    [bookmarks, toggleBookmark, removeBookmark, setAdded, isAdded],
  );

  return <BookmarksContext.Provider value={value}>{children}</BookmarksContext.Provider>;
};

export const useBookmarks = () => React.useContext(BookmarksContext);
