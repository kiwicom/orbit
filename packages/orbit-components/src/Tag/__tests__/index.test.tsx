import * as React from "react";
import userEvent from "@testing-library/user-event";

import { render, screen } from "../../test-utils";
import Tag from "..";
import { PlusMinus } from "../../../lib/icons";

describe("Tag", () => {
  const user = userEvent.setup();

  it("should have expected DOM output", async () => {
    const content = "Brno";
    const dataTest = "test";
    const onRemove = jest.fn();
    const onClick = jest.fn();

    render(
      <Tag
        selected
        dataTest={dataTest}
        iconLeft={<PlusMinus dataTest="icon" />}
        labelDismiss="Dismiss"
        onRemove={onRemove}
        onClick={onClick}
      >
        {content}
      </Tag>,
    );

    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    expect(screen.getByTestId("icon")).toBeInTheDocument();
    const tag = screen.getByRole("button", { name: content });
    await user.click(tag);
    expect(onClick).toHaveBeenCalled();
    await user.click(screen.getByRole("button", { name: "Dismiss" }));
    expect(onRemove).toHaveBeenCalled();
    expect(screen.getByText(content)).toBeInTheDocument();
  });
});
