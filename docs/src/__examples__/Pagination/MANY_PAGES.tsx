import * as React from "react";
import { Pagination } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [currentPage, setCurrentPage] = React.useState(6);
    return (
      <Pagination
        pageCount={12}
        onPageChange={selectedPage => setCurrentPage(selectedPage)}
        selectedPage={currentPage}
      />
    );
  },
  info: {
    title: "Many pages",
    description:
      "When there are 8 or more pages, some pages are hidden behind ellipses on large screens for a more clear view.",
  },
};
