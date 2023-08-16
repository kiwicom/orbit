import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ButtonPrimitive from "..";
import { Airplane, ChevronDown } from "../../../icons";

describe("ButtonPrimitive", () => {
  const user = userEvent.setup();

  it("default", async () => {
    const ref = React.createRef<HTMLButtonElement>();
    const children = "Lorem ipsum dolor sit amet";
    const onClick = jest.fn();
    render(
      <ButtonPrimitive
        ref={ref}
        dataTest="test"
        role="button"
        ariaControls="ID"
        ariaExpanded={false}
        title="title"
        tabIndex="0"
        asComponent="span"
        iconLeft={<Airplane dataTest="airplane" />}
        iconRight={<ChevronDown dataTest="chevron" />}
        onClick={onClick}
      >
        {children}
      </ButtonPrimitive>,
    );
    expect(screen.getByTestId("test")).toBeInTheDocument();
    const button = screen.getByRole("button");
    expect(ref.current?.tagName.toLowerCase()).toBe("span");
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("aria-controls", "ID");
    expect(button).toHaveAttribute("aria-expanded", "false");
    expect(button).toHaveAttribute("aria-label", "title");
    expect(button).toHaveAttribute("tabindex", "0");
    expect(screen.getByTestId("airplane")).toBeInTheDocument();
    expect(screen.getByTestId("chevron")).toBeInTheDocument();
    expect(button).toHaveTextContent(children);
    await user.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  describe("disabled", () => {
    it("default", () => {
      render(<ButtonPrimitive disabled>Lorem ipsum</ButtonPrimitive>);
      expect(screen.getByRole("button")).toBeDisabled();
    });

    it("with href", async () => {
      const onClick = jest.fn();
      render(
        <ButtonPrimitive disabled href="#" onClick={onClick}>
          Lorem ipsum
        </ButtonPrimitive>,
      );
      expect(screen.queryByRole("link")).not.toBeInTheDocument();
      await user.click(screen.getByText("Lorem ipsum"));
      // we don't have to test this behavior with <button> tag because blocking
      // onClick for disabled <button> is default browser behavior
      expect(onClick).not.toHaveBeenCalled();
    });
  });

  it("loading", () => {
    render(<ButtonPrimitive loading>Lorem ipsum</ButtonPrimitive>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(button.querySelector("svg")).toBeInTheDocument();
  });

  it("with href", () => {
    render(
      <ButtonPrimitive href="#" external download="custom-name">
        Lorem ipsum
      </ButtonPrimitive>,
    );
    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", "#");
    expect(link).toHaveAttribute("download", "custom-name");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("should behave as button", async () => {
    const children = "Lorem ipsum";
    const dataTest = "test";
    const onClick = jest.fn();

    render(
      <ButtonPrimitive dataTest={dataTest} onClick={onClick} tabIndex={0} asComponent="div">
        {children}
      </ButtonPrimitive>,
    );

    const button = screen.getByTestId(dataTest);

    await user.tab();
    fireEvent.keyDown(button, { keyCode: 13 });
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(button).toHaveFocus();
  });
});
