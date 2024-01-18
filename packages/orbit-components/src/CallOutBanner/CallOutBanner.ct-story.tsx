import React from "react";

import Button from "../Button";
import Illustration from "../Illustration";
import Text from "../Text";
import NewWindow from "../icons/NewWindow";

import CallOutBanner from ".";

export default function CallOutBannerVisualStory() {
  return (
    <CallOutBanner
      title="Call out banner"
      description="Description worth testing"
      illustration={<Illustration size="small" name="Money" />}
      actions={
        <Button type="secondary" size="small" iconRight={<NewWindow />}>
          Find a Room
        </Button>
      }
    >
      <Text>Some children</Text>
    </CallOutBanner>
  );
}
