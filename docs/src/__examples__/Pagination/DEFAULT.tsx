import * as React from "react";
import { Pagination } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [currentPage, setCurrentPage] = React.useState(2);
    return (
      <Pagination
        pageCount={7}
        onPageChange={selectedPage => setCurrentPage(selectedPage)}
        selectedPage={currentPage}
      />
    );
  },
  info: {
    title: "Default pagination",
    description: "By default, all pages up to 7 are displayed as buttons on large screens.",
  },
};
