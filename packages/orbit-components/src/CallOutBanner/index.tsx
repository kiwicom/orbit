"use client";

import * as React from "react";
import cx from "clsx";

import Heading from "../Heading";
import Stack from "../Stack";
import Text from "../Text";
import type { Props } from "./types";

const CallOutBanner = ({
  children,
  illustration,
  actions,
  title,
  onClick,
  tabIndex,
  description,
  dataTest,
  id,
}: Props) => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
  <div
    className={cx(
      "orbit-call-out-banner bg-white-normal rounded-50 p-400 lm:flex-row lm:p-600 flex flex-col items-start justify-start border border-solid text-start",
      onClick
        ? "shadow-level1 duration-fast hover:shadow-level2 active:shadow-level2 cursor-pointer border-transparent transition-shadow ease-in-out hover:outline-none active:outline-none"
        : "border-cloud-normal",
    )}
    role="button"
    onClick={onClick}
    tabIndex={(onClick || Number(tabIndex)) && (Number(tabIndex) || 0)}
    data-test={dataTest}
    id={id}
  >
    {illustration && <div className="pb-400 lm:pe-600 lm:pb-0">{illustration}</div>}
    <Stack spacing="400">
      <Stack spacing="200">
        <Stack spacing="100">
          {title && <Heading type="title3">{title}</Heading>}
          {description && <Text>{description}</Text>}
        </Stack>
        {children}
      </Stack>
      {actions}
    </Stack>
  </div>
);

export default CallOutBanner;
