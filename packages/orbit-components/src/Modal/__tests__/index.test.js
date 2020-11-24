// @flow
import * as React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Modal from "../index";
import { CLOSE_BUTTON_DATA_TEST } from "../consts";
import ModalHeader from "../ModalHeader";
import ModalSection from "../ModalSection";
import ModalFooter from "../ModalFooter";
import Illustration from "../../Illustration";

jest.useFakeTimers("modern");

jest.mock("../../hooks/useMediaQuery", () => () => ({
  isLargeMobile: true,
}));

beforeEach(() => {
  jest.clearAllTimers();
});

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
        <ModalFooter dataTest="footer">footer content</ModalFooter>
      </Modal>,
    );

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByTestId("container")).toBeInTheDocument();
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("section")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
    expect(screen.getByTestId("illustration")).toBeInTheDocument();
    // title appears twice in the DOM, the second one is for the sticky header,
    // which is initially hidden and appears on scroll
    // when original title is out from the viewport
    expect(screen.getAllByText("modal title")).toHaveLength(2);
    expect(screen.getByText("modal description")).toBeInTheDocument();
    expect(screen.getByText("header content")).toBeInTheDocument();
    expect(screen.getByText("section content")).toBeInTheDocument();
    expect(screen.getByText("footer content")).toBeInTheDocument();
  });

  it("should be able to focus content", async () => {
    render(
      <Modal>
        <input />
      </Modal>,
    );

    act(() => {
      jest.runOnlyPendingTimers();
    });
    expect(screen.getByRole("dialog")).toHaveFocus();
    userEvent.tab(screen.getByRole("dialog"));
    act(() => {
      jest.runOnlyPendingTimers();
    });
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
    expect(scrollPosition).toBe(screen.getByTestId("test").scrollTop);
    expect(scrollPosition).toBe(20);
  });

  it("should call callback function when clicking on close button", () => {
    const onClose = jest.fn();
    render(
      <Modal hasCloseButton onClose={onClose}>
        content
      </Modal>,
    );

    userEvent.click(screen.getByTestId(CLOSE_BUTTON_DATA_TEST));
    expect(onClose).toBeCalled();
  });
});
