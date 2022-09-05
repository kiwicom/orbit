import * as React from "react";
import { render } from "@testing-library/react";

import Grid from "..";

describe("Grid", () => {
  it("should match snapshot", () => {
    const dataTest = "test";
    const maxWidth = "1440px";
    const width = "100%";
    const columns = "repeat(2, 1fr)";
    const columnGap = "10px";
    const rows = "repeat(2, minmax(30px, 100px))";
    const rowGap = "20px";

    const { container } = render(
      <Grid
        as="div"
        dataTest={dataTest}
        inline
        maxWidth={maxWidth}
        width={width}
        columns={columns}
        columnGap={columnGap}
        rows={rows}
        rowGap={rowGap}
        mediumMobile={{ maxWidth: "600px" }}
        largeMobile={{ maxWidth: "700px" }}
        tablet={{ maxWidth: "800px" }}
        desktop={{ maxWidth: "900px" }}
        largeDesktop={{ maxWidth: "1000px" }}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </Grid>,
    );

    expect(container).toMatchSnapshot();
  });
});
