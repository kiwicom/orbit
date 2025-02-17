"use client";

import * as React from "react";
import cx from "clsx";

import Stack from "../../../Stack";
import Text from "../../../Text";
import { TYPES } from "../../consts";
import type { Props } from "./types";

const SeatLegend = ({
  type = TYPES.DEFAULT,
  label,
  dataTest,
  "aria-label": ariaLabel,
  id,
}: Props) => {
  return (
    <Stack inline align="center" spacing="200">
      <svg
        id={id}
        width="16"
        height="20"
        viewBox="0 0 16 20"
        fill="none"
        data-test={dataTest}
        aria-label={ariaLabel}
      >
        <path
          className={cx(
            type === TYPES.LEGROOM && "fill-blue-light-active",
            type === TYPES.DEFAULT && "fill-product-light-active",
            type === TYPES.UNAVAILABLE && "fill-cloud-light-active",
          )}
          d="M0 3C0 1.34315 1.34315 0 3 0H13C14.6569 0 16 1.34315 16 3V19C16 19.5523 15.5523 20 15 20H1C0.447715 20 0 19.5523 0 19V3Z"
        />
      </svg>
      {label && (
        <Text type="secondary" size="small">
          {label}
        </Text>
      )}
    </Stack>
  );
};

export default SeatLegend;
