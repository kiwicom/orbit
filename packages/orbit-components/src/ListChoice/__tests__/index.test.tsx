import * as React from "react";
import userEvent from "@testing-library/user-event";

import { render, screen } from "../../test-utils";
import ListChoice from "..";
import Accommodation from "../../icons/Accommodation";

describe("ListChoice", () => {
  const user = userEvent.setup();

  const title = "Choice Title";
  const dataTest = "test";
  const onClick = jest.fn();

  it("should have data-test", () => {
    render(<ListChoice title={title} dataTest={dataTest} />);
    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
  });

  it("should render icon", () => {
    render(
      <ListChoice
        title={title}
        icon={<Accommodation ariaLabel="Accommodation" />}
        dataTest={dataTest}
      />,
    );
    const icon = screen.getByLabelText("Accommodation");
    expect(icon.tagName.toLowerCase()).toBe("svg");
  });

  it("should render title and description", () => {
    const description = "Further description";
    render(<ListChoice title={title} description={description} />);
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  it("should render checkbox with checked false", () => {
    render(<ListChoice title={title} selectable />);
    expect(screen.getByRole("checkbox", { checked: false })).toBeInTheDocument();
  });

  it("should NOT execute onClick method", async () => {
    render(<ListChoice title={title} disabled onClick={onClick} dataTest={dataTest} />);
    const component = screen.getByTestId(dataTest);
    await user.click(component);
    expect(onClick).not.toHaveBeenCalled();
  });

  it("should execute onClick method", async () => {
    render(<ListChoice title={title} onClick={onClick} dataTest={dataTest} />);
    const el = screen.getByTestId(dataTest);
    await user.click(el);
    expect(onClick).toHaveBeenCalled();
  });

  it("should have role button when not selectable and without action", () => {
    render(<ListChoice title={title} onClick={onClick} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should NOT have role button when it has action", () => {
    render(<ListChoice dataTest={dataTest} title={title} action="some action" />);
    expect(screen.getByTestId(dataTest)).not.toHaveAttribute("role");
  });

  it("should have role checkbox when selectable", () => {
    render(<ListChoice title={title} selectable selected dataTest={dataTest} />);
    expect(screen.getByTestId(dataTest)).toHaveAttribute("role", "checkbox");
  });

  it("should have focus", async () => {
    render(<ListChoice title={title} selectable dataTest={dataTest} />);
    await user.tab();
    expect(screen.getByTestId(dataTest)).toHaveFocus();
  });

  it("should not have focus when disabled", async () => {
    render(<ListChoice title={title} disabled selectable dataTest={dataTest} />);
    await user.tab();
    expect(screen.getByTestId(dataTest)).not.toHaveFocus();
  });
});
