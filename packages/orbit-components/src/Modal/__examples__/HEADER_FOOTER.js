// @flow
import * as React from "react";

import Button from "../../Button";
import Illustration from "../../Illustration";
import Modal from "../index";
import ModalFooter from "../ModalFooter";
import ModalHeader from "../ModalHeader";

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
            <ModalHeader
              title="Priority boarding"
              description="Skip the line and board in peace. Only $25!"
              illustration={<Illustration name="PriorityBoarding" />}
            />
            <ModalFooter>
              <Button>Add priority boarding</Button>
            </ModalFooter>
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
    title: "Modal with header and footer",
    description:
      "Modals can have structured headers, with an illustration and title, and footers, with a space for actions.",
  },
};
