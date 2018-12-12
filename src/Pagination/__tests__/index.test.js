// @flow
import * as React from "react";
import { shallow } from "enzyme";

import Pagination from "../index";

const dataTest = "test";
const pageCount = 9;
const selectedPage = 3;
const labels = ["Předchozí", "Následující"];
const onPageChange = jest.fn();

describe("Pagination", () => {
  const component = shallow(
    <Pagination
      dataTest={dataTest}
      pageCount={pageCount}
      selectedPage={selectedPage}
      previousLabel={labels[0]}
      nextLabel={labels[1]}
      onPageChange={onPageChange}
    />,
  );
  it("Stack should have passed dataTest", () => {
    expect(component.find("Stack").prop("dataTest")).toBe(dataTest);
  });
  it("the labels should be rendered", () => {
    component.find("ButtonLink").forEach((node, key) => {
      expect(node.children().text()).toBe(labels[key]);
    });
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
