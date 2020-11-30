// @flow
import * as React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Pagination from "../index";

jest.mock("../../hooks/useMediaQuery", () => {
  return () => {
    return {
      isTablet: true,
    };
  };
});

describe("Pagination", () => {
  it("should have expected DOM output", () => {
    const dataTest = "test";
    const pageCount = 9;
    const selectedPage = 3;
    const onPageChange = jest.fn();

    render(
      <Pagination
        dataTest={dataTest}
        pageCount={pageCount}
        selectedPage={selectedPage}
        onPageChange={onPageChange}
      />,
    );

    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    userEvent.click(screen.getByRole("button", { name: "Next" }));
    expect(onPageChange).toHaveBeenCalled();
  });

  it("should have next button disabled", () => {
    render(
      <Pagination
        dataTest="test"
        hideLabels={false}
        pageCount={9}
        selectedPage={9}
        onPageChange={() => {}}
      />,
    );
    expect(screen.getByRole("button", { name: "Next" })).toBeDisabled();
  });

  it("should have first button disabled", () => {
    render(
      <Pagination
        dataTest="test"
        hideLabels={false}
        pageCount={6}
        selectedPage={1}
        onPageChange={() => {}}
      />,
    );
    expect(screen.getByRole("button", { name: "Previous" })).toBeDisabled();
  });
});
