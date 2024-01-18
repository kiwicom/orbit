import React from "react";

import Button from "../Button";

import Dialog from ".";

export default function DialogStory() {
  return (
    <Dialog
      title="Dialogue"
      description="Our lord and saviour Kek"
      primaryAction={<Button type="critical">Bröther</Button>}
      renderInPortal={false}
    />
  );
}
