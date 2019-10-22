// @flow
import * as React from "react";
import { mount } from "enzyme";

import theme from "../../../defaultTheme";
import { QUERIES } from "../../mediaQuery/consts";
import { getBreakpointWidth } from "../../mediaQuery/index";

import Grid from "..";

describe("Grid with basic props", () => {
  const inline = true;
  const maxWidth = "1440px";
  const columns = "repeat(2, 1fr)";
  const columnGap = "10px";
  const rows = "repeat(2, minmax(30px, 100px))";
  const rowGap = "20px";
  const dataTest = "test";
  const component = mount(
    <Grid
      inline={inline}
      maxWidth={maxWidth}
      columns={columns}
      columnGap={columnGap}
      rows={rows}
      rowGap={rowGap}
      dataTest={dataTest}
    >
      <div />
      <div />
      <div />
      <div />
    </Grid>,
  );
  const grid = component.find("Grid__StyledGrid");
  it("should render props", () => {
    expect(grid.render().prop("data-test")).toBe(dataTest);
  });
  it("should contain children", () => {
    expect(grid.find("div").exists()).toBe(true);
  });
  it("should contain styles", () => {
    /*
      We can not test display: inline-grid
      as toHaveStyleRule returns as the last value for display property
     */
    expect(grid).toHaveStyleRule("display", "-ms-inline-grid");
    expect(grid).toHaveStyleRule("max-width", "1440px");
    expect(grid).toHaveStyleRule("grid-template-columns", "repeat(2,1fr)");
    expect(grid).toHaveStyleRule("grid-template-rows", "repeat(2,minmax(30px,100px))");
    expect(grid).toHaveStyleRule("grid-row-gap", "20px");
    expect(grid).toHaveStyleRule("grid-column-gap", "10px");
    expect(grid).toHaveStyleRule("-ms-grid-columns", "1fr 10px 1fr");
    expect(grid).toHaveStyleRule("-ms-grid-rows", "minmax(30px,100px) 20px minmax(30px,100px)");
  });
  it("should contain styles for children", () => {
    expect(grid).toHaveStyleRule("-ms-grid-column", "1", {
      modifier: "& > *:nth-child(1)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-row", "1", {
      modifier: "& > *:nth-child(1)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-column", "3", {
      modifier: "& > *:nth-child(2)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-row", "1", {
      modifier: "& > *:nth-child(2)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-column", "1", {
      modifier: "& > *:nth-child(3)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-row", "3", {
      modifier: "& > *:nth-child(3)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-column", "3", {
      modifier: "& > *:nth-child(4)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-row", "3", {
      modifier: "& > *:nth-child(4)",
    });
  });
});

describe("Grid with mediaQueries", () => {
  const inline = false;
  const maxWidth = "300px";
  const columns = "1fr";
  const rows = "repeat(4, minmax(30px, 1fr))";
  const rowGap = "40px";
  const mediumMobile = {
    rowGap: "0",
    maxWidth: "600px",
  };
  const largeMobile = {
    columns: "1fr 1fr",
    rows: "1fr 1fr",
    columnGap: "20px",
  };
  const tablet = {
    gap: "20px",
    columnGap: "0",
  };
  const desktop = {
    columns: "repeat(4, minmax(100px, 1fr))",
    rows: "1fr",
  };
  const largeDesktop = {
    inline: true,
    gap: "40px",
    columns: "1fr 2fr",
    rows: "1fr 2fr",
  };
  const component = mount(
    <Grid
      inline={inline}
      maxWidth={maxWidth}
      columns={columns}
      rows={rows}
      rowGap={rowGap}
      mediumMobile={mediumMobile}
      largeMobile={largeMobile}
      tablet={tablet}
      desktop={desktop}
      largeDesktop={largeDesktop}
    >
      <div />
      <div />
      <div />
      <div />
    </Grid>,
  );
  const grid = component.find("Grid__StyledGrid");
  it("should contain basic styles", () => {
    expect(grid).toHaveStyleRule("display", "-ms-grid");
    expect(grid).toHaveStyleRule("max-width", "300px");
    expect(grid).toHaveStyleRule("grid-template-columns", "1fr");
    expect(grid).toHaveStyleRule("grid-template-rows", "repeat(4,minmax(30px,1fr))");
    expect(grid).toHaveStyleRule("grid-row-gap", "40px");
    expect(grid).toHaveStyleRule("-ms-grid-columns", "1fr");
    expect(grid).toHaveStyleRule(
      "-ms-grid-rows",
      "minmax(30px,1fr) 40px minmax(30px,1fr) 40px minmax(30px,1fr) 40px minmax(30px,1fr)",
    );
  });
  it("should contain basic styles for children", () => {
    expect(grid).toHaveStyleRule("-ms-grid-column", "1", {
      modifier: "& > *:nth-child(1)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-row", "1", {
      modifier: "& > *:nth-child(1)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-column", "1", {
      modifier: "& > *:nth-child(2)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-row", "3", {
      modifier: "& > *:nth-child(2)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-column", "1", {
      modifier: "& > *:nth-child(3)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-row", "5", {
      modifier: "& > *:nth-child(3)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-column", "1", {
      modifier: "& > *:nth-child(4)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-row", "7", {
      modifier: "& > *:nth-child(4)",
    });
  });
  it("should contain mediumMobile styles", () => {
    expect(grid).toHaveStyleRule("max-width", "600px", {
      media: getBreakpointWidth(QUERIES.MEDIUMMOBILE, theme),
    });
    expect(grid).toHaveStyleRule("-ms-grid-columns", "1fr", {
      media: getBreakpointWidth(QUERIES.MEDIUMMOBILE, theme),
    });
    expect(grid).toHaveStyleRule(
      "-ms-grid-rows",
      "minmax(30px,1fr) minmax(30px,1fr) minmax(30px,1fr) minmax(30px,1fr)",
      {
        media: getBreakpointWidth(QUERIES.MEDIUMMOBILE, theme),
      },
    );
  });
  it("should contain mediumMobile styles for children", () => {
    expect(grid).toHaveStyleRule("-ms-grid-column", "1", {
      media: getBreakpointWidth(QUERIES.MEDIUMMOBILE, theme),
      modifier: "& > *:nth-child(1)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-row", "1", {
      media: getBreakpointWidth(QUERIES.MEDIUMMOBILE, theme),
      modifier: "& > *:nth-child(1)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-column", "1", {
      media: getBreakpointWidth(QUERIES.MEDIUMMOBILE, theme),
      modifier: "& > *:nth-child(2)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-row", "2", {
      media: getBreakpointWidth(QUERIES.MEDIUMMOBILE, theme),
      modifier: "& > *:nth-child(2)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-column", "1", {
      media: getBreakpointWidth(QUERIES.MEDIUMMOBILE, theme),
      modifier: "& > *:nth-child(3)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-row", "3", {
      media: getBreakpointWidth(QUERIES.MEDIUMMOBILE, theme),
      modifier: "& > *:nth-child(3)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-column", "1", {
      media: getBreakpointWidth(QUERIES.MEDIUMMOBILE, theme),
      modifier: "& > *:nth-child(4)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-row", "4", {
      media: getBreakpointWidth(QUERIES.MEDIUMMOBILE, theme),
      modifier: "& > *:nth-child(4)",
    });
  });
  it("should contain largeMobile styles", () => {
    expect(grid).toHaveStyleRule("-ms-grid-columns", "1fr 20px 1fr", {
      media: getBreakpointWidth(QUERIES.LARGEMOBILE, theme),
    });
    expect(grid).toHaveStyleRule("-ms-grid-rows", "1fr 1fr", {
      media: getBreakpointWidth(QUERIES.LARGEMOBILE, theme),
    });
  });
  it("should contain largeMobile styles for children", () => {
    expect(grid).toHaveStyleRule("-ms-grid-column", "1", {
      media: getBreakpointWidth(QUERIES.LARGEMOBILE, theme),
      modifier: "& > *:nth-child(1)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-row", "1", {
      media: getBreakpointWidth(QUERIES.LARGEMOBILE, theme),
      modifier: "& > *:nth-child(1)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-column", "3", {
      media: getBreakpointWidth(QUERIES.LARGEMOBILE, theme),
      modifier: "& > *:nth-child(2)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-row", "1", {
      media: getBreakpointWidth(QUERIES.LARGEMOBILE, theme),
      modifier: "& > *:nth-child(2)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-column", "1", {
      media: getBreakpointWidth(QUERIES.LARGEMOBILE, theme),
      modifier: "& > *:nth-child(3)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-row", "2", {
      media: getBreakpointWidth(QUERIES.LARGEMOBILE, theme),
      modifier: "& > *:nth-child(3)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-column", "3", {
      media: getBreakpointWidth(QUERIES.LARGEMOBILE, theme),
      modifier: "& > *:nth-child(4)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-row", "2", {
      media: getBreakpointWidth(QUERIES.LARGEMOBILE, theme),
      modifier: "& > *:nth-child(4)",
    });
  });
  it("should contain tablet styles", () => {
    expect(grid).toHaveStyleRule("-ms-grid-columns", "1fr 20px 1fr", {
      media: getBreakpointWidth(QUERIES.TABLET, theme),
    });
    expect(grid).toHaveStyleRule("-ms-grid-rows", "1fr 20px 1fr", {
      media: getBreakpointWidth(QUERIES.TABLET, theme),
    });
  });
  it("should contain tablet styles for children", () => {
    expect(grid).toHaveStyleRule("-ms-grid-column", "1", {
      media: getBreakpointWidth(QUERIES.TABLET, theme),
      modifier: "& > *:nth-child(1)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-row", "1", {
      media: getBreakpointWidth(QUERIES.TABLET, theme),
      modifier: "& > *:nth-child(1)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-column", "3", {
      media: getBreakpointWidth(QUERIES.TABLET, theme),
      modifier: "& > *:nth-child(2)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-row", "1", {
      media: getBreakpointWidth(QUERIES.TABLET, theme),
      modifier: "& > *:nth-child(2)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-column", "1", {
      media: getBreakpointWidth(QUERIES.TABLET, theme),
      modifier: "& > *:nth-child(3)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-row", "3", {
      media: getBreakpointWidth(QUERIES.TABLET, theme),
      modifier: "& > *:nth-child(3)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-column", "3", {
      media: getBreakpointWidth(QUERIES.TABLET, theme),
      modifier: "& > *:nth-child(4)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-row", "3", {
      media: getBreakpointWidth(QUERIES.TABLET, theme),
      modifier: "& > *:nth-child(4)",
    });
  });
  it("should contain desktop styles", () => {
    expect(grid).toHaveStyleRule(
      "-ms-grid-columns",
      "minmax(100px,1fr) 20px minmax(100px,1fr) 20px minmax(100px,1fr) 20px minmax(100px,1fr)",
      {
        media: getBreakpointWidth(QUERIES.DESKTOP, theme),
      },
    );
    expect(grid).toHaveStyleRule("-ms-grid-rows", "1fr", {
      media: getBreakpointWidth(QUERIES.DESKTOP, theme),
    });
  });
  it("should contain desktop styles for children", () => {
    expect(grid).toHaveStyleRule("-ms-grid-column", "1", {
      media: getBreakpointWidth(QUERIES.DESKTOP, theme),
      modifier: "& > *:nth-child(1)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-row", "1", {
      media: getBreakpointWidth(QUERIES.DESKTOP, theme),
      modifier: "& > *:nth-child(1)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-column", "3", {
      media: getBreakpointWidth(QUERIES.DESKTOP, theme),
      modifier: "& > *:nth-child(2)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-row", "1", {
      media: getBreakpointWidth(QUERIES.DESKTOP, theme),
      modifier: "& > *:nth-child(2)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-column", "5", {
      media: getBreakpointWidth(QUERIES.DESKTOP, theme),
      modifier: "& > *:nth-child(3)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-row", "1", {
      media: getBreakpointWidth(QUERIES.DESKTOP, theme),
      modifier: "& > *:nth-child(3)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-column", "7", {
      media: getBreakpointWidth(QUERIES.DESKTOP, theme),
      modifier: "& > *:nth-child(4)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-row", "1", {
      media: getBreakpointWidth(QUERIES.DESKTOP, theme),
      modifier: "& > *:nth-child(4)",
    });
  });
  it("should contain largeDesktop styles", () => {
    expect(grid).toHaveStyleRule("display", "-ms-inline-grid", {
      media: getBreakpointWidth(QUERIES.LARGEDESKTOP, theme),
    });
    expect(grid).toHaveStyleRule("-ms-grid-columns", "1fr 40px 2fr", {
      media: getBreakpointWidth(QUERIES.LARGEDESKTOP, theme),
    });
    expect(grid).toHaveStyleRule("-ms-grid-rows", "1fr 40px 2fr", {
      media: getBreakpointWidth(QUERIES.LARGEDESKTOP, theme),
    });
  });
  it("should contain largeDesktop styles for children", () => {
    expect(grid).toHaveStyleRule("-ms-grid-column", "1", {
      media: getBreakpointWidth(QUERIES.LARGEDESKTOP, theme),
      modifier: "& > *:nth-child(1)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-row", "1", {
      media: getBreakpointWidth(QUERIES.LARGEDESKTOP, theme),
      modifier: "& > *:nth-child(1)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-column", "3", {
      media: getBreakpointWidth(QUERIES.LARGEDESKTOP, theme),
      modifier: "& > *:nth-child(2)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-row", "1", {
      media: getBreakpointWidth(QUERIES.LARGEDESKTOP, theme),
      modifier: "& > *:nth-child(2)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-column", "1", {
      media: getBreakpointWidth(QUERIES.LARGEDESKTOP, theme),
      modifier: "& > *:nth-child(3)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-row", "3", {
      media: getBreakpointWidth(QUERIES.LARGEDESKTOP, theme),
      modifier: "& > *:nth-child(3)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-column", "3", {
      media: getBreakpointWidth(QUERIES.LARGEDESKTOP, theme),
      modifier: "& > *:nth-child(4)",
    });
    expect(grid).toHaveStyleRule("-ms-grid-row", "3", {
      media: getBreakpointWidth(QUERIES.LARGEDESKTOP, theme),
      modifier: "& > *:nth-child(4)",
    });
  });
});
