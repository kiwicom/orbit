import * as React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import useTransition from "..";

function App(props: { show: boolean; appear: boolean }) {
  const [show, setShow] = React.useState(props.show);
  const transition = useTransition<HTMLDivElement>({ show, appear: props.appear });
  return (
    <>
      <button disabled={!transition.done} type="button" onClick={() => setShow(prev => !prev)}>
        Toggle
      </button>
      {transition.mounted && (
        <div
          ref={transition.ref}
          // @ts-expect-error expected
          css={`
            transition: opacity 0.5s ease-in-out;
            opacity: ${transition.state === "enter" ? 1 : 0};
          `}
        >
          Test
        </div>
      )}
    </>
  );
}

describe("useTransition", () => {
  const user = userEvent.setup();

  it("should provide correct API for transitioning", async () => {
    render(<App show={false} appear={false} />);
    expect(screen.queryByText("Test")).not.toBeInTheDocument();
    await act(() => user.click(screen.getByRole("button")));
    expect(screen.getByText("Test")).toHaveStyle({ opacity: 1 });
    expect(screen.getByRole("button")).toBeDisabled();
    fireEvent.transitionEnd(screen.getByText("Test"));
    expect(screen.getByRole("button")).not.toBeDisabled();
    await act(() => user.click(screen.getByRole("button")));
    expect(screen.getByText("Test")).toHaveStyle({ opacity: 0 });
    fireEvent.transitionEnd(screen.getByText("Test"));
    expect(screen.queryByText("Test")).not.toBeInTheDocument();
  });

  it("should be able to transition in on mount", () => {
    render(<App show appear />);
    expect(screen.getByText("Test")).toHaveStyle({ opacity: 1 });
    expect(screen.getByRole("button")).toBeDisabled();
    fireEvent.transitionEnd(screen.getByText("Test"));
    expect(screen.getByRole("button")).not.toBeDisabled();
  });
});
