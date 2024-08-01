import * as React from "react";

import Pagination from ".";

export default function PaginationStory() {
  return (
    <div className="p-400">
      <Pagination
        labelNext="Previous"
        labelPrev="Next"
        labelProgress="1 of 6"
        onPageChange={() => {}}
        pageCount={6}
      />
      <Pagination
        labelNext="Previous"
        labelPrev="Next"
        labelProgress="1 of 6"
        onPageChange={() => {}}
        pageCount={6}
        size="small"
      />
      <Pagination
        hideLabels={false}
        labelNext="Previous"
        labelPrev="Next"
        labelProgress="1 of 6"
        onPageChange={() => {}}
        pageCount={6}
        size="small"
      />
      <Pagination
        labelNext="Next"
        labelPrev="Previous"
        labelProgress="44 of 100"
        onPageChange={() => {}}
        pageCount={100}
        selectedPage={44}
      />
      <Pagination
        hideLabels={false}
        labelNext="Next"
        labelPrev="Previous"
        labelProgress="100 of 100"
        onPageChange={() => {}}
        pageCount={100}
        selectedPage={100}
      />
    </div>
  );
}
