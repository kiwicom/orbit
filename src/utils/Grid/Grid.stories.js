// @flow
import * as React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { text, boolean, number } from "@storybook/addon-knobs";

import Grid from "./index";

const CustomDiv = styled.div`
  background: rgba(0, 169, 145, 0.2);
`;

storiesOf("Grid", module).add("Playground", () => {
  const inline = boolean("inline", false);
  const maxWidth = text("maxWidth", "1440px");
  const columns = text("columns", "repeat(8, 1fr)");
  const rows = text("rows", "repeat(2, 30px)");
  const gap = text("gap", null);
  const columnGap = text("columnGap", "10px");
  const rowGap = text("rowGap", "20px");
  const element = text("element", "div");
  const dataTest = text("dataTest", "test");
  const DivsCount = number("DivsCount", 16);
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
      {Array(...Array(DivsCount)).map((_, key) => (
        // eslint-disable-next-line
          <CustomDiv key={key} />
      ))}
    </Grid>
  );
});
