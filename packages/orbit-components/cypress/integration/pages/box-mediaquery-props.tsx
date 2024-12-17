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
        borderRadius: "150",
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
        padding: "600",
        margin: { top: "300", left: "none", right: "200" },
        align: "end",
        maxHeight: "24px",
      }}
    >
      Box Content
    </Box>
  );
}
