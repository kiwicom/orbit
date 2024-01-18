import React from "react";

import Button from "../Button";

import Drawer from ".";

export default function DrawerVisualStory() {
  return (
    <Drawer title="Drawer" onClose={() => {}} shown actions={<Button>Button</Button>}>
      Stuffs
    </Drawer>
  );
}
