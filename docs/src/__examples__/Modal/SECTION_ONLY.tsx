import React from "react";
import { Button, Modal, ModalSection } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [showModal, setShowModal] = React.useState(false);
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
