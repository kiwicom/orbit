"use client";

import * as React from "react";
import cx from "clsx";

import HorizontalScroll from "../../../HorizontalScroll";
import ChevronUp from "../../../icons/ChevronUp";
import ChevronDown from "../../../icons/ChevronDown";
import Stack from "../../../Stack";
import ItineraryText from "../../ItineraryText";
import Text from "../../../Text";
import Slide from "../../../utils/Slide";
import useBoundingRect from "../../../hooks/useBoundingRect";
import { useRandomIdSeed } from "../../../hooks/useRandomId";
import { usePart } from "../context";
import { useItinerarySegmentMinimalColumnWidth } from "../../context";
import AirplaneDown from "../../../icons/AirplaneDown";
import type { Props } from "./types";
import ItineraryIcon from "../ItineraryIcon";
import useTheme from "../../../hooks/useTheme";
import { spaceAfterClasses } from "../../../common/tailwind";

const ItinerarySegmentDetail = ({
  duration,
  summary,
  content,
  icon = <AirplaneDown size="small" ariaHidden />,
}: Props) => {
  const { opened } = usePart();
  const { itinerarySegmentMinimalColumnWidth } = useItinerarySegmentMinimalColumnWidth();
  const theme = useTheme();
  const [{ height: slideHeight }, slideRef] = useBoundingRect<HTMLDivElement>({
    height: opened ? null : 0,
  });
  const randomId = useRandomIdSeed();

  return (
    <div className="orbit-itinerary-segment-detail relative box-border w-full px-0 py-[10px]">
      <div className="px-300 py-0">
        <Stack align="center" spacing="300">
          <div
            className="flex justify-end"
            style={{ minWidth: `${itinerarySegmentMinimalColumnWidth || 60}px` }}
          >
            <ItineraryText as="div" size="small" weight="medium">
              {duration}
            </ItineraryText>
          </div>
          <div className="z-default bg-transparent">
            <ItineraryIcon>{icon}</ItineraryIcon>
          </div>

          <div className="flex w-full items-center overflow-hidden">
            <HorizontalScroll
              overflowElevation
              elevationColor="paletteWhite"
              scrollSnap="mandatory"
            >
              {summary}
            </HorizontalScroll>
          </div>
          {content &&
            (opened ? (
              <ChevronUp color="secondary" ariaHidden />
            ) : (
              <ChevronDown color="secondary" ariaHidden />
            ))}
        </Stack>
      </div>
      {content && (
        <Slide
          maxHeight={slideHeight || 0}
          expanded={opened}
          id={randomId("slide")}
          ariaLabelledBy={randomId("slide")}
          stopClickPropagation={false}
        >
          <div
            className="pt-300 cursor-pointer overflow-hidden"
            ref={slideRef as React.RefObject<HTMLDivElement | null>}
          >
            <div
              className="px-300 z-default relative py-0"
              style={{
                insetInlineStart: `${
                  parseInt(theme.orbit.space200, 10) + itinerarySegmentMinimalColumnWidth
                }px`,
              }}
            >
              {content.map(({ title, items }, idx) => {
                return (
                  <React.Fragment key={typeof title === "string" ? title : idx}>
                    <div className="ms-800">
                      <ItineraryText as="div" size="small" weight="medium" spaceAfter="small">
                        {title}
                      </ItineraryText>
                    </div>
                    <div
                      className={cx(
                        "flex flex-col items-center",
                        idx === content.length - 1
                          ? spaceAfterClasses.none
                          : spaceAfterClasses.medium,
                      )}
                      style={{
                        width: `calc(100% - ${
                          parseInt(theme.orbit.space200, 10) + itinerarySegmentMinimalColumnWidth
                        }px)`,
                      }}
                    >
                      {items.map(({ icon: itemIcon, name, value }, id) => {
                        const isFirst = id === 0;
                        const isLast = id === items.length - 1;
                        const key =
                          typeof name === "string" && typeof value === "string"
                            ? `${name}-${value}`
                            : id;
                        return (
                          <Stack flex grow={false} align="center" key={key}>
                            <div
                              className={cx(
                                "px-100 relative z-[3] box-border flex items-center self-stretch",
                                "after:-z-default after:bg-white-normal after:border-x-cloud-normal-active after:absolute after:left-0 after:box-border after:size-full after:border-x after:border-solid",
                                isFirst || isLast ? "py-0" : "py-100",
                                isFirst &&
                                  "[&_svg]:mt-200 [&_svg]:mb-100 after:border-t-cloud-normal-active after:rounded-b-none after:rounded-t-full after:border after:border-b-0",
                                isLast &&
                                  "[&_svg]:mt-100 [&_svg]:mb-200 after:border-b-cloud-normal-active after:rounded-b-full after:rounded-t-none after:border after:border-t-0",
                              )}
                            >
                              {itemIcon}
                            </div>
                            <div className="flex-1 text-wrap break-words">
                              <Text size="small">{name}</Text>
                            </div>
                            <div className="grow-0 text-wrap break-all">
                              <ItineraryText as="div" size="small" weight="medium" align="end">
                                {value}
                              </ItineraryText>
                            </div>
                          </Stack>
                        );
                      })}
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </Slide>
      )}
    </div>
  );
};

export default ItinerarySegmentDetail;
