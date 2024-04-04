import * as React from "react";
import userEvent, { PointerEventsCheckLevel } from "@testing-library/user-event";

import { render, screen } from "../../test-utils";
import InputFile from "..";
import { SPACINGS_AFTER } from "../../common/consts";

describe("InputFile", () => {
  const user = userEvent.setup({ pointerEventsCheck: PointerEventsCheckLevel.Never });

  it("should have expected DOM output", async () => {
    const label = "Select file";
    const buttonLabel = "Click on me";
    const name = "name";
    const placeholder = "Not file has been selected";
    const dataTest = "test";
    const allowedFileTypes = [".png", ".jpg", ".pdf"].join(",");
    const onChange = jest.fn();
    const onFocus = jest.fn();
    const tabIndex = "-1";
    const spaceAfter = SPACINGS_AFTER.NORMAL;
    const file = new File(["blin"], "blin.png", { type: "image/png" });

    render(
      <InputFile
        name={name}
        label={label}
        multiple
        buttonLabel={buttonLabel}
        placeholder={placeholder}
        dataTest={dataTest}
        allowedFileTypes={allowedFileTypes}
        spaceAfter={spaceAfter}
        tabIndex={tabIndex}
        onChange={onChange}
        onFocus={onFocus}
      />,
    );

    screen.getByRole("button", { name: buttonLabel });
    screen.getByText(placeholder);
    screen.getByText(label);

    const input = screen.getByTestId(dataTest);
    expect(input).toHaveAttribute("name", name);
    expect(input).toHaveAttribute("multiple");
    expect(input).toHaveAttribute("tabindex", "-1");
    expect(input).toHaveAttribute("accept", ".png,.jpg,.pdf");

    await user.upload(input, file);
    expect(onChange).toHaveBeenCalled();
  });

  it("should be disabled", () => {
    const onChange = jest.fn();
    const onFocus = jest.fn();

    render(<InputFile dataTest="test" disabled onChange={onChange} onFocus={onFocus} />);

    const input = screen.getByTestId("test");
    expect(input).toBeDisabled();

    expect(onChange).not.toHaveBeenCalled();
    expect(onFocus).not.toHaveBeenCalled();
  });

  it("should have passed width", () => {
    const width = "100px";
    render(<InputFile width={width} label="label" />);
    expect(document.querySelector("label")).toHaveStyle({ width });
  });

  it("should have filename, onRemoveFile", async () => {
    const onRemoveFile = jest.fn();

    render(<InputFile fileName="bur" onRemoveFile={onRemoveFile} />);

    const button = screen.getByRole("button", { name: "remove" });
    await user.click(button);
    expect(onRemoveFile).toHaveBeenCalled();
  });

  it("should have error", async () => {
    const onFocus = jest.fn();
    const onBlur = jest.fn();

    render(
      <InputFile
        onFocus={onFocus}
        onBlur={onBlur}
        error="chuck norris counted to infinity twice"
      />,
    );

    await user.tab();
    expect(onFocus).toHaveBeenCalled();

    expect(screen.getByText("chuck norris counted to infinity twice")).toBeInTheDocument();

    await user.tab();
    expect(onBlur).toHaveBeenCalled();
  });
});
