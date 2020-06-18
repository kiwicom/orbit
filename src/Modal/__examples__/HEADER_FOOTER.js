// @flow
import * as React from "react";

import Button from "../../Button";
import Hide from "../../Hide";
import Illustration from "../../Illustration";
import Modal from "../index";
import ModalFooter from "../ModalFooter";
import ModalHeader from "../ModalHeader";

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
            <ModalHeader
              title="Priority boarding"
              description="Skip the line and board in peace. Only $25!"
              illustration={<Illustration name="PriorityBoarding" />}
            />
            <ModalFooter>
              <Button>Add priority boarding</Button>
            </ModalFooter>
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
    title: "Modal with header and footer",
    description:
      "Modals can have structured headers, with an illustration and title, and footers, with a space for actions.",
  },
};
