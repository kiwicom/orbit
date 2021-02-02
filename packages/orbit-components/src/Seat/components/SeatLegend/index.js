// @flow
import React from "react";

import Stack from "../../../Stack";
import Text from "../../../Text";
import useTheme from "../../../hooks/useTheme";
import { resolveAccentColor } from "../helpers";
import { TYPES } from "../../consts";

import type { Props } from "./index";

const SeatLegend = ({ type = TYPES.DEFAULT, label, dataTest }: Props) => {
  const theme = useTheme();

  return (
    <Stack inline align="center" spacing="XSmall">
      <svg width="10" height="12" viewBox="0 0 10 12" fill="none" data-test={dataTest}>
        <path
          d="M0 3C0 1.34315 1.34315 0 3 0H7C8.65685 0 10 1.34315 10 3V11C10 11.5523 9.55229 12 9 12H1C0.447715 12 0 11.5523 0 11V3Z"
          fill={resolveAccentColor({ type, theme })}
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
