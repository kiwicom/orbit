import * as React from "react";

import { render, screen } from "../../test-utils";
import { LAYOUT_SETTINGS } from "../consts";
import Layout, { LayoutColumn } from "..";

describe("Layout", () => {
  it("should have expected DOM output", () => {
    render(
      <Layout type="Search" dataTest="container">
        <LayoutColumn as="span" dataTest="column">
          one
        </LayoutColumn>
        <LayoutColumn dataTest="column">two</LayoutColumn>
      </Layout>,
    );
    const columns = screen.getAllByTestId("column");
    expect(columns[0].tagName.toLowerCase()).toBe("span");
    expect(columns[0]).toHaveTextContent("one");
    expect(columns[1].tagName.toLowerCase()).toBe(LAYOUT_SETTINGS.Search.layoutColumns[1].as);
  });
});
