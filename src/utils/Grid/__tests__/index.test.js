// @flow
import * as React from "react";
import { shallow } from "enzyme";
import styled from "styled-components";

import Grid from "..";

const CustomDiv = styled.div`
  height: 400px;
  background: rgba(0, 169, 145, 0.2);
`;

describe("Grid", () => {
  const inline = true;

  const component = shallow(
    <Grid inline={inline}>
      <CustomDiv />
    </Grid>,
  );

  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
