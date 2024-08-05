import React from "react";

import Separator from ".";

export default function NotificationBadgeVisualStory() {
  return (
    <div className="space-y-400 flex flex-col">
      <Separator />
      <Separator type="dotted" />
      <Separator type="dashed" />
      <Separator type="double" />
      <Separator color="border-red-normal" type="solid" />
      <Separator color="border-blue-normal" type="solid" />
      <Separator color="border-product-normal" sideOffset="300" type="solid" />
      <Separator color="border-product-normal" sideOffset="400" type="solid" />
      <Separator color="border-product-normal" sideOffset="600" type="solid" />
      <Separator color="border-product-normal" sideOffset="800" type="solid" />
      <Separator color="border-product-normal" sideOffset="1000" type="solid" />
      <Separator align="left" sideOffset="600" color="border-bundle-basic" type="solid" />
      <Separator align="right" sideOffset="600" color="border-bundle-basic" type="solid" />
      <Separator align="center" sideOffset="1000" color="border-bundle-basic" type="solid" />
      <Separator spaceAfter="smallest" />
      <Separator spaceAfter="small" />
      <Separator spaceAfter="medium" />
      <Separator spaceAfter="medium" />
      <Separator spaceAfter="large" />
      <Separator spaceAfter="largest" />
    </div>
  );
}
