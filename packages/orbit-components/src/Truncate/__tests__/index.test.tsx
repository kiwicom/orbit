import * as React from "react";

import { render, screen } from "../../test-utils";
import Truncate from "..";
import Text from "../../Text";
import Heading from "../../Heading";

describe("Truncate", () => {
  it("should truncate children, as well as Text and Heading", () => {
    render(
      <Truncate dataTest="test">
        children
        <Text>text</Text>
        <Heading>heading</Heading>
      </Truncate>,
    );
    expect(screen.getByTestId("test")).toBeInTheDocument();
    expect(screen.getByText("children")).toHaveStyle({ textOverflow: "ellipsis" });
    expect(screen.getByText("text")).toHaveStyle({ textOverflow: "ellipsis" });
    expect(screen.getByText("heading")).toHaveStyle({ textOverflow: "ellipsis" });
  });
});
