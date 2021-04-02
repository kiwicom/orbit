// @flow
import * as React from "react";

import Button from "../../Button";
import Modal from "../../Modal";
import ModalHeader from "../../Modal/ModalHeader";
import ModalSection from "../../Modal/ModalSection";
import Portal from "../index";
import Text from "../../Text";
import TextLink from "../../TextLink";

export default {
  Example: (): React.Node => {
    const [showModal, setShowModal] = React.useState(false);
    return (
      <>
        <Portal>
          {showModal && (
            <Modal
              onClose={() => {
                setShowModal(false);
              }}
            >
              <ModalHeader title="More about portals" />
              <ModalSection>
                <Text>
                  For more on portals and how they work, read the{" "}
                  <TextLink href="https://reactjs.org/docs/portals.html" external>
                    React docs on portals.
                  </TextLink>
                </Text>
              </ModalSection>
            </Modal>
          )}
        </Portal>
        {!showModal && (
          <Button
            onClick={() => {
              setShowModal(true);
            }}
          >
            Show modal
          </Button>
        )}
      </>
    );
  },
  info: {
    title: "Default portal",
    description:
      "By default, portal inserts its children into a separate div created for the purpose. Events on a child still bubble to the React parent (even thought it's not a child in the DOM).",
  },
};
