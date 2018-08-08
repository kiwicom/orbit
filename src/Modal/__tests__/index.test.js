// @flow
import * as React from "react";
import { shallow } from "enzyme";

import Modal from "../index";
import SIZES from "../consts";
import ModalHeader from "../ModalHeader";
import ModalSection from "../ModalSection";
import ModalFooter from "../ModalFooter";
import Illustration from "../../Illustration";
import List from "../../List";
import ListItem from "../../List/ListItem";
import Wallet from "../../icons/Wallet";
import Button from "../../Button";
import ChevronLeft from "../../icons/ChevronLeft";

describe(`Large Modal`, () => {
  const size = SIZES.LARGE;
  const title = "My title";
  const illustration = <Illustration name="Accommodation" size="small" />;
  const description = "My description";
  const suppressed = true;
  const content = "My content";
  const onClose = jest.fn();

  const sectionSuppressed = true;
  const fixed = true;
  const flex = ["0 0 auto", "1 1 100%"];

  const component = shallow(
    <Modal size={size} onClose={onClose}>
      <ModalHeader
        title={title}
        illustration={illustration}
        description={description}
        suppressed={suppressed}
      >
        <List>
          <ListItem icon={<Wallet />}>
            To save you time, we have calculated your total possible refundable amount.
          </ListItem>
        </List>
      </ModalHeader>
      <ModalSection suppressed={sectionSuppressed}>{content}</ModalSection>
      <ModalFooter fixed={fixed} flex={flex}>
        <Button icon={<ChevronLeft />} type="secondary">
          Back
        </Button>
        <Button block>Continue to Payment</Button>
      </ModalFooter>
    </Modal>,
  );

  const modalWrapper = component.find("Modal__ModalWrapper");
  const modalHeader = component.find("ModalHeader");
  const modalSection = component.find("ModalSection");
  const modalFooter = component.find("ModalFooter");

  it("should have passed props", () => {
    expect(modalWrapper.prop("size")).toBe(size);
    expect(modalHeader.prop("title")).toBe(title);
    expect(modalHeader.prop("illustration")).toBe(illustration);
    expect(modalHeader.prop("description")).toBe(description);
    expect(modalHeader.prop("suppressed")).toBe(suppressed);
    expect(modalSection.prop("suppressed")).toBe(sectionSuppressed);
    expect(modalSection.prop("children")).toBe(content);
    expect(modalFooter.prop("fixed")).toBe(fixed);
    expect(modalFooter.prop("flex")).toBe(flex);
  });

  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
