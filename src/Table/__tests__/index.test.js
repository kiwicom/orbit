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
});

describe("TableHead", () => {
  const dataTest = "test";
  const component = shallow(
    <TableHead dataTest={dataTest}>
      <TableRow>
        <TableCell>Content</TableCell>
      </TableRow>
    </TableHead>,
  );
  it("should have rendered dataTest", () => {
    expect(component.render().prop("data-test")).toBe(dataTest);
  });
});

describe("TableBody", () => {
  const dataTest = "test";
  const component = shallow(
    <TableBody dataTest={dataTest}>
      <TableRow>
        <TableCell>Content</TableCell>
      </TableRow>
    </TableBody>,
  );
  it("should have rendered dataTest", () => {
    expect(component.render().prop("data-test")).toBe(dataTest);
  });
});

describe("TableRow", () => {
  const dataTest = "test";
  const component = shallow(
    <TableRow dataTest={dataTest}>
      <TableCell>Content</TableCell>
    </TableRow>,
  );
  it("should have rendered dataTest", () => {
    expect(component.render().prop("data-test")).toBe(dataTest);
  });
});

describe("TableCell", () => {
  const dataTest = "test";
  const children = "content";
  const component = shallow(<TableCell dataTest={dataTest}>{children}</TableCell>);
  it("should have rendered dataTest", () => {
    expect(component.render().prop("data-test")).toBe(dataTest);
  });
  it("should have content", () => {
    expect(component.children().text()).toBe(children);
  });
});
