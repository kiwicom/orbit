import React from "react";
import { Heading, useMediaQuery } from "@kiwicom/orbit-components";

export default function MediaQueries() {
  const query = useMediaQuery();
  return (
    <>
      {query.isMediumMobile && <Heading type="title1">Medium mobile</Heading>}
      {query.isLargeMobile && <Heading type="title1">Large mobile</Heading>}
      {query.isTablet && <Heading type="title1">Tablet</Heading>}
      {query.isDesktop && <Heading type="title1">Desktop</Heading>}
      {query.isLargeDesktop && <Heading type="title1">Large desktop</Heading>}
      {query.prefersReducedMotion && <Heading type="title1">Reduced motion</Heading>}
    </>
  );
}
