import React from "react";
import userEvent from "@testing-library/user-event";

import { render, screen } from "../../test-utils";
import Collapse from "..";

const toggleButtons = ["label", "icon button"];

describe("Collapse", () => {
  const user = userEvent.setup();

  it("should have expected parts of DOM output", () => {
    render(
      <Collapse
        dataTest="test"
        label="Collapse"
        expandButtonLabel="Expand"
        collapseButtonLabel="Collapse"
      >
        <div>children</div>
      </Collapse>,
    );
    expect(screen.getByTestId("test")).toBeInTheDocument();
    expect(screen.getByText("Collapse")).toBeInTheDocument();
    expect(screen.getAllByRole("button")).toHaveLength(2);
  });

  it("should not render a div with role button if label is not provided", () => {
    render(
      <Collapse expandButtonLabel="Expand" collapseButtonLabel="Collapse">
        <div>children</div>
      </Collapse>,
    );
    expect(screen.getAllByRole("button")).toHaveLength(1);
  });

  it("should have customLabel", () => {
    render(
      <Collapse customLabel="customLabel" expandButtonLabel="Expand" collapseButtonLabel="Collapse">
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
        <Collapse
          label="Label"
          onClick={onClick}
          expandButtonLabel="Expand"
          collapseButtonLabel="Collapse"
        >
          <div>children</div>
        </Collapse>,
      );

      const toggleButton =
        triggerButton === "label"
          ? screen.getByText("Label")
          : screen.getByRole("button", { name: "Expand" });

      await user.click(toggleButton);
      expect(onClick).toHaveBeenCalled();
    },
  );

  describe("uncontrolled", () => {
    it("should expand/collapse when clicking on button", async () => {
      render(
        <Collapse label="Collapse" expandButtonLabel="Expand" collapseButtonLabel="Collapse">
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
        <Collapse
          label="Collapse"
          expanded={false}
          expandButtonLabel="Expand"
          collapseButtonLabel="Collapse"
        >
          <article>children</article>
        </Collapse>,
      );
      expect(screen.queryByRole("article")).not.toBeInTheDocument();
      rerender(
        <Collapse
          label="Collapse"
          expanded
          expandButtonLabel="Expand"
          collapseButtonLabel="Collapse"
        >
          <article>children</article>
        </Collapse>,
      );
      expect(screen.getByRole("article")).toBeInTheDocument();
    });
  });
});
