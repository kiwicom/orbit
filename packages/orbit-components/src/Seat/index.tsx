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
  "aria-labelledby": ariaLabelledBy = "",
}: Props) => {
  const randomId = useRandomIdSeed();
  const titleId = title ? randomId("title") : "";
  const descrId = description ? randomId("descr") : "";
  const isAvailable = type !== TYPES.UNAVAILABLE;
  const clickable = isAvailable && onClick !== undefined;

  const commonProps = {
    className: cx(
      "orbit-seat font-base group relative",
      isAvailable && "cursor-pointer",
      size === SIZE_OPTIONS.SMALL ? "w-800 h-[36px]" : "size-[46px]",
    ),
    id,
    "data-test": dataTest,
  };

  const seatContent = (
    <>
      <svg
        viewBox={size === SIZE_OPTIONS.SMALL ? "0 0 32 36" : "0 0 46 46"}
        aria-labelledby={`${[ariaLabelledBy, titleId, descrId].join(" ").trim()}` || undefined}
        fill="none"
        role="img"
      >
        {title && <title id={titleId}>{title}</title>}
        {description && <desc id={descrId}>{description}</desc>}

        {size === SIZE_OPTIONS.SMALL ? (
          <SeatSmall type={type} selected={selected} label={label} />
        ) : (
          <SeatNormal type={type} selected={selected} label={label} />
        )}
      </svg>
      {selected && isAvailable && <SeatCircle size={size} type={type} />}
    </>
  );

  return (
    <Stack inline grow={false} spacing="50" direction="column" align="center">
      {clickable ? (
        <button {...commonProps} onClick={onClick} type="button" aria-pressed={selected}>
          {seatContent}
        </button>
      ) : (
        <div {...commonProps} role="button" aria-pressed={selected} aria-disabled="true">
          {seatContent}
        </div>
      )}
      {price && !(selected && !isAvailable) && (
        <Text size="small" type="secondary">
          {price}
        </Text>
      )}
    </Stack>
  );
};

export { SeatLegend };
export default Seat;
