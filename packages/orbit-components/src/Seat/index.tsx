"use client";

import * as React from "react";
import cx from "clsx";

import SeatLegend from "./components/SeatLegend";
import Stack from "../Stack";
import Text from "../Text";
import { useRandomIdSeed } from "../hooks/useRandomId";
import SeatNormal from "./components/SeatNormal";
import SeatSmall from "./components/SeatSmall";
import SeatCircle from "./components/SeatCircle";
import { SIZE_OPTIONS, TYPES } from "./consts";
import type { Props } from "./types";

const Seat = ({
  type = TYPES.DEFAULT,
  selected = false,
  onClick,
  size = SIZE_OPTIONS.MEDIUM,
  dataTest,
  id,
  price,
  label,
  title,
  description,
}: Props) => {
  const randomId = useRandomIdSeed();
  const titleId = randomId("title");
  const descrId = randomId("descr");
  const clickable = type !== TYPES.UNAVAILABLE;

  return (
    <Stack inline grow={false} spacing="50" direction="column" align="center">
      <button
        className={cx(
          "orbit-seat font-base group relative",
          size === SIZE_OPTIONS.SMALL ? "w-800 h-[36px]" : "size-[46px]",
        )}
        data-test={dataTest}
        id={id}
        disabled={!clickable}
        onClick={clickable ? onClick : undefined}
        tabIndex={clickable ? 0 : -1}
        type="button"
      >
        <svg
          viewBox={size === SIZE_OPTIONS.SMALL ? "0 0 32 36" : "0 0 46 46"}
          aria-labelledby={`${titleId} ${descrId}`}
          fill="none"
          role="img"
        >
          <title id={titleId}>{title}</title>
          <desc id={descrId}>{description}</desc>

          {size === SIZE_OPTIONS.SMALL ? (
            <SeatSmall type={type} selected={selected} label={label} />
          ) : (
            <SeatNormal type={type} selected={selected} label={label} />
          )}
        </svg>
        {selected && clickable && <SeatCircle size={size} type={type} />}
      </button>
      {price && !(selected && type === TYPES.UNAVAILABLE) && (
        <Text size="small" type="secondary">
          {price}
        </Text>
      )}
    </Stack>
  );
};

export { SeatLegend };
export default Seat;
