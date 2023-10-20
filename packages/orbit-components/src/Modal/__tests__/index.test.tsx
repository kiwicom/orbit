import * as React from "react";
import userEvent from "@testing-library/user-event";

import { render, screen, act, fireEvent } from "../../test-utils";
import Modal from "..";
import { CLOSE_BUTTON_DATA_TEST } from "../consts";
import ModalHeader from "../ModalHeader";
import ModalSection from "../ModalSection";
import ModalFooter from "../ModalFooter";
import Illustration from "../../Illustration";
import useMediaQuery from "../../hooks/useMediaQuery";

jest.mock("../../hooks/useMediaQuery", () => {
  return jest.fn(() => ({ isLargeMobile: true }));
});

const mockUseMediaQuery = useMediaQuery;

describe("Modal", () => {
  it("should have expected DOM output", () => {
    render(
      <Modal dataTest="container">
        <ModalHeader
          dataTest="header"
          title="modal title"
          description="modal description"
          illustration={<Illustration name="Accommodation" dataTest="illustration" />}
        >
          header content
        </ModalHeader>
        <ModalSection dataTest="section">section content</ModalSection>
        <ModalFooter dataTest="footer">
          <p>footer content</p>
        </ModalFooter>
      </Modal>,
    );

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByTestId("container")).toBeInTheDocument();
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("section")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
    expect(screen.getByTestId("illustration")).toBeInTheDocument();
    expect(screen.getByLabelText("modal title")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "modal title" })).toBeInTheDocument();
    expect(screen.getByText("modal description")).toBeInTheDocument();
    expect(screen.getByText("header content")).toBeInTheDocument();
    expect(screen.getByText("section content")).toBeInTheDocument();
    expect(screen.getByText("footer content")).toBeInTheDocument();
  });

  it("should be able to focus content", async () => {
    const user = userEvent.setup();
    jest.useFakeTimers();

    render(
      <Modal>
        <input />
      </Modal>,
    );

    act(() => {
      jest.runOnlyPendingTimers();
    });
    expect(screen.getByRole("dialog")).toHaveFocus();
    jest.useRealTimers();

    await user.tab();
    expect(screen.getByRole("textbox")).toHaveFocus();
  });

  it("should expose ref scrolling API", () => {
    const ref = React.createRef<React.ElementRef<typeof Modal>>();
    render(
      <Modal ref={ref} dataTest="test">
        content
      </Modal>,
    );

    ref.current?.setScrollPosition(20);
    const scrollPosition = ref.current?.getScrollPosition();
    expect(scrollPosition).toBe(20);
  });

  it("should fire onScroll", () => {
    const onScroll = jest.fn();

    render(
      <Modal onScroll={onScroll}>
        <ModalSection>
          <div style={{ height: 500 }}>kek</div>
        </ModalSection>
      </Modal>,
    );

    fireEvent.scroll(screen.getByRole("dialog"), { target: { scrollTop: 300 } });

    expect(onScroll).toHaveBeenCalled();
  });

  it("should switch scrolling container based on the breakpoint", () => {
    const modalRef = React.createRef<React.ElementRef<typeof Modal>>();
    const scrollingElement = React.createRef<HTMLElement>() as React.MutableRefObject<HTMLElement>;
    const scrollingElementRef = (node: HTMLElement) => {
      scrollingElement.current = node;
    };
    // @ts-expect-error jest
    mockUseMediaQuery.mockImplementation(() => ({ isLargeMobile: true }));
    const { rerender } = render(
      <Modal ref={modalRef} scrollingElementRef={scrollingElementRef}>
        content
      </Modal>,
    );
    expect(scrollingElement.current).toBe(modalRef.current?.modalBody.current);
    // @ts-expect-error jest
    mockUseMediaQuery.mockImplementation(() => ({ isLargeMobile: false }));
    rerender(
      <Modal ref={modalRef} scrollingElementRef={scrollingElementRef}>
        content
      </Modal>,
    );
    expect(scrollingElement.current).toBe(modalRef.current?.modalContent.current);
    // default mocked implementation
    // @ts-expect-error jest
    mockUseMediaQuery.mockImplementation(() => ({ isLargeMobile: true }));
  });

  it("should call callback function when clicking on close button", async () => {
    // Needed the pointerEventsCheck to be 0 because of JestDOM not being able to detect pointer events definition on ModalCloseButton
    const user = userEvent.setup({ pointerEventsCheck: 0 });
    const onClose = jest.fn();

    render(
      <Modal hasCloseButton onClose={onClose}>
        content
      </Modal>,
    );

    await user.click(screen.getByTestId(CLOSE_BUTTON_DATA_TEST));
    expect(onClose).toBeCalled();
  });

  it("should have fixed header background overlay when needed", () => {
    const { rerender } = render(
      <Modal hasCloseButton onClose={() => {}}>
        content
      </Modal>,
    );
    screen.getByTestId("CloseContainer");
    rerender(
      <Modal>
        <ModalHeader title="title" />
      </Modal>,
    );
    screen.getByTestId("CloseContainer");
  });
});
