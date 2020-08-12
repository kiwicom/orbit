// @flow
import * as React from "react";
import { shallow } from "enzyme";

import { TYPE_AS } from "../consts";
import Table from "../index";
import TableHead from "../TableHead";
import TableRow from "../TableRow";
import TableBody from "../TableBody";
import TableCell from "../TableCell";
import TableFooter from "../TableFooter";

describe("Table", () => {
  const compact = true;
  const children = "Lorem ipsum dolor sit amet";
  const dataTest = "test";
  const type = "primary";
  const striped = true;

  const component = shallow(
    <Table striped={striped} type={type} compact={compact} dataTest={dataTest}>
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
    expect(component.find("Table__StyledTable").prop("type")).toBe(type);
    expect(component.find("Table__StyledTable").prop("striped")).toBe(striped);
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
  const as = TYPE_AS.TH;
  const scope = "row";
  const component = shallow(
    <TableCell as={as} scope={scope} dataTest={dataTest}>
      {children}
    </TableCell>,
  );
  it("should have rendered dataTest", () => {
    expect(component.render().prop("data-test")).toBe(dataTest);
  });
  it("should have rendered scope", () => {
    expect(component.render().prop("scope")).toBe(scope);
  });
  it("should have rendered as", () => {
    expect(component.render().prop("name")).toBe(as);
  });
  it("should have content", () => {
    expect(component.children().text()).toBe(children);
  });
});

describe("TableFooter", () => {
  const dataTest = "test";
  const children = "content";
  const component = shallow(<TableFooter dataTest={dataTest}>{children}</TableFooter>);
  it("should have rendered dataTest", () => {
    expect(component.render().prop("data-test")).toBe(dataTest);
  });
  it("should have content", () => {
    expect(component.children().text()).toBe(children);
  });
});
