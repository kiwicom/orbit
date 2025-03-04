import React from "react";

import Button from "../Button";

import Drawer from ".";

export default function DrawerVisualStory() {
  const [shown, setShown] = React.useState(false);

  return (
    <div className="h-svh">
      <button
        className="size-px"
        type="button"
        data-test="show-drawer"
        onClick={() => setShown(true)}
        aria-label="Show Drawer"
      />
      <Drawer title="Drawer" onClose={() => {}} shown={shown} actions={<Button>Button</Button>}>
        Stuffs
      </Drawer>
    </div>
  );
}
