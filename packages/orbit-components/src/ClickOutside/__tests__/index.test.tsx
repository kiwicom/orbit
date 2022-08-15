import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ClickOutside from "..";

describe("ClickOutside", () => {
  it("should trigger when clicked outside", () => {
    const insideRef = React.createRef<HTMLDivElement>();
    const outsideRef = React.createRef<HTMLDivElement>();
    const onClickOutside = jest.fn();

    render(
      <div ref={outsideRef}>
        <ClickOutside onClickOutside={onClickOutside}>
          <div ref={insideRef}>Lorem ipsum</div>
        </ClickOutside>
      </div>,
    );

    userEvent.click(insideRef.current as HTMLDivElement);
    expect(onClickOutside).not.toHaveBeenCalled();
    userEvent.click(outsideRef.current as HTMLDivElement);
    expect(onClickOutside).toHaveBeenCalled();
  });

  it("should clean up when unmounted", () => {
    const removeEventListenerSpy = jest.spyOn(document, "removeEventListener");
    render(<ClickOutside onClickOutside={() => {}}>Lorem ipsum</ClickOutside>);
    cleanup();
    expect(removeEventListenerSpy).toHaveBeenCalled();
  });
});
