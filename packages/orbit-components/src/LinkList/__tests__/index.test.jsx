// @flow
import * as React from "react";
import { screen, render } from "@testing-library/react";

import LinkList from "..";

describe("#LinkList", () => {
  it("should have expected dom output", () => {
    render(
      <LinkList legacy dataTest="kek" spacing="XXLarge">
        <div>link 1</div>
        <div>link 2</div>
        <div>link 3</div>
      </LinkList>,
    );

    expect(screen.getByText("link 1")).toBeInTheDocument();
    expect(screen.getByTestId("kek")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")[0]).toHaveStyle({
      marginBottom: "40px",
    });
    expect(screen.getAllByRole("listitem")[2]).toHaveStyle({
      marginBottom: "0px",
    });
  });

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
