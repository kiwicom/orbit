import React from "react";

import { Modal, ModalSection, ModalFooter, Button } from "../../../src";

export default function TestModalFooter() {
  const [height, setHeight] = React.useState<"tall" | "short">("tall");
  return (
    <Modal fixedFooter autoFocus={false}>
      <ModalSection dataTest="section">Content</ModalSection>
      <ModalFooter dataTest="footer">
        <div
          style={{
            padding: height === "tall" ? "30px 0" : "10px 0",
            // this transition is important because it changes footer's height over time
            // which caused a bug where there was a gap between the content and the footer
            transition: "padding 0.05s",
          }}
        >
          <Button
            onClick={() => {
              setHeight(prevHeight => (prevHeight === "tall" ? "short" : "tall"));
            }}
          >
            Change height
          </Button>
        </div>
      </ModalFooter>
    </Modal>
  );
}
