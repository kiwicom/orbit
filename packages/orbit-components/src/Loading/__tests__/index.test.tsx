import * as React from "react";

import { render, screen } from "../../test-utils";
import Loading from "..";
import TYPE_OPTIONS from "../consts";

describe("Loading", () => {
  const { BOX_LOADER, SEARCH_LOADER, INLINE_LOADER } = TYPE_OPTIONS;
  it("should have expected DOM output", () => {
    const text = "Test test";
    const dataTest = "test";
    render(<Loading type={BOX_LOADER} text={text} dataTest={dataTest} />);
    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it("should have children", () => {
    render(<Loading>kek</Loading>);
    expect(screen.getByText("kek")).toBeInTheDocument();
  });

  it.each(Object.values({ BOX_LOADER, SEARCH_LOADER, INLINE_LOADER }))(
    "should have circled icons %s",
    type => {
      render(<Loading type={type} dataTest="kek" />);
      expect(screen.getByTestId("kek").firstChild).toHaveStyle({
        display: "flex",
        justifyContent: "center",
      });
    },
  );

  it("should have spinner icon", () => {
    render(<Loading dataTest="kek" type={TYPE_OPTIONS.PAGE_LOADER} />);
    expect(screen.getByTestId("kek").firstChild).toHaveStyle({ width: "40px", height: "40px" });
    expect(screen.getByTestId("kek").querySelector("svg")).toBeInTheDocument();
  });

  it("should always render element as a div when text is defined", () => {
    render(<Loading asComponent="span" dataTest="kek" text="Loading..." />);
    expect(screen.getByTestId("kek").tagName).toBe("DIV");
  });

  it("should render element as a span", () => {
    render(<Loading asComponent="span" dataTest="kek" />);
    expect(screen.getByTestId("kek").tagName).toBe("SPAN");
  });

  it("should render a title element inside svg", () => {
    render(<Loading title="Content is loading..." />);
    expect(screen.getByText("Content is loading...")).toBeInTheDocument();
  });
});
