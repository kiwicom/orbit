import React from "react";
import { Link } from "gatsby";
import { Text, Heading } from "@kiwicom/orbit-components";

import DocLayout from "../components/DocLayout";
import HeadingWithLink from "../components/HeadingWithLink";
import Roadmap from "../components/Roadmap";

export default ({ location }) => (
  <DocLayout
    description="All our planning under one roof."
    title="Roadmap"
    location={location}
    noElevation
    path="roadmap"
    tableOfContents={[]}
  >
    <Text>
      Interested in what’s planned for Orbit in the coming weeks and months? This is a good place to
      start.
    </Text>
    <Text>
      This roadmap contains delivery estimates only by quarter. For a more detailed overview of
      what’s already designed and the state it’s in, visit{" "}
      <Link to="/component-status/">component status</Link>.
    </Text>
    <HeadingWithLink>
      <Heading as="h2" type="title2">
        Current quarter 🚀
      </Heading>
    </HeadingWithLink>
    <Text type="secondary">Our key results for this quarter.</Text>
    <Roadmap roadmapQuarter="current" />
    <HeadingWithLink>
      <Heading as="h2" type="title2">
        Next quarter or two 🏗
      </Heading>
    </HeadingWithLink>
    <Text type="secondary">
      There’s a larger chance of this being our possible focus for next two quarters.
    </Text>
    <Roadmap roadmapQuarter="next" />
    <HeadingWithLink>
      <Heading as="h2" type="title2">
        Future 🔮
      </Heading>
    </HeadingWithLink>
    <Text type="secondary">
      Items and ideas being considered, without any commitment. We’ll see what the priorities will
      be once we get there.
    </Text>
    <Roadmap roadmapQuarter="future" />
  </DocLayout>
);
