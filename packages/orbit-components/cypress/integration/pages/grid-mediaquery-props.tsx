import React from "react";
import { Grid } from "@kiwicom/orbit-components";

const commonStyles = {
  height: "30px",
  padding: "10px",
  width: "50px",
  display: "flex",
  alignItems: "center",
};

export default function StackMediaProps() {
  return (
    <Grid
      dataTest="test"
      columns="repeat(4, 1fr)"
      mediumMobile={{ gap: "10px", maxWidth: "300px" }}
      largeMobile={{ gap: "20px", maxWidth: "400px" }}
      tablet={{ gap: "30px", maxWidth: "500px" }}
      desktop={{ gap: "40px", maxWidth: "600px" }}
      largeDesktop={{ gap: "50px", maxWidth: "700px" }}
    >
      <div style={{ background: "blue", ...commonStyles }}>1</div>
      <div style={{ background: "red", ...commonStyles }}>2</div>
      <div style={{ background: "cyan", ...commonStyles }}>3</div>
      <div style={{ background: "magenta", ...commonStyles }}>4</div>
    </Grid>
  );
}
