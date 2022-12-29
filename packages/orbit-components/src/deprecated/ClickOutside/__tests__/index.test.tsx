import * as React from "react";
import { render, cleanup, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ClickOutside from "..";

describe("ClickOutside", () => {
  const user = userEvent.setup();

  it("should trigger when clicked outside", async () => {
    const insideRef = React.createRef<HTMLDivElement>();
    const outsideRef = React.createRef<HTMLDivElement>();
    const onClickOutside = jest.fn();

    await act(async () => {
      render(
        <div ref={outsideRef}>
          <ClickOutside onClickOutside={onClickOutside}>
            <div ref={insideRef}>Lorem ipsum</div>
          </ClickOutside>
        </div>,
      );

      await user.click(insideRef.current as HTMLDivElement);
      expect(onClickOutside).not.toHaveBeenCalled();
    });

    await user.click(outsideRef.current as HTMLDivElement);
    expect(onClickOutside).toHaveBeenCalled();
  });

  it("should clean up when unmounted", () => {
    const removeEventListenerSpy = jest.spyOn(document, "removeEventListener");
    render(<ClickOutside onClickOutside={() => {}}>Lorem ipsum</ClickOutside>);
    cleanup();
    expect(removeEventListenerSpy).toHaveBeenCalled();
  });
});
