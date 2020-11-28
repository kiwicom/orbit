// @flow
import * as React from "react";
import { shallow } from "enzyme";

import Pagination from "../index";

const dataTest = "test";
const pageCount = 9;
const selectedPage = 3;
const onPageChange = jest.fn();

// temporary added to pass CI, will be resolved by another PR with
// rewriting to testing-lib
jest.mock("../../hooks/useMediaQuery", () => {
  return () => {
    return {
      isTablet: false,
    };
  };
});

describe("Pagination", () => {
  const component = shallow(
    <Pagination
      dataTest={dataTest}
      pageCount={pageCount}
      selectedPage={selectedPage}
      onPageChange={onPageChange}
    />,
  );
  it("Stack should have passed dataTest", () => {
    expect(component.prop("dataTest")).toBe(dataTest);
  });
});
