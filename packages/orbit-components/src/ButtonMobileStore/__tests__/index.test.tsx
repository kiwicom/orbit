import * as React from "react";
import userEvent from "@testing-library/user-event";

import { render, screen } from "../../test-utils";
import ButtonMobileStore from "..";
import { TYPE_OPTIONS } from "../consts";

describe("ButtonMobileStore", () => {
  const user = userEvent.setup();

  it("default", async () => {
    const onClick = jest.fn();
    render(
      <ButtonMobileStore onClick={onClick} dataTest="test" type={TYPE_OPTIONS.APPSTORE} href="#" />,
    );
    expect(screen.getByTestId("test")).toBeInTheDocument();
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "#");
    expect(link).toHaveAttribute("rel", expect.stringContaining("noopener"));
    expect(link).toHaveAttribute("target", "_blank");
    await user.click(link);
    expect(onClick).toHaveBeenCalled();
  });
});
