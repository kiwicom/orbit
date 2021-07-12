import React from "react";
import { v4 as uuidv4 } from "uuid";

import { slugify } from "../utils/common";

const DEPTH = 3;

export interface TableOfContentsItem {
  id: string;
  title: string;
  slug: string;
  level: number;
}

type SetTableOfContents = React.Dispatch<React.SetStateAction<TableOfContentsItem[]>>;

const TableOfContentsContext = React.createContext<[TableOfContentsItem[], SetTableOfContents]>([
  [],
  () => {},
]);
TableOfContentsContext.displayName = "TableOfContentsContext";

export function TableOfContentsProvider({ children }: { children: React.ReactNode }) {
  const [tableOfContents, setTableOfContents] = React.useState<TableOfContentsItem[]>([]);
  return (
    <TableOfContentsContext.Provider value={[tableOfContents, setTableOfContents]}>
      {children}
    </TableOfContentsContext.Provider>
  );
}

export function useTableOfContents() {
  const [tableOfContents] = React.useContext(TableOfContentsContext);
  return tableOfContents;
}

export function useTableOfContentsRegister({ title, level }: { title: string; level: number }) {
  const [, setTableOfContents] = React.useContext(TableOfContentsContext);
  const id = React.useMemo(() => uuidv4(), []);

  React.useEffect(() => {
    setTableOfContents(prevToc => {
      if (level >= DEPTH) return prevToc;
      if (prevToc.find(item => item.id === id)) {
        return prevToc.map(item =>
          item.id === id ? { ...item, title, slug: slugify(title), level } : item,
        );
      }
      return [...prevToc, { id, title, slug: slugify(title), level }];
    });
  }, [title, level, id, setTableOfContents]);
}
