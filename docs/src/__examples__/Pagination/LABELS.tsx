import * as React from "react";
import { Pagination } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [currentPage, setCurrentPage] = React.useState(2);
    return (
      <Pagination
        hideLabels={false}
        pageCount={7}
        onPageChange={selectedPage => setCurrentPage(selectedPage)}
        selectedPage={currentPage}
      />
    );
  },
  info: {
    title: "Labels",
    description:
      "To show the labels for the previous and next buttons on large screens, set <code>hideLabels</code> to <code>false</code>. This prop has no effect on small screens.",
  },
};
