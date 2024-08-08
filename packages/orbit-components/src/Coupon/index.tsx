"use client";

import * as React from "react";

import type { Props } from "./types";

const Coupon = ({ children, dataTest, id }: Props) => (
  <mark
    className="orbit-coupon text-small border-cloud-dark py-50 px-100 rounded-100 text-ink-dark inline border border-dashed bg-transparent font-medium uppercase tracking-[0.75px]"
    data-test={dataTest}
    id={id}
  >
    {children}
  </mark>
);

export default Coupon;
