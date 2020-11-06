// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Modal from "../index";
import { SIZES, CLOSE_BUTTON_DATA_TEST } from "../consts";
import ModalHeader from "../ModalHeader";
import ModalSection from "../ModalSection";
import ModalFooter from "../ModalFooter";
import Illustration from "../../Illustration";
import List from "../../List";
import ListItem from "../../List/ListItem";
import Wallet from "../../icons/Wallet";
import Button from "../../Button";
import ChevronLeft from "../../icons/ChevronLeft";

const Div = (props: any) => <div>{props.children}</div>;
const onClose = jest.fn();

const ref = React.createRef();

const modal = (
  <Modal size={SIZES.LARGE} onClose={onClose} fixedFooter dataTest="modal" ref={ref}>
    <ModalHeader
      title="Title of Modal"
      description="Description of Modal"
      illustration={<Illustration name="Accommodation" size="extraSmall" dataTest="illustration" />}
      suppressed
      dataTest="header"
    >
      <List>
        <ListItem icon={<Wallet />}>
          To save you time, we have calculated your total possible refundable amount.
        </ListItem>
      </List>
    </ModalHeader>
    <ModalSection suppressed dataTest="section">
      This is the content of the section
    </ModalSection>
    <ModalFooter flex={["0 0 auto", "1 1 100%"]} dataTest="footer">
      <Button iconLeft={<ChevronLeft />} type="secondary">
        Back
      </Button>
      <Button fullWidth>Continue to Payment</Button>
    </ModalFooter>
  </Modal>
);

beforeEach(() => {
  onClose.mockClear();
});

describe("Modal", () => {
  it("should render correctly", () => {
    const { container } = render(modal);

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("should expose ref with setScrollPosition", () => {
    render(modal);
    expect(ref.current?.setScrollPosition).toBeDefined();
    ref.current?.setScrollPosition(20);
    expect(screen.getByTestId("modal").scrollTop).toBe(20);
  });

  it("should render passed props correctly", () => {
    render(modal);

    // title appears twice in the DOM, the second one is for the sticky header,
    // which is initially hidden and appears on scroll
    // when original title is out from the viewport
    expect(screen.getAllByText("Title of Modal")).toHaveLength(2);
    expect(screen.getByText("Description of Modal")).toBeInTheDocument();
    expect(screen.getByTestId("illustration")).toBeInTheDocument();
    expect(screen.getByText("This is the content of the section")).toBeInTheDocument();
  });

  it("should contain passed data-test attributes", () => {
    render(modal);

    expect(screen.getByTestId("modal")).toBeInTheDocument();
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("section")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("should call callback function when clicking on close button", () => {
    render(modal);

    userEvent.click(screen.getByTestId(CLOSE_BUTTON_DATA_TEST));

    expect(onClose).toBeCalled();
  });

  it("should render ModalSection when passed as children", () => {
    const { container } = render(
      <Modal>
        <ModalHeader title="Title of Modal" />
        <Div>
          <Div>
            <Div>
              <ModalSection>Content of Modal Section</ModalSection>
            </Div>
          </Div>
        </Div>
        <ModalFooter>It should render if needed</ModalFooter>
      </Modal>,
    );

    expect(container.querySelector("section")).toBeInTheDocument();
  });

  it("should not render ModalSection when not passed", () => {
    const { container } = render(
      <Modal>
        <ModalHeader title="Title of Modal" />
        <ModalFooter>
          <Button fullWidth>Continue to Payment</Button>
        </ModalFooter>
      </Modal>,
    );

    expect(container.querySelector("section")).not.toBeInTheDocument();
  });
});
