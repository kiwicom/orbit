import React from "react";
import { Box } from "@kiwicom/orbit-components";

export default function BoxMediaProps() {
  return (
    <Box
      mediumMobile={{
        display: "flex",
        wrap: "wrap",
        direction: "row-reverse",
        position: "fixed",
        minWidth: "42px",
      }}
      largeMobile={{
        textAlign: "center",
        borderRadius: "large",
        overflow: "scroll",
        shrink: 0,
        color: "orangeDark",
      }}
      tablet={{
        grow: 1,
        zIndex: 42,
        width: "100%",
        maxWidth: "100px",
        justify: "between",
      }}
      desktop={{
        height: "10px",
        top: "10px",
        left: "5px",
        right: "0",
        bottom: "-1px",
      }}
      largeDesktop={{
        background: "redLight",
        padding: "large",
        margin: { top: "small", left: "none", right: "XSmall" },
        align: "end",
        maxHeight: "24px",
      }}
    >
      Box Content
    </Box>
  );
}
