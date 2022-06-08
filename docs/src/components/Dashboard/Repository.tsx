import React from "react";
import { Heading, TextLink, Stack, Text } from "@kiwicom/orbit-components";
import { upperFirst } from "lodash";
import { PageRendererProps } from "gatsby";
import fp from "lodash/fp";

import DocLayout from "../DocLayout";
import Members from "./components/Members";
import ComponentList from "./components/ComponentList";
import UsageByCategory from "./components/UsageByCategory";

export default function Tracking({ location, pages }: PageRendererProps) {
  const { pathname } = location;
  const pageName = pathname.split("/").filter(Boolean).slice(-1)[0];

  const { url, members, orbitVersion, trackedData, lastCommit } = fp.compose(
    fp.head,
    fp.filter(({ name }) => name === pageName),
  )(pages);

  const components = trackedData
    .filter(({ icon }) => !icon)
    .map(({ name, isDeprecated, instances, category }) => ({
      name,
      category,
      slug: `/dashboard/tracking/${pageName.toLowerCase()}/${name.toLowerCase()}`,
      isDeprecated,
      instances,
    }));

  return (
    <DocLayout location={location} path={location.pathname} title={upperFirst(pageName)}>
      <Stack flex direction="column">
        <TextLink href={url}>Gitlab repository</TextLink>
        <Heading type="title3">Orbit version: {orbitVersion}</Heading>
      </Stack>

      <Stack inline spacing="XSmall">
        <Text>Last commit:</Text>
        <TextLink href={lastCommit.webUrl}>{lastCommit.title}</TextLink>
      </Stack>

      <Members members={members} />
      <ComponentList components={components} />
      <UsageByCategory components={components} />
    </DocLayout>
  );
}
