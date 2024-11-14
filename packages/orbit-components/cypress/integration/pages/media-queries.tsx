import React from "react";
import { Heading, useMediaQuery } from "@kiwicom/orbit-components";

export default function MediaQueries() {
  const query = useMediaQuery();
  return (
    <>
      {query.isMediumMobile && (
        <Heading role="heading" level={1} type="title0">
          Medium mobile
        </Heading>
      )}
      {query.isLargeMobile && (
        <Heading role="heading" level={1} type="title0">
          Large mobile
        </Heading>
      )}
      {query.isTablet && (
        <Heading role="heading" level={1} type="title0">
          Tablet
        </Heading>
      )}
      {query.isDesktop && (
        <Heading role="heading" level={1} type="title0">
          Desktop
        </Heading>
      )}
      {query.isLargeDesktop && (
        <Heading role="heading" level={1} type="title0">
          Large desktop
        </Heading>
      )}
      {query.prefersReducedMotion && (
        <Heading role="heading" level={1} type="title0">
          Reduced motion
        </Heading>
      )}
    </>
  );
}
