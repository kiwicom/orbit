import * as React from "react";
import userEvent from "@testing-library/user-event";

import { fireEvent, render, screen } from "../../../test-utils";
import Tooltip from "..";

describe("Tooltip", () => {
  const user = userEvent.setup();

  it("should render on hover", async () => {
    const content = "Write some message to the user";
    render(
      <Tooltip content={content}>
        <p>Some text</p>
      </Tooltip>,
    );

    expect(screen.queryByText(content)).not.toBeInTheDocument();
    await user.hover(screen.getByText("Some text"));
    expect(screen.queryByText(content)).toBeVisible();
  });

  it("should close on ESC click", async () => {
    const content = "Write some message to the user";
    render(
      <Tooltip content={content}>
        <p>Some text</p>
      </Tooltip>,
    );

    await user.hover(screen.getByText("Some text"));
    expect(screen.queryByText(content)).toBeVisible();
    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByText(content)).not.toBeVisible();
  });
});
