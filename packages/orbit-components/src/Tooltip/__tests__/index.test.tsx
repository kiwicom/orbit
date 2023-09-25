import * as React from "react";
import userEvent from "@testing-library/user-event";

import { render, screen } from "../../test-utils";
import Tooltip from "..";

jest.mock("../../hooks/useMediaQuery", () => {
  return () => {
    return {
      isLargeMobile: true,
    };
  };
});

describe("Tooltip", () => {
  const user = userEvent.setup();

  it("it should render Tooltip", async () => {
    const content = "Write some message to the user";
    const onShow = jest.fn();

    render(
      <Tooltip content={content} onShow={onShow}>
        kek
      </Tooltip>,
    );

    expect(screen.getByText("kek")).toBeInTheDocument();
    await user.hover(screen.getByText("kek"));
    expect(onShow).toHaveBeenCalled();
  });
});
