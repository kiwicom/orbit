import React from "react";

import Button from "../Button";
import Illustration from "../Illustration";
import Text from "../Text";
import NewWindow from "../icons/NewWindow";

import CallOutBanner from ".";

export default function CallOutBannerStory() {
  return (
    <div className="gap-400 p-400 flex flex-col">
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
      <CallOutBanner
        title="Actionable"
        description="Description worth testing"
        actions={
          <Button type="secondary" size="small" iconRight={<NewWindow />}>
            Find a Room
          </Button>
        }
        onClick={() => {}}
      >
        <Text>Some children</Text>
      </CallOutBanner>
    </div>
  );
}
