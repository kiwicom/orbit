import React from "react";
import { Pagination } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const pageCount = 12;
    const [currentPage, setCurrentPage] = React.useState(pageCount);

    return (
      <Pagination
        labelPrev="Prev"
        labelNext="Next"
        labelProgress={`${currentPage} of ${pageCount}`}
        pageCount={pageCount}
        onPageChange={selectedPage => setCurrentPage(selectedPage)}
        selectedPage={currentPage}
      />
    );
  },
};
