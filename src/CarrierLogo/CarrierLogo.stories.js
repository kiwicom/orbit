// @flow

import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { withKnobs, object, select, text } from "@storybook/addon-knobs";
import styles from "@sambego/storybook-styles/dist/index";

import { SIZE_OPTIONS, CARRIER_TYPE_OPTIONS } from "./consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import CarrierLogo from "./index";

const carriersLabel = "Carriers";

storiesOf("CarrierLogo", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .add("One carrier", () => {
    const size = select("Size", Object.values(SIZE_OPTIONS), "large");
    const dataTest = text("dataTest", "test");

    const carrier = [{ code: "FR", name: "Ryanair" }];

    const carriersObject = object(carriersLabel, carrier);

    return <CarrierLogo size={size} carriers={carriersObject} dataTest={dataTest} />;
  })
  .add("Two carriers", () => {
    const carrier = [{ code: "FR", name: "Ryanair" }, { code: "TO", name: "Transavia France" }];

    const carriersObject = object(carriersLabel, carrier);

    return <CarrierLogo carriers={carriersObject} />;
  })
  .add("Four carriers", () => {
    const carrier = [
      { code: "FR", name: "Ryanair" },
      { code: "TO", name: "Transavia France" },
      { code: "VY", name: "Vueling" },
      { code: "OK", name: "Czech Airlines" },
    ];

    const carriersObject = object(carriersLabel, carrier);

    return <CarrierLogo carriers={carriersObject} />;
  })
  .add("Non-existing carriers", () => {
    const carrier = [
      { code: "LOL", name: "Lorem ipsum", type: "airline" },
      { code: "KEK", name: "Lorem ipsum", type: "bus" },
      { code: "BUR", name: "Lorem ipsum", type: "train" },
    ];

    const carriersObject = object(carriersLabel, carrier);

    return <CarrierLogo carriers={carriersObject} />;
  })
  .add("Non-existing carrier", () => {
    const size = select("Size", Object.values(SIZE_OPTIONS), "large");
    const carrierType = select("Type", Object.values(CARRIER_TYPE_OPTIONS), "airline");
    const carrier = [{ code: "LAL", name: "Lorem ipsum", type: carrierType }];
    const carriersObject = object(carriersLabel, carrier);

    return <CarrierLogo size={size} carriers={carriersObject} />;
  })
  .add("RTL", () => (
    <RenderInRtl>
      <CarrierLogo
        size="large"
        carriers={[
          { code: "FR", name: "Lorem ipsum", type: "airline" },
          { code: "TO", name: "Lorem ipsum", type: "train" },
        ]}
      />
    </RenderInRtl>
  ));
