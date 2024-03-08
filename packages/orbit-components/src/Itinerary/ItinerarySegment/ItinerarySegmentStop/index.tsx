"use client";

import * as React from "react";
import cx from "clsx";

import { useWidth } from "../../context";
import Stack from "../../../Stack";
// TODO: remove after designers will resolve status colors
// https://skypicker.slack.com/archives/GSGN9BN6Q/p1674568716519889
import ItineraryText from "../../ItineraryText";
import ItineraryIcon from "../ItineraryIcon";
import { usePart } from "../context";
import type { Props } from "./types";

const ItinerarySegmentStop = ({
  date,
  time,
  cancelledDate,
  cancelledCity,
  cancelledStation,
  cancelledTime,
  city,
  icon,
  station,
  hidden,
  hiddenCityText = "Hidden city",
  minWidth = 70,
  type,
}: Props) => {
  const { calculatedWidth, setWidths } = useWidth();
  const { last, isBanner, index } = usePart();
  const [dateWidth, setDateWidth] = React.useState<HTMLDivElement | null>(null);

  const textType = type === "neutral" ? "primary" : type;

  React.useEffect(() => {
    setWidths(prev => (dateWidth?.clientWidth ? [...prev, minWidth, dateWidth.clientWidth] : prev));
  }, [setWidths, dateWidth, minWidth]);

  return (
    <div
      className={cx(
        "px-sm relative box-border flex py-0",
        ((!last && index !== 0) || (index !== 0 && isBanner)) && "mb-sm",
      )}
      data-test="SegmentStop"
    >
      <Stack flex align="center" spacing="small">
        <div
          className="whitespace-nowrap"
          ref={setDateWidth}
          data-test="time"
          style={{ minWidth: `${calculatedWidth}px` }}
        >
          <Stack flex direction="column" spacing="none" align="end">
            {time && (
              <ItineraryText
                weight="medium"
                as="div"
                type={cancelledTime ? textType : "primary"}
                withBackground={!!cancelledTime}
              >
                {time}
              </ItineraryText>
            )}
            {date && (
              <ItineraryText
                type={cancelledDate ? textType : "secondary"}
                size="small"
                align="right"
                as="div"
                withBackground={!!cancelledDate}
              >
                {date}
              </ItineraryText>
            )}
            {cancelledTime && (
              <ItineraryText type="secondary" weight="medium" strikeThrough as="div">
                {cancelledTime}
              </ItineraryText>
            )}
            {cancelledDate && (
              <ItineraryText type="secondary" size="small" align="right" strikeThrough as="div">
                {cancelledDate}
              </ItineraryText>
            )}
          </Stack>
        </div>
        <ItineraryIcon type={type}>{icon}</ItineraryIcon>
        <Stack direction="column" shrink spacing="none">
          {hidden && hiddenCityText && (
            <p className="font-base text-small text-orange-normal m-0 font-bold">
              {hiddenCityText}
            </p>
          )}
          <ItineraryText
            as="div"
            weight="medium"
            withBackground={!!cancelledCity}
            type={cancelledCity ? textType : "primary"}
          >
            {city}
          </ItineraryText>
          <ItineraryText
            as="div"
            size="small"
            type={cancelledStation ? textType : "secondary"}
            withBackground={!!cancelledStation}
          >
            {station}
          </ItineraryText>
          {cancelledCity && (
            <ItineraryText weight="medium" strikeThrough as="div">
              {cancelledCity}
            </ItineraryText>
          )}
          {cancelledStation && (
            <ItineraryText type="secondary" size="small" strikeThrough as="div">
              {cancelledStation}
            </ItineraryText>
          )}
        </Stack>
      </Stack>
    </div>
  );
};

export default ItinerarySegmentStop;
