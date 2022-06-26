import React from "react";
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
  exampleKnobs: [
    {
      component: "Pagination",
      knobs: [
        {
          name: "pageCount",
          type: "number",
          defaultValue: 7,
        },
        {
          name: "selectedPage",
          type: "number",
          defaultValue: 2,
        },
        {
          name: "hideLabels",
          type: "boolean",
          defaultValue: true,
        },
        {
          name: "size",
          type: "select",
          defaultValue: "normal",
          options: ["small", "normal"],
        },
      ],
    },
  ],
};
