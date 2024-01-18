import React from "react";

import Separator from ".";

export default function NotificationBadgeVisualStory() {
  return (
    <div className="space-y-md flex flex-col">
      <Separator />
      <Separator type="dotted" />
      <Separator type="dashed" />
      <Separator type="double" />
      <Separator color="border-red-normal" type="solid" />
      <Separator color="border-blue-normal" type="solid" />
      <Separator color="border-product-normal" sideOffset="small" type="solid" />
      <Separator color="border-product-normal" sideOffset="medium" type="solid" />
      <Separator color="border-product-normal" sideOffset="large" type="solid" />
      <Separator color="border-product-normal" sideOffset="XLarge" type="solid" />
      <Separator color="border-product-normal" sideOffset="XXLarge" type="solid" />
      <Separator align="left" sideOffset="large" color="border-bundle-basic" type="solid" />
      <Separator align="right" sideOffset="large" color="border-bundle-basic" type="solid" />
      <Separator align="center" sideOffset="XXLarge" color="border-bundle-basic" type="solid" />
      <Separator spaceAfter="smallest" />
      <Separator spaceAfter="small" />
      <Separator spaceAfter="medium" />
      <Separator spaceAfter="medium" />
      <Separator spaceAfter="large" />
      <Separator spaceAfter="largest" />
    </div>
  );
}
