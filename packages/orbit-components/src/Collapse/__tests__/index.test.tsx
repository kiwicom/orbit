import React from "react";
import userEvent from "@testing-library/user-event";

import { render, screen } from "../../test-utils";
import Collapse from "..";

const toggleButtons = ["label", "icon button"];

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

  it.each(toggleButtons)(
    "should trigger click handler when clicking on %s",
    async triggerButton => {
      const onClick = jest.fn();
      render(
        <Collapse label="Collapse" onClick={onClick}>
          <div>children</div>
        </Collapse>,
      );

      const toggleButton =
        triggerButton === "label"
          ? screen.getByText("Collapse")
          : screen.getByRole("button", { expanded: false });

      await user.click(toggleButton);
      expect(onClick).toHaveBeenCalled();
    },
  );

  describe("uncontrolled", () => {
    it("should expand/collapse when clicking on button", async () => {
      render(
        <Collapse label="Collapse">
          <article>children</article>
        </Collapse>,
      );

      await screen.getAllByRole("button").forEach(async toggleButton => {
        expect(screen.queryByRole("article")).not.toBeInTheDocument();
        await user.click(toggleButton);
        expect(screen.getByRole("article")).toBeInTheDocument();
        await user.click(toggleButton);
        expect(screen.queryByRole("article")).not.toBeInTheDocument();
      });
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
