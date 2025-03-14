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
      useMargin
      dataTest="test"
      mediumMobile={{ spacing: "50" }}
      largeMobile={{ spacing: "100", direction: "column" }}
      tablet={{ spacing: "200", direction: "row" }}
      desktop={{ spacing: "300" }}
      largeDesktop={{ spacing: "400", useMargin: false }}
    >
      <div style={{ background: "blue", ...commonStyles }}>1</div>
      <div style={{ background: "red", ...commonStyles }}>2</div>
      <div style={{ background: "cyan", ...commonStyles }}>3</div>
      <div style={{ background: "magenta", ...commonStyles }}>4</div>
    </Stack>
  );
}
