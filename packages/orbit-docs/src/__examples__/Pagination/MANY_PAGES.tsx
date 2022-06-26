import React from "react";
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
};
