import * as React from "react";

import { SPACINGS_AFTER } from "../../common/consts";

import Grid from ".";

export default {
  title: "Grid",
};

export const Playground = ({
  inline,
  maxWidth,
  width,
  columns,
  rows,
  gap,
  columnGap,
  rowGap,
  as,
  dataTest,
  divsCount,
  mediumMobile,
  largeMobile,
  tablet,
  desktop,
  largeDesktop,
  spaceAfter,
}) => {
  return (
    <Grid
      inline={inline}
      spaceAfter={spaceAfter}
      maxWidth={maxWidth}
      width={width}
      columns={columns}
      rows={rows}
      gap={gap}
      columnGap={columnGap}
      rowGap={rowGap}
      as={as}
      dataTest={dataTest}
      mediumMobile={mediumMobile}
      largeMobile={largeMobile}
      tablet={tablet}
      desktop={desktop}
      largeDesktop={largeDesktop}
    >
      {Array(...Array(divsCount)).map((_, key) => (
        // eslint-disable-next-line
        <div key={key} style={{ background: "rgba(0, 169, 145, 0.2)" }} />
      ))}
    </Grid>
  );
};

Playground.args = {
  inline: false,
  maxWidth: "1440px",
  width: "100%",
  columns: "",
  rows: "repeat(8, 40px)",
  gap: "",
  columnGap: "",
  rowGap: "10px",
  as: "div",
  dataTest: "test",
  divsCount: 8,
  mediumMobile: {
    rowGap: "0",
  },
  largeMobile: {
    columns: "repeat(4, 1fr)",
    rows: "repeat(2, 40px)",
    gap: "20px",
  },
  tablet: {
    columnGap: "40px",
  },
  desktop: {
    columns: "repeat(2, minmax(100px, 1fr))",
    rows: "repeat(4, 40px)",
    gap: "40px",
  },
  largeDesktop: {
    columns: "repeat(8, minmax(10px, 1fr))",
    rows: "40px",
  },
  spaceAfter: SPACINGS_AFTER.NORMAL,
};

Playground.argTypes = {
  spaceAfter: {
    name: "spaceAfter",
    options: Object.values(SPACINGS_AFTER),
    control: {
      type: "select",
    },
  },
};
