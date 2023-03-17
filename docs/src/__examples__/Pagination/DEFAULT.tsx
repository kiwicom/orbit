import React from "react";
import { Pagination } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [currentPage, setCurrentPage] = React.useState(2);
    return (
      <Pagination
        pageCount={7}
        labelPrev="Prev"
        labelNext="Next"
        labelProgress={`${currentPage} of ${pageCount}`}
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
          name: "labelPrev",
          type: "text",
          defaultValue: "Prev",
        },
        {
          name: "labelNext",
          type: "text",
          defaultValue: "Next",
        },
        {
          name: "labelProgress",
          type: "text",
          defaultValue: "Page 2 of 7",
        },
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
