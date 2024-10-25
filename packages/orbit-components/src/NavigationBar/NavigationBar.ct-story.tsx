import React from "react";

import type { Props } from "./types";

import NavigationBar from ".";

export function NavigationBarDefault({ bottomStyle }: { bottomStyle?: Props["bottomStyle"] }) {
  return (
    <div style={{ height: "400px" }}>
      <NavigationBar bottomStyle={bottomStyle}>
        <div className="gap-none flex w-full flex-row items-start justify-between">
          <button type="button">Navbar</button>
          <div className="gap-100 flex w-full shrink grow flex-row flex-nowrap items-start justify-end">
            <button type="button">1️⃣</button>
            <button type="button">2️⃣</button>
            <button type="button">3️⃣</button>
          </div>
        </div>
      </NavigationBar>
      <p className="pt-1600 ps-400">Content of the page</p>
    </div>
  );
}
