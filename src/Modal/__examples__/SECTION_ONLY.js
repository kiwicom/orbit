// @flow
import * as React from "react";

import Button from "../../Button";
import Hide from "../../Hide";
import Modal from "../index";
import ModalSection from "../ModalSection";

export default {
  Example: () => {
    const [showModal, setShowModal] = React.useState(true);
    return (
      <>
        <Hide
          on={
            !showModal
              ? ["largeDesktop", "desktop", "tablet", "largeMobile", "mediumMobile", "smallMobile"]
              : []
          }
        >
          <Modal
            onClose={() => {
              setShowModal(false);
            }}
          >
            <ModalSection>
              Orbit is an open source design system for your next travel project.
            </ModalSection>
          </Modal>
        </Hide>
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
