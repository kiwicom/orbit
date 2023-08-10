import * as React from "react";
import userEvent from "@testing-library/user-event";

import { render, screen, fireEvent } from "../../test-utils";
import NavigationBar from "..";

describe("NavigationBar", () => {
  const user = userEvent.setup();
  const children = "Content";

  it("should have expected DOM output", async () => {
    const onMenuOpen = jest.fn();
    const openTitle = "open title";
    const dataTest = "test";
    const id = "id";

    render(
      <NavigationBar id={id} onMenuOpen={onMenuOpen} dataTest={dataTest} openTitle={openTitle}>
        {children}
      </NavigationBar>,
    );

    const button = screen.getByRole("button");
    const nav = screen.getByTestId(dataTest);

    expect(nav).toBeInTheDocument();
    expect(nav).toHaveAttribute("id", id);
    expect(screen.getByText(children)).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(screen.getByLabelText(openTitle)).toBeInTheDocument();
    await user.click(button);
    expect(onMenuOpen).toHaveBeenCalled();
  });

  it("should not render hamburger button if onMenuOpen is not provided", () => {
    render(<NavigationBar>{children}</NavigationBar>);

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("should call onHide and onShow", () => {
    const onHide = jest.fn();
    const onShow = jest.fn();

    render(
      <NavigationBar onHide={onHide} onShow={onShow}>
        kek
      </NavigationBar>,
    );

    fireEvent.scroll(window, { target: { scrollY: 120 } });
    expect(onHide).toHaveBeenCalled();

    fireEvent.scroll(window, { target: { scrollY: 1 } });
    expect(onShow).toHaveBeenCalled();
  });
});
