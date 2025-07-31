"use client";

import * as React from "react";

import type { Props } from "./types";

/**
 * @orbit-doc-start
 * README
 * ----------
 * # Coupon
 *
 * To implement Coupon component into your project you'll need to add the import:
 *
 * ```jsx
 * import Coupon from "@kiwicom/orbit-components/lib/Coupon";
 * ```
 *
 * After adding import into your project you can use it simply like:
 *
 * ```jsx
 * <Coupon>PromotionCode</Coupon>
 * ```
 *
 * ## Props
 *
 * Table below contains all types of the props available in the Coupon component.
 *
 * | Name         | Type         | Default | Description                         |
 * | :----------- | :----------- | :------ | :---------------------------------- |
 * | dataTest     | `string`     |         | Optional prop for testing purposes. |
 * | id           | `string`     |         | Set `id` for `Coupon`               |
 * | **children** | `React.Node` |         | The content of the Coupon.          |
 *
 *
 * @orbit-doc-end
 */
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
