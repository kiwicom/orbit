// @flow
import * as React from "react";

import Pagination from "../index";
import Stack from "../../Stack";

export default {
  Example: (): React.Node => {
    const [currentPageSmall, setCurrentPageSmall] = React.useState(2);
    const [currentPageNormal, setCurrentPageNormal] = React.useState(2);
    return (
      <Stack>
        <Pagination
          size="small"
          pageCount={7}
          onPageChange={selectedPage => setCurrentPageSmall(selectedPage)}
          selectedPage={currentPageSmall}
        />
        <Pagination
          pageCount={7}
          onPageChange={selectedPage => setCurrentPageNormal(selectedPage)}
          selectedPage={currentPageNormal}
        />
      </Stack>
    );
  },
  info: {
    title: "Sizes",
    description: "Pagination can be displayed as small or normal (the default).",
  },
};
