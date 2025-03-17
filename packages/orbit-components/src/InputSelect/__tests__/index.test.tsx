import React from "react";
import userEvent from "@testing-library/user-event";

import { render, screen, fireEvent } from "../../test-utils";
import InputSelect from "..";

const jetLiOption = {
  title: "Jet Li",
  value: "Li",
  description: "Jet Li is a Chinese actor.",
  group: "Asian",
};

const options = [
  {
    title: "Chuck Norris",
    value: "Norris",
    description:
      "Chuck Norris is an American martial artist, actor, film producer and screenwriter.",
  },
  {
    title: "Bruce Lee",
    value: "Lee",
    description: "Bruce Lee was a Hong Kong American martial artist.",
    group: "American",
  },
  {
    title: "Jackie Chan",
    value: "Chan",
    description: "Jackie Chan is a Hong Kongese actor.",
    group: "Asian",
  },
  {
    ...jetLiOption,
  },
];

describe("InputSelect", () => {
  const user = userEvent.setup();

  const label = "Choose your actor";
  const name = "actors";
  const id = "kek";
  const dataTest = "TEST";
  const emptyMessage = "D'oh! No results found.";

  it("should render expected DOM output", async () => {
    const onChange = jest.fn();
    const onOptionSelect = jest.fn();
    const onKeyDown = jest.fn();
    const onClose = jest.fn();

    render(
      <InputSelect
        id={id}
        dataTest={dataTest}
        label={label}
        options={options}
        name={name}
        emptyState={emptyMessage}
        onKeyDown={onKeyDown}
        onOptionSelect={onOptionSelect}
        onChange={onChange}
        onClose={onClose}
      />,
    );

    await user.tab();

    const input = screen.getByRole("combobox");
    const dropdown = screen.getByRole("listbox");

    // after focus dropdown should have all options grouped and then show all of them
    const totalOptions = 2 + 1 + 4; // (2 asian, 1 american, 4 all)
    expect(screen.getAllByRole("option")).toHaveLength(totalOptions);
    expect(screen.queryByText("All options")).toBeInTheDocument();
    expect(screen.queryByText("Other options")).not.toBeInTheDocument();

    // should have expected aria attributes
    expect(input).toHaveAttribute("aria-expanded", "true");
    expect(input).toHaveAttribute("aria-autocomplete", "list");
    expect(input).toHaveAttribute("aria-haspopup", "true");
    expect(input).toHaveAttribute("aria-controls", dropdown.id);

    expect(input).toBeInTheDocument();
    expect(dropdown).toBeInTheDocument();
    expect(screen.getByRole("dialog", { name: label })).toBeInTheDocument();
    expect(input).toHaveAttribute("name", name);
    expect(input).toHaveAttribute("id", id);
    expect(input).toHaveAttribute("data-test", dataTest);

    // clear current value
    await user.clear(input);

    // test empty message
    await user.type(input, "Arnold");
    expect(screen.getByText(emptyMessage)).toBeInTheDocument();

    // test dropdown result filtering
    await user.clear(input);
    await user.type(input, "J");
    expect(onChange).toHaveBeenCalled();

    expect(screen.getAllByRole("option")).toHaveLength(2);
    expect(screen.getByText("Jet Li")).toBeInTheDocument();
    expect(screen.getByText("Jackie Chan")).toBeInTheDocument();

    // test navigating by arrow keys
    fireEvent.keyDown(input, { key: "ArrowDown" });

    expect(onKeyDown).toHaveBeenCalled();

    // should select by click
    await user.click(screen.getByText("Jet Li"));

    expect(onOptionSelect).toHaveBeenCalledWith(jetLiOption);

    // test selecting by enter and space
    fireEvent.keyDown(input, { key: "Enter" });
    expect(onOptionSelect).toHaveBeenCalledWith(jetLiOption);

    fireEvent.keyDown(input, { key: "Space" });
    expect(onOptionSelect).toHaveBeenCalledWith(jetLiOption);

    // test closing dropdown by ESC
    fireEvent.keyDown(input, { key: "Escape" });
    expect(dropdown).not.toBeInTheDocument();
    expect(onClose).toHaveBeenCalledWith(jetLiOption);

    // test clear of the input by button and reset of filtered options
    await user.tab();
    await user.click(screen.getByLabelText("Clear"));
    expect(onOptionSelect).toBeCalledWith(null);
    expect(screen.getByRole("textbox")).toHaveValue("");
    expect(screen.getAllByRole("option")).toHaveLength(totalOptions);
  });

  it("can have a default selected value", async () => {
    const onClose = jest.fn();
    const onOptionSelect = jest.fn();

    render(
      <InputSelect
        id={id}
        label={label}
        options={options}
        name={name}
        defaultSelected={jetLiOption}
        onClose={onClose}
        onOptionSelect={onOptionSelect}
      />,
    );

    await user.tab();

    const input = screen.getByRole("combobox");

    expect(input).toHaveValue(jetLiOption.title);

    // Simulate closing to assert the selected value is the same
    fireEvent.keyDown(input, { key: "Escape" });
    expect(onClose).toHaveBeenCalledWith(jetLiOption);

    // Simulate changing the input without selecting anything to assert the previous selected option remains selected
    await user.type(input, "Random unexisting option");
    fireEvent.keyDown(input, { key: "Escape" });
    expect(onClose).toHaveBeenLastCalledWith(jetLiOption);
    expect(onOptionSelect).not.toHaveBeenCalled();
    expect(screen.getByRole("textbox")).toHaveValue(jetLiOption.title);
  });

  it("clears the selected value when the input is cleared", async () => {
    const onClose = jest.fn();
    const onOptionSelect = jest.fn();

    render(
      <InputSelect
        id={id}
        label={label}
        options={options}
        name={name}
        defaultSelected={jetLiOption}
        onClose={onClose}
        onOptionSelect={onOptionSelect}
      />,
    );

    await user.tab();

    const input = screen.getByRole("combobox");

    await user.clear(input);
    fireEvent.keyDown(input, { key: "Escape" });
    expect(onClose).toHaveBeenCalledWith(null);
    expect(onOptionSelect).toHaveBeenCalledWith(null);
  });

  it("can have prevSelected defined", async () => {
    const prevSelectedLabel = "Formerly selected";

    render(
      <InputSelect
        id={id}
        label={label}
        options={options}
        name={name}
        prevSelected={jetLiOption}
        prevSelectedLabel={prevSelectedLabel}
      />,
    );

    await user.tab();

    expect(screen.queryByText("Previously selected")).not.toBeInTheDocument();
    expect(screen.queryByText(prevSelectedLabel)).toBeInTheDocument();
    expect(screen.getAllByRole("option")).toHaveLength(1 + 2 + 1 + 4); // (1 previously selected, 2 asian, 1 american, 4 all)
  });

  it("can be readOnly", async () => {
    const onFocus = jest.fn();

    render(
      <InputSelect
        id={id}
        label={label}
        options={options}
        name={name}
        defaultSelected={jetLiOption}
        onFocus={onFocus}
        readOnly
      />,
    );

    const input = screen.getByRole("textbox");
    const dropdown = screen.queryByRole("listbox");

    expect(input).toHaveValue(jetLiOption.title);

    await user.tab();
    expect(onFocus).toHaveBeenCalledTimes(1);
    expect(dropdown).not.toBeInTheDocument();

    // Prevent component to not be in focus state
    input.blur();

    // Check if dropdown is not shown on a click
    await user.click(input);
    expect(onFocus).toHaveBeenCalledTimes(2);
    expect(dropdown).not.toBeInTheDocument();

    // Check if dropdown is not shown on a focus
    fireEvent.focus(input);
    expect(onFocus).toHaveBeenCalledTimes(3);
    expect(dropdown).not.toBeInTheDocument();

    // Assert that input field still includes the same value
    await user.type(input, "Arnold");
    expect(onFocus).toHaveBeenCalledTimes(3);
    expect(input).toHaveValue(jetLiOption.title);
  });

  describe("when showAll is false", () => {
    it("should not render repeated options", async () => {
      const showAllLabel = "Those without a group";
      render(<InputSelect options={options} showAll={false} showAllLabel={showAllLabel} />);
      await user.tab();

      // after focus dropdown should have all options grouped and then show only the ones without a group
      expect(screen.getAllByRole("option")).toHaveLength(2 + 1 + 1); // (2 asian, 1 american, 1 ungrouped)
      expect(screen.queryByText("All options")).not.toBeInTheDocument();
      expect(screen.queryByText("Other options")).not.toBeInTheDocument();
      expect(screen.queryByText(showAllLabel)).toBeInTheDocument();
    });
  });
});
