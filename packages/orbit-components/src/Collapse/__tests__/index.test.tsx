import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Collapse from "..";

const toggleButtons = [
  [0, "label"],
  [1, "icon button"],
];

describe("Collapse", () => {
  const user = userEvent.setup();

  it("should have expected parts of DOM output", () => {
    render(
      <Collapse dataTest="test" label="Collapse">
        <div>children</div>
      </Collapse>,
    );
    expect(screen.getByTestId("test")).toBeInTheDocument();
    expect(screen.getByText("Collapse")).toBeInTheDocument();
  });

  it("should have customLabel", () => {
    render(
      <Collapse customLabel="customLabel">
        <div>children</div>
      </Collapse>,
    );
    expect(screen.getByText("customLabel")).toBeInTheDocument();
  });

  it.each(toggleButtons)("should trigger click handler when clicking on %s", async buttonIndex => {
    const onClick = jest.fn();
    render(
      <Collapse label="Collapse" onClick={onClick}>
        <div>children</div>
      </Collapse>,
    );
    const toggleButton = screen.getAllByRole("button", { name: "Collapse" })[buttonIndex];
    await act(() => user.click(toggleButton));
    expect(onClick).toHaveBeenCalled();
  });

  describe("uncontrolled", () => {
    it.each(toggleButtons)("should expand/collapse when clicking on %s", async buttonIndex => {
      render(
        <Collapse label="Collapse">
          <article>children</article>
        </Collapse>,
      );
      const toggleButton = screen.getAllByRole("button", { name: "Collapse" })[buttonIndex];
      // with ByRole we can test whether the content is visible because of aria-hidden
      expect(screen.queryByRole("article")).not.toBeInTheDocument();
      await act(() => user.click(toggleButton));
      expect(screen.getByRole("article")).toBeInTheDocument();
      await act(() => user.click(toggleButton));
      expect(screen.queryByRole("article")).not.toBeInTheDocument();
    });
  });

  describe("controlled", () => {
    it("should expand/collapse with prop", () => {
      const { rerender } = render(
        <Collapse label="Collapse" expanded={false}>
          <article>children</article>
        </Collapse>,
      );
      expect(screen.queryByRole("article")).not.toBeInTheDocument();
      rerender(
        <Collapse label="Collapse" expanded>
          <article>children</article>
        </Collapse>,
      );
      expect(screen.getByRole("article")).toBeInTheDocument();
    });
  });
});
