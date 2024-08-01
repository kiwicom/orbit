import React from "react";

import Skeleton from ".";

enum PRESETS {
  List = "List",
  Image = "Image",
  Card = "Card",
  Button = "Button",
  Text = "Text",
}

export default function SkeletonVisualStory() {
  return (
    <div className="space-y-200 flex flex-col">
      <label>Button</label>
      <Skeleton preset={PRESETS.Button} animate={false} />
      <label>Card</label>
      <Skeleton preset={PRESETS.Card} animate={false} />
      <label>Image</label>
      <Skeleton preset={PRESETS.Image} animate={false} />
      <label>List</label>
      <Skeleton preset={PRESETS.List} animate={false} />
      <label>Text</label>
      <Skeleton preset={PRESETS.Text} animate={false} />
      <label>Custom</label>
      <Skeleton height="100px" rows={4} rowOffset={30} animate={false} />
      <Skeleton height="150px" width="75px" color="paletteGreenLight" animate={false} />
      <Skeleton height="150px" width="500px" viewBox="0 0 500 100" animate={false}>
        <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
        <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
        <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
        <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
        <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
        <circle cx="20" cy="20" r="20" />
      </Skeleton>
    </div>
  );
}
