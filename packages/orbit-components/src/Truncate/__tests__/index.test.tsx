import * as React from "react";
import { render, screen } from "@testing-library/react";

import Truncate from "..";
import Text from "../../Text";
import Heading from "../../Heading";

describe("Truncate", () => {
  it("should have expected DOM output", () => {
    const { container } = render(
      <Truncate maxWidth="10rem" dataTest="test">
        children
      </Truncate>,
    );
    expect(screen.getByTestId("test")).toBeInTheDocument();
    expect(screen.getByText("children")).toBeInTheDocument();
    expect(container.firstChild).toHaveStyle({
      minWidth: 0,
      maxWidth: "10rem",
    });
  });

  it("should truncate children, as well as Text and Heading", () => {
    render(
      <Truncate>
        children
        <Text>text</Text>
        <Heading>heading</Heading>
      </Truncate>,
    );
    expect(screen.getByText("children")).toHaveStyle({ textOverflow: "ellipsis" });
    expect(screen.getByText("text")).toHaveStyle({ textOverflow: "ellipsis" });
    expect(screen.getByText("heading")).toHaveStyle({ textOverflow: "ellipsis" });
  });
});
