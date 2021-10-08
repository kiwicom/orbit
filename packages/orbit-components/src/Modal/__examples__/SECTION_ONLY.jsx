// @flow
import * as React from "react";

import Button from "../../Button";
import Modal from "../index";
import ModalSection from "../ModalSection";

export default {
  Example: (): React.Node => {
    const [showModal, setShowModal] = React.useState(true);
    return (
      <>
        {showModal && (
          <Modal
            onClose={() => {
              setShowModal(false);
            }}
          >
            <ModalSection>
              Orbit is an open source design system for your next travel project.
            </ModalSection>
          </Modal>
        )}
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
    title: "Modal with only a section",
    description:
      "Modals can be as simple as just a section with text or anything else you like inside.",
  },
};
