// @flow
import * as React from "react";
import { shallow } from "enzyme";
import styled from "styled-components";

import Grid from "..";

const CustomDiv = styled.div`
  height: 400px;
  background: rgba(0, 169, 145, 0.2);
`;

describe("Grid with basic props", () => {
  const inline = true;
  const maxWidth = "1440px";
  const columns = "repeat(8, 1fr)";
  const rows = "repeat(2, 30px)";
  const rowGap = "20px";
  const dataTest = "test";
  const component = shallow(
    <Grid
      inline={inline}
      maxWidth={maxWidth}
      columns={columns}
      rows={rows}
      rowGap={rowGap}
      dataTest={dataTest}
    >
      <CustomDiv />
    </Grid>,
  );

  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
