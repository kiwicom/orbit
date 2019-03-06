// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean, object } from "@storybook/addon-knobs";

import Grid from "./index";

storiesOf("Grid", module).add(
  "Playground",
  () => {
    const inline = boolean("inline", false);
    const maxWidth = text("maxWidth", "1440px");
    const columns = text("columns", "1fr 1fr 1fr 1fr");
    const rows = text("rows", "1fr");
    const gap = text("gap", null);
    const columnGap = text("columnGap", "10px");
    const rowGap = text("rowGap", "10px");
    const element = text("element", "div");
    const dataTest = text("dataTest", "test");
    return (
      <Grid
        inline={inline}
        maxWidth={maxWidth}
        columns={columns}
        rows={rows}
        gap={gap}
        columnGap={columnGap}
        rowGap={rowGap}
        element={element}
        dataTest={dataTest}
      >
        <div>
          Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem
          ipsum dolor sit amet
        </div>
        <div>
          Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem
          ipsum dolor sit amet
        </div>
        <div>
          Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem
          ipsum dolor sit amet
        </div>
        <div>
          Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem
          ipsum dolor sit amet
        </div>
      </Grid>
    );
  },
  {
    info: "SearchLayout",
  },
);
