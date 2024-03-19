import * as React from "react";

import { screen, render } from "../../test-utils";
import Inline from "..";

describe("#Inline", () => {
  it("should have expected DOM output", () => {
    const dataTest = "test";

    render(
      // eslint-disable-next-line tailwindcss/no-custom-classname
      <Inline align="center" justify="start" dataTest={dataTest} id="ID" className="CLASS">
        <div>kek</div>
        <div>bur</div>
        <div>cheburek</div>
        <div>blin</div>
      </Inline>,
    );
    const el = screen.getByTestId(dataTest);
    expect(el).toBeInTheDocument();
    expect(el).toHaveAttribute("id", "ID");
    expect(el).toHaveAttribute("class", "orbit-inline CLASS");
    const inner = screen.getByTestId(dataTest).firstChild;
    expect(inner).toHaveStyle({ alignItems: "center" });
    expect(inner).toHaveStyle({ justifyContent: "flex-start" });
  });
});
