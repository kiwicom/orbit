import * as React from "react";

import { screen, render } from "../../test-utils";
import LinkList from "..";

describe("LinkList", () => {
  it("should have spacing based on gap", () => {
    render(
      <LinkList dataTest="kek" spacing="XXLarge">
        <div>link 1</div>
        <div>link 2</div>
        <div>link 3</div>
      </LinkList>,
    );

    expect(screen.getByTestId("kek")).toHaveStyle({
      gap: "40px",
    });
  });
});
