import React from "react";
import { Stack } from "@kiwicom/orbit-components";

const commonStyles = {
  height: "30px",
  padding: "10px",
  width: "50px",
  display: "flex",
  alignItems: "center",
};

export default function StackMediaProps() {
  return (
    <Stack
      spacing="none"
      legacy
      dataTest="test"
      mediumMobile={{ spacing: "XXXSmall" }}
      largeMobile={{ spacing: "XXSmall", direction: "column" }}
      tablet={{ spacing: "XSmall", direction: "row" }}
      desktop={{ spacing: "small" }}
      largeDesktop={{ spacing: "medium", legacy: false }}
    >
      <div style={{ background: "blue", ...commonStyles }}>1</div>
      <div style={{ background: "red", ...commonStyles }}>2</div>
      <div style={{ background: "cyan", ...commonStyles }}>3</div>
      <div style={{ background: "magenta", ...commonStyles }}>4</div>
    </Stack>
  );
}
