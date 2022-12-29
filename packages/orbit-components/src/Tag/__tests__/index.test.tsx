import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Tag from "..";

describe("Tag", () => {
  const user = userEvent.setup();

  it("should have expected DOM output", async () => {
    const content = "Brno";
    const dataTest = "test";
    const onRemove = jest.fn();
    const onClick = jest.fn();

    render(
      <Tag selected dataTest={dataTest} onRemove={onRemove} onClick={onClick}>
        {content}
      </Tag>,
    );

    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    const tag = screen.getByRole("button", { name: content });
    await user.click(tag);
    expect(onClick).toHaveBeenCalled();
    await user.click(screen.getByRole("button", { name: "close" }));
    expect(onRemove).toHaveBeenCalled();
    expect(screen.getByText(content)).toBeInTheDocument();
  });
});
