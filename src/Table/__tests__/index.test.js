// @flow
import * as React from "react";
import { shallow } from "enzyme";

import Table from "../index";
import TableHead from "../TableHead";
import TableRow from "../TableRow";
import TableBody from "../TableBody";
import TableCell from "../TableCell";

describe("Table", () => {
  const compact = true;
  const children = "Lorem ipsum dolor sit amet";
  const dataTest = "test";

  const component = shallow(
    <Table compact={compact} dataTest={dataTest}>
      <TableHead>
        <TableRow>
          <TableCell>{children}</TableCell>
          <TableCell>{children}</TableCell>
          <TableCell>{children}</TableCell>
          <TableCell>{children}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>{children}</TableCell>
          <TableCell>{children}</TableCell>
          <TableCell>{children}</TableCell>
          <TableCell>{children}</TableCell>
        </TableRow>
      </TableBody>
    </Table>,
  );
  it("should have props", () => {
    expect(component.find("Table__StyledTable").prop("compact")).toBe(compact);
  });
  it("should have rendered dataTest", () => {
    expect(component.render().prop("data-test")).toBe(dataTest);
  });
  it("should change states display shadows", () => {
    const showShadows = true;
    const showLeft = true;
    const showRight = true;
    const instance = component.instance();
    instance.setState({ showShadows, showLeft, showRight });
    expect(component.state("showShadows")).toEqual(showShadows);
    expect(component.state("showLeft")).toEqual(showLeft);
    expect(component.state("showRight")).toEqual(showRight);
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
