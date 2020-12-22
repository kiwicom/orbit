// @flow
import React from "react";

import Stack from "../../../Stack";
import Text from "../../../Text";
import Heading from "../../../Heading";

import type { Props } from "./index";

const SlideTexts = ({ label, valueDescription, histogramDescription, biggerSpace }: Props) => {
  if (!(label || valueDescription || histogramDescription)) return null;
  return (
    <Stack direction="row" spacing="none" spaceAfter={biggerSpace ? "medium" : "small"}>
      {(label || histogramDescription) && (
        <Stack direction="column" spacing="none" basis="60%" grow>
          {label && <Heading type="title4">{label}</Heading>}
          {valueDescription && (
            <Text type="secondary" size="small">
              {valueDescription}
            </Text>
          )}
        </Stack>
      )}
      {histogramDescription && (
        <Stack shrink justify="end" grow={false}>
          <Text type="primary" size="small">
            {histogramDescription}
          </Text>
        </Stack>
      )}
    </Stack>
  );
};

export default SlideTexts;
